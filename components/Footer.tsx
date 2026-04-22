import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <div className={`${styles.logoCircle} wobble`}>🌸</div>
        Chutki Ki Duniya
      </div>
      <div className={styles.footerNote}>Made with 💛 in India, for India&apos;s littlest learners.</div>
      <div className={styles.socialRow}>
        <div className={styles.socialBtn}>▶</div>
        <div className={styles.socialBtn}>📷</div>
        <div className={styles.socialBtn}>f</div>
        <div className={styles.socialBtn}>🎵</div>
      </div>
      <div className={styles.footerNote}>© 2026 Chutki Ki Duniya · Privacy · Contact</div>
    </footer>
  );
}
