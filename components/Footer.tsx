import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {/* Brand column */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.footerLogo}>
            <div className={`${styles.logoCircle} wobble`}>🌸</div>
            <span>Choti Ki Duniya</span>
          </Link>
          <p className={styles.tagline}>
            Early learning, made joyful — for India&apos;s littlest learners.
            Free activity sheets, Montessori-inspired bundles, real teacher support.
          </p>
          <div className={styles.socialRow}>
            <a href="#" className={styles.socialBtn} aria-label="YouTube" title="YouTube">▶</a>
            <a href="#" className={styles.socialBtn} aria-label="Instagram" title="Instagram">📷</a>
            <a href="#" className={styles.socialBtn} aria-label="Facebook" title="Facebook">f</a>
            <a href="#" className={styles.socialBtn} aria-label="WhatsApp" title="WhatsApp">💬</a>
          </div>
        </div>

        {/* Explore */}
        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>Explore</h4>
          <Link href="/activity-sheets" className={styles.footerLink}>Free Sheets</Link>
          <Link href="/activity-sheets#bundles" className={styles.footerLink}>Bundles</Link>
          <Link href="/blog" className={styles.footerLink}>Parent Blog</Link>
          <Link href="/about" className={styles.footerLink}>About Choti</Link>
        </div>

        {/* Account */}
        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>Account</h4>
          <Link href="/login" className={styles.footerLink}>Login / Sign up</Link>
          <Link href="/dashboard" className={styles.footerLink}>My Dashboard</Link>
          <Link href="/dashboard/library" className={styles.footerLink}>My Bundles</Link>
          <Link href="/dashboard/downloads" className={styles.footerLink}>My Downloads</Link>
        </div>

        {/* Legal */}
        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>Legal &amp; Support</h4>
          <Link href="/contact" className={styles.footerLink}>Contact Us</Link>
          <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>
          <Link href="/terms" className={styles.footerLink}>Terms of Service</Link>
          <Link href="/refund" className={styles.footerLink}>Refund Policy</Link>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.bottomLeft}>
          © {currentYear} Choti Ki Duniya. Made with 💛 in India.
        </div>
        <div className={styles.bottomRight}>
          8 Lakh+ YouTube subscribers · 200+ Indian cities
        </div>
      </div>
    </footer>
  );
}
