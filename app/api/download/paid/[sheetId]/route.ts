import { NextRequest, NextResponse } from 'next/server';
import { getSignedDownloadUrl, recordDownload } from '@/lib/storage';
import { sheets } from '@/app/activity-sheets/sheetsData';

/**
 * GET /api/download/paid/[sheetId]
 *
 * Request body (optional): { userId: string, purchases: string[] }
 * (When Clerk is wired, we'll get user from session instead of body.)
 *
 * Returns: { success: true, downloadUrl, expiresAt }
 *     or: { success: false, error: '...' }
 */
export async function POST(
  req: NextRequest,
  { params }: { params: { sheetId: string } },
) {
  const { sheetId } = params;

  // Body carries user info until we wire real auth.
  // With Clerk: const { userId } = auth(); then look up purchases in DB.
  let body: { userId?: string; purchases?: string[] } = {};
  try {
    body = await req.json();
  } catch {
    // empty body ok
  }

  const { userId, purchases = [] } = body;

  // 1. Auth check
  if (!userId) {
    return NextResponse.json(
      { success: false, error: 'You must be signed in to download paid sheets.' },
      { status: 401 },
    );
  }

  // 2. Sheet exists?
  const sheet = sheets.find((s) => String(s.id) === sheetId);
  if (!sheet) {
    return NextResponse.json(
      { success: false, error: 'Sheet not found.' },
      { status: 404 },
    );
  }

  // 3. Ownership check — did user actually pay for this sheet?
  const owns = purchases.includes(sheetId);
  if (!owns) {
    return NextResponse.json(
      { success: false, error: 'You do not own this sheet. Purchase it first.' },
      { status: 403 },
    );
  }

  // 4. Generate signed URL
  const signed = await getSignedDownloadUrl({
    sheetId,
    userId,
    expiresIn: 900, // 15 minutes for paid downloads
    downloadFileName: `${sheet.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.pdf`,
  });

  if (!signed) {
    return NextResponse.json(
      { success: false, error: 'Could not generate download link. Try again.' },
      { status: 500 },
    );
  }

  // 5. Log for audit
  await recordDownload({
    userId,
    sheetId,
    type: 'paid',
    ipAddress: req.headers.get('x-forwarded-for') ?? undefined,
  });

  return NextResponse.json({
    success: true,
    downloadUrl: signed.url,
    expiresAt: signed.expiresAt,
    isMock: signed.isMock,
    sheetTitle: sheet.title,
  });
}
