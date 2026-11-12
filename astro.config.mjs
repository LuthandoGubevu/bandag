import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Pages that must stay out of the XML sitemap (they also carry noindex).
const PRIVATE = ['/account/', '/design-system/', '/thanks/'];

export default defineConfig({
  site: 'https://www.eastlondonbandag.com',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !PRIVATE.some((p) => page.endsWith(p)) })],
});
