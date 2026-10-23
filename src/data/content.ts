// Все тексты сайта на двух языках. Правка текста = правка здесь, вёрстку трогать не нужно.
// Правило: точек в конце заголовков нет. Сумму своего дохода не называем — только «×3».

export const LINKS = {
  dm: 'https://t.me/poetsmirnov',
  channel: 'https://t.me/put_chelovecheskiy',
  bot: 'https://t.me/kontorka_ai_bot',
  instagram: 'https://www.instagram.com/poet.smirnov/',
  youtube: 'https://www.youtube.com/@prosto.nikita.smirnov',
  podcast: 'https://www.youtube.com/channel/UCEnuBtxONoludkFyRd0iCew',
  github: 'https://github.com/ndsmirnov',
  mave: 'https://putchelovesheckiy.mave.digital/',
};

// Заявки с формы уходят в бота Конторки (Cloudflare Worker, ~/put-funnel-bot/src/lead.js) → Никите в Telegram.
export const LEAD_URL = 'https://put-funnel-bot.nikita-smirnov1980.workers.dev/lead';

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

// Выпуски-кейсы подкаста (цифры YouTube — «Анализ канала YouTube (16.10.2026)» в vault).
export const EPISODES: Record<string, { url: string; img: string }> = {
  elfimov: { url: 'https://www.youtube.com/watch?v=-BoCDrcCOkU', img: '/img/pod/elfimov-ep1.webp' },
  elfimov2: { url: 'https://www.youtube.com/watch?v=izDm6FnXSYQ', img: '/img/pod/elfimov-ep2.webp' },
  barakovsky: { url: 'https://www.youtube.com/watch?v=XVEt_XGiX0k', img: '/img/pod/barakovsky.webp' },
  zimin: { url: 'https://www.youtube.com/watch?v=0nSxTBsSD0A', img: '/img/pod/zimin-1.webp' },
  zimin2: { url: 'https://www.youtube.com/watch?v=hGxd9B5zp9s', img: '/img/pod/zimin-2.webp' },
  fedorov: { url: 'https://www.youtube.com/watch?v=cUrgbuGWz1Y', img: '/img/pod/fedorov.webp' },
};

export const SOC_PREVIEW: Record<string, string> = {
  channel: '/img/soc/channel.webp',
  bot: '/img/soc/bot.webp',
  instagram: '/img/soc/instagram.webp',
  podcast: '/img/soc/podcast.webp',
  youtube: '/img/soc/youtube.webp',
  github: '/img/soc/github.webp',
};

const ru = {
  lang: 'ru',
  locale: 'ru_RU',
  path: '/',
  altPath: '/en/',
  podPath: '/podcast/',
  altPodPath: '/en/podcast/',
  altLabel: 'EN',
  meta: {
    title: 'Никита Смирнов — внедрение нейросетей для экспертов и бизнеса',
    description:
      'Оцифруй свою жизнь и сними с себя рутину: настраиваю Claude Code и ИИ-агентов под процессы экспертов и предпринимателей. Первый созвон бесплатно. Бесплатные инструменты и подкаст «Путь человеческий».',
  },
  nav: {
    tools: 'Инструменты',
    consult: 'Консультация',
    systems: 'Системы',
    podcast: 'Подкаст',
    about: 'Мой путь',
    cta: 'Записаться',
    home: 'Главная',
  },
  hero: {
    title: 'Оцифруй всю свою жизнь',
    accent: 'и сними с себя рутину',
    lead:
      'Контент, заявки, деньги и планы — на ИИ-агентах. Настраиваю Claude Code под процессы экспертов и предпринимателей: без программистов и без штата.',
    motto: 'я уже построил систему — нейросети работают за меня',
    cta: 'Записаться на консультацию',
    cta2: 'Забрать инструменты бесплатно',
    free: 'Первый созвон бесплатно',
    photoAlt: 'Никита Смирнов в студии подкаста',
  },
  stack: ['Claude Code', 'Obsidian', 'Telegram-боты', 'DaVinci Resolve', 'ffmpeg', 'Cloudflare', 'GitHub Actions', 'ДзенМани API', 'YouTube API', 'Instagram API', 'Whisper', 'Python'],
  proof: {
    label: 'Что у меня уже работает само, каждый день',
    hint: 'Нажмите на строку — покажу, как это выглядит',
    items: [
      { t: 'Рилс из голосовой записи', d: 'Голос и видео с телефона → агент сам собирает рилс в DaVinci Resolve: кадры, паузы, субтитры, готовый mp4', video: '/img/vid/montage.mp4', img: '/img/vid/montage.webp', stat: 4, plus: false, statLabel: 'площадки получают каждый рилс сами', logos: true },
      { t: 'Второй мозг', d: 'Рассказал день голосом — всё разложено по заметкам: люди, планы, деньги, здоровье. На видео — как растёт граф связей', video: '/img/vid/brain.mp4', img: '/img/vid/brain.webp', stat: 5000, plus: true, statLabel: 'заметок связаны между собой' },
      { t: 'Штаб жизни', d: 'Все сферы в цифрах по неделям: энергия, здоровье, колесо баланса — считается из дневника', video: '/img/vid/shtab.mp4', img: '/img/vid/shtab.webp', stat: 1556, plus: false, statLabel: 'дней в дневнике с 2022 года', demo: true },
      { t: 'Учёт денег', d: 'Банки синхронизируются через API, траты раскладываются и сверяются сами', video: '/img/vid/money.mp4', img: '/img/vid/money.webp', stat: 0, plus: false, statLabel: 'ручного ввода трат', demo: true, banks: ['Т-Банк', 'Сбер', 'МТС Деньги', 'МКБ', 'ОТП Банк'] },
    ],
    demoNote: 'демо-данные: имена и суммы изменены',
    banksLabel: 'Синхронизируются:',
    offer: {
      title: 'Что это даёт мне — и что даст вам',
      text: 'Монтаж, учёт денег и разбор дня идут сами, а освободившееся время уходит в рост: за квартал мой доход вырос ×3. Под ваши процессы соберу то же самое — начнём с 2–3 мест, где нейросеть снимет больше всего рутины.',
      cta: 'Хочу так же',
    },
  },
  services: {
    kicker: 'Консультация',
    title: 'С чем ко мне приходят',
    lead: 'Узнаёте себя хотя бы в одном пункте — значит, часть вашей работы уже можно отдать нейросетям.',
    groups: [
      {
        tag: 'Эксперты и блогеры',
        tone: 'green',
        title: 'Когда блог съедает всё время',
        items: [
          ['«Снимаю, монтирую, выкладываю — на сам блог сил не остаётся»', 'Контент-конвейер: рилс собирается из голосовой записи, сценарии — по залетевшим роликам вашей ниши, публикация на все площадки сама.'],
          ['«Подписчики приходят и уходят, а заявок нет»', 'Воронка в Telegram: бот выдаёт бесплатный материал, проверяет подписку, собирает базу и делает рассылки.'],
          ['«Идеи и материалы разбросаны по заметкам и чатам»', 'Второй мозг: Claude Code и Obsidian помнят клиентов, идеи и материалы, а новые тексты пишутся с опорой на них.'],
        ],
      },
      {
        tag: 'Бизнес и команды',
        tone: 'ink',
        title: 'Когда рутина тормозит рост',
        items: [
          ['«Отчёты, сверки и документы съедают дни сотрудников»', 'Рутина отделов на агентах: отчёт, сверку и документ готовит нейросеть, человек только проверяет.'],
          ['«Клиенты ждут ответа часами, заявки теряются»', 'ИИ-помощник для заявок: за минуту отвечает клиенту по вашей базе знаний и передаёт менеджеру то, что требует решения.'],
          ['«Купили нейросети, а команда ими не пользуется»', 'Claude Code в команде: ставлю, настраиваю под ваши процессы и учу сотрудников на их же задачах.'],
        ],
      },
    ],
    steps: {
      title: 'Как проходит работа',
      items: [
        ['Заявка', 'Оставляете пару строк о своём деле — заявка сразу приходит мне в Telegram.'],
        ['Разбор', 'Первый созвон бесплатно: смотрим процессы и находим 2–3 места, где нейросеть снимет больше всего работы.'],
        ['План', 'Получаете список: что автоматизируем, на каких инструментах и что будет на выходе. Стоимость — здесь же.'],
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
    kicker: 'Результаты',
    title: 'Что изменилось в моей жизни',
    lead: 'Те же системы, только в цифрах. Переключите «было / стало».',
    before: 'Было',
    after: 'Стало',
    note: '',
    items: [
      { t: 'Деньги', metric: '×3', metricLabel: 'свой доход за квартал', was: 'Доход нерегулярный, кредитки в минусе, траты — по выпискам и по памяти.', now: 'Свой доход за квартал вырос ×3, кредитки погашены. Банки подтягиваются сами, учёт — 0 минут в день.' },
      { t: 'Быт, цели и работа', metric: '5 мин', metricLabel: 'в день на весь учёт жизни', was: 'Планы, договорённости и итоги — в голове и в десятке приложений. Протокол созвона — час ручной работы.', now: 'Рассказал день голосом — за 5 минут всё разложено: люди, задачи, цели. Протокол созвона готов сразу после звонка, итоги месяца собираются сами.' },
      { t: 'Автопостинг', metric: '0 мин', metricLabel: 'на выкладку рилса', was: 'Выложить рилс на 4 площадки — ручная рутина каждый день.', now: 'Готовый рилс сам уходит в Instagram, YouTube Shorts, Threads и TikTok по расписанию, через сутки приходят цифры.' },
      { t: 'Здоровье', metric: '−13,4 кг', metricLabel: 'за 5,5 месяцев', img: '/img/vid/weight-ba.webp', was: '88,9 кг в конце апреля 2026 — максимум за всё время.', now: 'Сейчас 75,5 кг: −13,4 кг за 5,5 месяцев. Калории считает нейросеть по голосовому, вес и дефицит — в Штабе каждый вечер.' },
    ],
  },
  podcast: {
    kicker: 'Переговорная',
    title: 'Подкаст «Путь человеческий»',
    lead: 'Разговоры с людьми, которые нашли своё дело: о деньгах, бизнесе, нейросетях и своём пути. Для предпринимателей подкаст — ещё и сильный инструмент продвижения.',
    stats: [['198 000', 'просмотров'], ['18', 'выпусков'], ['125', 'нарезок']],
    cases: [
      { key: 'elfimov', hook: 'Деньги', name: 'Игорь Елфимов', line: 'с первого выпуска купили на 300 000+ ₽' },
      { key: 'zimin', hook: 'Охваты', name: 'Станислав Зимин', line: '33 500 просмотров на два выпуска' },
      { key: 'fedorov', hook: 'Авторитет', name: 'Виктор Фёдоров', line: 'основатель брендов на полках ВкусВилла' },
    ],
    kit: 'Медиакит подкаста',
    watch: 'Смотреть на YouTube',
    guest: 'Хотите прийти гостем? Напишите мне',
    imgAlt: 'Никита Смирнов в студии подкаста «Путь человеческий»',
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
    kicker: 'Мой путь',
    title: 'От продюсера онлайн-школ к системам на нейросетях',
    lead: [
      'Я Никита Смирнов, мне 23, родом из Адыгеи. Вырос в Яблоновском — посёлке у Краснодара, учился в Краснодаре, потом — Высшая школа экономики, медиакоммуникации.',
      'Продюсировал онлайн-школы и видео, вёл своё агентство, сейчас работаю продакт-менеджером в ИТ и строю системы на нейросетях. Всё, что предлагаю, сначала проверяю на своей жизни.',
    ],
    note: 'Москва, 2026',
    more: 'Подробнее',
    timeline: [
      { y: '2003–2021', t: 'Адыгея → Краснодар → Москва', s: 'Вырос в посёлке Яблоновский (Адыгея), добился перевода в сильную школу Краснодара, поступил в Высшую школу экономики', items: ['Сам добился перевода в одну из лучших школ Краснодара', 'Поступил в НИУ ВШЭ на медиакоммуникации', 'Подготовил к поступлению на медиакоммуникации 100+ абитуриентов'], img: '/img/path/path-2021.webp' },
      { y: '2021–2023', t: 'Продюсер онлайн-школ', s: '12+ запусков экспертов и одна из ведущих онлайн-школ журналистики', items: ['Продюсировал «Журку-Мурку» — одну из ведущих онлайн-школ подготовки на журфак: довёл до 300 000 ₽ в месяц, средний чек вырос ×3', '12+ запусков экспертов: автовебинары, автоворонки, геймификация', 'Свой курс «Медиа.Прорыв» для поступающих на медиакоммуникации ВШЭ — окупился с первого запуска'], img: '/img/path/path-2023.webp' },
      { y: '2022–2024', t: 'Своё контент-агентство', s: 'Команда, крупные контракты, нейросети и рост дохода ×3', items: ['Собрал агентство и команду, провёл свою конференцию по контенту', 'Занял 1-е место на защите стартапов со своим агентством (2022)', '2024 — крупнейший контракт агентства', '2024 — внедрил нейросети в производство контента, доход за год вырос ×3'], img: '/img/path/path-2024.webp' },
      { y: '2025', t: 'Подкаст, первый миллион, випассана', s: 'Запустил «Путь человеческий» и прошёл 10 дней тишины', items: ['Январь — первый выпуск подкаста «Путь человеческий»: сегодня 18 выпусков, 125 нарезок и около 198 000 просмотров', 'Защитил диплом Высшей школы экономики по своему подкасту на 9 из 10', 'Октябрь — первый рилс-миллионник: 500 000 просмотров за 3 дня, потом больше миллиона', 'Ноябрь — 10 дней випассаны в полной тишине'], img: '/img/path/path-2025.webp' },
      { y: '2026', t: 'Нейросети, автоматизация и продакт-менеджмент', s: 'Оцифровал жизнь, построил воронку на ботах и пришёл в продакт', items: ['Воронка на квизах и ботах для онлайн-школы: 500 000 ₽ выручки клиента за 2 недели и больше 1 000 000 ₽ за 3 месяца', 'Второй мозг: 5 000+ заметок и 1 556 дней дневника, ввод питания — 0 минут в день', 'С августа — продакт-менеджер в ИТ-компании', 'Открыл «Конторку»: бот, автомонтаж и автопубликация рилсов, инструменты раздаю бесплатно'], img: '/img/path/path-2026.webp' },
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
      ['Сколько это стоит?', 'Первый созвон бесплатный: разбираем ваши задачи и находим, что автоматизировать. Стоимость внедрения называю после разбора, когда понятен объём.'],
      ['Можно начать самому?', 'Да. Заберите бесплатные инструменты в боте — они ставятся одной фразой в Claude Code. Застрянете — пишите.'],
    ],
  },
  contact: {
    kicker: 'Заявка',
    title: 'Расскажите, что съедает ваше время',
    lead: 'Четыре поля — и заявка сразу у меня в Telegram. Отвечу в течение дня и предложу время для бесплатного созвона.',
    who: 'Кто вы',
    whoOptions: ['Эксперт или блогер', 'Бизнес или команда', 'Хочу на подкаст', 'Другое'],
    what: 'Что хотите отдать нейросетям',
    whatPh: 'Например: монтирую рилсы сам по 3 часа, хочу автоматизировать',
    name: 'Как к вам обращаться',
    namePh: 'Имя',
    contact: 'Куда ответить',
    contactPh: '@username в Telegram или телефон',
    submit: 'Отправить заявку',
    sending: 'Отправляю…',
    okTitle: 'Заявка у меня',
    okText: 'Она уже пришла мне в Telegram. Отвечу в течение дня — напишу туда, куда вы указали.',
    again: 'Отправить ещё одну',
    fail: 'Не получилось отправить автоматически. Текст заявки скопирован — откроется чат со мной, вставьте его и отправьте.',
    failBtn: 'Открыть чат в Telegram',
    direct: 'Или напишите напрямую:',
    msgIntro: 'Здравствуйте, Никита! Хочу на консультацию по внедрению ИИ.',
    stamp: 'Бесплатно',
    free: 'Первый созвон бесплатно',
  },
  footer: {
    line: 'Нейросети работают за меня — показываю, как это устроено',
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
  podPath: '/en/podcast/',
  altPodPath: '/podcast/',
  altLabel: 'RU',
  meta: {
    title: 'Nikita Smirnov — AI implementation for creators and businesses',
    description:
      'Digitise your life and drop the routine: I set up Claude Code and AI agents around the processes of experts and founders. First call is free. Free open-source tools and the podcast “The Human Path”.',
  },
  nav: {
    tools: 'Tools',
    consult: 'Consulting',
    systems: 'Systems',
    podcast: 'Podcast',
    about: 'My path',
    cta: 'Book a call',
    home: 'Home',
  },
  hero: {
    title: 'Digitise your whole life',
    accent: 'and drop the routine',
    lead:
      'Content, leads, money and plans run on AI agents. I set up Claude Code around the processes of experts and founders — no developers, no extra staff.',
    motto: 'I’ve built the system — AI agents do my work',
    cta: 'Book a consultation',
    cta2: 'Get the free tools',
    free: 'First call is free',
    photoAlt: 'Nikita Smirnov in the podcast studio',
  },
  stack: ['Claude Code', 'Obsidian', 'Telegram bots', 'DaVinci Resolve', 'ffmpeg', 'Cloudflare', 'GitHub Actions', 'Banking API', 'YouTube API', 'Instagram API', 'Whisper', 'Python'],
  proof: {
    label: 'What already runs on its own, every day',
    hint: 'Tap a row to see what it looks like',
    items: [
      { t: 'Reels from a voice note', d: 'Voice and phone footage → the agent assembles the reel in DaVinci Resolve: shots, pauses, captions, final mp4', video: '/img/vid/montage.mp4', img: '/img/vid/montage.webp', stat: 4, plus: false, statLabel: 'platforms get each reel automatically', logos: true },
      { t: 'Second brain', d: 'I talk through my day — it gets filed into notes: people, plans, money, health. The video shows the link graph growing', video: '/img/vid/brain.mp4', img: '/img/vid/brain.webp', stat: 5000, plus: true, statLabel: 'linked notes' },
      { t: 'Life HQ', d: 'Every area of life in numbers, week by week: energy, health, a balance wheel computed from the journal', video: '/img/vid/shtab.mp4', img: '/img/vid/shtab.webp', stat: 1556, plus: false, statLabel: 'journal days since 2022', demo: true },
      { t: 'Money tracking', d: 'Banks sync via API, spending is categorised and reconciled automatically', video: '/img/vid/money.mp4', img: '/img/vid/money.webp', stat: 0, plus: false, statLabel: 'manual expense entries', demo: true, banks: ['T-Bank', 'Sber', 'MTS Dengi', 'MKB', 'OTP Bank'] },
    ],
    demoNote: 'demo data: names and amounts changed',
    banksLabel: 'Synced:',
    offer: {
      title: 'What it gives me — and what it can give you',
      text: 'Editing, money tracking and daily reviews run on their own, and the freed-up time goes into growth: my income grew ×3 in a quarter. I’ll build the same around your processes — starting with the 2–3 places where AI removes the most routine.',
      cta: 'I want this too',
    },
  },
  services: {
    kicker: 'Consulting',
    title: 'What people come to me with',
    lead: 'If you recognise yourself in at least one line, part of your work can already be handed to AI.',
    groups: [
      {
        tag: 'Experts and creators',
        tone: 'green',
        title: 'When the blog eats all your time',
        items: [
          ['“I film, edit and post — nothing left for the actual blog”', 'Content pipeline: a reel is built from a voice note, scripts come from viral reels in your niche, publishing happens on its own.'],
          ['“Followers come and go, but no leads”', 'Telegram funnel: a bot hands out a free lead magnet, checks the subscription, builds a base and sends broadcasts.'],
          ['“Ideas and materials are scattered across notes and chats”', 'Second brain: Claude Code and Obsidian remember clients, ideas and materials, and new content builds on them.'],
        ],
      },
      {
        tag: 'Business and teams',
        tone: 'ink',
        title: 'When routine slows growth',
        items: [
          ['“Reports, reconciliations and paperwork eat up whole days”', 'Back-office on agents: AI prepares the report, reconciliation or document, a human only checks it.'],
          ['“Clients wait hours for a reply, leads get lost”', 'AI assistant for leads: answers a client in a minute from your knowledge base and hands over what needs a decision.'],
          ['“We bought AI tools, but the team doesn’t use them”', 'Claude Code for your team: I install it, tailor it to your processes and train people on their own tasks.'],
        ],
      },
    ],
    steps: {
      title: 'How it works',
      items: [
        ['Request', 'Leave a couple of lines about your work — it lands in my Telegram right away.'],
        ['Review', 'The first call is free: we walk through your processes and find 2–3 spots where AI saves the most time.'],
        ['Plan', 'You get a list: what we automate, with which tools, what you get at the end — and the price.'],
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
    kicker: 'Results',
    title: 'What changed in my life',
    lead: 'The same systems, in numbers. Flip “before / after”.',
    before: 'Before',
    after: 'After',
    note: '',
    items: [
      { t: 'Money', metric: '×3', metricLabel: 'my own income in a quarter', was: 'Irregular income, credit cards in the red, spending tracked by statements and memory.', now: 'My own income grew ×3 in a quarter, credit cards paid off. Banks sync themselves; tracking takes 0 minutes a day.' },
      { t: 'Life, goals and work', metric: '5 min', metricLabel: 'a day to track my whole life', was: 'Plans, agreements and reviews lived in my head and a dozen apps. Meeting notes took an hour of manual work.', now: 'I talk through my day — in 5 minutes everything is filed: people, tasks, goals. Meeting notes are ready right after the call; monthly reviews assemble themselves.' },
      { t: 'Auto-posting', metric: '0 min', metricLabel: 'to publish a reel', was: 'Posting a reel to 4 platforms was manual routine every day.', now: 'A finished reel goes to Instagram, YouTube Shorts, Threads and TikTok on schedule; numbers arrive a day later.' },
      { t: 'Health', metric: '−13.4 kg', metricLabel: 'in 5.5 months', img: '/img/vid/weight-ba.webp', was: '88.9 kg at the end of April 2026 — my all-time high.', now: 'Now 75.5 kg: −13.4 kg in 5.5 months. AI counts calories from a voice note; weight and deficit are in my HQ every evening.' },
    ],
  },
  podcast: {
    kicker: 'Meeting room',
    title: 'Podcast “The Human Path”',
    lead: 'Conversations with people who found their calling: money, business, AI and your own path. For founders, the podcast is also a strong promotion tool. In Russian.',
    stats: [['198,000', 'views'], ['18', 'episodes'], ['125', 'clips']],
    cases: [
      { key: 'elfimov', hook: 'Money', name: 'Igor Elfimov', line: '300,000+ ₽ in sales from his first episode' },
      { key: 'zimin', hook: 'Reach', name: 'Stanislav Zimin', line: '33,500 views on two episodes' },
      { key: 'fedorov', hook: 'Authority', name: 'Viktor Fedorov', line: 'founder of brands on VkusVill shelves' },
    ],
    kit: 'Podcast media kit',
    watch: 'Watch on YouTube',
    guest: 'Want to be a guest? Message me',
    imgAlt: 'Nikita Smirnov in the studio of the podcast “The Human Path”',
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
    kicker: 'My path',
    title: 'From online-school producer to AI-powered systems',
    lead: [
      'I’m Nikita Smirnov, 23, from the Republic of Adygea in southern Russia. Grew up in Yablonovsky, a small town next to Krasnodar, went to school in Krasnodar, then HSE University in Moscow, media communications.',
      'I produced online schools and video, ran my own agency, and now I work as a product manager in IT and build AI-powered systems. Everything I offer, I test on my own life first.',
    ],
    note: 'Moscow, 2026',
    more: 'More',
    timeline: [
      { y: '2003–2021', t: 'Adygea → Krasnodar → Moscow', s: 'Grew up in the small town of Yablonovsky, moved to a strong school in Krasnodar, got into HSE University', items: ['Got myself transferred to one of the best schools in Krasnodar', 'Entered HSE University, media communications', 'Prepared 100+ applicants for the media communications entrance exams'], img: '/img/path/path-2021.webp' },
      { y: '2021–2023', t: 'Producer of online schools', s: '12+ expert launches and one of the leading online journalism schools', items: ['Produced “Zhurka-Murka”, one of the leading online schools preparing teens for journalism faculties: grew it to 300,000 ₽ a month, average order ×3', '12+ expert launches: auto-webinars, funnels, gamification', 'My own course “Media.Breakthrough” for HSE media communications applicants — paid off on the first launch'], img: '/img/path/path-2023.webp' },
      { y: '2022–2024', t: 'My own content agency', s: 'A team, big contracts, AI and ×3 income growth', items: ['Built an agency and a team, ran my own content conference', 'Took 1st place at a startup pitch with my agency (2022)', '2024 — the agency’s biggest contract', '2024 — brought AI into content production; my income grew ×3 that year'], img: '/img/path/path-2024.webp' },
      { y: '2025', t: 'Podcast, first million, Vipassana', s: 'Launched “The Human Path” and spent 10 days in silence', items: ['January — first episode of “The Human Path”: now 18 episodes, 125 clips and about 198,000 views', 'Defended my HSE University thesis on my own podcast, graded 9/10', 'October — first reel to pass a million views: 500,000 in 3 days', 'November — 10 days of Vipassana in complete silence'], img: '/img/path/path-2025.webp' },
      { y: '2026', t: 'AI, automation and product management', s: 'Digitised my life, built a bot funnel and moved into product', items: ['A quiz-and-bot funnel for an online school: 500,000 ₽ client revenue in 2 weeks and over 1,000,000 ₽ in 3 months', 'Second brain: 5,000+ notes and 1,556 journal days; food logging takes 0 minutes a day', 'Since August — product manager at an IT company', 'Opened “The Office”: a bot, auto-editing and auto-publishing of reels, tools given away for free'], img: '/img/path/path-2026.webp' },
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
      ['How much does it cost?', 'The first call is free: we go through your tasks and find what to automate. I quote the implementation after the review, once the scope is clear.'],
      ['Do you work in English?', 'Yes — calls and documentation can be in English.'],
    ],
  },
  contact: {
    kicker: 'Request',
    title: 'Tell me what eats your time',
    lead: 'Four fields — and your request lands in my Telegram. I reply within a day and suggest a time for a free call.',
    who: 'Who you are',
    whoOptions: ['Expert or creator', 'Business or team', 'Podcast guest', 'Other'],
    what: 'What you want to hand to AI',
    whatPh: 'E.g. I spend 3 hours editing each reel and want to automate it',
    name: 'Your name',
    namePh: 'Name',
    contact: 'Where to reply',
    contactPh: 'Telegram @username, email or phone',
    submit: 'Send request',
    sending: 'Sending…',
    okTitle: 'Got it',
    okText: 'Your request is already in my Telegram. I’ll reply within a day, wherever you asked.',
    again: 'Send another one',
    fail: 'Couldn’t send automatically. Your message is copied — a chat with me will open, paste it and send.',
    failBtn: 'Open Telegram chat',
    direct: 'Or message me directly:',
    msgIntro: 'Hi Nikita! I’d like a consultation on AI implementation.',
    stamp: 'Free',
    free: 'First call is free',
  },
  footer: {
    line: 'AI agents do my work — I show how it’s built',
    rights: 'Nikita Smirnov',
    feeds: 'Feed and episodes update automatically',
  },
  dateLocale: 'en-GB',
};

export const DICTS = { ru, en };
