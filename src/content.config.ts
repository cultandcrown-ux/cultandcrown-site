import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
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
  }),
});

export const collections = { articles };
