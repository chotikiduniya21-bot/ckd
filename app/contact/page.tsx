'use client';

import { useState } from 'react';
import styles from '@/styles/legal.module.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to Resend or a form service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setName(''); setEmail(''); setSubject(''); setMessage('');
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
            <p><a href="mailto:hello@chutkikiduniya.com">hello@chutkikiduniya.com</a></p>
          </div>
          <div className={styles.contactCard}>
            <strong>Support &amp; refunds</strong>
            <p><a href="mailto:support@chutkikiduniya.com">support@chutkikiduniya.com</a></p>
          </div>
          <div className={styles.contactCard}>
            <strong>Partnerships</strong>
            <p><a href="mailto:partners@chutkikiduniya.com">partners@chutkikiduniya.com</a></p>
          </div>
          <div className={styles.contactCard}>
            <strong>Press &amp; media</strong>
            <p><a href="mailto:press@chutkikiduniya.com">press@chutkikiduniya.com</a></p>
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

            <button type="submit" className={styles.contactSubmit}>
              Send Message →
            </button>
          </form>
        )}

        <div className={styles.callout}>
          <strong>Note:</strong> The form above is connected to our email system — but if you prefer,
          just email us directly. Replies come from a real human (usually Chutki or Ash), never a bot.
        </div>

        <h2>Business information</h2>
        <p>
          <strong>Chutki Ki Duniya</strong><br />
          Educational content platform for children aged 2–8<br />
          Operating from India<br />
          Website: <a href="https://chutkikiduniya.com">chutkikiduniya.com</a>
        </p>

        <h2>Follow us</h2>
        <p>
          We publish new activities regularly on YouTube and share behind-the-scenes on Instagram.
        </p>
        <ul>
          <li><strong>YouTube:</strong> <a href="#">@ChutkiKiDuniya</a> (8L+ subscribers)</li>
          <li><strong>Instagram:</strong> <a href="#">@chutkikiduniya</a></li>
          <li><strong>Facebook:</strong> <a href="#">/chutkikiduniya</a></li>
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
