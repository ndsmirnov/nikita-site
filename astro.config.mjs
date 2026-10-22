// @ts-check
import { defineConfig } from 'astro/config';

// Хостинг: GitHub Pages (ndsmirnov/nikita-site), домен your-way.online через Cloudflare. Пересборка — .github/workflows/deploy.yml
export default defineConfig({
  site: 'https://nikita.your-way.online',
  trailingSlash: 'ignore',
});
