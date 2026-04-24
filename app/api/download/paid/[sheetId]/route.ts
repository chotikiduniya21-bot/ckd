import { NextRequest, NextResponse } from 'next/server';
import { getSignedDownloadUrl, recordDownload } from '@/lib/storage';
import { bundles } from '@/app/activity-sheets/sheetsData';

/**
 * POST /api/download/paid/[sheetId]
 *
 * In the new model, "paid" downloads are bundle-level.
 * The [sheetId] param is actually a bundle ID (e.g. "school-ready").
 *
 * Auth + ownership check → signed URL for the bundle's ZIP.
 */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ sheetId: string }> },
) {
  const { sheetId: bundleId } = await params;

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
      { success: false, error: 'You must be signed in to download paid bundles.' },
      { status: 401 },
    );
  }

  // 2. Bundle exists?
  const bundle = bundles.find((b) => b.id === bundleId);
  if (!bundle) {
    return NextResponse.json(
      { success: false, error: 'Bundle not found.' },
      { status: 404 },
    );
  }

  // 3. Ownership check
  const owns = purchases.includes(bundleId);
  if (!owns) {
    return NextResponse.json(
      { success: false, error: 'You do not own this bundle. Purchase it first.' },
      { status: 403 },
    );
  }

  // 4. Signed URL — points to bundle ZIP in production
  const signed = await getSignedDownloadUrl({
    sheetId: bundleId,
    userId,
    expiresIn: 900,
    downloadFileName: `${bundle.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-bundle.zip`,
  });

  if (!signed) {
    return NextResponse.json(
      { success: false, error: 'Could not generate download link. Try again.' },
      { status: 500 },
    );
  }

  await recordDownload({
    userId,
    sheetId: bundleId,
    type: 'paid',
    ipAddress: req.headers.get('x-forwarded-for') ?? undefined,
  });

  return NextResponse.json({
    success: true,
    downloadUrl: signed.url,
    expiresAt: signed.expiresAt,
    isMock: signed.isMock,
    sheetTitle: bundle.title,
  });
}