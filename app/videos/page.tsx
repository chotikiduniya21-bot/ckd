import Link from 'next/link';
import { chotiVideos } from './videosData';
import styles from './videos.module.css';

export const metadata = {
  title: 'Watch on YouTube | Choti Ki Duniya',
  description: 'Hand-picked videos from Choti — Hindi rhymes, alphabets, counting, and stories for ages 2-8.',
};

const CHANNEL_URL = 'https://www.youtube.com/@ChutkiKiDuniya_21';

export default function VideosPage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>📺 On YouTube</div>
          <h1 className={styles.heroTitle}>
            Watch <span className={styles.titleAccent}>Choti</span> in action
          </h1>
          <p className={styles.heroSubtitle}>
            8+ years of Montessori experience, 800,000+ subscribers, 1 billion+ views.
            Real teaching by a real educator — no cartoon characters, just heart. 💛
          </p>
         <div className={styles.heroCtaRow}>
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.subscribeBtn}
            >
              ▶ Subscribe on YouTube
            </a>
            <span className={styles.heroStat}>800K+ subscribers · 1B+ views</span>
          </div>
        </div>
      </section>

      {/* VIDEO GRID */}
      <section className={styles.gridSection}>
        <div className={styles.gridHead}>
          <h2 className={styles.gridTitle}>Featured videos 🎬</h2>
          <p className={styles.gridSub}>
            Click any video to watch it on YouTube.
          </p>
        </div>

        {chotiVideos.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyEmoji}>🎬</div>
            <h3>Videos coming soon</h3>
            <p>
              In the meantime, head over to our{' '}
              <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className={styles.emptyLink}>
                YouTube channel
              </a>{' '}
              for hundreds of free educational videos.
            </p>
          </div>
        ) : (
          <div className={styles.videoGrid}>
            {chotiVideos.map((video) => (
                <a
                key={video.id}
                href={video.isShort ? `https://www.youtube.com/shorts/${video.id}` : `https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.videoCard}
              >
                <div className={styles.thumbWrap}>
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className={styles.thumb}
                    loading="lazy"
                  />
                  <div className={styles.playOverlay}>
                    <div className={styles.playBtn}>▶</div>
                  </div>
                  {video.duration && (
                    <span className={styles.duration}>{video.duration}</span>
                  )}
                </div>
                <div className={styles.cardBody}>
                  {video.category && (
                    <span className={styles.cardTag}>{video.category}</span>
                  )}
                  <h3 className={styles.cardTitle}>{video.title}</h3>
                  {video.ageRange && (
                    <span className={styles.cardAge}>Ages {video.ageRange}</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* CTA STRIP */}
      <section className={styles.ctaStrip}>
        <div className={styles.ctaInner}>
          <h2>Want more? There are 100s more on YouTube 💛</h2>
          <p>Free, ad-light, family-friendly. New videos every week.</p>
            <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.subscribeBtnLg}
          >
            Visit Choti&apos;s YouTube Channel →
          </a>
        </div>
      </section>
    </>
  );
}