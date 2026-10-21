// Ленты собираются при сборке сайта. GitHub Actions пересобирает сайт каждые 3 часа,
// поэтому новые посты и выпуски появляются сами. Если источник не ответил — секция
// показывает только ссылку на канал, сборка не падает.

export type Post = {
  id: string;
  url: string;
  date: string;
  title: string;
  excerpt: string;
  image?: string;
};

export type Video = {
  id: string;
  url: string;
  date: string;
  title: string;
  thumb: string;
};

const ENTITIES: Record<string, string> = {
  '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&nbsp;': ' ',
};

function decode(s: string): string {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&[a-z#0-9]+;/gi, (m) => ENTITIES[m] ?? m);
}

function htmlToText(html: string): string {
  return decode(
    html
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<i class="emoji"[^>]*><b>(.*?)<\/b><\/i>/gi, '$1')
      .replace(/<[^>]+>/g, ''),
  ).trim();
}

async function get(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: { 'user-agent': 'Mozilla/5.0 (site build)' },
      signal: AbortSignal.timeout(20000),
    });
    return res.ok ? await res.text() : null;
  } catch {
    return null;
  }
}

export async function telegramPosts(channel: string, limit = 6): Promise<Post[]> {
  const html = await get(`https://t.me/s/${channel}`);
  if (!html) return [];
  const posts: Post[] = [];
  for (const block of html.split('class="tgme_widget_message_wrap').slice(1)) {
    const id = block.match(/data-post="([^"]+)"/)?.[1];
    const textHtml = block.match(/js-message_text"[^>]*>([\s\S]*?)<\/div>/)?.[1];
    const date = block.match(/<time datetime="([^"]+)"/)?.[1];
    if (!id || !textHtml || !date) continue;
    const text = htmlToText(textHtml);
    if (text.length < 40) continue;
    const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
    let title = lines[0];
    let rest = lines.slice(1).join(' ');
    if (title.length > 110) {
      rest = title.slice(90) + ' ' + rest;
      title = title.slice(0, 90).replace(/\s+\S*$/, '') + '…';
    }
    const excerpt = rest.length > 200 ? rest.slice(0, 200).replace(/\s+\S*$/, '') + '…' : rest;
    const image =
      block.match(/message_photo_wrap[^>]*background-image:url\('([^']+)'\)/)?.[1] ??
      block.match(/video_thumb[^>]*background-image:url\('([^']+)'\)/)?.[1];
    posts.push({ id, url: `https://t.me/${id}`, date, title, excerpt, image });
  }
  return posts.reverse().slice(0, limit);
}

// Плейлист UULF… — только длинные видео канала, без Shorts.
export async function youtubeVideos(channelId: string, limit = 3): Promise<Video[]> {
  const xml = await get(
    `https://www.youtube.com/feeds/videos.xml?playlist_id=UULF${channelId.replace(/^UC/, '')}`,
  );
  if (!xml) return [];
  const videos: Video[] = [];
  for (const entry of xml.split('<entry>').slice(1)) {
    const id = entry.match(/<yt:videoId>([^<]+)</)?.[1];
    const title = entry.match(/<title>([^<]+)</)?.[1];
    const date = entry.match(/<published>([^<]+)</)?.[1];
    if (!id || !title || !date) continue;
    if (/трейлер|trailer/i.test(title)) continue;
    videos.push({
      id,
      url: `https://www.youtube.com/watch?v=${id}`,
      date,
      title: decode(title),
      thumb: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    });
  }
  return videos.slice(0, limit);
}
