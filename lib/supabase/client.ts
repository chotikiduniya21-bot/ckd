'use client';

import { createBrowserClient } from '@supabase/ssr';

/**
 * Browser-side Supabase client.
 * Used by React components and client-side logic.
 *
 * Reads config from NEXT_PUBLIC_ env variables which are bundled
 * into the browser at build time by Next.js.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}