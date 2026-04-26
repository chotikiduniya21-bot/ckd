import Link from 'next/link';
import { blogPosts } from './blogData';
import styles from './blog.module.css';

// Map category name → background gradient
const categoryColorMap: Record<string, string> = {
  'Hindi Learning': 'linear-gradient(135deg, #FF8A3D, #FFD23F)',
  'Child Development': 'linear-gradient(135deg, #4A9EFF, #9B5DE5)',
  'Parenting': 'linear-gradient(135deg, #FF7EB9, #FF4E6A)',
  'Activities': 'linear-gradient(135deg, #4CD964, #2EC4B6)',
  'Default': 'linear-gradient(135deg, #FFD23F, #FF8A3D)',
};

// Map category to an emoji for the card image area
const categoryEmojiMap: Record<string, string> = {
  'Hindi Learning': '🎶',
  'Child Development': '🌱',
  'Parenting': '💛',
  'Activities': '✨',
  'Default': '📖',
};

// Compute categories with counts
function computeCategories() {
  const counts: Record<string, number> = {};
  for (const post of blogPosts) {
    const cat = post.category || 'Other';
    counts[cat] = (counts[cat] || 0) + 1;
  }
  const cats = Object.entries(counts).map(([name, count]) => ({ name, count }));
  return [{ name: 'All', count: blogPosts.length }, ...cats];
}

function readTimeOf(html: string): string {
  // Strip HTML, count words, divide by 200 wpm
  const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = text.split(' ').length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function formatDate(iso?: string): string {
  if (!iso) return '';
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return iso;
  }
}

export default function BlogPage() {
  const categories = computeCategories();
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
        <Link href={`/blog/${featured.slug}`} className={styles.featuredCard}>
          <div
            className={styles.featuredImage}
            style={{ background: categoryColorMap[featured.category || 'Default'] || categoryColorMap.Default }}
          >
            <div className={styles.featuredEmoji}>
              {categoryEmojiMap[featured.category || 'Default'] || categoryEmojiMap.Default}
            </div>
            <div className={styles.featuredTag}>⭐ FEATURED</div>
          </div>
          <div className={styles.featuredContent}>
            <div className={styles.metaRow}>
              {featured.category && <span className={styles.category}>{featured.category}</span>}
              <span className={styles.dot}>•</span>
              <span className={styles.readTime}>{readTimeOf(featured.html)}</span>
            </div>
            <h2 className={styles.featuredTitle}>{featured.title}</h2>
            <p className={styles.featuredExcerpt}>{featured.description}</p>
            <div className={styles.featuredFooter}>
              {featured.lastUpdated && (
                <span className={styles.date}>🗓️ {formatDate(featured.lastUpdated)}</span>
              )}
              <span className="btn-primary">Read Post →</span>
            </div>
          </div>
        </Link>
      </section>

      {/* POSTS GRID */}
      {rest.length > 0 && (
        <section className={styles.postsSection}>
          <h2 className={styles.sectionTitle}>Latest posts 📖</h2>
          <div className={styles.postsGrid}>
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={styles.postCard}
              >
                <div
                  className={styles.postImage}
                  style={{ background: categoryColorMap[post.category || 'Default'] || categoryColorMap.Default }}
                >
                  <div className={styles.postEmoji}>
                    {categoryEmojiMap[post.category || 'Default'] || categoryEmojiMap.Default}
                  </div>
                </div>
                <div className={styles.postBody}>
                  <div className={styles.metaRow}>
                    {post.category && <span className={styles.category}>{post.category}</span>}
                    <span className={styles.dot}>•</span>
                    <span className={styles.readTime}>{readTimeOf(post.html)}</span>
                  </div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <div className={styles.postFooter}>
                    <span className={styles.date}>{formatDate(post.lastUpdated)}</span>
                    <span className={styles.arrow}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
