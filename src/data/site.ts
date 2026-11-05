export const SITE = {
  name: 'Cult & Crown',
  tagline: 'Where the screen tells time',
  description:
    'An online journal on the watches of cinema: the pieces actors wore on screen, the stories behind them, and the watches we would cast today.',
  instagram: 'https://www.instagram.com/cultandcrown',
  email: 'hello@cultandcrown.com',
  url: 'https://cultandcrown.com',
  logo: '/logo-square.png',
};

// Structured data reused across pages (schema.org).
export const ORG_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}${SITE.logo}`,
  description: SITE.description,
  sameAs: [SITE.instagram],
};
export const WEBSITE_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  inLanguage: 'en',
  publisher: { '@id': `${SITE.url}/#organization` },
};
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${SITE.url}${it.path}` })),
  };
}

export const CATEGORIES = {
  'on-screen': {
    label: 'On Screen',
    blurb: 'The real watch, the real scene. What an actor actually wore, and why it mattered.',
  },
  recast: {
    label: 'Recast',
    blurb: 'Watches we would have a character wear today, and the reasoning behind every pick.',
  },
  collection: {
    label: 'The Collection',
    blurb: 'Three watches seen on screen, one budget. Diver, everyday and something special.',
  },
  features: {
    label: 'Features',
    blurb: 'Longer reads on the industry, the props department and the stories in between.',
  },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
