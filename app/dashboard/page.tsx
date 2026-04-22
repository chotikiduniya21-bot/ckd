'use client';

import Link from 'next/link';
import { useUser } from '@/lib/auth';
import { freeSheets, bundles } from '../activity-sheets/sheetsData';
import styles from './overview.module.css';

export default function DashboardOverview() {
  const { user } = useUser();
  if (!user) return null;

  const ownedBundleIds = user.purchases.map((p) => p.sheet_id);
  const downloadedSheetIds = user.freeDownloads.map((d) => d.sheet_id);

  const ownedBundles = bundles.filter((b) => ownedBundleIds.includes(b.id));
  const downloadedFreeSheets = freeSheets.filter((s) => downloadedSheetIds.includes(String(s.id)));

  const totalSheetsUnlocked =
    ownedBundles.reduce((sum, b) => sum + b.sheetCount, 0) +
    downloadedFreeSheets.length;

  // Suggest the first bundle the user doesn't own
  const suggestedBundle = bundles.find((b) => !ownedBundleIds.includes(b.id)) ?? bundles[1];

  return (
    <div className={styles.overview}>
      {/* Welcome header */}
      <div className={styles.welcomeCard}>
        <div className={styles.welcomeContent}>
          <div className={styles.welcomeSticker}>🌸 Good to see you!</div>
          <h1 className={styles.welcomeTitle}>
            Hi {user.profile.first_name}, ready to learn today? 🎉
          </h1>
          <p className={styles.welcomeSub}>
            Here&apos;s everything happening in your Chutki Ki Duniya account.
          </p>
        </div>
        <div className={styles.welcomeEmoji}>🎈</div>
      </div>

      {/* Stats row */}
      <div className={styles.statsRow}>
        <div className={styles.statCard} style={{ background: '#E8F9E8' }}>
          <div className={styles.statEmoji}>🎁</div>
          <div className={styles.statNum}>{downloadedFreeSheets.length}</div>
          <div className={styles.statLabel}>Free sheets collected</div>
        </div>
        <div className={styles.statCard} style={{ background: '#FFE5EC' }}>
          <div className={styles.statEmoji}>📦</div>
          <div className={styles.statNum}>{ownedBundles.length}</div>
          <div className={styles.statLabel}>Bundles owned</div>
        </div>
        <div className={styles.statCard} style={{ background: '#FFF4CC' }}>
          <div className={styles.statEmoji}>📄</div>
          <div className={styles.statNum}>{totalSheetsUnlocked}+</div>
          <div className={styles.statLabel}>Sheets unlocked</div>
        </div>
        <div className={styles.statCard} style={{ background: '#E5F4FF' }}>
          <div className={styles.statEmoji}>⏳</div>
          <div className={styles.statNum}>Soon</div>
          <div className={styles.statLabel}>Magic Pass launching</div>
        </div>
      </div>

      {/* Quick actions */}
      <div className={styles.quickActions}>
        <h2 className={styles.sectionTitle}>Quick actions ⚡</h2>
        <div className={styles.actionGrid}>
          <Link href="/dashboard/library" className={styles.actionCard}>
            <div className={styles.actionEmoji}>📦</div>
            <div className={styles.actionText}>
              <strong>My bundles</strong>
              <span>Download sheets &amp; guides</span>
            </div>
            <div className={styles.actionArrow}>→</div>
          </Link>
          <Link href="/dashboard/downloads" className={styles.actionCard}>
            <div className={styles.actionEmoji}>🎁</div>
            <div className={styles.actionText}>
              <strong>Free downloads</strong>
              <span>All your free sheets, organized</span>
            </div>
            <div className={styles.actionArrow}>→</div>
          </Link>
          <Link href="/activity-sheets" className={styles.actionCard}>
            <div className={styles.actionEmoji}>✨</div>
            <div className={styles.actionText}>
              <strong>Browse new sheets</strong>
              <span>15 new added every week</span>
            </div>
            <div className={styles.actionArrow}>→</div>
          </Link>
        </div>
      </div>

      {/* Recent activity */}
      <div className={styles.recentActivity}>
        <h2 className={styles.sectionTitle}>Your recent activity 📝</h2>
        <div className={styles.activityList}>
          {ownedBundles.slice(0, 2).map((bundle) => (
            <div key={bundle.id} className={styles.activityItem}>
              <div className={styles.activityIcon} style={{ background: '#FFE5EC' }}>🛒</div>
              <div className={styles.activityContent}>
                <div className={styles.activityTitle}>
                  Purchased <strong>{bundle.title} Bundle</strong>
                </div>
                <div className={styles.activityMeta}>₹{bundle.price} · {bundle.sheetCount}+ sheets · 3 days ago</div>
              </div>
              <Link href="/dashboard/library" className={styles.activityBtn}>Open</Link>
            </div>
          ))}
          {downloadedFreeSheets.slice(0, 2).map((sheet) => (
            <div key={sheet.id} className={styles.activityItem}>
              <div className={styles.activityIcon} style={{ background: '#E8F9E8' }}>🎁</div>
              <div className={styles.activityContent}>
                <div className={styles.activityTitle}>
                  Downloaded free <strong>{sheet.title}</strong>
                </div>
                <div className={styles.activityMeta}>{sheet.pages} pages · 1 week ago</div>
              </div>
              <button className={styles.activityBtn}>Re-download</button>
            </div>
          ))}
        </div>
      </div>

      {/* Upsell banner — only show if user doesn't own the Mega bundle */}
      {!ownedBundleIds.includes('complete-learner') && (
        <div className={styles.upsellBanner}>
          <div className={styles.upsellLeft}>
            <div className={styles.upsellBadge}>💡 Based on your downloads</div>
            <h3 className={styles.upsellTitle}>
              The {suggestedBundle.title} Bundle fits your child perfectly 🎯
            </h3>
            <p className={styles.upsellText}>
              You&apos;ve downloaded {downloadedFreeSheets.length} free sheets.
              The {suggestedBundle.title} bundle organizes {suggestedBundle.sheetCount}+ sheets
              into a proper learning sequence, adds a parent guide, and unlocks WhatsApp support
              with Chutki. ₹{suggestedBundle.price} — one-time, lifetime access.
            </p>
            <Link href="/activity-sheets#bundles" className={styles.upsellBtn}>
              See All Bundles →
            </Link>
          </div>
          <div className={styles.upsellEmoji}>{suggestedBundle.emoji}</div>
        </div>
      )}
    </div>
  );
}
