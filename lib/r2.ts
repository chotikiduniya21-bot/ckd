import { S3Client } from '@aws-sdk/client-s3';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

/**
 * R2 client configured to talk to Cloudflare R2 via the S3-compatible API.
 * R2 uses 'auto' as the region — that's a Cloudflare-specific quirk.
 */
const r2 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT!,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

/**
 * Generate a temporary signed URL for downloading a file from R2.
 *
 * @param key The path/filename of the object in the bucket (e.g. "free/abc-tracing.pdf")
 * @param expiresIn How long the URL stays valid, in seconds (default: 5 minutes)
 * @returns A URL the user can use to download the file directly from R2
 */
export async function getSignedDownloadUrl(
  key: string,
  expiresIn: number = 300, // 5 minutes
): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME!,
    Key: key,
  });

  const url = await getSignedUrl(r2, command, { expiresIn });
  return url;
}

export { r2 };