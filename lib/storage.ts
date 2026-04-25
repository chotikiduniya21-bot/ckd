import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

/**
 * Storage layer for PDF delivery.
 *
 * Uses Cloudflare R2 via S3-compatible API.
 * - Bucket is private — files only accessible via short-lived signed URLs.
 * - Files are stored under `sheets/{sheetId}.pdf` in the bucket.
 * - Signed URLs include a Content-Disposition header so browsers download
 *   the file with a friendly name instead of opening it inline.
 */

const r2 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT!,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export interface SignedUrlOptions {
  /** Sheet ID to download */
  sheetId: string;
  /** User ID (for logging/audit) */
  userId?: string;
  /** URL expires after N seconds. Default: 900 (15 min) */
  expiresIn?: number;
  /** Friendly filename for the downloaded file */
  downloadFileName: string;
}

export interface SignedUrl {
  url: string;
  expiresAt: number;
  sheetId: string;
  /** Will always be false now that we're using real R2.
   *  Kept in interface for backward compatibility with consumers. */
  isMock?: boolean;
}

/**
 * Generate a time-limited signed URL for a PDF stored in R2.
 * Returns null if the request is invalid or signing fails.
 */
export async function getSignedDownloadUrl(
  opts: SignedUrlOptions,
): Promise<SignedUrl | null> {
  const { sheetId, userId, expiresIn = 900, downloadFileName } = opts;

  if (!sheetId) return null;

  const command = new GetObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME!,
    Key: `sheets/${sheetId}.pdf`,
    ResponseContentDisposition: `attachment; filename="${downloadFileName}"`,
  });

  try {
    const url = await getSignedUrl(r2, command, { expiresIn });
    const expiresAt = Date.now() + expiresIn * 1000;

    console.log('[Storage] Signed URL issued', {
      sheetId,
      userId: userId ?? 'anonymous',
      expiresAt: new Date(expiresAt).toISOString(),
    });

    return {
      url,
      expiresAt,
      sheetId,
      isMock: false,
    };
  } catch (err) {
    console.error('[Storage] Failed to sign URL', { sheetId, err });
    return null;
  }
}

/**
 * Record a download in Supabase.
 * For free downloads with anonymous users, we still record (with userId=null).
 * For paid downloads, the userId is required.
 */
export async function recordDownload(params: {
  userId: string | null;
  sheetId: string;
  type: 'free' | 'paid';
  ipAddress?: string;
}) {
  // Note: This logs to console for now. The actual DB insert
  // happens client-side via lib/auth.tsx's recordFreeDownload()
  // for authenticated users, since the server doesn't have the
  // user's session here (signed URLs work for anonymous too).
  console.log('[Storage] Download recorded', params);
  return { ok: true };
}

/**
 * In-memory rate limit (per-process, not distributed).
 *
 * For production scale, swap this for Upstash Redis or Vercel KV
 * (~30 lines change). For early-stage launch traffic, this is fine
 * because:
 *   - Vercel serverless functions are short-lived but persist enough
 *     between invocations for basic abuse prevention
 *   - At low traffic, multiple instances aren't a concern
 *   - The bucket itself is private, so abuse can't bypass the API
 */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export async function checkRateLimit(
  key: string,
  limit = 20,
  windowMs = 3600_000,
): Promise<{ allowed: boolean; remaining: number; resetAt: number }> {
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1, resetAt: now + windowMs };
  }

  if (entry.count >= limit) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }

  entry.count++;
  return { allowed: true, remaining: limit - entry.count, resetAt: entry.resetAt };
}