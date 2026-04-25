import styles from '@/styles/legal.module.css';

export const metadata = {
  title: 'Refund & Cancellation Policy | Choti Ki Duniya',
  description: 'Our honest refund policy. 7-day guarantee, clear process, no drama.',
};

export default function RefundPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.legalHeader}>
        <div className={styles.legalEyebrow}>💛 Honest policy</div>
        <h1 className={styles.legalTitle}>Refund &amp; Cancellation</h1>
        <div className={styles.legalUpdated}>Last updated: April 2026</div>
      </div>

      <div className={styles.legalContent}>
        <div className={styles.callout}>
          <strong>The short version:</strong> If a bundle isn&apos;t right for your child, email us
          within <strong>7 days</strong> and we&apos;ll refund you — no questions asked, no hoops to
          jump through. After 7 days, we&apos;ll still try to help, we just might not be able to
          refund automatically.
        </div>

        <h2>1. Our refund promise</h2>
        <p>
          We want every purchase to feel worth it. If a bundle disappoints you — the content
          doesn&apos;t fit your child, the WhatsApp support wasn&apos;t helpful, or any other reason
          — we&apos;d rather refund you than keep money for something that didn&apos;t work.
        </p>

        <h2>2. 7-day happiness guarantee</h2>
        <p>
          Every paid bundle comes with a <strong>7-day happiness guarantee</strong>:
        </p>
        <ul>
          <li>Email <a href="mailto:hello@chotikiduniya.com">hello@chotikiduniya.com</a> within 7 days of purchase</li>
          <li>Tell us your order ID (from the confirmation email)</li>
          <li>You don&apos;t need to explain why, though feedback helps us improve</li>
          <li>We&apos;ll process the full refund within 3 working days</li>
          <li>Refund arrives in your bank/UPI account within 5–10 working days (depending on your bank)</li>
        </ul>
        <div className={styles.callout}>
          <strong>What &quot;7 days&quot; means exactly:</strong> 7 calendar days from the moment
          your payment succeeded, not 7 days from when you downloaded anything. If you bought a
          bundle on the 1st at 3 PM, you have until the 8th at 3 PM to request a refund.
        </div>

        <h2>3. After the 7-day window</h2>
        <p>
          After 7 days, we handle refund requests case by case. Generally:
        </p>
        <ul>
          <li>If the bundle has a <strong>technical defect</strong> (broken PDFs, missing content) → full refund, always</li>
          <li>If you <strong>accidentally purchased twice</strong> → we&apos;ll refund one</li>
          <li>If you used the content extensively but now want a refund → usually we can&apos;t refund, but tell us what went wrong</li>
          <li>If your circumstances changed (child outgrew the bundle, etc.) → we may offer bundle credit instead</li>
        </ul>
        <p>
          We&apos;re small and we read every email. Tell us what&apos;s wrong, we&apos;ll figure it out together.
        </p>

        <h2>4. What you get after a refund</h2>
        <ul>
          <li>Access to the refunded bundle is removed from your account</li>
          <li>Previously downloaded PDFs stay on your computer (we won&apos;t remote-wipe them)</li>
          <li>Your access to the WhatsApp group for that bundle ends</li>
          <li>Your account and other purchases are unaffected</li>
          <li>You can still use the free sheets library forever</li>
        </ul>

        <h2>5. Subscription services (when they launch)</h2>
        <p>
          <em>Currently not available — we may launch a subscription service (Magic Pass) in Phase 2.</em>
        </p>
        <p>
          When live, subscriptions will follow these rules:
        </p>
        <ul>
          <li>You can cancel anytime from your dashboard — takes effect at the end of the current billing period</li>
          <li>Cancelled but still paid? You keep access until the period ends. No pro-rata refunds for partial months/years.</li>
          <li>New subscribers: 7-day happiness guarantee applies to your first month as well</li>
          <li>Annual subscriptions: first 14 days refundable pro-rata</li>
        </ul>

        <h2>6. How refunds are processed</h2>
        <ul>
          <li>
            <strong>UPI payments:</strong> refund goes to the same UPI ID. Arrives within 5–7 working
            days depending on your bank.
          </li>
          <li>
            <strong>Credit/debit cards:</strong> refund goes to the same card. Arrives within 7–10
            working days depending on your card-issuing bank.
          </li>
          <li>
            <strong>Net banking:</strong> refund goes to the same bank account. Arrives within 5–10
            working days.
          </li>
          <li>
            If the original payment method is no longer active (expired card, closed account), we&apos;ll
            issue a bank transfer to an account you provide. Same timeline.
          </li>
        </ul>

        <h2>7. Things that are NOT refundable</h2>
        <ul>
          <li>Free sheets — they&apos;re free. Nothing to refund. 😄</li>
          <li>Bundles purchased more than 7 days ago, where no technical defect exists</li>
          <li>Services you&apos;ve already fully consumed (e.g., a 1-on-1 call with Choti that already happened)</li>
          <li>Custom work or personalized requests, once delivered</li>
        </ul>

        <h2>8. Chargebacks</h2>
        <p>
          If you&apos;re unhappy with a purchase, please email us first — we almost always resolve
          it faster than a chargeback. Filing a chargeback through your bank without contacting us
          first may result in your account being suspended until the dispute is resolved, since
          banks often freeze the funds.
        </p>

        <h2>9. Questions</h2>
        <p>
          Refund-related questions? Email us at{' '}
          <a href="mailto:hello@chotikiduniya.com">hello@chotikiduniya.com</a> with your order ID.
          We respond within 24 hours on weekdays.
        </p>
      </div>

      <div className={styles.legalFooter}>
        <p>
          This policy is part of our <a href="/terms">Terms of Service</a>. See also our{' '}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
