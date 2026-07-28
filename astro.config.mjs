// @ts-check
import { defineConfig } from 'astro/config';

// Продакшн-URL заполним, когда подключим Netlify/домен.
export default defineConfig({
  site: 'https://example.netlify.app',
  trailingSlash: 'ignore',
});
