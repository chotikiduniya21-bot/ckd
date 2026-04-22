'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/lib/auth';
import styles from './login.module.css';

export default function LoginPage() {
  const router = useRouter();
  const { signIn, signUp } = useUser();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || (mode === 'signup' && !firstName)) return;
    setLoading(true);
    if (mode === 'login') {
      await signIn(email);
    } else {
      await signUp(email, firstName);
    }
    router.push('/dashboard');
  };

  return (
    <section className={styles.loginPage}>
      <div className={styles.loginCard}>
        <div className={styles.loginLeft}>
          <div className={styles.brandMark}>
            <div className={styles.mascot}>🌸</div>
            <div className={styles.brandText}>Chutki Ki Duniya</div>
          </div>
          <h1 className={styles.welcome}>
            {mode === 'login' ? (
              <>Welcome back! <span>👋</span></>
            ) : (
              <>Let&apos;s get <span className="rainbow-word">started</span>!</>
            )}
          </h1>
          <p className={styles.subtitle}>
            {mode === 'login'
              ? 'Sign in to access your sheets, track downloads, and get ready for the Magic Pass.'
              : 'Create your free account to save sheets, track your learning, and join the waitlist.'}
          </p>

          <div className={styles.demoBanner}>
            <strong>🎭 Demo mode:</strong> This is a mock login (no real backend yet).
            Type any email to sign in — you&apos;ll see a pre-filled demo dashboard with sample data.
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {mode === 'signup' && (
              <div className={styles.field}>
                <label>First name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Priya"
                  required
                />
              </div>
            )}
            <div className={styles.field}>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                required
              />
            </div>

            <button type="submit" disabled={loading} className={styles.submitBtn}>
              {loading
                ? 'Loading...'
                : mode === 'login'
                ? 'Sign In →'
                : 'Create Account →'}
            </button>
          </form>

          <div className={styles.toggleRow}>
            {mode === 'login' ? (
              <>
                New here?{' '}
                <button onClick={() => setMode('signup')} className={styles.linkBtn}>
                  Create a free account →
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button onClick={() => setMode('login')} className={styles.linkBtn}>
                  Sign in →
                </button>
              </>
            )}
          </div>
        </div>

        <div className={styles.loginRight}>
          <div className={styles.rightHero}>
            <div className={styles.rightEmojis}>
              <span className={styles.em1}>📚</span>
              <span className={styles.em2}>✏️</span>
              <span className={styles.em3}>🎨</span>
              <span className={styles.em4}>🌈</span>
              <span className={styles.em5}>⭐</span>
            </div>
            <div className={styles.rightCard}>
              <h3>What you get 🎁</h3>
              <ul>
                <li>✓ Access to all 8 free sheets</li>
                <li>✓ Your purchase history &amp; re-downloads</li>
                <li>✓ Waitlist for the Magic Pass (₹99 lifetime price)</li>
                <li>✓ Weekly new sheet notifications</li>
                <li>✓ Early access to Phase 2 books &amp; toys</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
