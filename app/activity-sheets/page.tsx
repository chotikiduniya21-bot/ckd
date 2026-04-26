import { freeSheets, bundles } from './sheetsData';
import FreeSheetsGrid from './FreeSheetsGrid';
import BundleFilter from './BundleFilter';
import styles from './sheets.module.css';


export const metadata = {
  title: 'Free Activity Sheets for Kids 2-8 — Letters, Numbers, Hindi & More',
  description:
    'All activity sheets are 100% free, forever. Choti makes printable worksheets for letters, numbers, Hindi rhymes, life skills, and coloring. No email wall, no catch — just download and print.',
  alternates: { canonical: '/activity-sheets' },
};

export default function ActivitySheetsPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-sticker">🎁 Every sheet is free · Always</div>
        <h1>
          All sheets are <span className="rainbow-word">free</span>.
          <br />Forever.
        </h1>
        <p>
          No trial. No email wall. No catch. Every individual activity sheet
          Choti makes is 100% free to download.
        </p>
      </section>

      {/* ============ FREE SHEETS LIBRARY ============ */}
      <section className={styles.freeSection}>
        <div className={styles.freeHeader}>
          <div className={styles.freeHeaderLeft}>
            <div className={styles.freeBanner}>
              <span className={styles.freeGift}>🌈</span>
              <div>
                <div className={styles.freeEyebrow}>The Free Library</div>
                <h2 className={styles.freeTitle}>
                  <span className="rainbow-word">Free sheets</span> · growing weekly
                </h2>
              </div>
            </div>
            <p className={styles.freeSubtitle}>
              Start with these. We add <strong>10–15 new free sheets every week</strong> — letters,
              numbers, Hindi, life skills, colouring. Click, download, print, share with friends.
              Yours forever.
            </p>
          </div>
          <div className={styles.freeStats}>
            <div className={styles.freeStatCard}>
              <div className={styles.freeStatNum}>8L+</div>
              <div className={styles.freeStatLabel}>YouTube subscribers</div>
            </div>
            <div className={styles.freeStatCard}>
              <div className={styles.freeStatNum}>1B+</div>
              <div className={styles.freeStatLabel}>Views on Choti's videos</div>
            </div>
          </div>
        </div>

        <FreeSheetsGrid sheets={freeSheets} />


      </section>


      {/* ============ BUNDLES with age filter ============ */}
      <section className={styles.bundlesSection} id="bundles">
        <div className="section-head">
          <div className="section-eyebrow">~ Choose your goal ~</div>
          <h2>Which pain are you solving? 🎯</h2>
          <p>Each bundle is built around a specific outcome — not an age group.</p>
        </div>

        <BundleFilter bundles={bundles} />
      </section>

    </>
  );
}
