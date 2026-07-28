import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Каждый проект = один .md файл в src/content/projects/
// Добавить новый деплой = создать новый файл. HTML трогать не нужно.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),          // 1–2 строки для сетки
      date: z.coerce.date(),            // для сортировки и ленты
      week: z.number().optional(),      // номер недели челленджа
      tags: z.array(z.string()).default([]), // бот / автоматизация / инструмент
      tryUrl: z.string().url().optional(),   // «Попробовать» — ссылка на живой сервис/бота
      githubUrl: z.string().url().optional(),// исходники (не у всех проектов)
      cover: image().optional(),        // обложка; пока опционально (заглушка-кандзи)
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
