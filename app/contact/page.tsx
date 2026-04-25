'use client';

import { useState } from 'react';
import styles from '@/styles/legal.module.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const data = await res.json();

      if (!data.success) {
        setErrorMsg(data.error ?? 'Could not send message. Please try again.');
        setLoading(false);
        return;
      }

      setSubmitted(true);
      setLoading(false);
      setName(''); setEmail(''); setSubject(''); setMessage('');
      setTimeout(() => setSubmitted(false), 8000);
    } catch (err) {
      console.error('Contact form failed:', err);
      setErrorMsg('Network error. Please try emailing us directly at hello@chotikiduniya.com');
      setLoading(false);
    }
  };

  return (
    <div className={styles.legalPage}>
      <div className={styles.legalHeader}>
        <div className={styles.legalEyebrow}>💬 Get in touch</div>
        <h1 className={styles.legalTitle}>Contact Us</h1>
        <div className={styles.legalUpdated}>We usually reply within 24 hours on weekdays</div>
      </div>

      <div className={styles.legalContent}>
        <h2>Ways to reach us</h2>
        <p>
          Whatever you need — support, bundle questions, partnership ideas, or just to say hi —
          pick the easiest way to reach us.
        </p>

        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <strong>General queries</strong>
            <p><a href="mailto:hello@chotikiduniya.com">hello@chotikiduniya.com</a></p>
          </div>
          <div className={styles.contactCard}>
            <strong>Support &amp; refunds</strong>
            <p><a href="mailto:support@chotikiduniya.com">support@chotikiduniya.com</a></p>
          </div>
          <div className={styles.contactCard}>
            <strong>Partnerships</strong>
            <p><a href="mailto:partners@chotikiduniya.com">partners@chotikiduniya.com</a></p>
          </div>
          <div className={styles.contactCard}>
            <strong>Press &amp; media</strong>
            <p><a href="mailto:press@chotikiduniya.com">press@chotikiduniya.com</a></p>
          </div>
        </div>

        <h2>Send us a message</h2>
        <p>Prefer a form? Fill this out and we&apos;ll get back to you by email.</p>

        {submitted ? (
          <div className={styles.successMsg}>
            ✅ Got it! We&apos;ll reply to your email within 24 hours on weekdays.
          </div>
        ) : (
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Priya Sharma"
              required
            />

            <label htmlFor="email">Your email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              required
            />

            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="What's this about?"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what you're thinking..."
              required
            />

            {errorMsg && (
              <div style={{
                background: '#FFE5EC',
                border: '2px solid #FF4E6A',
                borderRadius: '10px',
                padding: '10px 14px',
                fontSize: '13px',
                color: '#FF4E6A',
                fontWeight: 600,
                marginTop: '12px',
              }}>
                ⚠️ {errorMsg}
              </div>
            )}

            <button type="submit" className={styles.contactSubmit} disabled={loading}>
              {loading ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        )}

        <div className={styles.callout}>
          <strong>Note:</strong> The form above is connected to our email system — but if you prefer,
          just email us directly. Replies come from a real human, never a bot.
        </div>

        <h2>Business information</h2>
        <p>
          <strong>Choti Ki Duniya</strong><br />
          Educational content platform for children aged 2–8<br />
          Operating from India<br />
          Website: <a href="https://chotikiduniya.com">chotikiduniya.com</a>
        </p>

        <h2>Follow us</h2>
        <p>
          We publish new activities regularly on YouTube and share behind-the-scenes on Instagram.
        </p>
        <ul>
          <li><strong>YouTube:</strong> <a href="#">@ChotiKiDuniya</a> (8L+ subscribers)</li>
          <li><strong>Instagram:</strong> <a href="#">@chotikiduniya</a></li>
          <li><strong>Facebook:</strong> <a href="#">/chotikiduniya</a></li>
        </ul>
      </div>

      <div className={styles.legalFooter}>
        <p>
          For policy questions, check our <a href="/privacy">Privacy Policy</a>,{' '}
          <a href="/terms">Terms</a>, or <a href="/refund">Refund Policy</a>.
        </p>
      </div>
    </div>
  );
}
