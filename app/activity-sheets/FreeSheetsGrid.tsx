'use client';

import { useDownload } from '@/lib/useDownload';
import DownloadToast from '@/components/DownloadToast';
import type { FreeSheet } from './sheetsData';
import styles from './sheets.module.css';

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

export default function FreeSheetsGrid({ sheets }: { sheets: FreeSheet[] }) {
  const { download, state } = useDownload();
  const isDownloading = state.status === 'loading';

  return (
    <>
      <DownloadToast status={state.status} message={state.message} />
      <div className={styles.freeGrid}>
        {sheets.map((sheet) => (
          <div key={sheet.id} className={styles.freeCard}>
            <div className={styles.freeRibbon}>FREE</div>
            <div
              className={styles.freeThumb}
              style={{ background: colorMap[sheet.color] }}
            >
              <div className={styles.freeEmoji}>{sheet.emoji}</div>
              <div className={styles.freePageBadge}>{sheet.pages} pages</div>
            </div>
            <div className={styles.freeBody}>
              <div className={styles.freeAge}>Ages {sheet.ageRange}</div>
              <h3 className={styles.freeCardTitle}>{sheet.title}</h3>
              <p className={styles.freeDesc}>{sheet.description}</p>
              <div className={styles.freeFooter}>
                <span className={styles.freeDownloads}>⬇ {sheet.downloads}</span>
                <button
                  onClick={() => download(String(sheet.id), 'free')}
                  disabled={isDownloading}
                  className={styles.downloadBtn}
                >
                  {isDownloading ? '⏳ Wait' : 'Download →'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
