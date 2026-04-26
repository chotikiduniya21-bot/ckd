import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, getBlogPostBySlug } from '../blogData';
import styles from './post.module.css';
import './blog-content.css';

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

// Map category to a hero gradient color
const heroColorMap: Record<string, string> = {
  'Hindi Learning': 'linear-gradient(135deg, #FF8A3D, #FFD23F)',
  'Child Development': 'linear-gradient(135deg, #4A9EFF, #9B5DE5)',
  'Parenting': 'linear-gradient(135deg, #FF7EB9, #FF4E6A)',
  'Activities': 'linear-gradient(135deg, #4CD964, #2EC4B6)',
  Default: 'linear-gradient(135deg, #FFD23F, #FF8A3D)',
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: 'Not found' };
  return {
    title: `${post.title} | Choti Ki Duniya`,
    description: post.description,
    keywords: post.keywords?.join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      authors: ['Choti'],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const heroBg = heroColorMap[post.category || 'Default'] || heroColorMap.Default;

  return (
    <>
      {/* COLORFUL HERO BAND */}
      <section className={styles.hero} style={{ background: heroBg }}>
        <div className={styles.heroInner}>
          <div className={styles.heroTopRow}>
            <Link href="/blog" className={styles.backPill}>← Back to blog</Link>
            {post.category && (
              <span className={styles.categoryPill}>{post.category}</span>
            )}
          </div>
          <h1 className={styles.heroTitle}>{post.title}</h1>
          <p className={styles.heroLede}>{post.description}</p>
          <div className={styles.heroMeta}>
            <span>By <strong>Choti</strong></span>
            {post.lastUpdated && (
              <span>· Updated {formatDate(post.lastUpdated)}</span>
            )}
          </div>
        </div>
      </section>

      {/* CONTENT BODY */}
      <article className={styles.article}>
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <footer className={styles.footer}>
          <Link href="/blog" className={styles.backLink}>← Back to all articles</Link>
        </footer>
      </article>
    </>
  );
}

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return iso;
  }
}
