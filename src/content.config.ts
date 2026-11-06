import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    // SEO: title for Google (max ~60 characters). Falls back to title.
    seoTitle: z.string().optional(),
    // GEO: 2-3 sentence direct answer shown at the top of the article.
    summary: z.string().optional(),
    // GEO/SEO: questions rendered at the end and marked up as FAQPage.
    // Sources cited, listed at the end of the article and in the Article schema.
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    category: z.enum(['on-screen', 'recast', 'collection', 'features']),
    // Real photo. If empty, the site draws a typographic poster from film/year/watch.
    cover: z.string().optional(),
    coverAlt: z.string().default(''),
    film: z.string().optional(),
    year: z.coerce.string().optional(),
    watch: z.string().optional(),
    tone: z.enum(['teal', 'noir', 'sepia', 'steel']).default('teal'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    // Visible on the site but kept out of Google and the sitemap (e.g. outlines not yet written).
    noindex: z.boolean().default(false),
    // Shown as a 'coming soon' card with a padlock; the article page is not published.
    locked: z.boolean().default(false),
  }),
});

export const collections = { articles };
