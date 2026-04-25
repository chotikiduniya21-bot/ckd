import Mascot from '@/components/Mascot';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-sticker">🌸 Meet the team</div>
        <h1>
          Hi, we&apos;re <span className="rainbow-word">Choti Ki Duniya</span>
        </h1>
        <p>
          One real teacher, one cheerful mascot, one mission — to make early learning joyful
          for every Indian child, no matter where they live.
        </p>
      </section>

      <section className={styles.meetSection}>
        <div className={styles.meetGrid}>
          <div className={styles.meetMascot}>
            <div className={styles.mascotBg}></div>
            <Mascot size={320} animated />
          </div>
          <div className={styles.meetText}>
            <div className="sticker" style={{ background: 'var(--yellow)' }}>🌸 The mascot</div>
            <h2>Little Choti (that&apos;s me in the sticker!)</h2>
            <p>
              I&apos;m the cheerful face you&apos;ll see on our activity sheets, books, and toys.
              I&apos;m not real-life Choti — she&apos;s the wonderful teacher behind the channel.
              I&apos;m here to make the learning feel like play, and to sit on the cover of every
              worksheet like a tiny cheering squad. 🎈
            </p>
            <p>
              Look for me on every PDF, every bundle, and one day — every toy box. I love
              books, bindis, and making kids smile.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.chotiSection}>
        <div className={styles.chotiGrid}>
          <div className={styles.chotiText}>
            <div className="sticker" style={{ background: 'var(--pink)' }}>👩‍🏫 The teacher</div>
            <h2>Choti — the real teacher behind it all</h2>
            <p>
              Choti is a Montessori-trained educator with 8+ years of classroom experience.
              She started the YouTube channel because she saw a gap: most Indian kids&apos;
              content was imported cartoons with no real teacher, no real connection, and no
              real learning sequence.
            </p>
            <p>
              What you see on the channel — and soon in every activity sheet — comes from
              actually teaching hundreds of real children. Not theory. Practice.
            </p>
            <div className={styles.credentials}>
              <div className={styles.credential}>
                <div className={styles.credNum}>8+</div>
                <div className={styles.credLabel}>Years teaching Montessori</div>
              </div>
              <div className={styles.credential}>
                <div className={styles.credNum}>200+</div>
                <div className={styles.credLabel}>Students taught in-person</div>
              </div>
              <div className={styles.credential}>
                <div className={styles.credNum}>8L+</div>
                <div className={styles.credLabel}>YouTube family</div>
              </div>
            </div>
          </div>
          <div className={styles.chotiPhoto}>
            <div className={styles.photoFrame}>
              <div className={styles.photoInner}>
                <div className={styles.photoPlaceholder}>
                  <div>📷</div>
                  <div className={styles.photoNote}>Choti&apos;s photo goes here</div>
                </div>
              </div>
              <div className={styles.photoTag}>Real teacher. Real classroom. Real results.</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className={styles.missionBox}>
          <h2>Our mission, in one line 💛</h2>
          <p className={styles.missionLine}>
            To make early learning <em>joyful, affordable, and Indian</em> — so every child,
            from Aligarh to Assam, grows up with the same quality of learning as kids in Mumbai
            and Bangalore.
          </p>
        </div>
      </section>
    </>
  );
}
