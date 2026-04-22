'use client';

import { useState } from 'react';
import { useUser } from '@/lib/auth';
import styles from './settings.module.css';

export default function SettingsPage() {
  const { user, signOut } = useUser();
  const [saved, setSaved] = useState(false);

  if (!user) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className={styles.settings}>
      <div className={styles.header}>
        <h1 className={styles.title}>⚙️ Settings</h1>
        <p className={styles.subtitle}>Manage your profile, preferences, and account.</p>
      </div>

      {/* Profile */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>👤 Profile</h2>
        <form className={styles.form} onSubmit={handleSave}>
          <div className={styles.field}>
            <label>First name</label>
            <input type="text" defaultValue={user.profile.first_name} />
          </div>
          <div className={styles.field}>
            <label>Last name</label>
            <input type="text" defaultValue={user.profile.last_name} placeholder="Add your last name" />
          </div>
          <div className={styles.field}>
            <label>Email</label>
            <input type="email" defaultValue={user.profile.email} />
          </div>
          <div className={styles.field}>
            <label>Child&apos;s age range</label>
            <select defaultValue={user.profile.child_age_range ?? '3-5'}>
              <option value="2-4">2–4 years</option>
              <option value="3-5">3–5 years</option>
              <option value="4-6">4–6 years</option>
              <option value="5-7">5–7 years</option>
            </select>
          </div>
          <div className={styles.formFooter}>
            {saved && <div className={styles.savedMsg}>✓ Saved!</div>}
            <button type="submit" className={styles.saveBtn}>Save Changes</button>
          </div>
        </form>
      </div>

      {/* Preferences */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>📬 Email preferences</h2>
        <div className={styles.preferences}>
          <label className={styles.toggleRow}>
            <div>
              <strong>Weekly new sheets</strong>
              <span>Get notified when new sheets drop (every Sunday).</span>
            </div>
            <input type="checkbox" defaultChecked className={styles.toggle} />
          </label>
          <label className={styles.toggleRow}>
            <div>
              <strong>Seasonal drops</strong>
              <span>Festive bundle launches (Diwali, summer, etc.) — ~1 email/month.</span>
            </div>
            <input type="checkbox" defaultChecked className={styles.toggle} />
          </label>
          <label className={styles.toggleRow}>
            <div>
              <strong>Parent blog updates</strong>
              <span>New blog posts with parenting tips.</span>
            </div>
            <input type="checkbox" defaultChecked className={styles.toggle} />
          </label>
          <label className={styles.toggleRow}>
            <div>
              <strong>Magic Pass launch alert</strong>
              <span>One email when the subscription launches.</span>
            </div>
            <input type="checkbox" defaultChecked className={styles.toggle} />
          </label>
        </div>
      </div>

      {/* Danger zone */}
      <div className={`${styles.section} ${styles.dangerZone}`}>
        <h2 className={styles.sectionTitle}>⚠️ Account actions</h2>
        <div className={styles.dangerActions}>
          <button onClick={signOut} className={styles.signOutBtn}>
            🚪 Sign out
          </button>
          <button className={styles.deleteBtn}>
            🗑️ Delete my account
          </button>
        </div>
        <p className={styles.dangerNote}>
          Deleting your account is permanent. All downloads, purchase history, and waitlist
          entries will be removed. Contact support@chutkikiduniya.com if you need help.
        </p>
      </div>
    </div>
  );
}
