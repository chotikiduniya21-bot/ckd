'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { createClient } from './supabase/client';
import type { User as SupabaseUser, Session } from '@supabase/supabase-js';

// ============================================================
// TYPES — match the Supabase schema exactly
// ============================================================

export interface Profile {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  child_age_range: string | null;
  created_at: string;
  updated_at: string;
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

export interface AuthUser {
  id: string;
  email: string;
  profile: Profile;
  purchases: Purchase[];
  freeDownloads: FreeDownload[];
}

// ============================================================
// CONTEXT
// ============================================================

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  signUp: (args: {
    email: string;
    password: string;
    firstName: string;
    childAgeRange?: string;
  }) => Promise<{ success: boolean; error?: string }>;
  signIn: (args: {
    email: string;
    password: string;
  }) => Promise<{ success: boolean; error?: string }>;
signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  updatePassword: (newPassword: string) => Promise<{ success: boolean; error?: string }>;
  refreshUser: () => Promise<void>;
  recordFreeDownload: (sheetId: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// ============================================================
// HOOK
// ============================================================

export function useUser() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useUser must be used within an AuthProvider');
  }
  return ctx;
}

// ============================================================
// PROVIDER
// ============================================================

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  // Create the Supabase client ONCE per provider instance.
  // Otherwise every render makes a new client and breaks session continuity.
  const supabase = useMemo(() => createClient(), []);

// Load full user data: profile + purchases + free downloads
  const loadUserData = useCallback(async (supabaseUser: SupabaseUser): Promise<AuthUser | null> => {

    // Fetch profile — use maybeSingle so missing row returns null instead of throwing
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', supabaseUser.id)
      .maybeSingle();


    if (profileError) {
      console.error('[auth] profile fetch error:', profileError);
      return null;
    }

    if (!profile) {
      console.warn('[auth] no profile row found yet for user', supabaseUser.id, '— trigger may still be running');
      return null;
    }

    // Fetch purchases
    const { data: purchases } = await supabase
      .from('purchases')
      .select('*')
      .eq('user_id', supabaseUser.id)
      .order('created_at', { ascending: false });

    // Fetch free downloads
    const { data: freeDownloads } = await supabase
      .from('free_downloads')
      .select('*')
      .eq('user_id', supabaseUser.id)
      .order('downloaded_at', { ascending: false });

    return {
      id: supabaseUser.id,
      email: supabaseUser.email ?? '',
      profile: profile as Profile,
      purchases: (purchases ?? []) as Purchase[],
      freeDownloads: (freeDownloads ?? []) as FreeDownload[],
    };
  }, [supabase]);

  const refreshUser = useCallback(async () => {
    const { data: { user: supabaseUser } } = await supabase.auth.getUser();
    if (!supabaseUser) {
      setUser(null);
      return;
    }
    const fullUser = await loadUserData(supabaseUser);
    setUser(fullUser);
  }, [supabase, loadUserData]);

  // On mount: check if a session exists, load user if so
  useEffect(() => {
    let mounted = true;

    const init = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();

        if (session?.user && mounted) {
          const fullUser = await loadUserData(session.user);
          if (mounted) {
            setUser(fullUser);
            setLoading(false);
          }
        } else if (mounted) {
          setLoading(false);
        }
      } catch (err) {
        console.error('[auth] init failed:', err);
        if (mounted) setLoading(false);
      }
    };

    init();

    // Listen for sign-in / sign-out across tabs.
    // IMPORTANT: defer database queries via setTimeout to avoid the Supabase auth lock deadlock.
    // See: https://github.com/supabase/auth-js/issues/762
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event: string, session: Session | null) => {
        if (!mounted) return;
        if (session?.user) {
          // Defer the DB query out of the auth callback to avoid deadlock
          setTimeout(async () => {
            if (!mounted) return;
            const fullUser = await loadUserData(session.user);
            if (mounted) setUser(fullUser);
          }, 0);
        } else {
          setUser(null);
        }
      },
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supabase]);

  // ========== AUTH METHODS ==========

  const signUp = useCallback(async ({
    email,
    password,
    firstName,
    childAgeRange,
  }: {
    email: string;
    password: string;
    firstName: string;
    childAgeRange?: string;
  }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: '',
          child_age_range: childAgeRange ?? null,
        },
      },
    });

    if (error) {
      return { success: false, error: error.message };
    }

    if (!data.user) {
      return { success: false, error: 'Signup failed — please try again.' };
    }

    // Give the database trigger a moment to create the profile row
    await new Promise((r) => setTimeout(r, 300));
    await refreshUser();

    return { success: true };
  }, [supabase, refreshUser]);

  const signIn = useCallback(async ({ email, password }: { email: string; password: string }) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      return { success: false, error: error.message };
    }
    // onAuthStateChange fires automatically and loads the user
    return { success: true };
  }, [supabase]);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setUser(null);
  }, [supabase]);
const resetPassword = async (email: string) => {
    try {
      const redirectTo = `${window.location.origin}/reset-password`;
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo,
      });
      if (error) {
        return { success: false, error: error.message };
      }
      return { success: true };
    } catch (err) {
      console.error('Reset password error:', err);
      return { success: false, error: 'Something went wrong. Please try again.' };
    }
  };

  const updatePassword = async (newPassword: string) => {
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) {
        return { success: false, error: error.message };
      }
      return { success: true };
    } catch (err) {
      console.error('Update password error:', err);
      return { success: false, error: 'Something went wrong. Please try again.' };
    }
  };

  const recordFreeDownload = useCallback(async (sheetId: string) => {
    if (!user) return;

    // Insert into database
    const { data, error } = await supabase
      .from('free_downloads')
      .insert({ user_id: user.id, sheet_id: sheetId })
      .select()
      .single();

    if (error || !data) {
      console.error('Failed to record free download:', error);
      return;
    }

    // Update local state so UI reflects it immediately
    setUser((prev) => prev ? {
      ...prev,
      freeDownloads: [data as FreeDownload, ...prev.freeDownloads],
    } : prev);
  }, [user, supabase]);
  return (
<AuthContext.Provider value={{ user, loading, signUp, signIn, signOut, refreshUser, resetPassword, updatePassword, recordFreeDownload }}>
      {children}
    </AuthContext.Provider>
  );
}