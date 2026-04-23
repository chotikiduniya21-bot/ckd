import styles from '@/styles/legal.module.css';

export const metadata = {
  title: 'Privacy Policy | Chutki Ki Duniya',
  description: "How we handle your data and your child's privacy. Written in plain language.",
};

export default function PrivacyPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.legalHeader}>
        <div className={styles.legalEyebrow}>🔒 The important stuff</div>
        <h1 className={styles.legalTitle}>Privacy Policy</h1>
        <div className={styles.legalUpdated}>Last updated: April 2026</div>
      </div>

      <div className={styles.legalContent}>
        <div className={styles.callout}>
          <strong>In plain English:</strong> We collect the minimum data needed to run this service.
          We never sell your data. We never show ads to your children. Your child's age is stored
          only to recommend age-appropriate activities. You can delete your account anytime.
        </div>

        <h2>1. Who we are</h2>
        <p>
          Chutki Ki Duniya (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is an educational
          content platform for children aged 2–8, operated from India. This Privacy Policy explains
          what data we collect when you use our website and services, and how we use it.
        </p>

        <h2>2. What we collect</h2>

        <h3>Information you give us</h3>
        <ul>
          <li><strong>When you sign up:</strong> your first name, email address, password (encrypted), and optionally your child&apos;s age range.</li>
          <li><strong>When you purchase a bundle:</strong> payment is processed by Razorpay — we store only the transaction ID and purchased bundle, never your card or UPI details.</li>
          <li><strong>When you contact us:</strong> the email and message you send us.</li>
        </ul>

        <h3>Information collected automatically</h3>
        <ul>
          <li><strong>Download history:</strong> which free sheets you downloaded and when, so you can re-download from your dashboard.</li>
          <li><strong>Basic analytics:</strong> pages visited, approximate location (country/city-level only), device type. We use this to improve the site, not to track individuals.</li>
          <li><strong>IP address:</strong> stored temporarily for rate-limiting free downloads (max 20/hour per IP) to prevent abuse.</li>
        </ul>

        <h2>3. What we DO NOT collect</h2>
        <ul>
          <li>We do not collect information from or about your children directly. Children never interact with the site — parents/guardians do.</li>
          <li>We do not collect payment card details. All payments are processed by Razorpay, a PCI-DSS compliant payment gateway.</li>
          <li>We do not track your browsing on other websites.</li>
          <li>We do not use fingerprinting or cross-site tracking technologies.</li>
        </ul>

        <h2>4. How we use your data</h2>
        <p>We use the data we collect to:</p>
        <ul>
          <li>Provide you access to your purchased bundles and download history</li>
          <li>Send transactional emails (order confirmations, welcome emails)</li>
          <li>Recommend age-appropriate activities (using child&apos;s age range only)</li>
          <li>Respond to your support questions</li>
          <li>Improve the site based on aggregate usage patterns</li>
          <li>Prevent fraud and abuse (rate-limiting, etc.)</li>
          <li>Comply with applicable Indian laws</li>
        </ul>

        <h2>5. Who we share data with</h2>
        <p>We share data only with trusted service providers necessary to run the service:</p>
        <ul>
          <li><strong>Supabase</strong> — stores your account, purchase, and download data (hosted on secure cloud infrastructure)</li>
          <li><strong>Razorpay</strong> — processes payments (they handle your payment details per PCI-DSS)</li>
          <li><strong>Cloudflare R2</strong> — hosts activity sheet PDFs</li>
          <li><strong>Vercel</strong> — hosts this website</li>
          <li><strong>Resend</strong> — sends transactional emails</li>
        </ul>
        <p>
          We never sell, rent, or trade your personal data to anyone. Your data is never used for
          advertising purposes — not ours, not anyone else&apos;s.
        </p>

        <h2>6. Data for children</h2>
        <div className={styles.callout}>
          <strong>Our position on kids and data:</strong> Our service is designed for parents to use.
          Children do not create accounts, do not interact with the website directly, and are never
          the &quot;user&quot; in any legal sense. The only child-related data we store is the
          optional age range a parent provides at signup — which is used to recommend activities,
          never shared, and never used for advertising.
        </div>
        <p>
          If you are under 18 and have somehow created an account, please ask a parent to contact us
          and we will delete your account and all associated data immediately.
        </p>

        <h2>7. How long we keep your data</h2>
        <ul>
          <li><strong>Account data:</strong> as long as your account is active. Deleted within 30 days of account deletion.</li>
          <li><strong>Purchase records:</strong> kept for 7 years as required by Indian tax law, in anonymized form after account deletion.</li>
          <li><strong>Analytics data:</strong> aggregated and anonymized after 90 days.</li>
          <li><strong>IP addresses for rate-limiting:</strong> 24 hours.</li>
        </ul>

        <h2>8. Your rights</h2>
        <p>Under the Digital Personal Data Protection Act 2023 (India), you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Correct inaccurate information</li>
          <li>Delete your account and associated data</li>
          <li>Withdraw consent for data processing at any time</li>
          <li>Object to specific types of data use</li>
          <li>Get your data in a portable, machine-readable format</li>
        </ul>
        <p>
          To exercise any of these rights, email us at <a href="mailto:hello@chutkikiduniya.com">hello@chutkikiduniya.com</a>.
          We respond within 7 working days.
        </p>

        <h2>9. Security</h2>
        <p>
          We use industry-standard security practices: encryption in transit (HTTPS), encryption at
          rest (for passwords and sensitive data), Row-Level Security on our database (so users can
          only access their own data), and regular security audits. But no system is 100% secure —
          if something ever goes wrong, we will notify affected users within 72 hours.
        </p>

        <h2>10. Cookies and tracking</h2>
        <p>
          We use essential cookies only — to keep you logged in and remember your preferences. We
          don&apos;t use tracking cookies, advertising cookies, or third-party tracking pixels. You
          can disable cookies in your browser, but the site may not work correctly without them.
        </p>

        <h2>11. Changes to this policy</h2>
        <p>
          If we update this policy, we&apos;ll email all active users at least 7 days before the
          changes take effect. The &quot;Last updated&quot; date at the top will reflect the latest version.
        </p>

        <h2>12. Contact us</h2>
        <p>
          Questions about this policy? Email <a href="mailto:hello@chutkikiduniya.com">hello@chutkikiduniya.com</a>
          {' '}or visit our <a href="/contact">Contact page</a>.
        </p>
      </div>

      <div className={styles.legalFooter}>
        <p>
          By using Chutki Ki Duniya, you agree to this Privacy Policy and our{' '}
          <a href="/terms">Terms of Service</a>.
        </p>
      </div>
    </div>
  );
}
