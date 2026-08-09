export const SITE_URL = 'https://www.chotikiduniya.com';

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const PERSON_ID = `${SITE_URL}/#choti`;

export const SOCIAL_PROFILES = [
  'https://www.youtube.com/@ChotikiDuniya_21',
  'https://www.instagram.com/chotikiduniya21/',
  'https://www.facebook.com/chotikiduniya/',
  'https://www.pinterest.com/chotikiduniyaofficial/',
];

export const organizationSchema = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Choti Ki Duniya',
  alternateName: ['छोटी की दुनिया', 'Choti ki Duniya'],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    '@id': `${SITE_URL}/#logo`,
    url: `${SITE_URL}/mascot.png`,
    width: 800,
    height: 800,
    caption: 'Choti Ki Duniya',
  },
  image: { '@id': `${SITE_URL}/#logo` },
  description:
    'Free printable activity sheets, Hindi rhymes and stories for Indian children aged 2-8, made by Choti, a Montessori-inspired early childhood educator.',
  sameAs: SOCIAL_PROFILES,
  founder: { '@id': PERSON_ID },
  areaServed: { '@type': 'Country', name: 'India' },
  knowsLanguage: ['hi-IN', 'en-IN'],
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: 'Choti Ki Duniya',
  description:
    'Free printable activity sheets, Hindi rhymes and stories for Indian children aged 2-8.',
  publisher: { '@id': ORG_ID },
  inLanguage: ['en-IN', 'hi-IN'],
};

export const personSchema = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Choti',
  url: `${SITE_URL}/about`,
  jobTitle: 'Early Childhood Educator',
  description:
    'Montessori-inspired early childhood educator making free learning material for Indian families raising children aged 2-8.',
  worksFor: { '@id': ORG_ID },
  knowsLanguage: ['hi-IN', 'en-IN'],
  knowsAbout: [
    'Early childhood education',
    'Montessori-inspired learning',
    'Hindi language learning for children',
    'Preschool readiness',
    'Pre-writing and fine motor development',
  ],
  sameAs: SOCIAL_PROFILES,
};

export const siteGraph = {
  '@context': 'https://schema.org',
  '@graph': [organizationSchema, websiteSchema, personSchema],
};

export function breadcrumbSchema(
  crumbs: Array<{ name: string; path: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}
