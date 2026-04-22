'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { recordDismiss } from '@/lib/downloadTracking';
import styles from './SignupPrompt.module.css';

interface SignupPromptProps {
  open: boolean;
  downloadCount: number;
  onClose: () => void;
}

export default function SignupPrompt({ open, downloadCount, onClose }: SignupPromptProps) {
  // Lock body scroll when popup is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleDismiss();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleDismiss = () => {
    recordDismiss();
    onClose();
  };

  if (!open) return null;

  return (
    <div className={styles.backdrop} onClick={handleDismiss}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={handleDismiss} aria-label="Close">
          ×
        </button>

        <div className={styles.modalGrid}>
          {/* Left side — visual */}
          <div className={styles.visualSide}>
            <div className={styles.sparkle1}>✨</div>
            <div className={styles.sparkle2}>🌟</div>
            <div className={styles.sparkle3}>⭐</div>

            <div className={styles.downloadCounter}>
              <div className={styles.counterEmoji}>🎉</div>
              <div className={styles.counterNum}>{downloadCount}</div>
              <div className={styles.counterLabel}>sheets downloaded</div>
              <div className={styles.counterSub}>You&apos;re a regular now!</div>
            </div>
          </div>

          {/* Right side — message + CTA */}
          <div className={styles.contentSide}>
            <div className={styles.eyebrow}>💛 A little ask from Chutki</div>

            <h2 className={styles.title}>
              Loving the free sheets?
              <br />
              <span className="rainbow-word">Join our family.</span>
            </h2>

            <p className={styles.subtitle}>
              Creating a free account takes 10 seconds. No credit card, no fees, ever.
              Here&apos;s what you get:
            </p>

            <ul className={styles.benefits}>
              <li>
                <span className={styles.benefitIcon}>📚</span>
                <div>
                  <strong>Track your downloads</strong>
                  <span>Never lose a sheet. Re-download from your library anytime.</span>
                </div>
              </li>
              <li>
                <span className={styles.benefitIcon}>💬</span>
                <div>
                  <strong>Personalized recommendations</strong>
                  <span>Tell us your child&apos;s age, we&apos;ll show what fits.</span>
                </div>
              </li>
              <li>
                <span className={styles.benefitIcon}>🎁</span>
                <div>
                  <strong>First dibs on new drops</strong>
                  <span>When we launch physical books &amp; toys, you&apos;ll know first.</span>
                </div>
              </li>
              <li>
                <span className={styles.benefitIcon}>⚡</span>
                <div>
                  <strong>Lifetime Magic Pass discount</strong>
                  <span>Early members lock in ₹149/month (forever, when we launch).</span>
                </div>
              </li>
            </ul>

            <div className={styles.ctaRow}>
              <Link href="/login" className={styles.ctaPrimary} onClick={onClose}>
                Create Free Account →
              </Link>
              <button onClick={handleDismiss} className={styles.ctaSecondary}>
                Maybe later
              </button>
            </div>

            <div className={styles.smallNote}>
              🔒 We&apos;ll never spam you. One email every Sunday, tops.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
