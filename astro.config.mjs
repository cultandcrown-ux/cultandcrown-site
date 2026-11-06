import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// Articles marked `noindex: true` (e.g. outlines) stay out of the sitemap.
const dir = './src/content/articles';
const hidden = readdirSync(dir)
  .filter((f) => f.endsWith('.md'))
  .filter((f) => /^(noindex|draft|locked): true$/m.test(readFileSync(`${dir}/${f}`, 'utf8').split('---')[1] ?? ''))
  .map((f) => `/articles/${f.replace(/\.md$/, '')}/`);

export default defineConfig({
  site: 'https://cultandcrown.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !hidden.some((p) => page.endsWith(p)) && !page.includes('/admin'),
    }),
  ],
});
