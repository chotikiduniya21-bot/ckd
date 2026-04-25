'use client';

import Link from 'next/link';
import { useUser } from '@/lib/auth';
import { useDownload } from '@/lib/useDownload';
import DownloadToast from '@/components/DownloadToast';
import { bundles } from '../../activity-sheets/sheetsData';
import styles from './library.module.css';

const colorMap: Record<string, string> = {
  red: 'linear-gradient(135deg, #FF4E6A, #FF8A3D)',
  blue: 'linear-gradient(135deg, #4A9EFF, #9B5DE5)',
  green: 'linear-gradient(135deg, #4CD964, #2EC4B6)',
  yellow: 'linear-gradient(135deg, #FFD23F, #FF8A3D)',
  purple: 'linear-gradient(135deg, #9B5DE5, #FF7EB9)',
  pink: 'linear-gradient(135deg, #FF7EB9, #FF4E6A)',
};

export default function LibraryPage() {
  const { user } = useUser();
  const { download, state } = useDownload();
  if (!user) return null;

  // In this model, "purchases" refers to bundle purchases.
  // The demo user has 1 bundle for illustration.
  const ownedBundleIds = user.purchases.map((p) => p.sheet_id);
  const ownedBundles = bundles.filter((b) => ownedBundleIds.includes(b.id));
  const notOwnedBundles = bundles.filter((b) => !ownedBundleIds.includes(b.id));

  const isDownloading = state.status === 'loading';

  return (
    <div className={styles.library}>
      <DownloadToast status={state.status} message={state.message} />

      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.title}>📚 My Bundles</h1>
          <p className={styles.subtitle}>
            Your purchased bundles, with all sheets, guides, and extras. Re-download anytime —
            lifetime access.
          </p>
        </div>
        <div className={styles.headerStats}>
          <div className={styles.headerStat}>
            <strong>{ownedBundles.length}</strong>
            <span>bundles owned</span>
          </div>
          <div className={styles.headerStat}>
            <strong>{ownedBundles.reduce((s, b) => s + b.sheetCount, 0)}+</strong>
            <span>sheets unlocked</span>
          </div>
        </div>
      </div>

      {ownedBundles.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyEmoji}>📭</div>
          <h3>No bundles yet</h3>
          <p>
            Remember — <strong>all individual sheets are already free</strong>. Bundles will add
            structure, parent guides, daily schedules, and progress trackers. Coming soon!
          </p>
          <Link href="/activity-sheets#bundles" className={styles.emptyBtn}>
            Explore Bundles →
          </Link>
        </div>
      ) : (
        <div className={styles.ownedStack}>
          {ownedBundles.map((bundle) => (
            <div key={bundle.id} className={styles.bundleCard}>
              <div
                className={styles.bundleHeader}
                style={{ background: colorMap[bundle.color] }}
              >
                <div className={styles.bundleHeaderLeft}>
                  <div className={styles.ownedBadge}>✓ OWNED</div>
                  <div className={styles.bundleEmoji}>{bundle.emoji}</div>
                </div>
                <div className={styles.bundleHeaderRight}>
                  <h3 className={styles.bundleTitle}>{bundle.title}</h3>
                  <div className={styles.bundleMeta}>
                    <span>{bundle.ageLabel}</span>
                    <span>·</span>
                    <span>{bundle.sheetCount}+ sheets</span>
                  </div>
                </div>
              </div>

              <div className={styles.bundleBody}>
                {/* Quick actions row */}
                <div className={styles.actionsRow}>
                  <button
                    onClick={() => download(bundle.id, 'paid')}
                    disabled={isDownloading}
                    className={styles.primaryAction}
                  >
                    {isDownloading ? '⏳ Wait...' : '⬇ Download all sheets'}
                  </button>
                  <button className={styles.secondaryAction}>
                    📘 Parent Guide
                  </button>
                  <button className={styles.secondaryAction}>
                    🗺️ Sequence Map
                  </button>
                  <button className={styles.secondaryAction}>
                    ✅ Progress Tracker
                  </button>
                </div>

                {/* Certificate section */}
                <div className={styles.certCard}>
                  <div className={styles.certIcon}>📜</div>
                  <div className={styles.certContent}>
                    <strong>Completion Certificate</strong>
                    <p>Once your child finishes all {bundle.sheetCount}+ sheets, we&apos;ll generate a personalized certificate.</p>
                  </div>
                  <button className={styles.certBtn}>Preview</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Suggested bundles */}
      {notOwnedBundles.length > 0 && (
        <div className={styles.suggested}>
          <h2 className={styles.suggestedTitle}>More bundles you might love 💛</h2>
          <p className={styles.suggestedSub}>
            Already using free sheets for your child? Here&apos;s what a full bundle adds.
          </p>
          <div className={styles.suggestedGrid}>
            {notOwnedBundles.slice(0, 3).map((bundle) => (
              <div key={bundle.id} className={styles.suggestedCard}>
                <div
                  className={styles.suggestedThumb}
                  style={{ background: colorMap[bundle.color] }}
                >
                  <div className={styles.suggestedEmoji}>{bundle.emoji}</div>
                </div>
                <div className={styles.suggestedBody}>
                  <h4>{bundle.title}</h4>
                  <div className={styles.suggestedMeta}>{bundle.ageLabel} · {bundle.sheetCount}+ sheets</div>
                  <div className={styles.suggestedFooter}>
                    <span className={styles.price}>✨ Coming soon</span>
                    <Link href={`/bundle-preview/${bundle.id}`} className={styles.buyBtn}>Preview →</Link>
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
