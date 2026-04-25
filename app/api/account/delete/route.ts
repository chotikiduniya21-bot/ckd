import { NextRequest, NextResponse } from 'next/server';
import { createClient as createServerClient } from '@supabase/supabase-js';
import { createServerClient as createSSRClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

/**
 * POST /api/account/delete
 *
 * Permanently deletes the currently signed-in user.
 * - Verifies the requester is authenticated (via session cookie).
 * - Uses the service_role key to perform the deletion (only way to delete auth users).
 * - Cascade deletion in DB removes profiles, purchases, free_downloads automatically.
 * - Returns 200 on success, 401/500 on failure.
 */
export async function POST(req: NextRequest) {
  try {
    // 1. Verify the requester is signed in (using their session cookie)
    const cookieStore = await cookies();
    const supabaseAuth = createSSRClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll() {
            // No-op for this route — we don't refresh sessions here
          },
        },
      },
    );

    const { data: { user }, error: getUserError } = await supabaseAuth.auth.getUser();

    if (getUserError || !user) {
      return NextResponse.json(
        { success: false, error: 'You must be signed in to delete your account.' },
        { status: 401 },
      );
    }

    // 2. Use service_role to actually delete the auth user
    //    Cascade in DB will clean up profiles/purchases/free_downloads
    const supabaseAdmin = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      },
    );

    const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(user.id);

    if (deleteError) {
      console.error('Failed to delete user:', deleteError);
      return NextResponse.json(
        { success: false, error: 'Could not delete account. Please contact support.' },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Delete account route crashed:', err);
    return NextResponse.json(
      { success: false, error: 'Server error. Please try again.' },
      { status: 500 },
    );
  }
}