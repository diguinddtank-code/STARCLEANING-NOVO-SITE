import { BUSINESS_CONFIG } from './businessConfig';

/** Site-wide facts and SEO helpers. Every claim here is on the Google profile or in llms.txt. */
export const SITE_URL = 'https://www.starcleaningsc.com';
export const BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const FACTS = {
  years: 18,
  rating: BUSINESS_CONFIG.ratingValue,
  reviewCount: BUSINESS_CONFIG.reviewCount,
  reviewCountDisplay: BUSINESS_CONFIG.reviewCountDisplay,
  insurance: '$2M general liability',
  guarantee: 'Free re-clean within 24 hours if anything is missed',
  phone: BUSINESS_CONFIG.phone,
  phoneRaw: BUSINESS_CONFIG.phoneRaw,
  hours: BUSINESS_CONFIG.hours.scheduleText,
  owner: 'Mariana',
  base: 'Summerville, SC',
};

export const abs = (path: string) => (path.startsWith('http') ? path : `${SITE_URL}${path === '/' ? '' : path}`);

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[], path: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${abs(path)}#faq`,
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function webPageSchema(opts: { path: string; name: string; description: string; image?: string; about?: object[] }) {
  return {
    '@type': 'WebPage',
    '@id': `${abs(opts.path)}#webpage`,
    url: abs(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': WEBSITE_ID },
    ...(opts.image ? { primaryImageOfPage: { '@type': 'ImageObject', url: abs(opts.image) } } : {}),
    ...(opts.about ? { about: opts.about } : {}),
    inLanguage: 'en-US',
  };
}

export const cityEntity = (name: string) => ({
  '@type': 'City',
  name: `${name}, SC`,
  sameAs: `https://en.wikipedia.org/wiki/${name.replace(/ /g, '_')},_South_Carolina`,
});

export const jsonLd = (graph: object[]) => JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
