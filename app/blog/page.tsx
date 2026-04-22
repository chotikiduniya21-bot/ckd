import { blogPosts, categories } from './blogData';
import styles from './blog.module.css';

const colorMap: Record<string, string> = {
  red: 'linear-gradient(135deg, #FF4E6A, #FF8A3D)',
  blue: 'linear-gradient(135deg, #4A9EFF, #9B5DE5)',
  green: 'linear-gradient(135deg, #4CD964, #2EC4B6)',
  yellow: 'linear-gradient(135deg, #FFD23F, #FF8A3D)',
  purple: 'linear-gradient(135deg, #9B5DE5, #FF7EB9)',
  pink: 'linear-gradient(135deg, #FF7EB9, #FF4E6A)',
  teal: 'linear-gradient(135deg, #2EC4B6, #4A9EFF)',
  orange: 'linear-gradient(135deg, #FF8A3D, #FFD23F)',
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-sticker">📚 For Parents, By a Teacher</div>
        <h1>
          The <span className="rainbow-word">Parent Blog</span>
        </h1>
        <p>
          Real parenting advice from Chutki — a Montessori teacher with 8+ years of classroom experience.
          No fluff, no Pinterest-perfect nonsense. Just what actually works for Indian families.
        </p>
      </section>

      {/* STRATEGY NOTE — shown in preview so Ash sees the "why" */}
      <section className={styles.strategyBanner}>
        <div className={styles.strategyInner}>
          <div className={styles.strategyBadge}>💡 PREVIEW NOTE</div>
          <h3>Why this blog exists (monetization view)</h3>
          <p>
            This blog is the <strong>AdSense engine</strong> for the whole site. The activity sheet
            pages are classified as &quot;made for kids&quot; (which disables personalized ads and tanks
            CPM). This blog is written <strong>for parents</strong> — normal CPM, AdSense eligible,
            affiliate-friendly, and every post funnels into ₹49 sheet sales. One post = three revenue
            streams: ads + affiliate + sheet conversion.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className={styles.categories}>
        <div className={styles.categoryPills}>
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              className={`${styles.pill} ${i === 0 ? styles.pillActive : ''}`}
            >
              {cat.name} <span className={styles.pillCount}>{cat.count}</span>
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED POST */}
      <section className={styles.featured}>
        <div className={styles.featuredCard}>
          <div
            className={styles.featuredImage}
            style={{ background: colorMap[featured.color] }}
          >
            <div className={styles.featuredEmoji}>{featured.emoji}</div>
            <div className={styles.featuredTag}>⭐ FEATURED</div>
          </div>
          <div className={styles.featuredContent}>
            <div className={styles.metaRow}>
              <span className={styles.category}>{featured.category}</span>
              <span className={styles.dot}>•</span>
              <span className={styles.readTime}>{featured.readTime}</span>
            </div>
            <h2 className={styles.featuredTitle}>{featured.title}</h2>
            <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
            <div className={styles.strategyNote}>
              <strong>📌 Strategy:</strong> {featured.strategyNote}
            </div>
            <div className={styles.featuredFooter}>
              <span className={styles.date}>🗓️ {featured.date}</span>
              <a href="#" className="btn-primary">Read Post →</a>
            </div>
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className={styles.postsSection}>
        <h2 className={styles.sectionTitle}>Latest posts 📖</h2>
        <div className={styles.postsGrid}>
          {rest.map((post) => (
            <article key={post.id} className={styles.postCard}>
              <div
                className={styles.postImage}
                style={{ background: colorMap[post.color] }}
              >
                <div className={styles.postEmoji}>{post.emoji}</div>
              </div>
              <div className={styles.postBody}>
                <div className={styles.metaRow}>
                  <span className={styles.category}>{post.category}</span>
                  <span className={styles.dot}>•</span>
                  <span className={styles.readTime}>{post.readTime}</span>
                </div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <div className={styles.strategyNote}>
                  <strong>📌</strong> {post.strategyNote}
                </div>
                <div className={styles.postFooter}>
                  <span className={styles.date}>{post.date}</span>
                  <span className={styles.arrow}>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* AD SPOTS DEMO */}
      <section className={styles.adDemo}>
        <div className={styles.adDemoInner}>
          <div className={styles.adDemoHead}>
            <span className="sticker" style={{ background: 'var(--yellow)' }}>💰 MONETIZATION PREVIEW</span>
            <h3>Where ads &amp; affiliate links live</h3>
            <p>
              A single blog post typically has 3 ad slots + 2–4 affiliate product mentions.
              Here&apos;s what those revenue points look like inside a post:
            </p>
          </div>

          <div className={styles.adSlots}>
            <div className={styles.adSlot}>
              <div className={styles.adLabel}>🟢 Top AdSense Banner</div>
              <div className={styles.adPlaceholder}>
                <div className={styles.adMockContent}>
                  <div className={styles.adMockText}>
                    <div>Google Ads</div>
                    <div className={styles.adMockSmall}>Sponsored · kids.brand.com</div>
                  </div>
                </div>
              </div>
              <div className={styles.adMeta}>Typical India CPM: ₹40–80 · ~₹1 per visit</div>
            </div>

            <div className={styles.adSlot}>
              <div className={styles.adLabel}>🛒 In-line Affiliate Card</div>
              <div className={`${styles.adPlaceholder} ${styles.affiliate}`}>
                <div className={styles.affiliateMock}>
                  <div className={styles.affiliateEmoji}>🧸</div>
                  <div>
                    <div className={styles.affiliateTitle}>Wooden Rainbow Stacker</div>
                    <div className={styles.affiliatePrice}>₹449 on Amazon →</div>
                  </div>
                </div>
              </div>
              <div className={styles.adMeta}>Affiliate: 1–10% commission · ~₹30–80 per sale</div>
            </div>

            <div className={styles.adSlot}>
              <div className={styles.adLabel}>📝 Internal Sheet Funnel</div>
              <div className={`${styles.adPlaceholder} ${styles.sheetFunnel}`}>
                <div className={styles.affiliateMock}>
                  <div className={styles.affiliateEmoji}>✏️</div>
                  <div>
                    <div className={styles.affiliateTitle}>Free A–Z Tracing Sheet</div>
                    <div className={styles.affiliatePrice}>Download Free →</div>
                  </div>
                </div>
              </div>
              <div className={styles.adMeta}>Converts 2–5% to email + upsell · highest LTV</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterBox}>
          <h2>Get new posts in your inbox 💌</h2>
          <p>One email every Sunday. Free activity sheet included. Unsubscribe anytime.</p>
          <div className={styles.newsletterForm}>
            <input type="email" placeholder="your@email.com" className={styles.input} />
            <button className="btn-primary">Subscribe Free ✨</button>
          </div>
          <div className={styles.trustRow}>
            <span>🔒 No spam ever</span>
            <span>💌 Sunday mornings</span>
            <span>🎁 Free sheet weekly</span>
          </div>
        </div>
      </section>
    </>
  );
}
