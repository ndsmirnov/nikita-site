// @ts-check
import { defineConfig } from 'astro/config';

// Личный хостинг: сервер рег.ру + домен your-way.online (личный Cloudflare). Не Netlify — там рабочий аккаунт.
export default defineConfig({
  site: 'https://nikita.your-way.online',
  trailingSlash: 'ignore',
});
