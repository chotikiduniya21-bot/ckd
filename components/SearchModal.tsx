'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { freeSheets, bundles } from '@/app/activity-sheets/sheetsData';
import { blogPosts } from '@/app/blog/blogData';
import styles from './SearchModal.module.css';

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

interface SearchResult {
  type: 'sheet' | 'bundle' | 'blog';
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  href: string;
  meta?: string;
}

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Build searchable index — memoized since source data is static
  const searchIndex = useMemo((): SearchResult[] => {
    const sheetResults: SearchResult[] = freeSheets.map((s) => ({
      type: 'sheet',
      id: String(s.id),
      title: s.title,
      subtitle: s.description,
      emoji: s.emoji,
      href: '/activity-sheets',
      meta: `Ages ${s.ageRange} · ${s.pages} pages · ${s.category}`,
    }));

    const bundleResults: SearchResult[] = bundles.map((b) => ({
      type: 'bundle',
      id: b.id,
      title: b.title,
      subtitle: b.subtitle,
      emoji: b.emoji,
      href: `/bundle-preview/${b.id}`,
      meta: `${b.ageLabel} · ${b.duration} · ₹${b.price}`,
    }));

    const blogResults: SearchResult[] = blogPosts.map((p) => ({
      type: 'blog',
      id: p.slug,
      title: p.title,
      subtitle: p.description,
      emoji: '📝',
      href: `/blog/${p.slug}`,
      meta: p.category ?? 'Article',
    }));

    return [...sheetResults, ...bundleResults, ...blogResults];
  }, []);

  // Filter results based on query — simple substring match across title/subtitle/meta
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        (item.meta && item.meta.toLowerCase().includes(q))
    );
  }, [query, searchIndex]);

  // Group by type for nicer display
  const grouped = useMemo(() => {
    return {
      sheet: results.filter((r) => r.type === 'sheet'),
      bundle: results.filter((r) => r.type === 'bundle'),
      blog: results.filter((r) => r.type === 'blog'),
    };
  }, [results]);

  // Auto-focus input when modal opens
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  // Reset query when closing
  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  if (!open) return null;

  const hasResults = results.length > 0;
  const isEmpty = query.trim() === '';

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.searchBar}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sheets, bundles, blog posts..."
            className={styles.searchInput}
          />
          <button onClick={onClose} className={styles.closeBtn} aria-label="Close">
            <span className={styles.escBadge}>ESC</span>
          </button>
        </div>

        <div className={styles.resultsArea}>
          {isEmpty && (
            <div className={styles.emptyState}>
              <div className={styles.emptyEmoji}>🔎</div>
              <h3>What are you looking for?</h3>
              <p>Try searching for &quot;hindi&quot;, &quot;writing&quot;, &quot;summer&quot;, or a specific topic.</p>
              <div className={styles.quickTags}>
                {['Hindi', 'Writing', 'Numbers', 'Summer', 'Preschool', 'Art'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className={styles.quickTag}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!isEmpty && !hasResults && (
            <div className={styles.emptyState}>
              <div className={styles.emptyEmoji}>🤷</div>
              <h3>No results for &ldquo;{query}&rdquo;</h3>
              <p>We don&apos;t have anything matching yet. Try different words, or browse all our content:</p>
              <div className={styles.emptyLinks}>
                <Link href="/activity-sheets" onClick={onClose} className={styles.emptyLink}>Browse all sheets →</Link>
                <Link href="/blog" onClick={onClose} className={styles.emptyLink}>Read the blog →</Link>
              </div>
            </div>
          )}

          {!isEmpty && hasResults && (
            <>
              <div className={styles.resultsCount}>
                Found <strong>{results.length}</strong> result{results.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
              </div>

              {grouped.sheet.length > 0 && (
                <div className={styles.resultGroup}>
                  <div className={styles.groupLabel}>
                    <span>🎁 Free Sheets</span>
                    <span className={styles.groupCount}>{grouped.sheet.length}</span>
                  </div>
                  {grouped.sheet.map((item) => (
                    <ResultItem key={`sheet-${item.id}`} item={item} onClose={onClose} />
                  ))}
                </div>
              )}

              {grouped.bundle.length > 0 && (
                <div className={styles.resultGroup}>
                  <div className={styles.groupLabel}>
                    <span>📦 Bundles</span>
                    <span className={styles.groupCount}>{grouped.bundle.length}</span>
                  </div>
                  {grouped.bundle.map((item) => (
                    <ResultItem key={`bundle-${item.id}`} item={item} onClose={onClose} />
                  ))}
                </div>
              )}

              {grouped.blog.length > 0 && (
                <div className={styles.resultGroup}>
                  <div className={styles.groupLabel}>
                    <span>📝 Blog Posts</span>
                    <span className={styles.groupCount}>{grouped.blog.length}</span>
                  </div>
                  {grouped.blog.map((item) => (
                    <ResultItem key={`blog-${item.id}`} item={item} onClose={onClose} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        <div className={styles.footer}>
          <span>Search across sheets, bundles &amp; blog</span>
          <span className={styles.hotkeyHint}>Tip: press <kbd>ESC</kbd> to close</span>
        </div>
      </div>
    </div>
  );
}

function ResultItem({ item, onClose }: { item: SearchResult; onClose: () => void }) {
  return (
    <Link href={item.href} onClick={onClose} className={styles.resultItem}>
      <div className={styles.resultEmoji}>{item.emoji}</div>
      <div className={styles.resultContent}>
        <div className={styles.resultTitle}>{item.title}</div>
        <div className={styles.resultSubtitle}>{item.subtitle}</div>
        {item.meta && <div className={styles.resultMeta}>{item.meta}</div>}
      </div>
      <div className={styles.resultArrow}>→</div>
    </Link>
  );
}
