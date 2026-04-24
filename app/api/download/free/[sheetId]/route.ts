import { NextRequest, NextResponse } from 'next/server';
import { getSignedDownloadUrl, checkRateLimit, recordDownload } from '@/lib/storage';
import { freeSheets } from '@/app/activity-sheets/sheetsData';

/**
 * POST /api/download/free/[sheetId]
 *
 * Rate-limited (20/hour per IP). No auth required — free sheets.
 * Returns a short-lived signed URL for the PDF.
 */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ sheetId: string }> },
) {
  const { sheetId } = await params;

  // 1. Sheet exists?
  const sheet = freeSheets.find((s) => String(s.id) === sheetId);
  if (!sheet) {
    return NextResponse.json(
      { success: false, error: 'Sheet not found.' },
      { status: 404 },
    );
  }

  // 2. Rate limit by IP
  const ip = req.headers.get('x-forwarded-for') ?? 'unknown';
const { allowed, remaining } = await checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      {
        success: false,
        error: 'Too many downloads in the last hour. Try again in a bit.',
      },
      { status: 429 },
    );
  }

  // 3. Generate signed URL (1 hour for free sheets — more lenient)
  const signed = await getSignedDownloadUrl({
    sheetId,
    userId: undefined,
    expiresIn: 3600,
    downloadFileName: `${sheet.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.pdf`,
  });

  if (!signed) {
    return NextResponse.json(
      { success: false, error: 'Could not generate download link. Try again.' },
      { status: 500 },
    );
  }

  // 4. Record (anonymous — just for analytics/rate-limit)
  let body: { userId?: string } = {};
  try {
    body = await req.json();
  } catch {
    // empty body ok for anonymous downloads
  }

  await recordDownload({
    userId: body.userId ?? null,
    sheetId,
    type: 'free',
    ipAddress: ip,
  });

  return NextResponse.json({
    success: true,
    downloadUrl: signed.url,
    expiresAt: signed.expiresAt,
    isMock: signed.isMock,
    sheetTitle: sheet.title,
    rateLimitRemaining: remaining,
  });
}