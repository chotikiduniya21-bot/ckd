import Link from 'next/link';
import Mascot from '@/components/Mascot';
import { chotiVideos } from './videos/videosData';
import styles from './page.module.css';


export const metadata = {
  title: 'Choti Ki Duniya — Free Activity Sheets, Hindi Rhymes & Montessori Learning for Kids 2-8',
  description:
    'Where little minds bloom big & bright! Free Montessori-inspired activity sheets, Hindi rhymes, stories, and YouTube videos for Indian kids aged 2-8. By Choti, a real teacher with 8+ years of classroom experience and 8 lakh+ YouTube subscribers.',
  alternates: { canonical: '/' },
};

const CHANNEL_URL = 'https://www.youtube.com/@ChutkiKiDuniya_21';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <div className={styles.heroStickers}>
              <span className="sticker" style={{ background: 'var(--yellow)' }}>🎨 Ages 2–8</span>
              <span className="sticker" style={{ background: 'var(--pink)', transform: 'rotate(2deg)' }}>
                📺 8 Lakh+ Subscribers
              </span>
              <span className="sticker" style={{ background: 'var(--green)', transform: 'rotate(-1deg)' }}>
                ❤️ Made in India
              </span>
            </div>
            <h1 className={styles.heroTitle}>
              Where little minds <span className="rainbow-word">bloom</span>
              <br />big &amp; bright!
            </h1>
            <p className={styles.heroSubtitle}>
              Rhymes, stories, alphabets &amp; activities — the Montessori way.
              Join millions of families learning, playing, and giggling with us. 🌈
            </p>
            <div className={styles.heroCtas}>
              <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">▶ Watch on YouTube</a>
              <Link href="/activity-sheets" className="btn-secondary">✏️ Free Activity Sheets</Link>
            </div>
          </div>

          <div className={styles.mascotWrap}>
            <div className={styles.mascotBgCircle}></div>
            <span className={`${styles.floatingItem} ${styles.fi1}`}>⭐</span>
            <span className={`${styles.floatingItem} ${styles.fi2}`}>🎈</span>
            <span className={`${styles.floatingItem} ${styles.fi3}`}>📚</span>
            <span className={`${styles.floatingItem} ${styles.fi4}`}>🎨</span>
            <span className={`${styles.floatingItem} ${styles.fi5}`}>🌈</span>
            <div className={styles.mascotInner}>
              <Mascot size={380} animated />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.statsBanner}>
        <div className={styles.statsGrid}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>8 Lakh+</div>
            <div className={styles.statLabel}>YouTube family 💛</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>100 Cr+</div>
            <div className={styles.statLabel}>Happy views ✨</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>8+ yrs</div>
            <div className={styles.statLabel}>Montessori magic 🌱</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>Songs &amp; stories 🎵</div>
          </div>
        </div>
      </section>

      {/* YOUTUBE */}
      <section className={styles.ytSection}>
        <div className={styles.ytCard}>
          <div className={styles.ytLeft}>
            <div className={styles.ytLabel}>TRUSTED BY 8,00,000+ FAMILIES</div>
            <h2 className={styles.ytTitle}>Our YouTube channel is where it all begins ✨</h2>
            <p className={styles.ytText}>
              Real songs, real learning, with a real teacher — not a cartoon. Choti&apos;s 8+ years
              of Montessori experience shine through every rhyme, story, and activity.
            </p>
            <div className={styles.ytCtaRow}>
              <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                ▶ Subscribe on YouTube
              </a>
              <Link href="/videos" className={styles.ytSecondaryLink}>
                Watch featured videos →
              </Link>
            </div>
          </div>
          <div className={styles.ytThumbsGrid}>
            {chotiVideos.slice(0, 4).map((video) => (
              <a
                key={video.id}
                href={video.isShort ? `https://www.youtube.com/shorts/${video.id}` : `https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ytThumbCard}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className={styles.ytThumbImg}
                  loading="lazy"
                />
                <div className={styles.ytThumbOverlay}>
                  <div className={styles.ytThumbPlayBtn}>▶</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className={styles.pillars}>
        <div className="section-head">
          <div className="section-eyebrow">~ What we believe ~</div>
          <h2>Our four little promises 🤝</h2>
        </div>
        <div className={styles.pillarsGrid}>
          <div className={styles.pillar} style={{ background: '#FFE5EC' }}>
            <span className={styles.pillarEmoji}>🎲</span>
            <h4>Learn Through Play</h4>
            <p>Because joy is the best teacher a child can ever have.</p>
          </div>
          <div className={styles.pillar} style={{ background: '#E5F4FF' }}>
            <span className={styles.pillarEmoji}>🫶</span>
            <h4>Love &amp; Patience</h4>
            <p>Every &quot;why?&quot; deserves a warm, thoughtful answer.</p>
          </div>
          <div className={styles.pillar} style={{ background: '#FFF4CC' }}>
            <span className={styles.pillarEmoji}>🌱</span>
            <h4>Montessori Inspired</h4>
            <p>Hands-on, sensory-rich, and built around a child&apos;s curiosity.</p>
          </div>
          <div className={styles.pillar} style={{ background: '#E8F9E8' }}>
            <span className={styles.pillarEmoji}>🧒</span>
            <h4>Every Child is Unique</h4>
            <p>No two flowers bloom the same way — and that&apos;s beautiful.</p>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className={styles.roadmap}>
        <div className="section-head">
          <div className="section-eyebrow">~ The journey ~</div>
          <h2>What we&apos;re building next 🚀</h2>
          <p>We&apos;re growing step by step — just like our little learners.</p>
        </div>
        <div className={styles.phasesGrid}>
          <div className={`${styles.phaseCard} ${styles.live}`}>
            <div className={`${styles.phaseRibbon} ${styles.ribbonLive}`}>✨ LIVE NOW</div>
            <div className={styles.phaseNumber}>01</div>
            <span className={styles.phaseIcon}>🎁</span>
            <h3>Free Sheets &amp; Bundles</h3>
            <div className={styles.phaseSubhead}>Free forever. Structured when you need it.</div>
            <ul className={styles.phaseList}>
              <li>All individual sheets free — forever</li>
              <li>10–15 new free sheets every week</li>
              <li>Paid bundles add guides &amp; support</li>
              <li>Hindi + English · Ages 2–8</li>
            </ul>
            <Link href="/activity-sheets" className="btn-primary">Browse Sheets</Link>
          </div>
          <div className={`${styles.phaseCard} ${styles.upcoming}`}>
            <div className={`${styles.phaseRibbon} ${styles.ribbonUpcoming}`}>🎁 COMING SOON</div>
            <div className={styles.phaseNumber}>02</div>
            <span className={styles.phaseIcon}>📚🧸</span>
            <h3>Activity Books &amp; Toys</h3>
            <div className={styles.phaseSubhead}>Physical products, designed with love.</div>
            <ul className={styles.phaseList}>
              <li>Printed activity books (COD friendly)</li>
              <li>Montessori-inspired sensory toys</li>
              <li>Themed learning kits</li>
              <li>Pan-India shipping</li>
            </ul>
            <a href="#subscribe" className="btn-secondary">Notify Me</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.finalCta} id="subscribe">
        <div className={styles.ctaBox}>
          <h2 className={styles.ctaTitle}>
            Let&apos;s raise curious kids,<br />one giggle at a time 🌸
          </h2>
          <p className={styles.ctaText}>
            Join 8 lakh+ families. Free activity sheets, always.
          </p>
          <Link href="/login" className="btn-primary" style={{ background: 'white', color: 'var(--ink)' }}>
            ✨ Create Free Account
          </Link>
        </div>
      </section>
    </>
  );
}
