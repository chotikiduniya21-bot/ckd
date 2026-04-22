'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@/lib/auth';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const { user, signOut } = useUser();
  const isSignedIn = !!user;

  const links = [
    { href: '/activity-sheets', label: 'Activity Sheets' },
    { href: '/blog', label: 'Parent Blog' },
    { href: '/seasonal-calendar', label: 'Seasonal Drops' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <div className={`${styles.logoCircle} wobble`}>🌸</div>
        <span>Chutki Ki Duniya</span>
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
  );
}
