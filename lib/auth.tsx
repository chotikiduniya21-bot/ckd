'use client';

/**
 * ============================================================
 * Mock auth that mirrors Supabase's API surface.
 * ============================================================
 *
 * This file simulates what @supabase/supabase-js + @supabase/ssr would do,
 * so when you're ready to go live, the migration is nearly import-only.
 *
 * WHAT SUPABASE GIVES YOU (that we're mocking here):
 * - User signup/login with email + password
 * - Session management (stays logged in for 30 days)
 * - A database to store user profile, purchases, downloads
 * - Row-level security (users only see their own data)
 *
 * ============================================================
 * MIGRATION TO REAL SUPABASE (when ready):
 * ============================================================
 * 1. npm install @supabase/supabase-js @supabase/ssr
 * 2. Create project at supabase.com (free tier)
 * 3. Get URL + anon key from Settings → API
 * 4. Add to .env.local:
 *    NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
 *    NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
 * 5. Replace this file's implementation with real Supabase client
 *    (commented-out code at the bottom shows exactly what to write).
 * 6. Create these tables in Supabase SQL editor:
 *    - profiles (id, first_name, last_name, child_age_range)
 *    - purchases (id, user_id, sheet_id, created_at, amount)
 *    - free_downloads (id, user_id, sheet_id, downloaded_at)
 *    - waitlist (id, user_id, plan_interested, created_at)
 * 7. All the pages, hooks, and components keep working unchanged.
 */

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// ----------------------- Types (match Supabase's shape) -----------------------

export interface Profile {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  child_age_range?: string; // '2-4', '3-5', '4-6', '5-7'
  created_at: string;
}

export interface Purchase {
  id: string;
  user_id: string;
  sheet_id: string;
  amount: number;
  created_at: string;
}

export interface FreeDownload {
  id: string;
  user_id: string;
  sheet_id: string;
  downloaded_at: string;
}

// What components consume — a "hydrated" user with related data joined in.
// Supabase would do this via a .select() with foreign key joins or separate queries.
export interface AuthUser {
  profile: Profile;
  purchases: Purchase[];
  freeDownloads: FreeDownload[];
}

// ----------------------- Context shape -----------------------

interface AuthContextValue {
  user: AuthUser | null;
  isLoading: boolean;

  // These methods mirror Supabase client methods
  signUp: (email: string, password: string, firstName: string, childAgeRange?: string) => Promise<{ error: string | null }>;
  signInWithPassword: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;

  // Business-data helpers (would hit Supabase tables in production)
  addPurchase: (sheetId: string, amount: number) => Promise<void>;
  recordFreeDownload: (sheetId: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

// ----------------------- Demo data -----------------------

const DEMO_PROFILE: Profile = {
  id: 'user_demo_priya',
  email: 'priya.sharma@example.com',
  first_name: 'Priya',
  last_name: 'Sharma',
  child_age_range: '3-5',
  created_at: new Date('2025-01-15').toISOString(),
};

const DEMO_PURCHASES: Purchase[] = [
  {
    id: 'purchase_1',
    user_id: 'user_demo_priya',
    sheet_id: 'school-ready', // bundle ID (we're overloading sheet_id for bundle ID in the mock)
    amount: 299,
    created_at: new Date('2025-02-01').toISOString(),
  },
];

const DEMO_FREE_DOWNLOADS: FreeDownload[] = [
  {
    id: 'free_1',
    user_id: 'user_demo_priya',
    sheet_id: '101',
    downloaded_at: new Date('2025-01-20').toISOString(),
  },
  {
    id: 'free_2',
    user_id: 'user_demo_priya',
    sheet_id: '103',
    downloaded_at: new Date('2025-01-22').toISOString(),
  },
];

// ----------------------- Provider -----------------------

const STORAGE_KEY = 'ckd_supabase_mock_session';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Hydrate session from localStorage on mount (mimics Supabase's auto-session-restore)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setUser(JSON.parse(raw));
      }
    } catch {
      // noop
    }
    setIsLoading(false);
  }, []);

  const persist = (u: AuthUser | null) => {
    try {
      if (u) localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
      else localStorage.removeItem(STORAGE_KEY);
    } catch {
      // noop
    }
  };

  const signUp: AuthContextValue['signUp'] = async (email, _password, firstName, childAgeRange) => {
    if (!email || !firstName) return { error: 'Please fill in all fields.' };

    const newUser: AuthUser = {
      profile: {
        id: `user_${Date.now()}`,
        email,
        first_name: firstName,
        last_name: '',
        child_age_range: childAgeRange,
        created_at: new Date().toISOString(),
      },
      purchases: [],
      freeDownloads: [],
    };
    setUser(newUser);
    persist(newUser);
    return { error: null };
  };

  const signInWithPassword: AuthContextValue['signInWithPassword'] = async (email, _password) => {
    if (!email) return { error: 'Please enter your email.' };

    // Mock: use demo data so the dashboard feels alive
    const loggedIn: AuthUser = {
      profile: { ...DEMO_PROFILE, email },
      purchases: DEMO_PURCHASES,
      freeDownloads: DEMO_FREE_DOWNLOADS,
    };
    setUser(loggedIn);
    persist(loggedIn);
    return { error: null };
  };

  const signOut = async () => {
    setUser(null);
    persist(null);
  };

  const addPurchase: AuthContextValue['addPurchase'] = async (sheetId, amount) => {
    if (!user) return;
    const newPurchase: Purchase = {
      id: `purchase_${Date.now()}`,
      user_id: user.profile.id,
      sheet_id: sheetId,
      amount,
      created_at: new Date().toISOString(),
    };
    const updated = { ...user, purchases: [...user.purchases, newPurchase] };
    setUser(updated);
    persist(updated);
  };

  const recordFreeDownload: AuthContextValue['recordFreeDownload'] = async (sheetId) => {
    if (!user) return;
    if (user.freeDownloads.some((d) => d.sheet_id === sheetId)) return; // already downloaded

    const newDownload: FreeDownload = {
      id: `free_${Date.now()}`,
      user_id: user.profile.id,
      sheet_id: sheetId,
      downloaded_at: new Date().toISOString(),
    };
    const updated = { ...user, freeDownloads: [...user.freeDownloads, newDownload] };
    setUser(updated);
    persist(updated);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        signUp,
        signInWithPassword,
        signOut,
        addPurchase,
        recordFreeDownload,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ----------------------- Hook (matches Supabase's useUser-ish usage) -----------------------

export function useUser() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useUser must be used inside <AuthProvider>');
  return ctx;
}

// ============================================================
// REAL SUPABASE IMPLEMENTATION — uncomment when going live
// ============================================================
/*

'use client';

import { createBrowserClient } from '@supabase/ssr';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const hydrateUser = async (authUser: any) => {
    // Fetch profile + related records in parallel
    const [{ data: profile }, { data: purchases }, { data: freeDownloads }] = await Promise.all([
      supabase.from('profiles').select('*').eq('id', authUser.id).single(),
      supabase.from('purchases').select('*').eq('user_id', authUser.id),
      supabase.from('free_downloads').select('*').eq('user_id', authUser.id),
    ]);

    if (profile) {
      setUser({ profile, purchases: purchases ?? [], freeDownloads: freeDownloads ?? [] });
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) hydrateUser(session.user);
      setIsLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_evt, session) => {
      if (session?.user) hydrateUser(session.user);
      else setUser(null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, firstName: string, childAgeRange?: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { first_name: firstName } },
    });
    if (error) return { error: error.message };
    // Create profile row
    if (data.user) {
      await supabase.from('profiles').insert({
        id: data.user.id,
        email,
        first_name: firstName,
        last_name: '',
        child_age_range: childAgeRange,
      });
    }
    return { error: null };
  };

  const signInWithPassword = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error?.message ?? null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const addPurchase = async (sheetId: string, amount: number) => {
    if (!user) return;
    await supabase.from('purchases').insert({
      user_id: user.profile.id,
      sheet_id: sheetId,
      amount,
    });
    await hydrateUser({ id: user.profile.id });
  };

  const recordFreeDownload = async (sheetId: string) => {
    if (!user) return;
    const exists = user.freeDownloads.some(d => d.sheet_id === sheetId);
    if (exists) return;
    await supabase.from('free_downloads').insert({
      user_id: user.profile.id,
      sheet_id: sheetId,
    });
    await hydrateUser({ id: user.profile.id });
  };

  // ...return provider as before
}
*/
