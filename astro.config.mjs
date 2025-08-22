import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://certificates.peculio.tech',
  base: '/',
  integrations: [tailwind()],
});