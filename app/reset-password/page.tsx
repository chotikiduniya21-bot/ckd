'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useUser } from '@/lib/auth';
import { createClient } from '@/lib/supabase/client';
import styles from './reset.module.css';

const supabase = createClient();

export default function ResetPasswordPage() {
  const router = useRouter();
  const { updatePassword } = useUser();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [hasSession, setHasSession] = useState<boolean | null>(null);

 // When user arrives via reset link, Supabase processes the URL hash
  // and emits PASSWORD_RECOVERY event with a temporary session.
  // We listen for this event to know when it's safe to update password.
  useEffect(() => {
    let mounted = true;

    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (mounted) {
        if (session) {
          setHasSession(true);
        } else {
          // Wait a bit longer for Supabase to process the URL hash
          setTimeout(async () => {
            const { data: { session: retrySession } } = await supabase.auth.getSession();
            if (mounted) setHasSession(retrySession !== null);
          }, 1500);
        }
      }
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!mounted) return;
      if (event === 'PASSWORD_RECOVERY' || (event === 'SIGNED_IN' && session)) {
        setHasSession(true);
      }
    });

    checkSession();

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    setLoading(true);
    const result = await updatePassword(password);

    if (!result.success) {
      setErrorMsg(result.error ?? 'Could not update password. The link may have expired.');
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);

    // Redirect to dashboard after a moment (user is auto-signed in)
    setTimeout(() => {
      router.push('/dashboard');
    }, 2500);
  };

  // Loading state while we check if user came from a valid link
  if (hasSession === null) {
    return (
      <div className={styles.page}>
        <div className={styles.card}>
          <p className={styles.subtitle}>Loading...</p>
        </div>
      </div>
    );
  }

  // Success screen
  if (success) {
    return (
      <div className={styles.page}>
        <div className={styles.card}>
          <div className={styles.emoji}>🎉</div>
          <h1 className={styles.title}>Password updated!</h1>
          <p className={styles.subtitle}>
            Your new password is now active. Redirecting you to your dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.emoji}>🔑</div>
        <h1 className={styles.title}>Set a new password</h1>
        <p className={styles.subtitle}>
          Choose something memorable but secure. Minimum 6 characters.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            New password
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              className={styles.input}
              disabled={loading}
              autoFocus
            />
          </label>

          <label className={styles.label}>
            Confirm new password
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Type it again"
              className={styles.input}
              disabled={loading}
            />
          </label>

          {errorMsg && (
            <div className={styles.errorBox}>⚠️ {errorMsg}</div>
          )}

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? 'Updating...' : 'Update password →'}
          </button>
        </form>

        <div className={styles.footer}>
          <Link href="/login" className={styles.linkBtn}>
            ← Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}