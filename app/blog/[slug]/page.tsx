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

  // Build Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: 'Choti',
      url: 'https://chotikiduniya.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Choti Ki Duniya',
      logo: {
        '@type': 'ImageObject',
        url: 'https://chotikiduniya.com/og/default.png',
      },
    },
    datePublished: post.lastUpdated || '2026-04-26',
    dateModified: post.lastUpdated || '2026-04-26',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://chotikiduniya.com/blog/${post.slug}`,
    },
    keywords: post.keywords?.join(', '),
    inLanguage: 'en-IN',
  };

  // Extract FAQs from HTML for FAQ schema
  const faqSchema = extractFaqSchema(post.html);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

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

function extractFaqSchema(html: string) {
  // Pull each Q/A pair from the structured ckd-faq HTML
  const itemPattern = /<div class="ckd-faq-item">\s*<div class="ckd-faq-q">([\s\S]*?)<\/div>\s*<div class="ckd-faq-a">([\s\S]*?)<\/div>\s*<\/div>/g;
  const matches: Array<{ q: string; a: string }> = [];
  let m: RegExpExecArray | null;
  while ((m = itemPattern.exec(html)) !== null) {
    const stripTags = (s: string) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    matches.push({ q: stripTags(m[1]), a: stripTags(m[2]) });
  }
  if (matches.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: matches.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return iso;
  }
}
