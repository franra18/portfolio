// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// With a custom domain later: set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://franra18.github.io',
  base: '/portfolio',
  devToolbar: { enabled: false }, // it overlays the page and breaks pixel comparisons
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
