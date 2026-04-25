'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/lib/auth';
import styles from './settings.module.css';

export default function SettingsPage() {
  const router = useRouter();
  const { user, signOut } = useUser();
  const [saved, setSaved] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  if (!user) return null;
const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

const handleDelete = async () => {
    setDeleteError(null);
    setDeleting(true);

    try {
      const res = await fetch('/api/account/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();

      if (!data.success) {
        setDeleteError(data.error ?? 'Something went wrong. Try again.');
        setDeleting(false);
        return;
      }

    // Account is deleted — redirect FIRST (so dashboard layout doesn't bounce
      // to /login when it sees !user), then clear local session.
      router.push('/account-deleted');
      // Small delay so navigation starts before we sign out
      setTimeout(() => {
        signOut().catch(() => { /* ignore */ });
      }, 100);
    } catch (err) {
      console.error('Delete request failed:', err);
      setDeleteError('Network error. Please try again.');
      setDeleting(false);
    }
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
              <strong>New product launches</strong>
              <span>One email when we launch something new (books, toys, passes).</span>
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
          <button onClick={() => setShowDeleteModal(true)} className={styles.deleteBtn}>
            🗑️ Delete my account
          </button>
        </div>
        <p className={styles.dangerNote}>
          Deleting your account is permanent. All downloads, purchase history, and waitlist
          entries will be removed. Contact support@chutkikiduniya.com if you need help.
        </p>
      </div>

      {/* Delete confirmation modal */}
      {showDeleteModal && (
        <div className={styles.modalBackdrop} onClick={() => !deleting && setShowDeleteModal(false)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalEmoji}>⚠️</div>
            <h3 className={styles.modalTitle}>Delete your account?</h3>
            <p className={styles.modalBody}>
              This will permanently delete your profile, all bundle purchases, and download history.
              <strong> This cannot be undone.</strong>
            </p>
            <p className={styles.modalConfirmLabel}>
              Type <strong>{user.profile.email}</strong> to confirm:
            </p>
            <input
              type="text"
              value={deleteConfirmText}
              onChange={(e) => setDeleteConfirmText(e.target.value)}
              placeholder={user.profile.email}
              className={styles.modalInput}
              disabled={deleting}
            />
            {deleteError && (
              <div className={styles.modalError}>⚠️ {deleteError}</div>
            )}
            <div className={styles.modalActions}>
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeleteConfirmText('');
                  setDeleteError(null);
                }}
                className={styles.modalCancel}
                disabled={deleting}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className={styles.modalDelete}
                disabled={deleting || deleteConfirmText !== user.profile.email}
              >
                {deleting ? 'Deleting...' : 'Delete forever'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
