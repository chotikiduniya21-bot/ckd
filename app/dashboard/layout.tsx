'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useUser } from '@/lib/auth';
import styles from './dashboard.module.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isLoading } = useUser();
  const isSignedIn = !!user;

  // Client-side route protection
  useEffect(() => {
    if (!isLoading && !isSignedIn) {
      router.push('/login');
    }
  }, [isLoading, isSignedIn, router]);

  if (isLoading) {
    return (
      <div className={styles.loadingState}>
        <div className={styles.spinner}>🌸</div>
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  if (!isSignedIn || !user) {
    return (
      <div className={styles.loadingState}>
        <p>Redirecting to login...</p>
      </div>
    );
  }

  const navItems = [
    { href: '/dashboard',              label: 'Overview',      icon: '🏠' },
    { href: '/dashboard/library',      label: 'My Library',    icon: '📚' },
    { href: '/dashboard/downloads',    label: 'Free Downloads', icon: '🎁' },
    { href: '/dashboard/settings',     label: 'Settings',      icon: '⚙️' },
  ];

  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarAvatar}>
            {user.profile.first_name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className={styles.sidebarName}>{user.profile.first_name}</div>
            <div className={styles.sidebarEmail}>{user.profile.email}</div>
          </div>
        </div>

        <nav className={styles.sidebarNav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navItem} ${pathname === item.href ? styles.navItemActive : ''}`}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <Link href="/" className={styles.backHome}>
            ← Back to homepage
          </Link>
        </div>
      </aside>

      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}
