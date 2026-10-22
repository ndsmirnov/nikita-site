// Анимации и интерактив сайта. Только transform/opacity, всё уважает prefers-reduced-motion.
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const $$ = <T extends Element = HTMLElement>(s: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(s as any)) as T[];

// Заголовок по словам — стартует сразу после загрузки
requestAnimationFrame(() => document.documentElement.classList.add('ready'));

// Счётчики: от нуля до значения, ease-out
function count(el: HTMLElement) {
  const to = Number(el.dataset.to || 0);
  if (reduce || !to) { el.textContent = to.toLocaleString('ru-RU'); return; }
  const t0 = performance.now(), dur = 1100;
  const step = (now: number) => {
    const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
    el.textContent = Math.round(to * e).toLocaleString('ru-RU');
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// Появление при прокрутке + запуск счётчиков внутри блока
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  const el = e.target as HTMLElement;
  el.classList.add('in');
  $$('.count', el).forEach((c) => { if (!c.dataset.done) { c.dataset.done = '1'; count(c); } });
  io.unobserve(el);
}), { rootMargin: '0px 0px -8% 0px' });
$$('.reveal, [data-steps]').forEach((el) => io.observe(el));

// Наклон полароида за курсором
if (finePointer && !reduce) {
  $$('.tilt').forEach((el) => {
    el.addEventListener('pointermove', (ev) => {
      const r = el.getBoundingClientRect();
      const x = (ev.clientX - r.left) / r.width - 0.5, y = (ev.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--ry', `${x * 10}deg`);
      el.style.setProperty('--rx', `${-y * 8}deg`);
    });
    el.addEventListener('pointerleave', () => { el.style.setProperty('--ry', '0deg'); el.style.setProperty('--rx', '0deg'); });
  });

  // «Магнитные» кнопки
  $$('.magnet').forEach((el) => {
    el.addEventListener('pointermove', (ev) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${(ev.clientX - r.left - r.width / 2) * 0.18}px`);
      el.style.setProperty('--my', `${(ev.clientY - r.top - r.height / 2) * 0.25}px`);
    });
    el.addEventListener('pointerleave', () => { el.style.setProperty('--mx', '0px'); el.style.setProperty('--my', '0px'); });
  });

  // Пятно света за курсором на карточках
  $$('.spot').forEach((el) => {
    el.addEventListener('pointermove', (ev) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--sx', `${ev.clientX - r.left}px`);
      el.style.setProperty('--sy', `${ev.clientY - r.top}px`);
    });
  });
}

// Скрепку можно сорвать — фото качается; второй клик возвращает
$$('.clip-btn').forEach((b) => b.addEventListener('click', () => {
  const pol = b.closest('.polaroid');
  pol?.classList.toggle('torn');
  pol?.classList.remove('swing'); void (pol as HTMLElement)?.offsetWidth; pol?.classList.add('swing');
}));

// «Что работает само»: вкладки + автопрокрутка, пока человек не нажал сам
$$('[data-proof]').forEach((box) => {
  const items = $$('.proof-item', box), shots = $$('.win-shot', box);
  let cur = 0, auto = !reduce, timer = 0;
  const show = (i: number) => {
    cur = i;
    items.forEach((x, k) => { x.classList.toggle('on', k === i); x.setAttribute('aria-selected', String(k === i)); });
    shots.forEach((x, k) => {
      x.classList.toggle('on', k === i);
      if (k === i) $$('.count', x).forEach((c) => count(c));
    });
  };
  const tick = () => { if (auto) show((cur + 1) % items.length); };
  const start = () => { clearInterval(timer); if (auto) { box.classList.add('auto'); timer = window.setInterval(tick, 4500); } };
  items.forEach((x, k) => x.addEventListener('click', () => { auto = false; box.classList.remove('auto'); clearInterval(timer); show(k); }));
  new IntersectionObserver((es) => es.forEach((e) => (e.isIntersecting ? start() : clearInterval(timer)))).observe(box);
});

// Было / стало
$$('.sys').forEach((card) => $$('.ba button', card).forEach((b) => b.addEventListener('click', () => {
  card.dataset.ba = b.dataset.v;
  $$('.ba button', card).forEach((x) => x.classList.toggle('on', x === b));
})));

// Вкладки кейсов подкаста (+ переход по #elfimov / #zimin / #fedorov)
const tabs = $$('.case-tabs [data-case]');
if (tabs.length) {
  const panels = $$('.case-panel');
  const pick = (key: string) => {
    if (!panels.some((p) => p.dataset.case === key)) return;
    tabs.forEach((x) => { const on = x.dataset.case === key; x.classList.toggle('on', on); x.setAttribute('aria-selected', String(on)); });
    panels.forEach((p) => p.classList.toggle('on', p.dataset.case === key));
  };
  tabs.forEach((x) => x.addEventListener('click', () => pick(x.dataset.case || '')));
  const h = location.hash.slice(1);
  if (h) { pick(h); document.getElementById('cases')?.scrollIntoView(); }
}

// Форма заявки → бот Конторки → Telegram Никиты
$$<HTMLFormElement>('.lead-form').forEach((form) => {
  const d = form.dataset;
  const note = form.querySelector('.form-note') as HTMLElement;
  const btn = form.querySelector('button[type=submit]') as HTMLButtonElement;
  const fallback = form.querySelector('.form-fallback') as HTMLElement;
  const body = form.querySelector('.form-body') as HTMLElement;
  const ok = form.querySelector('.form-ok') as HTMLElement;
  form.querySelector('.form-again')?.addEventListener('click', () => { form.reset(); ok.hidden = true; body.hidden = false; note.textContent = ''; });

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const fd = new FormData(form);
    const get = (k: string) => String(fd.get(k) || '').trim();
    const what = form.querySelector('textarea') as HTMLTextAreaElement;
    const contact = form.querySelector('input[name=contact]') as HTMLInputElement;
    for (const el of [what, contact]) {
      if (el.value.trim().length < 3) { el.focus(); el.classList.add('bad'); el.addEventListener('input', () => el.classList.remove('bad'), { once: true }); return; }
    }
    const data = { who: get('who'), what: get('what'), name: get('name'), contact: get('contact'), site: get('site'), page: d.page };
    btn.disabled = true; note.textContent = d.sending || ''; note.className = 'form-note';
    try {
      const r = await fetch(d.endpoint || '', { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(data) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.ok) throw new Error(j.error || r.status);
      body.hidden = true; ok.hidden = false; note.textContent = '';
    } catch {
      const msg = [d.intro, `${data.who}${data.name ? ', ' + data.name : ''}`, data.what, data.contact].join('\n');
      navigator.clipboard?.writeText(msg).catch(() => {});
      note.textContent = d.fail || ''; note.className = 'form-note warn';
      fallback.hidden = false;
    } finally { btn.disabled = false; }
  });
});
