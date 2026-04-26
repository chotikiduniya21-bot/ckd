import type { MetadataRoute } from 'next';
import { blogPosts } from './blog/blogData';

const SITE_URL = 'https://www.chotikiduniya.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/activity-sheets`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/videos`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const legalPages: MetadataRoute.Sitemap = [
    `${SITE_URL}/privacy`,
    `${SITE_URL}/terms`,
    `${SITE_URL}/refund`,
  ].map((url) => ({
    url,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.lastUpdated ? new Date(post.lastUpdated) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...blogUrls, ...legalPages];
}
