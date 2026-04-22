'use client';

import Link from 'next/link';
import { useUser } from '@/lib/auth';
import { useDownload } from '@/lib/useDownload';
import DownloadToast from '@/components/DownloadToast';
import { sheets } from '../../activity-sheets/sheetsData';
import styles from './library.module.css';

const colorMap: Record<string, string> = {
  red: 'linear-gradient(135deg, #FF4E6A, #FF8A3D)',
  blue: 'linear-gradient(135deg, #4A9EFF, #9B5DE5)',
  green: 'linear-gradient(135deg, #4CD964, #2EC4B6)',
  yellow: 'linear-gradient(135deg, #FFD23F, #FF8A3D)',
  purple: 'linear-gradient(135deg, #9B5DE5, #FF7EB9)',
  pink: 'linear-gradient(135deg, #FF7EB9, #FF4E6A)',
  teal: 'linear-gradient(135deg, #2EC4B6, #4A9EFF)',
  orange: 'linear-gradient(135deg, #FF8A3D, #FFD23F)',
};

export default function LibraryPage() {
  const { user } = useUser();
  const { download, state } = useDownload();
  if (!user) return null;

  const ownedSheets = sheets.filter((s) => user.purchases.includes(String(s.id)));
  const notOwnedSheets = sheets.filter((s) => !user.purchases.includes(String(s.id)));

  const isDownloading = state.status === 'loading';

  return (
    <div className={styles.library}>
      <DownloadToast status={state.status} message={state.message} />

      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.title}>📚 My Library</h1>
          <p className={styles.subtitle}>
            All the activity packs you&apos;ve purchased. Re-download anytime — lifetime access.
          </p>
        </div>
        <div className={styles.headerStats}>
          <div className={styles.headerStat}>
            <strong>{ownedSheets.length}</strong> packs owned
          </div>
          <div className={styles.headerStat}>
            <strong>{ownedSheets.reduce((s, sh) => s + sh.pages, 0)}</strong> pages
          </div>
        </div>
      </div>

      {ownedSheets.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyEmoji}>📭</div>
          <h3>No purchases yet</h3>
          <p>Your library is waiting for its first pack. Browse our sheets to get started.</p>
          <Link href="/activity-sheets" className={styles.emptyBtn}>
            Browse Activity Sheets →
          </Link>
        </div>
      ) : (
        <div className={styles.ownedGrid}>
          {ownedSheets.map((sheet) => (
            <div key={sheet.id} className={styles.libraryCard}>
              <div className={styles.ownedBadge}>✓ OWNED</div>
              <div className={styles.thumb} style={{ background: colorMap[sheet.color] }}>
                <div className={styles.emoji}>{sheet.emoji}</div>
                <div className={styles.pageBadge}>{sheet.pages} pages</div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.age}>Ages {sheet.ageRange}</div>
                <h3 className={styles.cardTitle}>{sheet.title}</h3>
                <p className={styles.cardDesc}>{sheet.description}</p>
                <div className={styles.cardActions}>
                  <button
                    onClick={() => download(String(sheet.id), 'paid')}
                    disabled={isDownloading}
                    className={styles.downloadBtn}
                  >
                    {isDownloading ? '⏳ Wait...' : '⬇ Download PDF'}
                  </button>
                  <button className={styles.shareBtn}>Share</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Suggested packs section */}
      {notOwnedSheets.length > 0 && (
        <div className={styles.suggested}>
          <h2 className={styles.suggestedTitle}>Packs you might love 💛</h2>
          <p className={styles.suggestedSub}>Handpicked for the age range you&apos;re learning with.</p>
          <div className={styles.suggestedGrid}>
            {notOwnedSheets.slice(0, 3).map((sheet) => (
              <div key={sheet.id} className={styles.suggestedCard}>
                <div className={styles.thumb} style={{ background: colorMap[sheet.color] }}>
                  <div className={styles.emoji}>{sheet.emoji}</div>
                </div>
                <div className={styles.cardBody}>
                  <h4>{sheet.title}</h4>
                  <div className={styles.suggestedFooter}>
                    <span className={styles.price}>₹{sheet.price}</span>
                    <button className={styles.buyBtn}>Buy →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
