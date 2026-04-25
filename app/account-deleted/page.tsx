import Link from 'next/link';
import styles from './goodbye.module.css';

export const metadata = {
  title: 'Account Deleted | Chutki Ki Duniya',
  description: 'Your account has been permanently deleted.',
};

export default function AccountDeletedPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.emoji}>👋</div>
        <h1 className={styles.title}>
          Goodbye for now,<br />
          <span className={styles.titleAccent}>not forever</span>
        </h1>
        <p className={styles.subtitle}>
          Your account has been permanently deleted. All your data — profile, downloads,
          and purchase history — is gone from our servers.
        </p>

        <div className={styles.confirmBox}>
          <div className={styles.confirmCheck}>✓</div>
          <div>
            <strong>Account deleted successfully</strong>
            <span>This action is final. No data was retained.</span>
          </div>
        </div>

        <div className={styles.divider}>
          <span>What now?</span>
        </div>

        <div className={styles.optionsGrid}>
          <Link href="/" className={styles.optionCard}>
            <div className={styles.optionEmoji}>🏠</div>
            <strong>Browse as a guest</strong>
            <span>Free sheets are still available — no signup needed.</span>
          </Link>

          <Link href="/login" className={styles.optionCard}>
            <div className={styles.optionEmoji}>✨</div>
            <strong>Start fresh</strong>
            <span>Changed your mind? Create a new account anytime.</span>
          </Link>

          <a
            href="https://www.youtube.com/@ChutkiKiDuniya"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.optionCard}
          >
            <div className={styles.optionEmoji}>▶</div>
            <strong>Stay on YouTube</strong>
            <span>800k+ subscribers · free educational videos every week.</span>
          </a>

          <Link href="/contact" className={styles.optionCard}>
            <div className={styles.optionEmoji}>💬</div>
            <strong>Tell us why</strong>
            <span>Was something not working? We&apos;d love feedback.</span>
          </Link>
        </div>

        <p className={styles.parting}>
          Thank you for being part of Chutki Ki Duniya. 💛<br />
          We hope our paths cross again.
        </p>
      </div>
    </div>
  );
}