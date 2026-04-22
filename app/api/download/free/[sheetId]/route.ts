import { NextRequest, NextResponse } from 'next/server';
import { getSignedDownloadUrl, recordDownload, checkRateLimit } from '@/lib/storage';
import { freeSheets } from '@/app/activity-sheets/sheetsData';

/**
 * POST /api/download/free/[sheetId]
 *
 * Free sheets need no auth — but we rate-limit by IP to prevent bot scraping.
 * Body (optional): { userId?: string } — if user happens to be signed in,
 * we record the download to their account for the downloads history.
 */
export async function POST(
  req: NextRequest,
  { params }: { params: { sheetId: string } },
) {
  const { sheetId } = params;

  // Rate limit by IP (20 free downloads per hour per IP)
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
  const rate = await checkRateLimit(`free-download:${ip}`, 20, 3600_000);
  if (!rate.allowed) {
    return NextResponse.json(
      {
        success: false,
        error: 'Too many downloads from your connection. Please try again later.',
        resetAt: rate.resetAt,
      },
      { status: 429 },
    );
  }

  // Validate sheet ID
  const sheet = freeSheets.find((s) => String(s.id) === sheetId);
  if (!sheet) {
    return NextResponse.json(
      { success: false, error: 'Free sheet not found.' },
      { status: 404 },
    );
  }

  // Optional user context
  let userId: string | null = null;
  try {
    const body = await req.json();
    userId = body?.userId ?? null;
  } catch {
    // fine — anonymous download
  }

  // Generate signed URL (longer validity for free — 1 hour)
  const signed = await getSignedDownloadUrl({
    sheetId,
    userId: userId ?? undefined,
    expiresIn: 3600,
    downloadFileName: `${sheet.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-free.pdf`,
  });

  if (!signed) {
    return NextResponse.json(
      { success: false, error: 'Could not generate download link.' },
      { status: 500 },
    );
  }

  await recordDownload({
    userId,
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
    rateLimitRemaining: rate.remaining,
  });
}
