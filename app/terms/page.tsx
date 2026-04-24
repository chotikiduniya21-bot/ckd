import styles from '@/styles/legal.module.css';

export const metadata = {
  title: 'Terms of Service | Chutki Ki Duniya',
  description: 'The rules for using Chutki Ki Duniya. Written to be readable, not to trick you.',
};

export default function TermsPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.legalHeader}>
        <div className={styles.legalEyebrow}>📝 The house rules</div>
        <h1 className={styles.legalTitle}>Terms of Service</h1>
        <div className={styles.legalUpdated}>Last updated: April 2026</div>
      </div>

      <div className={styles.legalContent}>
        <div className={styles.callout}>
          <strong>The short version:</strong> Individual activity sheets are free — use them, share
          them, reuse them forever. Bundles you buy are for your family&apos;s personal use only.
          Don&apos;t resell our content. Be kind in the WhatsApp group. If something goes wrong in
          the first 7 days, we&apos;ll refund you.
        </div>

        <h2>1. Welcome</h2>
        <p>
          These Terms govern your use of Chutki Ki Duniya (&quot;the Service&quot;, &quot;we&quot;,
          &quot;us&quot;). By using the Service, you agree to these Terms. If you don&apos;t agree,
          please don&apos;t use the Service. These Terms form a binding agreement under the Indian
          Contract Act 1872.
        </p>

        <h2>2. Who can use the Service</h2>
        <ul>
          <li>You must be at least 18 years old, or have your parent&apos;s/guardian&apos;s permission.</li>
          <li>You&apos;re responsible for keeping your account secure and not sharing your login.</li>
          <li>Accounts are for individual families — please don&apos;t share across households.</li>
          <li>If you&apos;re creating an account on behalf of your child, that&apos;s great — the account stays in your name, not theirs.</li>
        </ul>

        <h2>3. Your content usage rights</h2>

        <h3>Free activity sheets</h3>
        <ul>
          <li>Every individual free sheet is licensed for <strong>personal, non-commercial use</strong>.</li>
          <li>You can download, print, and share them with family, friends, and fellow parents.</li>
          <li>You can use them at home or in informal settings with friends&apos; kids.</li>
          <li>You <strong>cannot</strong> resell them, include them in paid products, or distribute them as your own.</li>
          <li>Teachers and schools: please <a href="/contact">contact us</a> for classroom licensing — it&apos;s usually free or very cheap.</li>
        </ul>

        <h3>Paid bundles</h3>
        <ul>
          <li>When you buy a bundle, you get lifetime personal access to that bundle&apos;s content.</li>
          <li>Same rules as free sheets — personal family use only, no reselling.</li>
          <li>You can re-download from your dashboard anytime.</li>
          <li>&quot;Lifetime&quot; means as long as Chutki Ki Duniya continues to operate. If we ever shut down, we&apos;ll give you 90 days notice to download everything.</li>
        </ul>

        <h3>Don&apos;t do these things</h3>
        <ul>
          <li>Reselling our sheets on Teachers Pay Teachers, Amazon, Etsy, or anywhere else</li>
          <li>Removing our logo/watermark from sheets</li>
          <li>Using our content in paid courses, paid printables, or paid apps</li>
          <li>Using our content for bulk commercial distribution (schools, tuition centers with &gt;30 kids, daycare chains) without a license</li>
          <li>Automated scraping or downloading beyond normal use</li>
        </ul>

        <h2>4. Payments and refunds</h2>
        <ul>
          <li>Payments are processed securely via Razorpay. We never see your card/UPI details.</li>
          <li>All prices are in Indian Rupees (INR) and inclusive of applicable taxes.</li>
          <li>
            <strong>7-day refund guarantee:</strong> if a bundle isn&apos;t right for your child,
            email us within 7 days of purchase for a full refund. No questions asked.
          </li>
          <li>After 7 days, refunds are handled case-by-case — see our{' '}
            <a href="/refund">Refund Policy</a> for details.
          </li>
        </ul>

        <h2>5. WhatsApp support group conduct</h2>
        <p>Bundle purchases include access to a WhatsApp support group with Chutki. Please:</p>
        <ul>
          <li>Keep conversations kind, constructive, and parent-to-parent</li>
          <li>Don&apos;t share personal numbers or addresses of other members publicly</li>
          <li>Don&apos;t promote your own products/services without asking first</li>
          <li>Respect Chutki&apos;s time — she&apos;ll respond within 24 hours on weekdays</li>
          <li>If you&apos;re abusive or repeatedly off-topic, we reserve the right to remove you from the group (without refund, for repeat violations)</li>
        </ul>

        <h2>6. Service availability</h2>
        <ul>
          <li>We aim for 99% uptime but can&apos;t guarantee the Service will always be available.</li>
          <li>We may temporarily suspend the Service for maintenance, security, or legal reasons.</li>
          <li>Your downloaded content stays yours — it doesn&apos;t disappear if the Service has an outage.</li>
        </ul>

        <h2>7. Our responsibility, your responsibility</h2>
        <p>
          We take great care with our content, but we&apos;re an educational content provider, not a
          substitute for professional advice. Specifically:
        </p>
        <ul>
          <li>Our content is designed to supplement, not replace, formal education or medical/therapeutic guidance.</li>
          <li>If your child has special learning needs, please work with a qualified professional. Our sheets may or may not fit their needs.</li>
          <li>We&apos;re not liable for how you use the content — if a craft suggestion causes a mess, that&apos;s on you (but we&apos;re sorry about the mess).</li>
        </ul>

        <h2>8. Intellectual property</h2>
        <p>
          All content on Chutki Ki Duniya (sheets, guides, audio, videos, website design) is owned
          by us or used under license. Your purchase or free download gives you usage rights as
          described in Section 3, not ownership.
        </p>

        <h2>9. Account termination</h2>
        <ul>
          <li><strong>By you:</strong> delete your account anytime from Settings. Takes effect within 30 days.</li>
          <li><strong>By us:</strong> we may suspend accounts that violate these Terms (e.g., reselling our content, abusive behavior). We&apos;ll notify you first except in cases of serious abuse.</li>
        </ul>

        <h2>10. Changes to these Terms</h2>
        <p>
          If we update these Terms, we&apos;ll email all active users at least 7 days in advance.
          Continued use after the changes means you accept them. If you don&apos;t, you can delete
          your account and we&apos;ll refund any unused paid bundles.
        </p>

        <h2>11. Governing law and disputes</h2>
        <p>
          These Terms are governed by the laws of India. Any disputes will be subject to the
          exclusive jurisdiction of the courts in <strong>[Uttarakhand]</strong>, India. Before heading
          to court, please try to resolve things with us via email — most issues get fixed in a
          single conversation.
        </p>

        <h2>12. Contact</h2>
        <p>
          Questions, concerns, or just want to say hi? Email us at{' '}
          <a href="mailto:hello@chutkikiduniya.com">hello@chutkikiduniya.com</a> or visit our{' '}
          <a href="/contact">Contact page</a>.
        </p>
      </div>

      <div className={styles.legalFooter}>
        <p>
          These Terms work alongside our <a href="/privacy">Privacy Policy</a> and{' '}
          <a href="/refund">Refund Policy</a>. Read them together.
        </p>
      </div>
    </div>
  );
}
