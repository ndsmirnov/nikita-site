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
  elfimov: { url: 'https://www.youtube.com/watch?v=izDm6FnXSYQ', img: '/img/pod/elfimov-ep2.webp' },
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
      { t: 'Рилс из голосовой записи', d: 'Голос и видео с телефона → монтаж, субтитры по слову и готовый mp4 без ручной склейки', img: '/img/sys-montage.webp', stat: 4, plus: false, statLabel: 'площадки получают каждый рилс сами' },
      { t: 'Второй мозг', d: 'Рассказал день голосом — всё разложено по заметкам: люди, планы, деньги, здоровье', img: '/img/sys-brain.webp', stat: 5000, plus: true, statLabel: 'заметок связаны между собой' },
      { t: 'Штаб жизни', d: 'Все сферы в цифрах по неделям: энергия, продуктивность, колесо баланса из дневника', img: '/img/sys-wheel.webp', stat: 1556, plus: false, statLabel: 'дней в дневнике с 2022 года' },
      { t: 'Учёт денег', d: 'Банки синхронизируются через API, траты раскладываются и сверяются сами', img: '/img/sys-shtab.webp', stat: 0, plus: false, statLabel: 'ручного ввода трат' },
    ],
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
    kicker: 'Внутрянка',
    title: 'Системы, на которых живу сам',
    lead: 'Прежде чем предложить вам, проверяю на себе. Переключите «было / стало» и посмотрите на реальные экраны.',
    before: 'Было',
    after: 'Стало',
    note: 'Суммы на экранах скрыты',
    items: [
      { img: '/img/sys-brain.webp', t: 'Второй мозг', was: 'Мысли, люди и планы — в голове и в десятке приложений. Через месяц не вспомнить, что решил.', now: '5 000+ связанных заметок. Рассказал день голосом — агент сам разложил его по людям, планам и деньгам. Протокол встречи вместо 40–60 минут — 3 минуты.' },
      { img: '/img/sys-montage.webp', t: 'Автомонтаж рилсов', was: 'Каждый рилс — часы ручной склейки, субтитров и рендера.', now: 'Голосовая запись и видео с телефона → готовый рилс. Claude Code сам режет паузы и дубли, подбирает кадры под слова и ставит субтитры.' },
      { img: '/img/sys-wheel.webp', t: 'Стратегический штаб', was: '«Как я живу» — по ощущениям, а годовые цели забываются к марту.', now: 'Все сферы жизни в цифрах по неделям. Колесо баланса считается из дневника, итоги месяцев и кварталов собираются сами.' },
      { img: '/img/sys-shtab.webp', t: 'Финансовый штаб', was: 'Деньги — по выпискам и памяти, «куда всё ушло» непонятно.', now: 'Банки синхронизируются через API, каждая трата сверяется с отчётом, итоги месяца собираются без ручного ввода.' },
      { img: '/img/tool-okno.webp', t: 'Бот-воронка Конторки', was: 'Подписчик посмотрел рилс и ушёл — ни контакта, ни базы.', now: 'Рилс заканчивается словом-призывом, бот проверяет подписку на канал и выдаёт инструмент. База подписчиков и рассылки — внутри.' },
      { img: '/img/case-bot.webp', t: 'Автопубликация и замеры', was: 'Выложить ролик на 4 площадки — полчаса рутины каждый день.', now: 'Готовый рилс сам уходит в Instagram, YouTube Shorts, Threads и TikTok по расписанию, а через сутки и двое приходят цифры.' },
    ],
  },
  podcast: {
    kicker: 'Переговорная',
    title: 'Подкаст «Путь человеческий»',
    lead: 'Разговоры с людьми, которые нашли своё дело: о деньгах, бизнесе, нейросетях и своём пути. Для предпринимателей подкаст — ещё и сильный инструмент продвижения.',
    stats: [['198 тыс.', 'просмотров'], ['18', 'выпусков'], ['125', 'нарезок']],
    cases: [
      { key: 'elfimov', hook: 'Деньги', name: 'Игорь Елфимов', line: 'ученики с подкаста купили на 200 000+ ₽' },
      { key: 'zimin', hook: 'Охваты', name: 'Станислав Зимин', line: '33 500 просмотров на два выпуска' },
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
      'Я Никита Смирнов, мне 23, родом из Адыгеи. Вырос в Яблоновке, учился в Краснодаре, потом — Вышка, медиакоммуникации.',
      'Продюсировал онлайн-школы и видео, вёл своё агентство, сейчас работаю продакт-менеджером в ИТ и строю системы на нейросетях. Всё, что предлагаю, сначала проверяю на своей жизни.',
    ],
    note: 'Москва, 2026',
    more: 'Подробнее',
    timeline: [
      { y: '2003–2021', t: 'Адыгея → Краснодар → Москва', s: 'Вырос в Яблоновке, добился перевода в сильную школу Краснодара, поступил в Вышку', items: ['Сам добился перевода в одну из лучших школ Краснодара', 'Поступил в НИУ ВШЭ на медиакоммуникации', 'Подготовил к поступлению на медиакоммуникации 100+ абитуриентов'], img: '' },
      { y: '2021–2023', t: 'Продюсер онлайн-школ и видео', s: '10 запусков экспертов, видеопроекты на миллионы просмотров', items: ['Продюсировал онлайн-школу журналистики: автовебинары, автоворонки, геймификация', '10 запусков экспертов — 2 млн ₽ оборота', 'Шоу «Поэтическая пятёрка» — 1,5 млн просмотров во VK, интервью Ирины Шихман — 800 тыс.', 'Руководил 15 видеографами на фестивале «Архипелаг 2023»'], img: '' },
      { y: '2022–2024', t: 'Своё контент-агентство', s: 'Команда, крупные контракты и рост дохода ×3', items: ['Собрал агентство и команду, провёл свою конференцию по контенту', 'В 2024 году — крупнейший контракт агентства', 'Мой доход за год вырос ×3'], img: '' },
      { y: '2025', t: 'Подкаст, первый миллион, випассана', s: 'Запустил «Путь человеческий» и прошёл 10 дней тишины', items: ['Январь — первый выпуск подкаста «Путь человеческий»: сегодня 18 выпусков, 125 нарезок и около 198 тыс. просмотров', 'Защитил диплом Вышки по своему подкасту на 9 из 10', 'Октябрь — первый рилс-миллионник: 500 тыс. просмотров за 3 дня, потом больше миллиона', 'Ноябрь — 10 дней випассаны в полной тишине'], img: '/img/podcast-studio.webp' },
      { y: '2026', t: 'Нейросети, автоматизация и продакт-менеджмент', s: 'Оцифровал жизнь, построил воронку на ботах и пришёл в продакт', items: ['Воронка на квизах и ботах для онлайн-школы: 500 тыс. ₽ выручки клиента за 2 недели и больше 1 млн ₽ за 3 месяца', 'Второй мозг: 5 000+ заметок и 1 556 дней дневника, ввод питания с 30–40 минут в день до нуля', 'С августа — продакт-менеджер в ИТ-компании', 'Открыл «Конторку»: бот, автомонтаж и автопубликация рилсов, инструменты раздаю бесплатно'], img: '/img/path-pm.webp' },
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
      { t: 'Reels from a voice note', d: 'Voice and phone footage → editing, word-by-word captions and a final mp4, no manual cutting', img: '/img/sys-montage.webp', stat: 4, plus: false, statLabel: 'platforms get each reel automatically' },
      { t: 'Second brain', d: 'I talk through my day — it gets filed into notes: people, plans, money, health', img: '/img/sys-brain.webp', stat: 5000, plus: true, statLabel: 'linked notes' },
      { t: 'Life HQ', d: 'Every area of life in numbers, week by week: energy, productivity, a balance wheel from the journal', img: '/img/sys-wheel.webp', stat: 1556, plus: false, statLabel: 'journal days since 2022' },
      { t: 'Money tracking', d: 'Banks sync via API, spending is categorised and reconciled automatically', img: '/img/sys-shtab.webp', stat: 0, plus: false, statLabel: 'manual expense entries' },
    ],
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
    kicker: 'Under the hood',
    title: 'Systems I live on myself',
    lead: 'I test everything on myself before offering it. Flip “before / after” and look at the real screens.',
    before: 'Before',
    after: 'After',
    note: 'Amounts on screens are hidden',
    items: [
      { img: '/img/sys-brain.webp', t: 'Second brain', was: 'Thoughts, people and plans lived in my head and a dozen apps. A month later I couldn’t recall what I’d decided.', now: '5,000+ linked notes. I talk through my day and the agent files it by people, plans and money. Meeting notes take 3 minutes instead of 40–60.' },
      { img: '/img/sys-montage.webp', t: 'Reels auto-editing', was: 'Every reel meant hours of manual cutting, captions and rendering.', now: 'Voice note and phone footage → a finished reel. Claude Code cuts pauses and retakes, matches shots to words and adds captions.' },
      { img: '/img/sys-wheel.webp', t: 'Strategy HQ', was: '“How am I doing” was a feeling, and yearly goals were forgotten by March.', now: 'Every area of life in numbers, week by week. The balance wheel comes from the journal; monthly and quarterly reviews assemble themselves.' },
      { img: '/img/sys-shtab.webp', t: 'Finance HQ', was: 'Money tracked by statements and memory — no idea where it all went.', now: 'Banks sync via API, every expense is reconciled with the report, monthly totals assemble without manual entry.' },
      { img: '/img/tool-okno.webp', t: 'Office funnel bot', was: 'A viewer watched a reel and left — no contact, no base.', now: 'A reel ends with a keyword, the bot checks the channel subscription and hands out the tool. Subscriber base and broadcasts included.' },
      { img: '/img/case-bot.webp', t: 'Auto-publishing and metrics', was: 'Posting to 4 platforms took half an hour every day.', now: 'A finished reel goes to Instagram, YouTube Shorts, Threads and TikTok on schedule; numbers arrive after one and two days.' },
    ],
  },
  podcast: {
    kicker: 'Meeting room',
    title: 'Podcast “The Human Path”',
    lead: 'Conversations with people who found their calling: money, business, AI and your own path. For founders, the podcast is also a strong promotion tool. In Russian.',
    stats: [['198K', 'views'], ['18', 'episodes'], ['125', 'clips']],
    cases: [
      { key: 'elfimov', hook: 'Money', name: 'Igor Elfimov', line: 'students from the podcast bought 200,000+ ₽ of his products' },
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
      'I’m Nikita Smirnov, 23, from the Republic of Adygea in southern Russia. Grew up in Yablonovsky, went to school in Krasnodar, then HSE University in Moscow, media communications.',
      'I produced online schools and video, ran my own agency, and now I work as a product manager in IT and build AI-powered systems. Everything I offer, I test on my own life first.',
    ],
    note: 'Moscow, 2026',
    more: 'More',
    timeline: [
      { y: '2003–2021', t: 'Adygea → Krasnodar → Moscow', s: 'Grew up in a small town, moved to a strong school in Krasnodar, got into HSE', items: ['Got myself transferred to one of the best schools in Krasnodar', 'Entered HSE University, media communications', 'Prepared 100+ applicants for the media communications entrance exams'], img: '' },
      { y: '2021–2023', t: 'Producer of online schools and video', s: '10 expert launches, video projects with millions of views', items: ['Produced an online journalism school: auto-webinars, funnels, gamification', '10 expert launches — 2M ₽ in revenue', 'The show “Poetic Five” — 1.5M views on VK; an interview series with Irina Shikhman — 800K', 'Led 15 videographers at the “Arkhipelag 2023” festival'], img: '' },
      { y: '2022–2024', t: 'My own content agency', s: 'A team, big contracts and ×3 income growth', items: ['Built an agency and a team, ran my own content conference', '2024 — the agency’s biggest contract', 'My income grew ×3 in a year'], img: '' },
      { y: '2025', t: 'Podcast, first million, Vipassana', s: 'Launched “The Human Path” and spent 10 days in silence', items: ['January — first episode of “The Human Path”: now 18 episodes, 125 clips and about 198K views', 'Defended my HSE thesis on my own podcast, graded 9/10', 'October — first reel to pass a million views: 500K in 3 days', 'November — 10 days of Vipassana in complete silence'], img: '/img/podcast-studio.webp' },
      { y: '2026', t: 'AI, automation and product management', s: 'Digitised my life, built a bot funnel and moved into product', items: ['A quiz-and-bot funnel for an online school: 500K ₽ client revenue in 2 weeks and over 1M ₽ in 3 months', 'Second brain: 5,000+ notes and 1,556 journal days; food logging went from 30–40 minutes a day to zero', 'Since August — product manager at an IT company', 'Opened “The Office”: a bot, auto-editing and auto-publishing of reels, tools given away for free'], img: '/img/path-pm.webp' },
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
