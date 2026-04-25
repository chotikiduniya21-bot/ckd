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
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '/activity-sheets', label: 'Activity Sheets' },
    { href: '/videos', label: 'Videos' },
    { href: '/blog', label: 'Parent Blog' },
    { href: '/about', label: 'About' },
  ];

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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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

        <button
          onClick={() => setMenuOpen(true)}
          className={styles.hamburgerBtn}
          aria-label="Open menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}>
            <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
              <div className={styles.logoCircle}>🌸</div>
              <span>Choti Ki Duniya</span>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className={styles.closeBtn}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <div className={styles.mobileLinks}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileActive : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => {
                setMenuOpen(false);
                setSearchOpen(true);
              }}
              className={styles.mobileSearchBtn}
            >
              🔍 Search
            </button>
          </div>

          <div className={styles.mobileMenuFooter}>
            {isSignedIn && user ? (
              <>
                <Link
                  href="/dashboard"
                  className={styles.mobileUserCard}
                  onClick={() => setMenuOpen(false)}
                >
                  <div className={styles.mobileAvatar}>
                    {user.profile.first_name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <strong>Hi, {user.profile.first_name}!</strong>
                    <span>Go to dashboard RIGHT_↪</span>
                  </div>
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    setMenuOpen(false);
                  }}
                  className={styles.mobileSignOutBtn}
                >
                  Sign out
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className={styles.mobileLoginBtn}
                onClick={() => setMenuOpen(false)}
              >
                Login / Sign up ✨
              </Link>
            )}
          </div>
        </div>
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
