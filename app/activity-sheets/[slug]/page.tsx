import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { freeSheets } from '../sheetsData';
import { sheetContent, getSheetContentBySlug, publishedSheetIds } from '../sheetContent';
import { ORG_ID, PERSON_ID, SITE_URL, breadcrumbSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import SheetDownloadButton from './SheetDownloadButton';
import styles from './sheet.module.css';

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedSheetIds.map((id) => ({ slug: sheetContent[id].slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = getSheetContentBySlug(slug);
  if (!found) return { title: 'Not found' };
  return {
    title: found.content.metaTitle,
    description: found.content.metaDescription,
    alternates: { canonical: `/activity-sheets/${slug}` },
    openGraph: {
      title: found.content.metaTitle,
      description: found.content.metaDescription,
      type: 'article',
      images: [{ url: `/sheet-thumbs/${found.id}.png`, width: 452, height: 640, alt: `${found.content.h1}, Choti Ki Duniya` }],
    },
  };
}

export default async function SheetPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = getSheetContentBySlug(slug);
  if (!found) notFound();

  const { id, content } = found;
  const sheet = freeSheets.find((s) => s.id === id);
  if (!sheet) notFound();

  const siblings = freeSheets
    .filter((s) => s.category === sheet.category && s.id !== id)
    .filter((s) => sheetContent[s.id])
    .slice(0, 6);

  const thumbUrl = `${SITE_URL}/sheet-thumbs/${id}.png`;

  const creativeWork = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${SITE_URL}/activity-sheets/${slug}#sheet`,
    name: content.h1,
    headline: content.h1,
    description: content.metaDescription,
    url: `${SITE_URL}/activity-sheets/${slug}`,
    learningResourceType: 'Worksheet',
    educationalUse: 'Practice',
    typicalAgeRange: sheet.ageRange.replace('–', '-'),
    inLanguage: ['en-IN', 'hi-IN'],
    isAccessibleForFree: true,
    isFamilyFriendly: true,
    encodingFormat: 'application/pdf',
    numberOfPages: sheet.pages,
    genre: sheet.category,
    keywords: [content.h1, `${sheet.category.toLowerCase()} worksheet`, 'free printable', content.hindi].join(', '),
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORG_ID },
    provider: { '@id': ORG_ID },
    image: { '@type': 'ImageObject', url: thumbUrl, width: 452, height: 640, caption: content.h1 },
    thumbnailUrl: thumbUrl,
    license: `${SITE_URL}/terms`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Activity sheets', path: '/activity-sheets' },
    { name: content.h1, path: `/activity-sheets/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={creativeWork} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbs} />

      <article className={styles.wrap}>
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/activity-sheets">Activity sheets</Link>
          <span aria-hidden="true">/</span>
          <span className={styles.crumbCurrent}>{sheet.category}</span>
        </nav>

        <div className={styles.top}>
          <div className={styles.previewCol}>
            <div className={styles.preview}>
              <Image
                src={`/sheet-thumbs/${id}.png`}
                alt={`${content.h1}, printable worksheet preview`}
                width={452}
                height={640}
                priority
                className={styles.previewImg}
              />
            </div>
          </div>

          <div className={styles.infoCol}>
            <div className={styles.freeTag}>Free · no email needed</div>
            <h1 className={styles.title}>{content.h1}</h1>
            <p className={styles.hindiLine} lang="hi">
              {content.hindi}
              {content.hindiInstruction ? ` · ${content.hindiInstruction}` : ''}
            </p>

            <dl className={styles.facts}>
              <div><dt>Age</dt><dd>{sheet.ageRange}</dd></div>
              <div><dt>Pages</dt><dd>{sheet.pages}</dd></div>
              <div><dt>Paper</dt><dd>A4</dd></div>
              <div><dt>Language</dt><dd>हिं + En</dd></div>
            </dl>

            <SheetDownloadButton sheetId={String(id)} />
          </div>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About this sheet</h2>
          <p className={styles.sectionLead}>What is on the page, and how to get the most out of it.</p>
          {content.body.map((p, i) => (<p key={i} className={styles.para}>{p}</p>))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What your child practises</h2>
          <p className={styles.sectionLead}>{content.skillsIntro}</p>
          <ul className={styles.skills}>
            {content.skills.map((s) => (<li key={s}>{s}</li>))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Common questions</h2>
          {content.faqs.map((f) => (
            <div key={f.q} className={styles.faq}>
              <h3 className={styles.faqQ}>{f.q}</h3>
              <p className={styles.faqA}>{f.a}</p>
            </div>
          ))}
        </section>

        {siblings.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>More {sheet.category.toLowerCase()} sheets</h2>
            <div className={styles.siblings}>
              {siblings.map((s) => (
                <Link key={s.id} href={`/activity-sheets/${sheetContent[s.id].slug}`} className={styles.sibling}>
                  <div className={styles.siblingThumb}>
                    <Image
                      src={`/sheet-thumbs/${s.id}.png`}
                      alt={`${s.title}, free printable activity sheet`}
                      fill
                      sizes="140px"
                      className={styles.siblingImg}
                    />
                  </div>
                  <span className={styles.siblingTitle}>{s.title}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {content.relatedPost && (
          <p className={styles.related}>
            Related reading:{' '}
            <Link href={`/blog/${content.relatedPost.slug}`}>{content.relatedPost.title}</Link>
          </p>
        )}

        <p className={styles.backLink}>
          <Link href="/activity-sheets">← All free activity sheets</Link>
        </p>
      </article>
    </>
  );
}
