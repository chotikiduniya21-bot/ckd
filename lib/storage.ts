/**
 * Storage abstraction layer for PDF delivery.
 *
 * This module intentionally mimics the AWS S3 / Cloudflare R2 API shape
 * so you can swap the mock for real storage with ~15 lines of changes.
 *
 * ============================================================
 * MOVING TO CLOUDFLARE R2 IN PRODUCTION
 * ============================================================
 *
 * 1. npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
 *
 * 2. Create R2 bucket at dash.cloudflare.com → R2
 *    - Bucket name: "choti-sheets" (private, NOT public)
 *    - Generate API tokens: "R2 Token" with Object Read permission
 *
 * 3. Add to .env.local:
 *    R2_ACCOUNT_ID=your-account-id
 *    R2_ACCESS_KEY_ID=your-access-key
 *    R2_SECRET_ACCESS_KEY=your-secret
 *    R2_BUCKET_NAME=choti-sheets
 *    R2_PUBLIC_URL=https://choti-sheets.yourdomain.com  (optional CDN)
 *
 * 4. Replace getSignedDownloadUrl() below with the R2 implementation
 *    (commented-out code at the bottom of this file).
 *
 * Everything else — API routes, dashboard, purchase flow — works unchanged.
 */

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
  expiresAt: number; // Unix timestamp in ms
  sheetId: string;
  /** Mock only: data URL with a placeholder PDF */
  isMock?: boolean;
}

/**
 * Generate a time-limited, signed download URL for a PDF.
 * Returns null if the sheet doesn't exist or the request is invalid.
 */
export async function getSignedDownloadUrl(
  opts: SignedUrlOptions,
): Promise<SignedUrl | null> {
  const { sheetId, userId, expiresIn = 900, downloadFileName } = opts;

  if (!sheetId) return null;

  // ====================================================================
  // MOCK IMPLEMENTATION — returns a data URL with a placeholder PDF
  // ====================================================================
  // This generates a real, valid PDF that downloads in the browser —
  // perfect for testing the full flow end-to-end without real storage.

  const pdfPlaceholder = generatePlaceholderPdf(sheetId, downloadFileName);
  const expiresAt = Date.now() + expiresIn * 1000;

  // Log the download for audit (in prod, write to DB)
  console.log('[Storage] Signed URL issued', {
    sheetId,
    userId: userId ?? 'anonymous',
    expiresIn,
    expiresAt: new Date(expiresAt).toISOString(),
  });

  return {
    url: pdfPlaceholder,
    expiresAt,
    sheetId,
    isMock: true,
  };

  // ====================================================================
  // REAL R2 IMPLEMENTATION — uncomment when going live
  // ====================================================================
  /*
  import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
  import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

  const s3 = new S3Client({
    region: 'auto',
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID!,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
    },
  });

  const command = new GetObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME!,
    Key: `sheets/${sheetId}.pdf`,
    ResponseContentDisposition: `attachment; filename="${downloadFileName}"`,
  });

  try {
    const url = await getSignedUrl(s3, command, { expiresIn });
    return {
      url,
      expiresAt: Date.now() + expiresIn * 1000,
      sheetId,
    };
  } catch (err) {
    console.error('[Storage] Failed to sign URL', err);
    return null;
  }
  */
}

/**
 * Generate a tiny placeholder PDF as a data URL.
 * Real PDF bytes so browsers open it natively.
 */
function generatePlaceholderPdf(sheetId: string, fileName: string): string {
  const content = `Choti Ki Duniya - ${fileName}\nSheet ID: ${sheetId}\nThis is a demo PDF placeholder.\nIn production, the real PDF is served from Cloudflare R2.`;

  // Minimal valid PDF with one page of text
  const pdf = [
    '%PDF-1.4',
    '1 0 obj',
    '<< /Type /Catalog /Pages 2 0 R >>',
    'endobj',
    '2 0 obj',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    'endobj',
    '3 0 obj',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>',
    'endobj',
    '4 0 obj',
    `<< /Length ${100 + content.length} >>`,
    'stream',
    'BT',
    '/F1 16 Tf',
    '50 720 Td',
    `(${content.replace(/\n/g, ') Tj 0 -20 Td (')}) Tj`,
    'ET',
    'endstream',
    'endobj',
    '5 0 obj',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    'endobj',
    'xref',
    '0 6',
    '0000000000 65535 f',
    '0000000009 00000 n',
    '0000000058 00000 n',
    '0000000109 00000 n',
    '0000000209 00000 n',
    '0000000400 00000 n',
    'trailer',
    '<< /Size 6 /Root 1 0 R >>',
    'startxref',
    '470',
    '%%EOF',
  ].join('\n');

  // Encode as data URL
  const base64 = Buffer.from(pdf).toString('base64');
  return `data:application/pdf;base64,${base64}`;
}

/**
 * Record that a user downloaded a sheet.
 * In prod, this writes to your database (Postgres/Supabase).
 * In dev, we just log — the dashboard tracks downloads via localStorage.
 */
export async function recordDownload(params: {
  userId: string | null;
  sheetId: string;
  type: 'free' | 'paid';
  ipAddress?: string;
}) {
  console.log('[Storage] Download recorded', params);
  // Production: INSERT INTO downloads (user_id, sheet_id, type, ip, downloaded_at)
  //             VALUES ($1, $2, $3, $4, NOW())
  return { ok: true };
}

/**
 * Rate limit check for free downloads (prevents bot scraping).
 * In prod, back this with Upstash Redis or Vercel KV.
 */
const mockRateLimit = new Map<string, { count: number; resetAt: number }>();

export async function checkRateLimit(
  key: string,
  limit = 20,
  windowMs = 3600_000,
): Promise<{ allowed: boolean; remaining: number; resetAt: number }> {
  const now = Date.now();
  const entry = mockRateLimit.get(key);

  if (!entry || entry.resetAt < now) {
    mockRateLimit.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1, resetAt: now + windowMs };
  }

  if (entry.count >= limit) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }

  entry.count++;
  return { allowed: true, remaining: limit - entry.count, resetAt: entry.resetAt };
}
