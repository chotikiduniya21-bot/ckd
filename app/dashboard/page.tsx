'use client';

import Link from 'next/link';
import { useUser } from '@/lib/auth';
import { freeSheets, sheets } from '../activity-sheets/sheetsData';
import styles from './overview.module.css';

export default function DashboardOverview() {
  const { user } = useUser();
  if (!user) return null;

  const ownedSheets = sheets.filter((s) => user.purchases.includes(String(s.id)));
  const downloadedFreeSheets = freeSheets.filter((s) => user.freeDownloads.includes(String(s.id)));

  const totalPages = ownedSheets.reduce((sum, s) => sum + s.pages, 0)
    + downloadedFreeSheets.reduce((sum, s) => sum + s.pages, 0);

  return (
    <div className={styles.overview}>
      {/* Welcome header */}
      <div className={styles.welcomeCard}>
        <div className={styles.welcomeContent}>
          <div className={styles.welcomeSticker}>🌸 Good to see you!</div>
          <h1 className={styles.welcomeTitle}>
            Hi {user.firstName}, ready to learn today? 🎉
          </h1>
          <p className={styles.welcomeSub}>
            Here&apos;s everything happening in your Chutki Ki Duniya account.
          </p>
        </div>
        <div className={styles.welcomeEmoji}>🎈</div>
      </div>

      {/* Stats row */}
      <div className={styles.statsRow}>
        <div className={styles.statCard} style={{ background: '#FFE5EC' }}>
          <div className={styles.statEmoji}>📚</div>
          <div className={styles.statNum}>{ownedSheets.length}</div>
          <div className={styles.statLabel}>Paid packs owned</div>
        </div>
        <div className={styles.statCard} style={{ background: '#E8F9E8' }}>
          <div className={styles.statEmoji}>🎁</div>
          <div className={styles.statNum}>{downloadedFreeSheets.length}</div>
          <div className={styles.statLabel}>Free sheets collected</div>
        </div>
        <div className={styles.statCard} style={{ background: '#FFF4CC' }}>
          <div className={styles.statEmoji}>📄</div>
          <div className={styles.statNum}>{totalPages}</div>
          <div className={styles.statLabel}>Total pages unlocked</div>
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
            <div className={styles.actionEmoji}>📚</div>
            <div className={styles.actionText}>
              <strong>View my library</strong>
              <span>Re-download sheets you&apos;ve bought</span>
            </div>
            <div className={styles.actionArrow}>→</div>
          </Link>
          <Link href="/activity-sheets" className={styles.actionCard}>
            <div className={styles.actionEmoji}>✨</div>
            <div className={styles.actionText}>
              <strong>Browse new sheets</strong>
              <span>Find your next pack</span>
            </div>
            <div className={styles.actionArrow}>→</div>
          </Link>
          <Link href="/dashboard/subscription" className={styles.actionCard}>
            <div className={styles.actionEmoji}>🔁</div>
            <div className={styles.actionText}>
              <strong>Join Magic Pass waitlist</strong>
              <span>Lifetime ₹99/month price</span>
            </div>
            <div className={styles.actionArrow}>→</div>
          </Link>
        </div>
      </div>

      {/* Recent activity */}
      <div className={styles.recentActivity}>
        <h2 className={styles.sectionTitle}>Your recent activity 📝</h2>
        <div className={styles.activityList}>
          {ownedSheets.slice(0, 2).map((sheet) => (
            <div key={sheet.id} className={styles.activityItem}>
              <div className={styles.activityIcon} style={{ background: '#FFE5EC' }}>🛒</div>
              <div className={styles.activityContent}>
                <div className={styles.activityTitle}>
                  Purchased <strong>{sheet.title}</strong>
                </div>
                <div className={styles.activityMeta}>₹{sheet.price} · {sheet.pages} pages · 3 days ago</div>
              </div>
              <button className={styles.activityBtn}>Re-download</button>
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

      {/* Upsell banner */}
      <div className={styles.upsellBanner}>
        <div className={styles.upsellLeft}>
          <div className={styles.upsellBadge}>💡 Special for you</div>
          <h3 className={styles.upsellTitle}>Get the School-Ready Bundle at 40% off 🎓</h3>
          <p className={styles.upsellText}>
            You already own 2 packs. Upgrade to the full School-Ready Bundle for just
            ₹159 more (normally ₹199). Lock your child&apos;s pre-Nursery foundation.
          </p>
          <Link href="/activity-sheets#bundles" className={styles.upsellBtn}>
            View Offer →
          </Link>
        </div>
        <div className={styles.upsellEmoji}>🎓</div>
      </div>
    </div>
  );
}
