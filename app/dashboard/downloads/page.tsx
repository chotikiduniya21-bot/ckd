'use client';

import Link from 'next/link';
import { useUser } from '@/lib/auth';
import { useDownload } from '@/lib/useDownload';
import DownloadToast from '@/components/DownloadToast';
import { freeSheets } from '../../activity-sheets/sheetsData';
import styles from './downloads.module.css';

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

export default function DownloadsPage() {
  const { user } = useUser();
  const { download, state } = useDownload();
  if (!user) return null;

  const downloadedSheets = freeSheets.filter((s) => user.freeDownloads.includes(String(s.id)));
  const availableSheets = freeSheets.filter((s) => !user.freeDownloads.includes(String(s.id)));
  const isDownloading = state.status === 'loading';

  return (
    <div className={styles.downloads}>
      <DownloadToast status={state.status} message={state.message} />

      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>🎁 Free Downloads</h1>
          <p className={styles.subtitle}>
            Your free sheets — always yours. Re-download any time, share with friends, forever free.
          </p>
        </div>
        <div className={styles.progress}>
          <div className={styles.progressLabel}>Collection progress</div>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${(downloadedSheets.length / freeSheets.length) * 100}%` }}
            ></div>
          </div>
          <div className={styles.progressText}>
            {downloadedSheets.length} of {freeSheets.length} collected
          </div>
        </div>
      </div>

      {downloadedSheets.length > 0 && (
        <section>
          <h2 className={styles.sectionTitle}>✓ Already collected</h2>
          <div className={styles.grid}>
            {downloadedSheets.map((sheet) => (
              <div key={sheet.id} className={styles.card}>
                <div className={styles.thumb} style={{ background: colorMap[sheet.color] }}>
                  <div className={styles.emoji}>{sheet.emoji}</div>
                </div>
                <div className={styles.cardBody}>
                  <h4>{sheet.title}</h4>
                  <div className={styles.cardMeta}>{sheet.pages} pages · Ages {sheet.ageRange}</div>
                  <button
                    onClick={() => download(String(sheet.id), 'free')}
                    disabled={isDownloading}
                    className={styles.redownloadBtn}
                  >
                    {isDownloading ? '⏳ Wait...' : '⬇ Re-download'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {availableSheets.length > 0 && (
        <section>
          <h2 className={styles.sectionTitle}>🎁 Still available (free!)</h2>
          <div className={styles.grid}>
            {availableSheets.map((sheet) => (
              <div key={sheet.id} className={`${styles.card} ${styles.available}`}>
                <div className={styles.thumb} style={{ background: colorMap[sheet.color] }}>
                  <div className={styles.emoji}>{sheet.emoji}</div>
                </div>
                <div className={styles.cardBody}>
                  <h4>{sheet.title}</h4>
                  <div className={styles.cardMeta}>{sheet.pages} pages · Ages {sheet.ageRange}</div>
                  <button
                    onClick={() => download(String(sheet.id), 'free')}
                    disabled={isDownloading}
                    className={styles.downloadBtn}
                  >
                    {isDownloading ? '⏳ Wait...' : '⬇ Download'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
