// Все тексты сайта на двух языках. Правка текста = правка здесь, вёрстку трогать не нужно.

export const LINKS = {
  dm: 'https://t.me/poetsmirnov',
  channel: 'https://t.me/put_chelovecheskiy',
  bot: 'https://t.me/kontorka_ai_bot',
  instagram: 'https://www.instagram.com/poet.smirnov/',
  youtube: 'https://www.youtube.com/@prosto.nikita.smirnov',
  podcast: 'https://www.youtube.com/channel/UCEnuBtxONoludkFyRd0iCew',
  github: 'https://github.com/ndsmirnov',
};

export const FEEDS = {
  telegram: 'put_chelovecheskiy',
  podcastChannelId: 'UCEnuBtxONoludkFyRd0iCew',
};

type Tool = {
  key: string;
  img?: string;
  repo?: string;
  ready: boolean;
};

// Тот же каталог, что в боте (put-funnel-bot/src/materials.js). Ключ = код ссылки t.me/kontorka_ai_bot?start=<ключ>.
export const TOOLS: Tool[] = [
  { key: 'rils', img: '/img/tool-rils.webp', repo: 'https://github.com/ndsmirnov/claude-reels-kit', ready: true },
  { key: 'mozg', img: '/img/tool-mozg.webp', repo: 'https://github.com/ndsmirnov/claude-second-brain', ready: true },
  { key: 'radar', img: '/img/tool-radar.webp', repo: 'https://github.com/ndsmirnov/claude-growth-radar', ready: true },
  { key: 'podcast', ready: false },
  { key: 'mak', ready: false },
];

const ru = {
  lang: 'ru',
  locale: 'ru_RU',
  path: '/',
  altPath: '/en/',
  altLabel: 'EN',
  meta: {
    title: 'Никита Смирнов — внедрение нейросетей для экспертов и бизнеса',
    description:
      'Нейросети делают за меня работу — и я настраиваю так же у вас. Консультации по внедрению Claude Code и ИИ-агентов, бесплатные инструменты, подкаст «Путь человеческий».',
  },
  nav: {
    tools: 'Инструменты',
    consult: 'Консультация',
    podcast: 'Подкаст',
    blog: 'Блог',
    about: 'Обо мне',
    cta: 'Записаться',
  },
  hero: {
    kicker: 'Конторка Никиты · внедрение нейросетей',
    title: ['Нейросети делают', 'за меня работу.'],
    accent: 'Настрою так, чтобы делали и за вас.',
    lead:
      'Я Никита Смирнов. Моя жизнь и работа собраны на Claude Code: монтаж, публикации, учёт денег и планы ведут агенты. Помогаю экспертам и предпринимателям внедрить то же у себя — без штата разработчиков.',
    cta: 'Записаться на консультацию',
    cta2: 'Забрать инструменты бесплатно',
    note: 'это я, в студии подкаста',
    stamp: 'Принято в работу',
    photoAlt: 'Никита Смирнов в студии подкаста',
  },
  proof: {
    label: 'Что у меня уже работает само, каждый день',
    items: [
      { t: 'Рилс из голосовой записи', d: 'монтаж, субтитры и рендер без ручной склейки' },
      { t: 'Публикация в 4 соцсети', d: 'Instagram, YouTube Shorts, Threads и TikTok по расписанию' },
      { t: 'Учёт денег', d: 'банки синхронизируются, траты сверяются сами' },
      { t: 'Второй мозг', d: 'рассказал день голосом — всё разложено по заметкам' },
    ],
  },
  services: {
    kicker: 'Консультация',
    title: 'С чем ко мне приходят',
    lead: 'Разбираю, на что у вас уходит время, и показываю, какую часть работы можно отдать нейросетям уже в этом месяце.',
    groups: [
      {
        tag: 'Экспертный блог',
        color: 'green',
        title: 'Для экспертов и авторов',
        items: [
          ['Контент-конвейер', 'сценарии по залетевшим рилсам вашей ниши, автомонтаж из голоса, публикация на все площадки.'],
          ['Воронка в Telegram', 'бот с бесплатными материалами, проверка подписки, база подписчиков и рассылки.'],
          ['Второй мозг эксперта', 'Claude Code и Obsidian помнят клиентов, идеи и материалы — новые тексты пишутся с опорой на них.'],
        ],
      },
      {
        tag: 'Бизнес',
        color: 'teal',
        title: 'Для предпринимателей и команд',
        items: [
          ['Рутина отделов', 'отчёты, сверки, учёт и документы: агент делает, человек проверяет.'],
          ['Claude Code в команде', 'установка, настройка под ваши процессы и обучение сотрудников.'],
          ['ИИ-помощник для заявок', 'отвечает клиентам по вашей базе знаний и передаёт человеку то, что требует решения.'],
        ],
      },
    ],
    steps: {
      title: 'Как проходит работа',
      items: [
        ['Заявка', 'Пишете в Telegram пару строк о своём деле.'],
        ['Разбор', 'Созваниваемся, смотрим процессы и находим 2–3 места, где нейросеть снимет больше всего работы.'],
        ['План', 'Получаете список того, что автоматизируем, на каких инструментах и что будет на выходе.'],
        ['Внедрение', 'Собираю под ключ или веду вас по плану. На выходе — работающая система и инструкция.'],
      ],
    },
    cta: 'Обсудить мою задачу',
  },
  tools: {
    kicker: 'Окно выдачи',
    title: 'Бесплатные инструменты',
    lead: 'Отдаю целиком: забираете в боте, ставите в Claude Code одной фразой. Это те же скиллы, на которых работаю сам.',
    get: 'Забрать в боте',
    code: 'Код на GitHub',
    soon: 'Скоро',
    soonNote: 'Готовлю к выдаче — появится в боте.',
    stamp: 'Выдано бесплатно',
    items: {
      rils: {
        title: 'Автомонтаж рилсов',
        tag: 'Контент',
        text: 'Два скилла для Claude Code: монтирует рилс из записи голоса и видео с телефона (паузы, дубли, субтитры по слову, готовый mp4) и пишет сценарии по залетевшим рилсам вашей ниши.',
        needs: 'Claude Code · ffmpeg',
      },
      mozg: {
        title: 'Второй мозг: Claude Code + Obsidian',
        tag: 'Система',
        text: 'Готовое хранилище: профиль, люди, планы, здоровье, деньги, дневник. За 15 минут вопросов Claude узнаёт вас, а дальше сам раскладывает рассказанный день по заметкам.',
        needs: 'Claude Pro · Obsidian',
      },
      radar: {
        title: 'Радар роста: бот вместо ленты',
        tag: 'Telegram-бот',
        text: 'Личный бот, которого Claude Code собирает под вас: каждое утро фокус дня, 2–5 важных новостей и 3 материала. Кнопки «Беру / Изучил / Не моё» — назавтра точнее.',
        needs: 'Claude Pro · Mac · Telegram',
      },
      podcast: { title: 'Автомонтаж подкаста', tag: 'Контент', text: 'Мультикамерный монтаж выпуска по звуку спикеров.' },
      mak: { title: 'Утилиты для Mac', tag: 'Система', text: 'Чистка памяти и автозагрузки, когда Мак начинает тормозить.' },
    },
  },
  cases: {
    kicker: 'Кейсы',
    title: 'Системы, на которых живу сам',
    lead: 'Прежде чем предложить вам, проверяю на себе. Вот что крутится у меня прямо сейчас.',
    items: [
      { img: '/img/case-money.webp', t: 'Финансовый штаб', d: 'Банки синхронизируются через API, операции раскладываются по категориям, отчёт сверяется с базой сам. Вопрос «сколько я потратил» — одна фраза.' },
      { img: '/img/tool-okno.webp', t: 'Бот-воронка Конторки', d: 'Рилс заканчивается словом-призывом, бот проверяет подписку на канал и выдаёт инструмент. База подписчиков и рассылки — внутри.' },
      { img: '/img/case-bot.webp', t: 'Автопубликация и замеры', d: 'Готовый рилс сам уходит в Instagram, YouTube Shorts, Threads и TikTok по расписанию, а через сутки и двое приходят цифры.' },
    ],
  },
  podcast: {
    kicker: 'Переговорная',
    title: 'Подкаст «Путь человеческий»',
    lead: 'Разговоры с людьми, которые нашли своё дело, — для тех, кто в поиске. О деньгах, отношениях, нейросетях и своём пути.',
    latest: 'Свежие выпуски',
    watch: 'Смотреть на YouTube',
    all: 'Все выпуски',
    guest: 'Хотите прийти гостем? Напишите мне.',
  },
  blog: {
    kicker: 'Блог',
    title: 'Свежее из канала',
    lead: 'Telegram-канал «Конторка Никиты»: как устроены мои системы, разборы инструментов и личные посты.',
    read: 'Читать',
    all: 'Подписаться на канал',
    empty: 'Лента временно не загрузилась — все посты в канале.',
  },
  about: {
    kicker: 'Личное дело',
    title: 'Я и трансформации',
    lead: [
      'Мне 23, я из Москвы. Окончил Вышку по медиакоммуникациям. В 15 лет издал первый роман — антиутопию «Точка Синтеза», всего у меня три фантастические книги.',
      'Нейросети для меня — не хайп и не новости рынка. Это способ освободить голову и время на главное: людей, творчество и свой путь. Поэтому я сначала строю систему для себя, проживаю её — и только потом отдаю дальше.',
    ],
    note: 'путь выбирает тебя',
    timeline: [
      ['2018', 'Первая книга', 'Роман «Точка Синтеза»: год работы, издан. Тема, которая со мной до сих пор, — синтез технологий и человека.'],
      ['2025', 'Год поиска', 'Не пошёл в магистратуру, прошёл десять дней Випассаны и нашёл свою точку: честные разговоры и подкаст «Путь человеческий».'],
      ['2026', 'Год делания', 'Собрал жизнь на нейросетях: второй мозг, агенты, финансы, контент. Открыл «Конторку» и раздаю инструменты бесплатно.'],
      ['Дальше', 'Путь мастера', 'Пишу книгу «Путь Мастера» и помогаю внедрять ИИ тем, кто хочет делать своё дело, а не рутину.'],
    ],
  },
  socials: {
    kicker: 'Где я есть',
    title: 'Соцсети и площадки',
    items: [
      { key: 'channel', name: 'Telegram-канал', handle: '@put_chelovecheskiy', d: 'Конторка Никиты: системы, инструменты, личное' },
      { key: 'bot', name: 'Бот с инструментами', handle: '@kontorka_ai_bot', d: 'Бесплатные скиллы для Claude Code' },
      { key: 'instagram', name: 'Instagram', handle: '@poet.smirnov', d: 'Рилсы про нейросети и Конторку' },
      { key: 'podcast', name: 'YouTube · подкаст', handle: 'Путь человеческий', d: 'Полные выпуски и нарезки' },
      { key: 'youtube', name: 'YouTube · личный', handle: '@prosto.nikita.smirnov', d: 'Гайды и Shorts' },
      { key: 'github', name: 'GitHub', handle: 'ndsmirnov', d: 'Открытый код инструментов' },
    ],
  },
  faq: {
    title: 'Частые вопросы',
    items: [
      ['Нужно ли уметь программировать?', 'Нет. С Claude Code говорят обычным языком. Настройку беру на себя, вам остаётся пользоваться.'],
      ['Какие подписки понадобятся?', 'Для большинства решений хватает Claude Pro. Если нужно что-то ещё, скажу на разборе до начала работы.'],
      ['Сколько это стоит?', 'Зависит от объёма. Точную стоимость и срок называю после разбора, когда понятно, что именно автоматизируем.'],
      ['Можно начать самому?', 'Да. Заберите бесплатные инструменты в боте — они ставятся одной фразой в Claude Code. Застрянете — пишите.'],
    ],
  },
  contact: {
    kicker: 'Заявка',
    title: 'Расскажите, что съедает ваше время',
    lead: 'Заполните три поля — откроется чат со мной в Telegram, а текст заявки уже будет скопирован. Останется вставить и отправить.',
    who: 'Кто вы',
    whoOptions: ['Эксперт или блогер', 'Бизнес или команда', 'Другое'],
    what: 'Что хотите отдать нейросетям',
    whatPh: 'Например: монтирую рилсы сам по 3 часа, хочу автоматизировать',
    name: 'Как к вам обращаться',
    namePh: 'Имя',
    submit: 'Отправить в Telegram',
    copied: 'Текст заявки скопирован — вставьте его в открывшийся чат.',
    direct: 'Или напишите напрямую:',
    msgIntro: 'Здравствуйте, Никита! Хочу на консультацию по внедрению ИИ.',
    msgWho: 'Кто я',
    msgWhat: 'Задача',
    stamp: 'Вх. заявка',
  },
  footer: {
    line: 'Нейросети делают за меня работу — показываю, как это устроено.',
    rights: 'Никита Смирнов',
    feeds: 'Лента и выпуски обновляются автоматически',
  },
  dateLocale: 'ru-RU',
};

export type Dict = typeof ru;

const en: Dict = {
  lang: 'en',
  locale: 'en_US',
  path: '/en/',
  altPath: '/',
  altLabel: 'RU',
  meta: {
    title: 'Nikita Smirnov — AI implementation for creators and businesses',
    description:
      'AI agents do my work — and I set them up to do yours. Consulting on Claude Code and AI agents, free open-source tools, and the podcast “The Human Path”.',
  },
  nav: {
    tools: 'Tools',
    consult: 'Consulting',
    podcast: 'Podcast',
    blog: 'Blog',
    about: 'About',
    cta: 'Book a call',
  },
  hero: {
    kicker: 'Nikita’s Office · AI implementation',
    title: ['AI agents', 'do my work.'],
    accent: 'I’ll set them up to do yours.',
    lead:
      'I’m Nikita Smirnov. My life and work run on Claude Code: agents handle editing, publishing, money tracking and planning. I help experts and founders build the same — without hiring a dev team.',
    cta: 'Book a consultation',
    cta2: 'Get the free tools',
    note: 'that’s me, in the podcast studio',
    stamp: 'Accepted',
    photoAlt: 'Nikita Smirnov in the podcast studio',
  },
  proof: {
    label: 'What already runs on its own, every day',
    items: [
      { t: 'Reels from a voice note', d: 'editing, captions and render — no manual cutting' },
      { t: 'Posting to 4 platforms', d: 'Instagram, YouTube Shorts, Threads and TikTok on schedule' },
      { t: 'Money tracking', d: 'banks sync, spending reconciles itself' },
      { t: 'Second brain', d: 'I talk through my day — notes get filed automatically' },
    ],
  },
  services: {
    kicker: 'Consulting',
    title: 'What people come to me with',
    lead: 'We look at where your time goes, and I show you which part of the work can be handed to AI this month.',
    groups: [
      {
        tag: 'Creators',
        color: 'green',
        title: 'For experts and creators',
        items: [
          ['Content pipeline', 'scripts based on viral reels in your niche, auto-editing from voice, publishing everywhere.'],
          ['Telegram funnel', 'a bot with free lead magnets, subscription check, subscriber base and broadcasts.'],
          ['Expert second brain', 'Claude Code and Obsidian remember clients, ideas and materials — new content builds on them.'],
        ],
      },
      {
        tag: 'Business',
        color: 'teal',
        title: 'For founders and teams',
        items: [
          ['Back-office routine', 'reports, reconciliations, bookkeeping and documents: the agent does it, a human checks.'],
          ['Claude Code for your team', 'setup, tailoring to your processes and team training.'],
          ['AI assistant for leads', 'answers clients from your knowledge base and hands over what needs a human.'],
        ],
      },
    ],
    steps: {
      title: 'How it works',
      items: [
        ['Request', 'Send me a couple of lines about your work on Telegram.'],
        ['Review', 'We get on a call, walk through your processes and find 2–3 spots where AI saves the most time.'],
        ['Plan', 'You get a list of what we automate, which tools we use and what you get at the end.'],
        ['Build', 'I build it for you or guide you through the plan. You end up with a working system and a manual.'],
      ],
    },
    cta: 'Discuss my case',
  },
  tools: {
    kicker: 'Free tools',
    title: 'Open-source tools',
    lead: 'Given away in full: grab them in the bot and install into Claude Code with one sentence. The same skills I use myself. Bot and docs are in Russian.',
    get: 'Get in the bot',
    code: 'Code on GitHub',
    soon: 'Soon',
    soonNote: 'Being prepared — will appear in the bot.',
    stamp: 'Issued for free',
    items: {
      rils: {
        title: 'Reels auto-editing',
        tag: 'Content',
        text: 'Two Claude Code skills: edits a reel from a voice recording and phone footage (pauses, retakes, word-by-word captions, final mp4) and writes scripts based on viral reels in your niche.',
        needs: 'Claude Code · ffmpeg',
      },
      mozg: {
        title: 'Second brain: Claude Code + Obsidian',
        tag: 'System',
        text: 'A ready vault: profile, people, plans, health, money, journal. 15 minutes of questions and Claude knows you; after that it files your day into notes by itself.',
        needs: 'Claude Pro · Obsidian',
      },
      radar: {
        title: 'Growth radar: a bot instead of a feed',
        tag: 'Telegram bot',
        text: 'A personal bot Claude Code builds for you: every morning — focus of the day, 2–5 key news and 3 pieces to watch or read. “Take / Done / Not mine” buttons make tomorrow sharper.',
        needs: 'Claude Pro · Mac · Telegram',
      },
      podcast: { title: 'Podcast auto-editing', tag: 'Content', text: 'Multicam episode editing driven by the speakers’ audio.' },
      mak: { title: 'Mac utilities', tag: 'System', text: 'Memory and login-items cleanup when your Mac slows down.' },
    },
  },
  cases: {
    kicker: 'Cases',
    title: 'Systems I live on myself',
    lead: 'I test everything on myself before offering it. Here’s what’s running right now.',
    items: [
      { img: '/img/case-money.webp', t: 'Finance HQ', d: 'Banks sync via API, transactions get categorised, and the report reconciles with the database on its own. “How much did I spend?” is one sentence.' },
      { img: '/img/tool-okno.webp', t: 'Office funnel bot', d: 'A reel ends with a keyword, the bot checks the channel subscription and hands out the tool. Subscriber base and broadcasts included.' },
      { img: '/img/case-bot.webp', t: 'Auto-publishing and metrics', d: 'A finished reel goes to Instagram, YouTube Shorts, Threads and TikTok on schedule; numbers arrive after one and two days.' },
    ],
  },
  podcast: {
    kicker: 'Meeting room',
    title: 'Podcast “The Human Path”',
    lead: 'Conversations with people who found their calling — for those still searching. Money, relationships, AI and your own path. In Russian.',
    latest: 'Latest episodes',
    watch: 'Watch on YouTube',
    all: 'All episodes',
    guest: 'Want to be a guest? Message me.',
  },
  blog: {
    kicker: 'Blog',
    title: 'Fresh from the channel',
    lead: 'Telegram channel “Nikita’s Office”: how my systems work, tool breakdowns and personal posts. Posts are in Russian.',
    read: 'Read',
    all: 'Follow the channel',
    empty: 'The feed didn’t load right now — all posts are in the channel.',
  },
  about: {
    kicker: 'Personal file',
    title: 'Me and transformation',
    lead: [
      'I’m 23, from Moscow, with a degree in media communications from HSE University. At 15 I published my first novel, the dystopia “Synthesis Point”; I’ve written three sci-fi books in total.',
      'For me AI isn’t hype or market news. It’s a way to free my head and time for what matters: people, creativity and my own path. So I build a system for myself first, live with it — and only then pass it on.',
    ],
    note: 'the path chooses you',
    timeline: [
      ['2018', 'First book', 'The novel “Synthesis Point”: a year of work, published. Its theme is still with me — the synthesis of technology and people.'],
      ['2025', 'Year of searching', 'Skipped a master’s degree, did a ten-day Vipassana retreat and found my thing: honest conversations and the podcast “The Human Path”.'],
      ['2026', 'Year of doing', 'Rebuilt my life on AI: second brain, agents, finances, content. Opened “The Office” and give the tools away for free.'],
      ['Next', 'The master’s path', 'Writing the book “The Master’s Path” and helping people hand routine to AI so they can do their real work.'],
    ],
  },
  socials: {
    kicker: 'Find me',
    title: 'Socials and platforms',
    items: [
      { key: 'channel', name: 'Telegram channel', handle: '@put_chelovecheskiy', d: 'Nikita’s Office: systems, tools, personal' },
      { key: 'bot', name: 'Tools bot', handle: '@kontorka_ai_bot', d: 'Free Claude Code skills' },
      { key: 'instagram', name: 'Instagram', handle: '@poet.smirnov', d: 'Reels about AI and the Office' },
      { key: 'podcast', name: 'YouTube · podcast', handle: 'The Human Path', d: 'Full episodes and clips' },
      { key: 'youtube', name: 'YouTube · personal', handle: '@prosto.nikita.smirnov', d: 'Guides and Shorts' },
      { key: 'github', name: 'GitHub', handle: 'ndsmirnov', d: 'Open-source tools' },
    ],
  },
  faq: {
    title: 'FAQ',
    items: [
      ['Do I need to code?', 'No. You talk to Claude Code in plain language. I handle the setup; you just use it.'],
      ['Which subscriptions do I need?', 'Claude Pro covers most setups. If anything else is needed, I’ll tell you during the review, before we start.'],
      ['How much does it cost?', 'Depends on scope. I give an exact price and timeline after the review, once we know what we automate.'],
      ['Do you work in English?', 'Yes — calls and documentation can be in English.'],
    ],
  },
  contact: {
    kicker: 'Request',
    title: 'Tell me what eats your time',
    lead: 'Fill in three fields — a Telegram chat with me opens and your message is already copied. Just paste and send.',
    who: 'Who you are',
    whoOptions: ['Expert or creator', 'Business or team', 'Other'],
    what: 'What you want to hand to AI',
    whatPh: 'E.g. I spend 3 hours editing each reel and want to automate it',
    name: 'Your name',
    namePh: 'Name',
    submit: 'Send via Telegram',
    copied: 'Your message is copied — paste it into the chat that opened.',
    direct: 'Or message me directly:',
    msgIntro: 'Hi Nikita! I’d like a consultation on AI implementation.',
    msgWho: 'About me',
    msgWhat: 'Task',
    stamp: 'Incoming',
  },
  footer: {
    line: 'AI agents do my work — I show how it’s built.',
    rights: 'Nikita Smirnov',
    feeds: 'Feed and episodes update automatically',
  },
  dateLocale: 'en-GB',
};

export const DICTS = { ru, en };
