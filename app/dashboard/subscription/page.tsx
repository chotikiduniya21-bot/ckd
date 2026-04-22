'use client';

import { useState } from 'react';
import { useUser } from '@/lib/auth';
import styles from './subscription.module.css';

export default function SubscriptionPage() {
  const { user } = useUser();
  const [joined, setJoined] = useState(false);

  if (!user) return null;

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    setJoined(true);
  };

  return (
    <div className={styles.subPage}>
      {/* Status header */}
      <div className={styles.statusCard}>
        <div className={styles.statusLeft}>
          <div className={styles.statusBadge}>⏳ NOT LAUNCHED YET</div>
          <h1 className={styles.statusTitle}>
            The <span className="rainbow-word">Magic Pass</span>
          </h1>
          <p className={styles.statusSub}>
            Our monthly subscription will give you unlimited access to every sheet, every new drop,
            and early access to Phase 2 books &amp; toys. Launching in the next few months.
          </p>
        </div>
        <div className={styles.statusEmoji}>🔁</div>
      </div>

      {/* Early-bird offer */}
      {!joined ? (
        <div className={styles.earlyBird}>
          <div className={styles.earlyBirdLeft}>
            <div className={styles.earlyBadge}>🎉 EARLY SUBSCRIBER PERK</div>
            <h2 className={styles.earlyTitle}>
              Lock in <span className={styles.strikeThrough}>₹149</span>{' '}
              <span className={styles.newPrice}>₹99</span>
              <span className={styles.month}>/month — forever</span>
            </h2>
            <p className={styles.earlyText}>
              Everyone who joins the waitlist <strong>before launch</strong> gets the Magic Pass
              at ₹99/month <em>for life</em>. After launch, the price goes to ₹149/month.
              That&apos;s ₹600 saved every year.
            </p>

            <form className={styles.waitlistForm} onSubmit={handleJoinWaitlist}>
              <input
                type="email"
                placeholder={user.profile.email}
                defaultValue={user.profile.email}
                className={styles.waitlistInput}
              />
              <button type="submit" className={styles.waitlistBtn}>
                Join Waitlist →
              </button>
            </form>
            <p className={styles.fineprint}>
              🔒 No charge until launch. We&apos;ll email you first.
            </p>
          </div>
          <div className={styles.earlyBirdRight}>
            <div className={styles.saveBadge}>
              <div className={styles.saveAmount}>₹600</div>
              <div className={styles.saveLabel}>saved every year</div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.joinedBox}>
          <div className={styles.joinedEmoji}>🎉</div>
          <h2>You&apos;re on the list!</h2>
          <p>
            We&apos;ll email <strong>{user.profile.email}</strong> the moment Magic Pass launches.
            Your lifetime ₹99/month price is locked in.
          </p>
        </div>
      )}

      {/* What's included */}
      <div className={styles.included}>
        <h2 className={styles.sectionTitle}>What you&apos;ll get with Magic Pass 🎁</h2>
        <div className={styles.includedGrid}>
          <div className={styles.benefitCard} style={{ background: '#FFE5EC' }}>
            <div className={styles.benefitEmoji}>📚</div>
            <h4>Unlimited sheets</h4>
            <p>Every current pack + every future one. Download as much as you want.</p>
          </div>
          <div className={styles.benefitCard} style={{ background: '#E5F4FF' }}>
            <div className={styles.benefitEmoji}>✨</div>
            <h4>Weekly new drops</h4>
            <p>4–6 new sheets added every month. Never run out of activities.</p>
          </div>
          <div className={styles.benefitCard} style={{ background: '#FFF4CC' }}>
            <div className={styles.benefitEmoji}>🎁</div>
            <h4>Phase 2 early access</h4>
            <p>Physical books &amp; toys before anyone else. Member-only pricing.</p>
          </div>
          <div className={styles.benefitCard} style={{ background: '#E8F9E8' }}>
            <div className={styles.benefitEmoji}>💬</div>
            <h4>Parent community</h4>
            <p>Private WhatsApp group with other parents + monthly Q&amp;A with Chutki.</p>
          </div>
          <div className={styles.benefitCard} style={{ background: '#F0E6FF' }}>
            <div className={styles.benefitEmoji}>📺</div>
            <h4>Exclusive videos</h4>
            <p>Bonus YouTube content unlisted for subscribers only.</p>
          </div>
          <div className={styles.benefitCard} style={{ background: '#FFE8D6' }}>
            <div className={styles.benefitEmoji}>🔁</div>
            <h4>Cancel anytime</h4>
            <p>No lock-in. No awkward phone calls. One click to pause or cancel.</p>
          </div>
        </div>
      </div>

      {/* Math comparison */}
      <div className={styles.mathBox}>
        <div className={styles.mathBadge}>💡 Quick math</div>
        <h3 className={styles.mathTitle}>Why Magic Pass breaks even after 3 sheets</h3>
        <div className={styles.mathRow}>
          <div className={styles.mathSide}>
            <div className={styles.mathLabel}>Buying individually</div>
            <div className={styles.mathValue}>3 packs × ₹49 = ₹147</div>
            <div className={styles.mathNote}>(One-off purchase)</div>
          </div>
          <div className={styles.mathVs}>vs</div>
          <div className={styles.mathSide}>
            <div className={styles.mathLabel}>Magic Pass</div>
            <div className={styles.mathValue}>₹99/month</div>
            <div className={styles.mathNote}>(Unlimited everything)</div>
          </div>
        </div>
        <div className={styles.mathConclusion}>
          👉 Get 3 packs in your first month and you&apos;re already ahead. After that, everything
          is a bonus.
        </div>
      </div>
    </div>
  );
}
