'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useUser } from '@/lib/auth';
import type { Bundle } from './sheetsData';
import styles from './sheets.module.css';

const colorMap: Record<string, string> = {
  red: 'linear-gradient(135deg, #FF4E6A, #FF8A3D)',
  blue: 'linear-gradient(135deg, #4A9EFF, #9B5DE5)',
  green: 'linear-gradient(135deg, #4CD964, #2EC4B6)',
  yellow: 'linear-gradient(135deg, #FFD23F, #FF8A3D)',
  purple: 'linear-gradient(135deg, #9B5DE5, #FF7EB9)',
  pink: 'linear-gradient(135deg, #FF7EB9, #FF4E6A)',
};

// Age filter pill definitions — each maps to a numeric range
interface AgeFilter {
  id: string;
  label: string;
  min: number;
  max: number;
}

const ageFilters: AgeFilter[] = [
  { id: 'all',  label: 'All ages', min: 0, max: 99 },
  { id: '2-4',  label: '2–4 yrs',  min: 2, max: 4 },
  { id: '3-5',  label: '3–5 yrs',  min: 3, max: 5 },
  { id: '4-6',  label: '4–6 yrs',  min: 4, max: 6 },
  { id: '5-7',  label: '5–7 yrs',  min: 5, max: 7 },
  { id: '6-8',  label: '6–8 yrs',  min: 6, max: 8 },
];

// Auto-detect best default from user's saved child_age_range
function getDefaultFilter(childAgeRange?: string): string {
  if (!childAgeRange) return 'all';
  // Try exact match first ("3-5" → filter id "3-5")
  const match = ageFilters.find((f) => f.id === childAgeRange);
  return match ? match.id : 'all';
}

interface BundleFilterProps {
  bundles: Bundle[];
}

export default function BundleFilter({ bundles }: BundleFilterProps) {
  const { user } = useUser();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // Auto-detect age from signed-in user on mount
  useEffect(() => {
    if (user?.profile.child_age_range) {
      setSelectedFilter(getDefaultFilter(user.profile.child_age_range));
    }
  }, [user]);

  // Filter bundles based on selected age range — any overlap counts
  const filteredBundles = useMemo(() => {
    const filter = ageFilters.find((f) => f.id === selectedFilter);
    if (!filter || filter.id === 'all') return bundles;
    return bundles.filter(
      (b) => b.ageMin <= filter.max && b.ageMax >= filter.min
    );
  }, [bundles, selectedFilter]);

  const isAutoDetected = !!user?.profile.child_age_range && selectedFilter !== 'all';

  return (
    <>
      {/* Filter pills */}
      <div className={styles.filterWrapper}>
        {isAutoDetected && (
          <div className={styles.autoDetectMsg}>
            💡 Filtered to match <strong>{user?.profile.first_name}&apos;s child</strong>. Click &quot;All&quot; to see every bundle.
          </div>
        )}
        <div className={styles.filterPills}>
          <span className={styles.filterLabel}>Filter by age:</span>
          {ageFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`${styles.filterPill} ${
                selectedFilter === filter.id ? styles.filterPillActive : ''
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filtered bundles grid */}
      {filteredBundles.length === 0 ? (
        <div className={styles.emptyFilter}>
          <div className={styles.emptyFilterEmoji}>🔍</div>
          <h3>No bundles match this age range yet</h3>
          <p>We&apos;re adding more bundles every month. In the meantime, all individual sheets below are always free for you to use.</p>
          <button onClick={() => setSelectedFilter('all')} className={styles.showAllBtn}>
            Show all bundles →
          </button>
        </div>
      ) : (
        <div className={styles.bundlesGrid}>
          {filteredBundles.map((bundle) => (
            <BundleCard key={bundle.id} bundle={bundle} />
          ))}
        </div>
      )}
    </>
  );
}

function BundleCard({ bundle }: { bundle: Bundle }) {
  return (
    <div className={`${styles.bundleCard} ${bundle.featured ? styles.bundleFeatured : ''}`}>
      {bundle.featured && <div className={styles.bundleBadge}>⭐ MOST LOVED</div>}

      <div
        className={styles.bundleTop}
        style={{ background: colorMap[bundle.color] }}
      >
        <div className={styles.bundleEmoji}>{bundle.emoji}</div>
        <h3 className={styles.bundleTitle}>{bundle.title}</h3>
        <div className={styles.bundleSubtitle}>{bundle.subtitle}</div>
        <div className={styles.bundleMeta}>
          <span>{bundle.ageLabel}</span>
          <span>·</span>
          <span>{bundle.duration}</span>
          <span>·</span>
          <span>{bundle.sheetCount} sheets</span>
        </div>
      </div>

      <div className={styles.bundleBody}>
        <div className={styles.bundleGoal}>&ldquo;{bundle.goal}&rdquo;</div>
        <p className={styles.bundleDesc}>{bundle.description}</p>

        <div className={styles.bundleSection}>
          <div className={styles.bundleSectionLabel}>📚 What&apos;s inside</div>
          <ul className={styles.bundleList}>
            {bundle.whatYouGet.map((t, j) => (
              <li key={j}>• {t}</li>
            ))}
          </ul>
        </div>

        <div className={styles.bundleSection}>
          <div className={styles.bundleSectionLabel}>🎁 Special extras</div>
          {bundle.bonusExtras.map((extra, j) => (
            <div key={j} className={styles.bundleBonus}>
              <span className={styles.bonusIcon}>{extra.icon}</span>
              <div>
                <strong>{extra.title}</strong>
                <p>{extra.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bundleSection}>
          <div className={styles.bundleSectionLabel}>✨ Plus the usual goodies</div>
          <div className={styles.universalBadges}>
            <span>📘 Parent Guide</span>
            <span>📅 Daily Schedule</span>
            <span>✅ Tracker</span>
            <span>📜 Certificate</span>
            <span>💬 WhatsApp</span>
          </div>
        </div>

        <div className={styles.bundlePriceBlock}>
          <div className={styles.bundleSave}>📦 {bundle.sheetCount} sheets · {bundle.duration}</div>
        </div>

<div className={styles.comingSoonBadge}>
          ✨ Coming Soon
        </div>
        <Link href={`/bundle-preview/${bundle.id}`} className={styles.bundlePreviewLink}>
          👀 See what&apos;s inside (preview)
        </Link>
      </div>
    </div>
  );
}
