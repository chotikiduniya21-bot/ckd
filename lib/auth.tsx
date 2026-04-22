'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// This mock auth mimics the Clerk API surface.
// When ready for production, replace this file with:
//   import { ClerkProvider, useUser, useAuth, SignIn, SignUp } from '@clerk/nextjs';
// and the rest of the app continues to work.

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  subscription: {
    status: 'none' | 'trial' | 'active' | 'cancelled' | 'coming_soon';
    plan: 'none' | 'magic_pass';
    nextBillingDate?: string;
    amount?: number;
  };
  purchases: string[]; // sheet IDs they own
  freeDownloads: string[];
}

interface AuthContextValue {
  user: User | null;
  isSignedIn: boolean;
  isLoading: boolean;
  signIn: (email: string) => Promise<void>;
  signUp: (email: string, firstName: string) => Promise<void>;
  signOut: () => void;
  // Helpers that will be implemented via real APIs later
  addPurchase: (sheetId: string) => void;
  recordDownload: (sheetId: string) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

// Default demo user for showcasing dashboard UI
const DEMO_USER: User = {
  id: 'user_demo',
  email: 'priya.sharma@example.com',
  firstName: 'Priya',
  lastName: 'Sharma',
  imageUrl: '',
  subscription: {
    status: 'coming_soon',
    plan: 'none',
  },
  purchases: ['1', '3'],         // owns: Alphabet Pack, Colors & Shapes
  freeDownloads: ['101', '103'], // downloaded: Letter A, Rainbow
};

const STORAGE_KEY = 'ckd_mock_user';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
    setIsLoading(false);
  }, []);

  const persist = (u: User | null) => {
    try {
      if (u) localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
      else localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const signIn = async (email: string) => {
    // Mock: in real Clerk, this would verify credentials
    const u = { ...DEMO_USER, email };
    setUser(u);
    persist(u);
  };

  const signUp = async (email: string, firstName: string) => {
    // Mock: in real Clerk, this would create a new user
    const u: User = {
      id: `user_${Date.now()}`,
      email,
      firstName,
      lastName: '',
      imageUrl: '',
      subscription: { status: 'coming_soon', plan: 'none' },
      purchases: [],
      freeDownloads: [],
    };
    setUser(u);
    persist(u);
  };

  const signOut = () => {
    setUser(null);
    persist(null);
  };

  const addPurchase = (sheetId: string) => {
    if (!user) return;
    const updated = { ...user, purchases: [...user.purchases, sheetId] };
    setUser(updated);
    persist(updated);
  };

  const recordDownload = (sheetId: string) => {
    if (!user) return;
    if (user.freeDownloads.includes(sheetId)) return;
    const updated = { ...user, freeDownloads: [...user.freeDownloads, sheetId] };
    setUser(updated);
    persist(updated);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isSignedIn: !!user,
        isLoading,
        signIn,
        signUp,
        signOut,
        addPurchase,
        recordDownload,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useUser must be used inside AuthProvider');
  return ctx;
}
