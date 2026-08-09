'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDownload } from '@/lib/useDownload';
import DownloadToast from '@/components/DownloadToast';
import SignupPrompt from '@/components/SignupPrompt';
import type { FreeSheet } from './sheetsData';
import { sheetContent } from './sheetContent';
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

// In "All" view, show this many per category before "Show all" link
const PREVIEW_LIMIT = 6;

export default function FreeSheetsGrid({ sheets }: { sheets: FreeSheet[] }) {
  const { download, state, signupPrompt, closeSignupPrompt } = useDownload();
  const isDownloading = state.status === 'loading';

  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const sheet of sheets) {
      counts[sheet.category] = (counts[sheet.category] || 0) + 1;
    }
    const cats = Object.entries(counts).map(([name, count]) => ({ name, count }));
    return [{ name: 'All', count: sheets.length }, ...cats];
  }, [sheets]);

  const grouped = useMemo(() => {
    const result: Record<string, FreeSheet[]> = {};
    for (const sheet of sheets) {
      if (!result[sheet.category]) result[sheet.category] = [];
      result[sheet.category].push(sheet);
    }
    return result;
  }, [sheets]);

  const visibleCategories = activeCategory === 'All'
    ? Object.keys(grouped)
    : [activeCategory];

  const renderSheet = (sheet: FreeSheet) => (
    <div key={sheet.id} className={styles.freeCard}>
      <div className={styles.freeRibbon}>FREE</div>
      {sheetContent[sheet.id] ? (
        <Link
          href={`/activity-sheets/${sheetContent[sheet.id].slug}`}
          className={styles.freeThumb}
          style={{ background: colorMap[sheet.color] }}
          aria-label={`${sheet.title}, see details`}
        >
          <Image
            src={`/sheet-thumbs/${sheet.id}.png`}
            alt={`${sheet.title}, free printable activity sheet for kids ages ${sheet.ageRange}`}
            fill
            sizes="(max-width: 700px) 90vw, 300px"
            className={styles.freeThumbImg}
          />
          <div className={styles.freePageBadge}>{sheet.pages} pages</div>
          <div className={styles.freeThumbHint}>See details →</div>
        </Link>
      ) : (
        <div
          className={styles.freeThumb}
          style={{ background: colorMap[sheet.color] }}
        >
          <Image
            src={`/sheet-thumbs/${sheet.id}.png`}
            alt={`${sheet.title}, free printable activity sheet for kids ages ${sheet.ageRange}`}
            fill
            sizes="(max-width: 700px) 90vw, 300px"
            className={styles.freeThumbImg}
          />
          <div className={styles.freePageBadge}>{sheet.pages} pages</div>
        </div>
      )}
      <div className={styles.freeBody}>
        <div className={styles.freeAge}>Ages {sheet.ageRange}</div>
        <h3 className={styles.freeCardTitle}>
          {sheetContent[sheet.id] ? (
            <Link
              href={`/activity-sheets/${sheetContent[sheet.id].slug}`}
              className={styles.freeCardTitleLink}
            >
              {sheet.title}
            </Link>
          ) : (
            sheet.title
          )}
        </h3>
        <p className={styles.freeDesc}>{sheet.description}</p>
        <div className={styles.freeFooter}>
          {sheetContent[sheet.id] ? (
            <Link
              href={`/activity-sheets/${sheetContent[sheet.id].slug}`}
              className={styles.freeDetailsLink}
            >
              See details →
            </Link>
          ) : (
            <span className={styles.freeDownloads}>⬇ {sheet.downloads}</span>
          )}
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
  );

  const isAllView = activeCategory === 'All';

  return (
    <>
      <DownloadToast status={state.status} message={state.message} />
      <SignupPrompt
        open={signupPrompt.open}
        downloadCount={signupPrompt.downloadCount}
        onClose={closeSignupPrompt}
      />

      {/* Category filter pills */}
      <div className={styles.categoryPills}>
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`${styles.pill} ${activeCategory === cat.name ? styles.pillActive : ''}`}
          >
            {cat.name} <span className={styles.pillCount}>{cat.count}</span>
          </button>
        ))}
      </div>

      {visibleCategories.map((catName) => {
        const sheetsInCat = grouped[catName] ?? [];
        // In "All" view, show preview only. In specific category, show all.
        const sheetsToShow = isAllView ? sheetsInCat.slice(0, PREVIEW_LIMIT) : sheetsInCat;
        const hasMore = isAllView && sheetsInCat.length > PREVIEW_LIMIT;

        return (
          <div key={catName} className={styles.categorySection}>
            {isAllView && (
              <div className={styles.categoryHeaderRow}>
                <h3 className={styles.categoryHeader}>{catName}</h3>
                {hasMore && (
                  <button
                    onClick={() => setActiveCategory(catName)}
                    className={styles.viewAllLink}
                  >
                    See all {sheetsInCat.length} →
                  </button>
                )}
              </div>
            )}
            <div className={styles.freeGrid}>
              {sheetsToShow.map(renderSheet)}
            </div>
          </div>
        );
      })}
    </>
  );
}
