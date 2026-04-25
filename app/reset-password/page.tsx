'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useUser } from '@/lib/auth';
import styles from './reset.module.css';

export default function ResetPasswordPage() {
  const router = useRouter();
  const { updatePassword } = useUser();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [hasSession, setHasSession] = useState<boolean | null>(null);

  // When user arrives via reset link, Supabase auto-creates a temporary session.
  // We give it a moment to settle, then check if we have one.
  useEffect(() => {
    const timer = setTimeout(() => {
      // We just check the URL hash — Supabase puts auth tokens there
      // If there's no hash AND no existing session, the link was bad/expired
      const hash = window.location.hash;
      if (hash.includes('access_token') || hash.includes('error')) {
        setHasSession(true);
      } else {
        // Even without hash, the user might have a session from clicking the link
        // We'll let them try and Supabase will reject if invalid
        setHasSession(true);
      }
    }, 500);
    return () => clearTimeout(timer);
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