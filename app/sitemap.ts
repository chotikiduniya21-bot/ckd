import type { MetadataRoute } from 'next';
import { blogPosts } from './blog/blogData';
import { sheetContent, publishedSheetIds } from './activity-sheets/sheetContent';

const SITE_URL = 'https://www.chotikiduniya.com';

// ---------------------------------------------------------------------------
// lastModified must be a REAL date, not new Date().
//
// Using `now` tells Google every page changed today, every single day. Google
// notices that this is never true and stops trusting lastmod on the whole
// domain, which is worse than not sending it at all.
//
// Update the constant below when the relevant content actually changes.
// ---------------------------------------------------------------------------
const SHEET_PAGES_PUBLISHED = new Date('2026-08-12'); // 76 sheet pages went live
const HOME_UPDATED = new Date('2026-08-12');
const SHEETS_INDEX_UPDATED = new Date('2026-08-12');
const VIDEOS_UPDATED = new Date('2026-07-18');
const ABOUT_UPDATED = new Date('2026-07-18');
const CONTACT_UPDATED = new Date('2026-07-18');
const LEGAL_UPDATED = new Date('2026-07-18');

export default function sitemap(): MetadataRoute.Sitemap {
  // Blog index should reflect the most recent post, not today.
  const newestPost = blogPosts.reduce((latest, p) => {
    const d = p.lastUpdated ? new Date(p.lastUpdated) : new Date(0);
    return d > latest ? d : latest;
  }, new Date(0));

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: HOME_UPDATED, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/activity-sheets`, lastModified: SHEETS_INDEX_UPDATED, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${SITE_URL}/blog`, lastModified: newestPost, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/videos`, lastModified: VIDEOS_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/about`, lastModified: ABOUT_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: CONTACT_UPDATED, changeFrequency: 'yearly', priority: 0.5 },
  ];

  const legalPages: MetadataRoute.Sitemap = [
    `${SITE_URL}/privacy`,
    `${SITE_URL}/terms`,
    `${SITE_URL}/refund`,
  ].map((url) => ({
    url,
    lastModified: LEGAL_UPDATED,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.lastUpdated ? new Date(post.lastUpdated) : newestPost,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const sheetUrls: MetadataRoute.Sitemap = publishedSheetIds.map((id) => ({
    url: `${SITE_URL}/activity-sheets/${sheetContent[id].slug}`,
    lastModified: SHEET_PAGES_PUBLISHED,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
    images: [`${SITE_URL}/sheet-thumbs/${id}.png`],
  }));

  return [...staticPages, ...sheetUrls, ...blogUrls, ...legalPages];
}
