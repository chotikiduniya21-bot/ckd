import { freeSheets, bundles, universalExtras } from './sheetsData';
import FreeSheetsGrid from './FreeSheetsGrid';
import BundleFilter from './BundleFilter';
import styles from './sheets.module.css';

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
          Choti makes is 100% free to download. We make money through bundles that
          add structure, guides, and support — not by locking up content.
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
                  <span className="rainbow-word">{freeSheets.length}</span> free sheets · growing weekly
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
              <div className={styles.freeStatNum}>83,900+</div>
              <div className={styles.freeStatLabel}>Free downloads this month</div>
            </div>
            <div className={styles.freeStatCard}>
              <div className={styles.freeStatNum}>200+</div>
              <div className={styles.freeStatLabel}>Indian cities using them</div>
            </div>
          </div>
        </div>

        <FreeSheetsGrid sheets={freeSheets} />

        <div className={styles.freeNudge}>
          <span>🌱</span>
          <p>
            <strong>Want a structured plan instead of 50 separate downloads?</strong> Our bundles
            solve specific goals — writing, numbers, Hindi, summer boredom. Each one comes with a
            parent guide, daily schedule, and WhatsApp support from Choti.
          </p>
        </div>
      </section>

      {/* ============ WHY BUNDLES EXIST ============ */}
      <section className={styles.bundleValue}>
        <div className="section-head">
          <div className="section-eyebrow">~ Why pay for bundles? ~</div>
          <h2>Free sheets are the tool. Bundles are the plan. 🗺️</h2>
          <p>Here&apos;s exactly what bundles add that free individual sheets don&apos;t.</p>
        </div>

        <div className={styles.compareBox}>
          <div className={styles.compareCol}>
            <div className={styles.compareHead} style={{ background: '#E8F9E8' }}>
              <div className={styles.compareTag}>FREE SHEETS</div>
              <h3>Just the PDFs</h3>
              <div className={styles.compareSubhead}>Perfect for casual use</div>
            </div>
            <ul className={styles.compareList}>
              <li>✅ Individual activity sheets</li>
              <li>✅ Download as many as you want</li>
              <li>✅ Print, share, reuse forever</li>
              <li className={styles.compareDim}>✖ No teaching guidance</li>
              <li className={styles.compareDim}>✖ No daily plan</li>
              <li className={styles.compareDim}>✖ No progress tracking</li>
              <li className={styles.compareDim}>✖ No support from Choti</li>
              <li className={styles.compareDim}>✖ No completion certificate</li>
            </ul>
          </div>

          <div className={styles.compareVs}>VS</div>

          <div className={styles.compareCol}>
            <div className={styles.compareHead} style={{ background: '#FFF4D6' }}>
              <div className={styles.compareTag} style={{ background: 'var(--red)', color: 'white' }}>BUNDLES</div>
              <h3>A goal-based journey</h3>
              <div className={styles.compareSubhead}>For a specific outcome</div>
            </div>
            <ul className={styles.compareList}>
              <li>✅ All the sheets (sequenced)</li>
              <li>✅ <strong>Parent Guide</strong> — how to teach each one</li>
              <li>✅ <strong>Daily Schedule</strong> — know exactly what to do</li>
              <li>✅ <strong>Progress Tracker</strong> — printable checklist</li>
              <li>✅ <strong>Completion Certificate</strong> — for your child</li>
              <li>✅ <strong>Lifetime updates</strong> — free forever</li>
            </ul>
          </div>
        </div>

        <div className={styles.extrasShowcase}>
          <h3 className={styles.extrasTitle}>What&apos;s inside every bundle</h3>
          <div className={styles.extrasGrid}>
            {universalExtras.map((extra) => (
              <div key={extra.title} className={styles.extraCard}>
                <div className={styles.extraIcon}>{extra.icon}</div>
                <h4>{extra.title}</h4>
                <p>{extra.description}</p>
              </div>
            ))}
          </div>
        </div>
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

      {/* SOCIAL PROOF */}
      <section className={styles.socialProof}>
        <div className={styles.proofHead}>
          <h2>Parents in 200+ Indian cities trust us 💛</h2>
        </div>
        <div className={styles.proofGrid}>
          <div className={styles.testimonial}>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
            <p>&quot;Free sheets got me hooked. Then I bought the Preschool Ready bundle — the interview guide was worth the price alone. My daughter got into her first choice.&quot;</p>
            <div className={styles.testimonialAuthor}>— Priya, Lucknow</div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
            <p>&quot;Writing Starter pack ne 30 din me bahut fark dal diya. Beta ab confidently likhta hai. WhatsApp group se Choti didi se tips bhi milte rehte hain.&quot;</p>
            <div className={styles.testimonialAuthor}>— Rohan, Pune</div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
            <p>&quot;I love that individual sheets stay free — feels honest. The bundle is genuinely structured, not just a zip file.&quot;</p>
            <div className={styles.testimonialAuthor}>— Meera, Delhi</div>
          </div>
        </div>
      </section>
    </>
  );
}
