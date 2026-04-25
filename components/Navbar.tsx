'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useUser } from '@/lib/auth';
import SearchModal from './SearchModal';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const { user, signOut } = useUser();
  const isSignedIn = !!user;
  const [searchOpen, setSearchOpen] = useState(false);

  const links = [
    { href: '/activity-sheets', label: 'Activity Sheets' },
    { href: '/videos', label: 'Videos' },
    { href: '/blog', label: 'Parent Blog' },
    { href: '/about', label: 'About' },
  ];

  // Cmd+K / Ctrl+K to open search
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <div className={`${styles.logoCircle} wobble`}>🌸</div>
          <span>Choti Ki Duniya</span>
        </Link>

        <div className={styles.navLinks}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={() => setSearchOpen(true)}
            className={styles.searchBtn}
            aria-label="Search"
            title="Search (Cmd+K)"
          >
            <span className={styles.searchIcon}>🔍</span>
            <span className={styles.searchLabel}>Search</span>
            <span className={styles.searchKbd}>⌘K</span>
          </button>

          {isSignedIn && user ? (
            <div className={styles.userMenu}>
              <Link href="/dashboard" className={styles.userPill}>
                <div className={styles.avatar}>
                  {user.profile.first_name.charAt(0).toUpperCase()}
                </div>
                <span className={styles.userName}>Hi, {user.profile.first_name}!</span>
              </Link>
              <button onClick={signOut} className={styles.signOutBtn} title="Sign out">
                ↪
              </button>
            </div>
          ) : (
            <Link href="/login" className={styles.navCta}>
              Login / Sign up ✨
            </Link>
          )}
        </div>
      </nav>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
