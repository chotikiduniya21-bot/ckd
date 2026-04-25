'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/lib/auth';
import styles from './login.module.css';

export default function LoginPage() {
  const router = useRouter();
const { user, signIn, signUp, resetPassword } = useUser();
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  // Already signed in? Bounce to dashboard.
  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [childAge, setChildAge] = useState('3-5');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [signupComplete, setSignupComplete] = useState(false);
const [forgotMode, setForgotMode] = useState(false);
  const [forgotEmailSent, setForgotEmailSent] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (!email || (mode === 'signup' && !firstName)) return;
    setLoading(true);

    const result =
      mode === 'login'
        ? await signIn({ email, password })
        : await signUp({ email, password, firstName, childAgeRange: childAge });

    if (!result.success) {
      setErrorMsg(result.error ?? 'Something went wrong. Try again.');
      setLoading(false);
      return;
    }

    if (mode === 'signup') {
      // Don't redirect — show the "check your email" screen instead
      setSignupComplete(true);
      setLoading(false);
      return;
    }

    router.push('/dashboard');
  };
const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (!email) {
      setErrorMsg('Please enter your email.');
      return;
    }
    setLoading(true);
    const result = await resetPassword(email);
    if (!result.success) {
      setErrorMsg(result.error ?? 'Could not send reset email. Try again.');
      setLoading(false);
      return;
    }
    setForgotEmailSent(true);
    setLoading(false);
  };

  // After successful signup, show "check your email" screen
// Forgot password — email sent confirmation screen
  if (forgotMode && forgotEmailSent) {
    return (
      <section className={styles.loginPage}>
        <div className={styles.loginCard}>
          <div className={styles.loginLeft}>
            <div className={styles.brandMark}>
              <div className={styles.mascot}>🌸</div>
              <div className={styles.brandText}>Choti Ki Duniya</div>
            </div>
            <h1 className={styles.welcome}>
              Check your email <span>📬</span>
            </h1>
            <p className={styles.subtitle}>
              We&apos;ve sent a password reset link to <strong>{email}</strong>.
              Click it to set a new password.
            </p>
            <div className={styles.demoBanner} style={{ background: '#FFF4D6', borderColor: '#FF8A3D' }}>
              <strong>💡 Tip:</strong> Check your spam folder if you don&apos;t see the email
              within 2 minutes. The link expires in 1 hour.
            </div>
            <div className={styles.toggleRow}>
              <button
                onClick={() => {
                  setForgotMode(false);
                  setForgotEmailSent(false);
                  setEmail('');
                  setErrorMsg(null);
                }}
                className={styles.linkBtn}
              >
                ← Back to sign in
              </button>
            </div>
          </div>
          <div className={styles.loginRight}>
            <div className={styles.rightHero}>
              <div className={styles.rightEmojis}>
                <span className={styles.em1}>🔐</span>
                <span className={styles.em2}>📧</span>
                <span className={styles.em3}>✨</span>
                <span className={styles.em4}>🌟</span>
                <span className={styles.em5}>💛</span>
              </div>
              <div className={styles.rightCard}>
                <h3>What happens next 🔑</h3>
                <ul>
                  <li>✓ Open your email inbox</li>
                  <li>✓ Click the reset link</li>
                  <li>✓ Set a new password</li>
                  <li>✓ Sign in with your new password</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Forgot password — request form
  if (forgotMode) {
    return (
      <section className={styles.loginPage}>
        <div className={styles.loginCard}>
          <div className={styles.loginLeft}>
            <div className={styles.brandMark}>
              <div className={styles.mascot}>🌸</div>
              <div className={styles.brandText}>Choti Ki Duniya</div>
            </div>
            <h1 className={styles.welcome}>
              Forgot your password? <span>🔑</span>
            </h1>
            <p className={styles.subtitle}>
              No worries — happens to all of us. Enter your email and we&apos;ll send you
              a link to reset it.
            </p>
            <form onSubmit={handleForgotPassword} className={styles.form}>
              <label className={styles.label}>
                Email
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className={styles.input}
                  disabled={loading}
                />
              </label>
              {errorMsg && (
                <div className={styles.errorBox}>⚠️ {errorMsg}</div>
              )}
              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? 'Sending...' : 'Send reset link →'}
              </button>
            </form>
            <div className={styles.toggleRow}>
              <button
                onClick={() => {
                  setForgotMode(false);
                  setErrorMsg(null);
                }}
                className={styles.linkBtn}
              >
                ← Back to sign in
              </button>
            </div>
          </div>
          <div className={styles.loginRight}>
            <div className={styles.rightHero}>
              <div className={styles.rightEmojis}>
                <span className={styles.em1}>🔐</span>
                <span className={styles.em2}>🔑</span>
                <span className={styles.em3}>✨</span>
                <span className={styles.em4}>🌟</span>
                <span className={styles.em5}>💛</span>
              </div>
              <div className={styles.rightCard}>
                <h3>Quick & secure 🛡️</h3>
                <ul>
                  <li>✓ Reset link sent in seconds</li>
                  <li>✓ Link expires in 1 hour</li>
                  <li>✓ Your data stays safe</li>
                  <li>✓ Just one click to reset</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (signupComplete) {
    return (
      <section className={styles.loginPage}>
        <div className={styles.loginCard}>
          <div className={styles.loginLeft}>
            <div className={styles.brandMark}>
              <div className={styles.mascot}>🌸</div>
              <div className={styles.brandText}>Choti Ki Duniya</div>
            </div>
            <h1 className={styles.welcome}>
              Almost there! <span>📬</span>
            </h1>
            <p className={styles.subtitle}>
              We&apos;ve sent a confirmation link to <strong>{email}</strong>.
              Click it to verify your account, then come back here to sign in.
            </p>
            <div className={styles.demoBanner} style={{ background: '#FFF4D6', borderColor: '#FF8A3D' }}>
              <strong>💡 Tip:</strong> Check your spam folder if you don&apos;t see the email
              within 2 minutes. The link expires in 24 hours.
            </div>
            <div className={styles.toggleRow}>
              Already confirmed?{' '}
              <button
                onClick={() => {
                  setSignupComplete(false);
                  setMode('login');
                  setPassword('');
                }}
                className={styles.linkBtn}
              >
                Sign in →
              </button>
            </div>
          </div>
          <div className={styles.loginRight}>
            <div className={styles.rightHero}>
              <div className={styles.rightEmojis}>
                <span className={styles.em1}>📧</span>
                <span className={styles.em2}>✨</span>
                <span className={styles.em3}>🎉</span>
                <span className={styles.em4}>🌟</span>
                <span className={styles.em5}>💛</span>
              </div>
              <div className={styles.rightCard}>
                <h3>What happens next 📬</h3>
                <ul>
                  <li>✓ Open your email inbox</li>
                  <li>✓ Click the &quot;Confirm your mail&quot; link</li>
                  <li>✓ Come back &amp; sign in with your password</li>
                  <li>✓ Land on your dashboard</li>
                  <li>✓ Start downloading free sheets!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.loginPage}>
      <div className={styles.loginCard}>
        <div className={styles.loginLeft}>
          <div className={styles.brandMark}>
            <div className={styles.mascot}>🌸</div>
            <div className={styles.brandText}>Choti Ki Duniya</div>
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
              ? 'Sign in to access your bundles, track downloads, and jump back into learning.'
              : 'Create your free account to save sheets, track your learning, and get early access to new drops.'}
          </p>

         

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
            <div className={styles.field}>
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === 'signup' ? 'Create a password (min 6 characters)' : 'Your password'}
                  required
                />
                {mode === 'login' && (
                  <button
                    type="button"
                    onClick={() => {
                      setForgotMode(true);
                      setErrorMsg(null);
                      setPassword('');
                    }}
                    className={styles.linkBtn}
                    style={{ marginTop: '6px', alignSelf: 'flex-end', fontSize: '13px' }}
                  >
                    Forgot password?
                  </button>
                )}
              </div>
            {mode === 'signup' && (
              <div className={styles.field}>
                <label>Your child&apos;s age</label>
                <select
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  className={styles.ageSelect}
                >
                  <option value="2-4">2–4 years (toddler)</option>
                  <option value="3-5">3–5 years (pre-nursery)</option>
                  <option value="4-6">4–6 years (nursery/LKG)</option>
                  <option value="5-7">5–7 years (UKG/Class 1)</option>
                  <option value="6-8">6–8 years (Class 1–2)</option>
                </select>
                <div className={styles.fieldHint}>
                  We&apos;ll use this to recommend the right sheets &amp; bundles for your little one.
                </div>
              </div>
            )}

            {errorMsg && (
              <div className={styles.errorMsg}>⚠️ {errorMsg}</div>
            )}

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
                <li>✓ Save every free sheet you&apos;ve downloaded</li>
                <li>✓ Your bundle purchases &amp; re-downloads</li>
                <li>✓ Weekly new sheet notifications</li>
                <li>✓ Early access to new bundle drops</li>
                <li>✓ First dibs on Phase 2 books &amp; toys</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
