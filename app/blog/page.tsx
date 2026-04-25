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
          Real parenting advice from Choti — a Montessori teacher with 8+ years of classroom experience.
          No fluff, no Pinterest-perfect nonsense. Just what actually works for Indian families.
        </p>
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
                <div className={styles.postFooter}>
                  <span className={styles.date}>{post.date}</span>
                  <span className={styles.arrow}>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
