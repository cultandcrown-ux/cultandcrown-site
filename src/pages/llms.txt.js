// /llms.txt: a plain-text guide to the site for AI assistants (GEO).
import { getCollection } from 'astro:content';
import { SITE, CATEGORIES } from '../data/site';

export async function GET() {
  const articles = (await getCollection('articles', ({ data }) => !data.draft && !data.noindex && !data.locked)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    'Cult & Crown is an independent English-language journal about watches in cinema and television: the real watches worn on screen, the stories behind them, and editorial picks. Brand partnerships are always disclosed in the article.',
    '',
    '## Sections',
    ...Object.entries(CATEGORIES).map(([k, c]) => `- [${c.label}](${SITE.url}/category/${k}/): ${c.blurb}`),
    '',
    '## Articles',
    ...articles.map((a) => `- [${a.data.title}](${SITE.url}/articles/${a.id}/): ${a.data.summary ?? a.data.description}`),
    '',
    '## About',
    `- [About Cult & Crown](${SITE.url}/about/)`,
    `- [Instagram](${SITE.instagram})`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
