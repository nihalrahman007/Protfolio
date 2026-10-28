'use strict';

/* =========================================================
   1. CONFIG — EDIT YOUR CONTENT HERE
   ---------------------------------------------------------
   Everything below is SAMPLE CONTENT. Replace it with your own.
   - Leave a value empty ('' or []) to hide that item. Nothing
     renders as a broken link or an empty card.
   - Never leave real-looking fake data in a published site.
   ========================================================= */
const CONFIG = {
  site: {
    name: 'NIHAL RAHMAN ',                       // SAMPLE
    initials: 'PK',                          // SAMPLE (1–3 letters)
    title: 'Data Analyst',           // SAMPLE
    description:
      'Portfolio of Your Name, a full stack developer. Explore selected projects, skills, experience and ways to get in touch.' // SAMPLE
  },

  theme: {
    defaultMode: 'dark',     // 'dark' | 'light' | 'system' (used until a visitor picks a theme)
    accentDark: '#f5a524',   // accent on the dark theme
    accentLight: '#b45309'   // accent on the light theme (keep it dark enough for contrast on white)
  },

  hero: {
    greeting: "Hi, I'm",     // rendered as "Hi, I'm <name>."
    // Wrap words in {braces} to highlight them with the accent colour.
    headline: 'I build {reliable, fast web products} people enjoy using.', // SAMPLE
    roles: ['Full Stack Developer', 'Frontend Engineer', 'Problem Solver'], // SAMPLE — animated role text; [] hides it
    description:
      'Write two or three sentences here about what you do: the kinds of products you build, the stack you prefer and the problems you enjoy solving.', // SAMPLE
    availability: { show: true, text: 'Open to new opportunities' }, // SAMPLE
    image: '',               // e.g. 'assets/images/profile.jpg' (4:5 portrait works best). Empty = initials avatar
    imageAlt: 'Portrait of Your Name'
  },

  about: {
    paragraphs: [            // SAMPLE
      'Introduce yourself here: who you are, what you do and what drives you.',
      'Add a short note on your background and career journey: how you got started and what you have focused on since.'
    ],
    highlights: [            // SAMPLE — each card has an icon (any Lucide icon name) and either `items` or `text`
      { icon: 'target', title: 'Specialisation', items: ['Area one', 'Area two', 'Area three'] },
      { icon: 'puzzle', title: 'How I solve problems', text: 'Describe your approach: how you break problems down, test ideas and ship.' },
      { icon: 'heart', title: 'Interests', text: 'Mention the topics, tools or hobbies that keep you curious.' },
      { icon: 'compass', title: 'Goals', text: 'Say what kind of work and teams you are looking for next.' }
    ],
    facts: [                 // SAMPLE — shown in the quick-facts card. [] hides it
      { label: 'Location', value: 'City, Country' },
      { label: 'Focus', value: 'Your main focus' },
      { label: 'Education', value: 'Your degree / course' }
    ],
    stats: [],               // Only add numbers you can verify, e.g. { value: '3+', label: 'Years of experience' }
    image: '',               // optional extra photo, e.g. 'assets/images/about.jpg'
    imageAlt: 'Photo of Your Name',
    resume: ''               // e.g. 'assets/resume.pdf' (put the file in /assets). Empty hides the button
  },

  // Categories are rendered as cards. `icon` is any Lucide icon name. Remove categories you don't need.
  skills: [                  // SAMPLE — replace with your real skills
    { title: 'Frontend', icon: 'layout-dashboard', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'] },
    { title: 'Backend', icon: 'server', items: ['Node.js', 'Express', 'REST APIs', 'Authentication'] },
    { title: 'Databases', icon: 'database', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
    { title: 'Languages', icon: 'code', items: ['JavaScript', 'Python', 'SQL'] },
    { title: 'Data & Analytics', icon: 'chart-column', items: ['Pandas', 'Excel', 'Power BI'] },
    { title: 'Tools & Platforms', icon: 'wrench', items: ['Git', 'GitHub', 'VS Code', 'Postman'] }
  ],

  projects: {
    filterMinimum: 3,        // category filters appear when there are at least this many projects
    items: [                 // SAMPLE — links left empty are hidden automatically
      {
        title: 'Project One',
        category: 'Web Development',
        description: 'Describe what this project does and who it is for in one or two sentences.',
        features: ['Key feature or problem solved', 'Another notable detail'],
        tech: ['HTML', 'CSS', 'JavaScript'],
        image: '',           // e.g. 'assets/images/project-one.png' (16:9). Empty = neutral placeholder
        alt: '',             // describe the screenshot; empty = generated text
        live: '',            // e.g. 'https://example.com'
        code: '',            // e.g. 'https://github.com/you/project-one'
        caseStudy: ''
      },
      {
        title: 'Project Two',
        category: 'Web Development',
        description: 'Describe what this project does and who it is for in one or two sentences.',
        features: ['Key feature or problem solved', 'Another notable detail'],
        tech: ['React', 'Node.js', 'MongoDB'],
        image: '', alt: '', live: '', code: '', caseStudy: ''
      },
      {
        title: 'Project Three',
        category: 'Data Analytics',
        description: 'Describe the question you answered, the data you used and what you found.',
        features: ['Key insight or outcome', 'Another notable detail'],
        tech: ['Python', 'Pandas', 'Power BI'],
        image: '', alt: '', live: '', code: '', caseStudy: ''
      },
      {
        title: 'Project Four',
        category: 'Data Science',
        description: 'Describe the model or experiment, the data behind it and how you evaluated it.',
        features: ['Key result or learning', 'Another notable detail'],
        tech: ['Python', 'scikit-learn'],
        image: '', alt: '', live: '', code: '', caseStudy: ''
      }
    ]
  },

  // type: work | internship | freelance | education | academic | training
  experience: [              // SAMPLE — do not publish invented history
    {
      type: 'work',
      title: 'Job Title',
      org: 'Company Name',
      start: 'Mon YYYY',
      end: 'Present',
      points: ['Describe a responsibility or achievement.', 'Describe another one, ideally with a real outcome.'],
      tech: ['Tech', 'Stack']
    },
    {
      type: 'education',
      title: 'Degree or Qualification',
      org: 'Institution Name',
      start: 'YYYY',
      end: 'YYYY',
      points: ['Mention relevant coursework, projects or honours.'],
      tech: []
    }
  ],

  // type: certification | award | hackathon | publication | milestone.  [] hides the whole block
  achievements: [            // SAMPLE
    { type: 'certification', title: 'Certification Name', issuer: 'Issuing organisation', year: 'YYYY', url: '' },
    { type: 'hackathon', title: 'Hackathon or Award Name', issuer: 'Organiser', year: 'YYYY', url: '' }
  ],

  contact: {
    message:
      "Whether you're a recruiter, a client or a fellow builder, pick whichever way suits you best and I'll get back to you.",
    email: 'you@example.com',                          // SAMPLE → mailto:
    phone: '+910000000000',                            // SAMPLE → tel:  (international format)
    whatsapp: {                                        // SAMPLE → https://wa.me/<digits>?text=...
      number: '910000000000',                          // country code + number, digits only
      message: "Hi! I found your portfolio and would like to connect."
    },
    linkedin: 'https://www.linkedin.com/in/your-username/',  // SAMPLE
    github: 'https://github.com/your-username',              // SAMPLE
    instagram: '',                                           // optional, e.g. 'https://www.instagram.com/your-username/'
    location: 'City, Country'                                // SAMPLE (optional, not a link)
  },

  footer: {
    tagline: 'Thanks for visiting. Let’s build something great together.'
  }
};

/* =========================================================
   2. Helpers
   ========================================================= */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const getPath = (obj, path) => path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const esc = (value) =>
  String(value ?? '').replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

/** Allows http(s), mailto, tel and relative paths. Anything else (e.g. javascript:) is dropped. */
function safeUrl(value) {
  const url = String(value ?? '').trim();
  if (!url) return '';
  const scheme = url.match(/^([a-z][a-z0-9+.-]*):/i);
  if (scheme && !['http', 'https', 'mailto', 'tel'].includes(scheme[1].toLowerCase())) return '';
  return url;
}
const isExternal = (url) => /^https?:/i.test(url);
const linkAttrs = (url) => (isExternal(url) ? ' target="_blank" rel="noopener noreferrer"' : '');
const prettyUrl = (url) => url.replace(/^https?:\/\/(www\.)?/i, '').replace(/\/$/, '');
const accentize = (text) => esc(text).replace(/\{([^}]+)\}/g, '<span class="accent-text">$1</span>');
const asList = (value) => (Array.isArray(value) ? value.filter(Boolean) : []);

/* Brand icons (Lucide no longer ships these), drawn in the same stroke style */
const svgWrap = (inner) =>
  `<svg xmlns="http://www.w3.org/2000/svg" class="lucide" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${inner}</svg>`;
const BRAND_ICONS = {
  github: svgWrap('<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>'),
  linkedin: svgWrap('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>'),
  instagram: svgWrap('<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>')
};
const icon = (name, cls = '') =>
  BRAND_ICONS[name] ? BRAND_ICONS[name] : `<i data-lucide="${esc(name)}" class="${esc(cls)}" aria-hidden="true"></i>`;

const refreshIcons = () => {
  if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
};

/** Neutral SVG placeholder used when a project has no screenshot yet. */
function placeholderImage(title) {
  const initials = String(title || 'P').split(/\s+/).map((w) => w[0]).join('').slice(0, 3).toUpperCase();
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360">` +
    `<rect width="640" height="360" fill="#171c22"/>` +
    `<g stroke="#232a33" stroke-width="1">${Array.from({ length: 14 }, (_, i) => `<path d="M${i * 48} 0V360"/>`).join('')}${Array.from({ length: 8 }, (_, i) => `<path d="M0 ${i * 48}H640"/>`).join('')}</g>` +
    `<text x="320" y="200" text-anchor="middle" font-family="Space Grotesk, Inter, sans-serif" font-size="84" font-weight="700" fill="#8f99a6">${esc(initials)}</text>` +
    `<text x="320" y="240" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" fill="#6b7480">Add a screenshot</text>` +
    `</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

/* =========================================================
   3. Theme (accent colours + light/dark with persistence)
   ========================================================= */
const THEME_KEY = 'portfolio-theme';
const root = document.documentElement;

function readableInk(hex) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(String(hex).trim());
  if (!m) return '#14110a';
  const [r, g, b] = [m[1], m[2], m[3]].map((c) => {
    const v = parseInt(c, 16) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.4 ? '#14110a' : '#ffffff';
}

function applyAccent() {
  const { accentDark, accentLight } = CONFIG.theme;
  if (accentDark) {
    root.style.setProperty('--accent-dark', accentDark);
    root.style.setProperty('--accent-ink-dark', readableInk(accentDark));
  }
  if (accentLight) {
    root.style.setProperty('--accent-light', accentLight);
    root.style.setProperty('--accent-ink-light', readableInk(accentLight));
  }
}

function getStoredTheme() {
  try {
    const value = localStorage.getItem(THEME_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch (e) {
    return null;
  }
}
function storeTheme(theme) {
  try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* ignore */ }
}

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  const toggle = $('#theme-toggle');
  if (toggle) toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  const meta = $('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0b0d10' : '#fafaf8');
}

function initTheme() {
  const mode = CONFIG.theme.defaultMode;
  const fallback =
    mode === 'system'
      ? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
      : (mode === 'light' ? 'light' : 'dark');
  applyTheme(getStoredTheme() || fallback);

  const toggle = $('#theme-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    storeTheme(next);
  });
}

/* =========================================================
   4. Rendering (content from CONFIG → DOM)
   ========================================================= */
function applyMeta() {
  const { name, title, description } = CONFIG.site;
  const pageTitle = `${name} — ${title} Portfolio`;
  document.title = pageTitle;
  const setMeta = (selector, value) => { const el = $(selector); if (el && value) el.setAttribute('content', value); };
  setMeta('meta[name="description"]', description);
  setMeta('meta[property="og:title"]', pageTitle);
  setMeta('meta[property="og:description"]', description);
}

function bindText() {
  $$('[data-text]').forEach((el) => {
    const value = getPath(CONFIG, el.dataset.text);
    if (typeof value === 'string') el.textContent = value;
  });
}

function socialLinks() {
  const { github, linkedin, instagram } = CONFIG.contact;
  return [
    { key: 'github', label: 'GitHub', url: safeUrl(github) },
    { key: 'linkedin', label: 'LinkedIn', url: safeUrl(linkedin) },
    { key: 'instagram', label: 'Instagram', url: safeUrl(instagram) }
  ].filter((s) => s.url);
}

function renderSocials(target) {
  if (!target) return;
  const items = socialLinks();
  target.hidden = items.length === 0;
  target.innerHTML = items
    .map((s) => `<li><a class="icon-btn" href="${esc(s.url)}"${linkAttrs(s.url)} aria-label="${esc(s.label)} (opens in a new tab)">${icon(s.key)}</a></li>`)
    .join('');
}

function renderHero() {
  const { site, hero } = CONFIG;

  const greeting = $('#hero-greeting');
  if (greeting) greeting.textContent = `${hero.greeting} ${site.name}.`;

  const title = $('#hero-title');
  if (title && hero.headline) title.innerHTML = accentize(hero.headline);

  const desc = $('#hero-description');
  if (desc) { desc.textContent = hero.description || ''; desc.hidden = !hero.description; }

  const badge = $('#availability');
  if (badge) {
    const show = Boolean(hero.availability && hero.availability.show);
    badge.hidden = !show;
    const text = $('#availability-text');
    if (show && text) text.textContent = hero.availability.text;
  }

  const visual = $('#hero-visual');
  if (visual) {
    const src = safeUrl(hero.image);
    visual.innerHTML = `<div class="avatar-frame"><div class="avatar-inner">${
      src
        ? `<img src="${esc(src)}" alt="${esc(hero.imageAlt)}" width="640" height="800" fetchpriority="high" decoding="async">`
        : `<div class="avatar-fallback" role="img" aria-label="${esc(site.name)} initials">${esc(site.initials)}</div>`
    }</div></div>`;
  }

  renderSocials($('#hero-socials'));
}

function renderAbout() {
  const { about, site } = CONFIG;

  const paragraphs = $('#about-paragraphs');
  if (paragraphs) paragraphs.innerHTML = asList(about.paragraphs).map((p) => `<p>${esc(p)}</p>`).join('');

  const highlights = $('#about-highlights');
  if (highlights) {
    highlights.innerHTML = asList(about.highlights)
      .map((h) => {
        const body = asList(h.items).length
          ? `<div class="badge-list mt-3">${h.items.map((i) => `<span class="badge">${esc(i)}</span>`).join('')}</div>`
          : `<p class="mt-2 text-sm text-soft-c">${esc(h.text)}</p>`;
        return `<div class="card card-pad">
          <div class="flex items-center gap-3"><span class="card-icon">${icon(h.icon || 'sparkles')}</span><h3 class="card-title">${esc(h.title)}</h3></div>
          ${body}
        </div>`;
      })
      .join('');
  }

  const imageWrap = $('#about-image-wrap');
  if (imageWrap) {
    const src = safeUrl(about.image);
    imageWrap.hidden = !src;
    imageWrap.innerHTML = src
      ? `<div class="about-img"><img src="${esc(src)}" alt="${esc(about.imageAlt || site.name)}" width="800" height="600" loading="lazy" decoding="async"></div>`
      : '';
  }

  const facts = $('#about-facts');
  if (facts) {
    const list = asList(about.facts);
    facts.hidden = list.length === 0;
    facts.innerHTML = list.length
      ? `<div class="card card-pad facts"><dl>${list.map((f) => `<div class="fact"><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`).join('')}</dl></div>`
      : '';
  }

  const stats = $('#about-stats');
  if (stats) {
    const list = asList(about.stats).filter((s) => s.value && s.label);
    stats.hidden = list.length === 0;
    stats.innerHTML = list
      .map((s) => `<li class="card stat"><p class="stat-value">${esc(s.value)}</p><p class="stat-label">${esc(s.label)}</p></li>`)
      .join('');
  }

  const resume = $('#about-resume');
  if (resume) {
    const url = safeUrl(about.resume);
    resume.hidden = !url;
    resume.innerHTML = url
      ? `<a class="btn btn-ghost w-full" href="${esc(url)}" download>${icon('download')} Download résumé</a>`
      : '';
  }
}

function renderSkills() {
  const grid = $('#skills-grid');
  if (!grid) return;
  grid.innerHTML = asList(CONFIG.skills)
    .filter((c) => asList(c.items).length)
    .map((c, i) => `<article class="card card-hover card-pad skill-card reveal" style="--reveal-delay:${(i % 3) * 80}ms">
        <div class="flex items-center gap-3">
          <span class="card-icon">${icon(c.icon || 'code')}</span>
          <h3 class="card-title">${esc(c.title)}</h3>
        </div>
        <ul class="badge-list mt-4">${c.items.map((s) => `<li class="badge">${esc(s)}</li>`).join('')}</ul>
      </article>`)
    .join('');
}

function renderProjects() {
  const grid = $('#project-grid');
  if (!grid) return;
  const items = asList(CONFIG.projects.items);

  grid.innerHTML = items
    .map((p, i) => {
      const live = safeUrl(p.live);
      const code = safeUrl(p.code);
      const study = safeUrl(p.caseStudy);
      const usingPlaceholder = !safeUrl(p.image);
      const src = safeUrl(p.image) || placeholderImage(p.title);
      const alt = p.alt || (usingPlaceholder ? `${p.title} (screenshot placeholder)` : `${p.title} project preview`);
      const features = asList(p.features);
      const tech = asList(p.tech);
      const links = [
        live && `<a class="btn btn-primary btn-sm" href="${esc(live)}"${linkAttrs(live)} aria-label="Live demo of ${esc(p.title)}">Live demo ${icon('external-link')}</a>`,
        code && `<a class="btn btn-ghost btn-sm" href="${esc(code)}"${linkAttrs(code)} aria-label="Source code for ${esc(p.title)}">Source code ${icon('code')}</a>`,
        study && `<a class="btn btn-ghost btn-sm" href="${esc(study)}"${linkAttrs(study)} aria-label="Case study for ${esc(p.title)}">Case study ${icon('file-text')}</a>`
      ].filter(Boolean);

      return `<article class="card card-hover project-card reveal" data-category="${esc(p.category || 'Other')}" style="--reveal-delay:${(i % 3) * 80}ms">
        <div class="project-media"><img src="${esc(src)}" alt="${esc(alt)}" width="640" height="360" loading="lazy" decoding="async"></div>
        <div class="project-body">
          <div>
            <p class="project-cat">${esc(p.category || 'Other')}</p>
            <h3 class="project-title">${esc(p.title)}</h3>
          </div>
          <p class="project-desc">${esc(p.description)}</p>
          ${features.length ? `<ul class="feature-list">${features.map((f) => `<li>${icon('check')}<span>${esc(f)}</span></li>`).join('')}</ul>` : ''}
          ${tech.length ? `<ul class="badge-list">${tech.map((t) => `<li class="badge">${esc(t)}</li>`).join('')}</ul>` : ''}
          ${links.length ? `<div class="project-links">${links.join('')}</div>` : ''}
        </div>
      </article>`;
    })
    .join('');

  if (!items.length) {
    const empty = $('#project-empty');
    if (empty) { empty.textContent = 'Projects will appear here soon.'; empty.hidden = false; }
  }
}

const TIMELINE_TYPES = {
  work: { label: 'Work', icon: 'briefcase' },
  internship: { label: 'Internship', icon: 'briefcase' },
  freelance: { label: 'Freelance', icon: 'laptop' },
  education: { label: 'Education', icon: 'graduation-cap' },
  academic: { label: 'Academic project', icon: 'flask-conical' },
  training: { label: 'Training', icon: 'book-open' }
};

function renderExperience() {
  const list = $('#timeline');
  if (!list) return;
  list.innerHTML = asList(CONFIG.experience)
    .map((e, i) => {
      const type = TIMELINE_TYPES[e.type] || TIMELINE_TYPES.work;
      const dates = [e.start, e.end].filter(Boolean).join(' — ');
      const points = asList(e.points);
      const tech = asList(e.tech);
      return `<li class="timeline-item reveal" style="--reveal-delay:${(i % 3) * 60}ms">
        <div class="timeline-date-col">
          <p class="timeline-date">${esc(dates)}</p>
          <p class="timeline-type">${icon(type.icon)}<span>${esc(type.label)}</span></p>
        </div>
        <div class="card card-pad">
          <h3 class="timeline-role">${esc(e.title)}</h3>
          <p class="timeline-org">${esc(e.org)}${e.location ? ` · ${esc(e.location)}` : ''}</p>
          ${points.length ? `<ul class="timeline-points mt-3">${points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>` : ''}
          ${tech.length ? `<ul class="badge-list mt-4">${tech.map((t) => `<li class="badge">${esc(t)}</li>`).join('')}</ul>` : ''}
        </div>
      </li>`;
    })
    .join('');
}

const ACHIEVEMENT_ICONS = {
  certification: 'badge-check',
  award: 'trophy',
  hackathon: 'zap',
  publication: 'book-open',
  milestone: 'flag'
};

function renderAchievements() {
  const wrap = $('#achievements');
  const grid = $('#achievements-grid');
  if (!wrap || !grid) return;
  const items = asList(CONFIG.achievements);
  wrap.hidden = items.length === 0;
  grid.innerHTML = items
    .map((a, i) => {
      const url = safeUrl(a.url);
      const meta = [a.issuer, a.year].filter(Boolean).join(' · ');
      const inner = `<span class="card-icon">${icon(ACHIEVEMENT_ICONS[a.type] || 'award')}</span>
        <div><h4 class="achievement-title">${esc(a.title)}</h4>${meta ? `<p class="achievement-meta">${esc(meta)}</p>` : ''}</div>`;
      const cls = 'card card-hover achievement reveal';
      const delay = `style="--reveal-delay:${(i % 3) * 80}ms"`;
      return url
        ? `<li><a class="${cls}" ${delay} href="${esc(url)}"${linkAttrs(url)} aria-label="${esc(a.title)} (opens in a new tab)">${inner}</a></li>`
        : `<li><div class="${cls}" ${delay}>${inner}</div></li>`;
    })
    .join('');
}

function buildContactItems() {
  const c = CONFIG.contact;
  const items = [];

  const email = String(c.email || '').trim();
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    items.push({ label: 'Email', value: email, desc: 'Opens your email app', href: `mailto:${email}`, icon: 'mail', arrow: 'arrow-up-right' });
  }

  const phone = String(c.phone || '').replace(/[^\d+]/g, '');
  if (phone.replace(/\D/g, '').length >= 7) {
    items.push({ label: 'Phone', value: String(c.phone).trim(), desc: 'Call me directly', href: `tel:${phone}`, icon: 'phone', arrow: 'arrow-up-right' });
  }

  const wa = c.whatsapp || {};
  const waDigits = String(wa.number || '').replace(/\D/g, '');
  if (waDigits.length >= 7) {
    const text = wa.message ? `?text=${encodeURIComponent(wa.message)}` : '';
    items.push({ label: 'WhatsApp', value: `+${waDigits}`, desc: 'Start a chat', href: `https://wa.me/${waDigits}${text}`, icon: 'message-circle', arrow: 'arrow-up-right' });
  }

  [
    { key: 'linkedin', label: 'LinkedIn', desc: 'Connect professionally' },
    { key: 'github', label: 'GitHub', desc: 'Browse my code' },
    { key: 'instagram', label: 'Instagram', desc: 'Follow along' }
  ].forEach((s) => {
    const url = safeUrl(c[s.key]);
    if (url) items.push({ label: s.label, value: prettyUrl(url), desc: s.desc, href: url, icon: s.key, arrow: 'arrow-up-right' });
  });

  const location = String(c.location || '').trim();
  if (location) items.push({ label: 'Location', value: location, desc: 'Based here', href: '', icon: 'map-pin' });

  return items;
}

function renderContact() {
  const message = $('#contact-message');
  if (message && CONFIG.contact.message) message.textContent = CONFIG.contact.message;

  const grid = $('#contact-grid');
  if (!grid) return;
  grid.innerHTML = buildContactItems()
    .map((item, i) => {
      const delay = `style="--reveal-delay:${(i % 3) * 80}ms"`;
      const body = `<span class="card-icon">${icon(item.icon)}</span>
        <div class="min-w-0 pr-6">
          <h3 class="contact-label">${esc(item.label)}</h3>
          <p class="contact-value">${esc(item.value)}</p>
          <p class="contact-desc">${esc(item.desc)}</p>
        </div>`;
      if (!item.href) return `<li><div class="card contact-card reveal" ${delay}>${body}</div></li>`;
      const external = isExternal(item.href);
      const aria = `${item.label}: ${item.value}${external ? ' (opens in a new tab)' : ''}`;
      return `<li><a class="card card-hover contact-card reveal" ${delay} href="${esc(item.href)}"${linkAttrs(item.href)} aria-label="${esc(aria)}">
        ${body}<span class="contact-arrow">${icon(item.arrow)}</span>
      </a></li>`;
    })
    .join('');
}

function renderFooter() {
  renderSocials($('#footer-socials'));
  const year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());
}

/* =========================================================
   5. Behaviour
   ========================================================= */

/* Mobile menu + smooth scrolling */
function initNavigation() {
  const header = $('#site-header');
  const toggle = $('#menu-toggle');
  const menu = $('#mobile-menu');
  let isOpen = false;

  const setOpen = (open, { restoreFocus = false } = {}) => {
    isOpen = open;
    if (menu) menu.hidden = !open;
    if (toggle) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      toggle.classList.toggle('is-open', open);
      if (!open && restoreFocus) toggle.focus();
    }
  };

  if (toggle && menu) {
    toggle.addEventListener('click', () => setOpen(!isOpen));
    // Click outside the header closes the menu
    document.addEventListener('click', (e) => {
      if (isOpen && header && !header.contains(e.target)) setOpen(false);
    });
    // Escape closes the menu and returns focus to the toggle
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) setOpen(false, { restoreFocus: true });
    });
    // Switching to the desktop layout closes the mobile menu
    window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => {
      if (e.matches) setOpen(false);
    });
  }

  // One delegated handler for every in-page link (nav, CTAs, footer)
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const hash = link.getAttribute('href');
    if (!hash || hash === '#') return;
    const target = document.getElementById(hash.slice(1));
    if (!target) return;

    e.preventDefault();
    if (isOpen) setOpen(false);
    target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    if (history.pushState) history.pushState(null, '', hash);
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
}

/* Active nav link via IntersectionObserver */
function initScrollSpy() {
  const ids = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
  const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
  const links = $$('.nav-link, .mobile-link');
  if (!sections.length || !links.length) return;

  const setActive = (id) => {
    links.forEach((link) => {
      const active = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };
  setActive('home');

  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );
  sections.forEach((section) => observer.observe(section));
}

/* Scroll-triggered reveal animations */
let revealObserver = null;
function initReveal() {
  const elements = $$('.reveal');
  if (!elements.length) return;
  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );
  elements.forEach((el) => revealObserver.observe(el));
}

/* Project category filters */
function initProjectFilters() {
  const bar = $('#project-filters');
  const cards = $$('#project-grid .project-card');
  if (!bar || !cards.length) return;

  const categories = [...new Set(cards.map((c) => c.dataset.category))];
  const enough = cards.length >= (CONFIG.projects.filterMinimum || 3) && categories.length > 1;
  if (!enough) return;

  const labels = ['All', ...categories];
  bar.innerHTML = labels
    .map((label, i) => `<button type="button" class="filter-btn" data-filter="${esc(label)}" aria-pressed="${i === 0}">${esc(label)}</button>`)
    .join('');
  bar.hidden = false;

  const status = $('#project-status');
  const empty = $('#project-empty');

  const applyFilter = (filter) => {
    let shown = 0;
    cards.forEach((card) => {
      const match = filter === 'All' || card.dataset.category === filter;
      const wasHidden = card.hidden;
      card.hidden = !match;
      if (match) {
        shown += 1;
        card.classList.add('is-visible'); // make sure newly shown cards are never left invisible
        if (wasHidden && !prefersReducedMotion()) {
          card.classList.remove('filter-in');
          void card.offsetWidth; // restart the animation
          card.classList.add('filter-in');
        }
      }
    });
    $$('.filter-btn', bar).forEach((btn) => btn.setAttribute('aria-pressed', String(btn.dataset.filter === filter)));
    if (empty) { empty.textContent = 'No projects to show in this category yet.'; empty.hidden = shown !== 0; }
    if (status) status.textContent = `Showing ${shown} ${shown === 1 ? 'project' : 'projects'}${filter === 'All' ? '' : ` in ${filter}`}.`;
  };

  bar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (btn) applyFilter(btn.dataset.filter);
  });
  cards.forEach((card) => card.addEventListener('animationend', () => card.classList.remove('filter-in')));
}

/* Animated role text in the hero */
function initRoleText() {
  const line = $('#role-line');
  const el = $('#role-text');
  const sr = $('#role-sr');
  const roles = asList(CONFIG.hero.roles);
  if (!line || !el) return;
  if (!roles.length) { line.hidden = true; return; }

  if (sr) sr.textContent = `I work as a ${roles.join(', ')}.`;
  if (roles.length === 1 || prefersReducedMotion()) {
    el.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const current = roles[roleIndex];
    charIndex += deleting ? -1 : 1;
    el.textContent = current.slice(0, charIndex);

    let delay = deleting ? 40 : 85;
    if (!deleting && charIndex === current.length) { deleting = true; delay = 1600; }
    else if (deleting && charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 350; }
    window.setTimeout(tick, delay);
  };
  tick();
}

/* Back-to-top + current year */
function initBackToTop() {
  const button = $('#back-to-top');
  if (!button) return;
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    if (history.pushState && location.hash) history.pushState(null, '', location.pathname + location.search);
    const home = $('#home');
    if (home) { home.setAttribute('tabindex', '-1'); home.focus({ preventScroll: true }); }
  });
}

/* =========================================================
   6. Init
   ========================================================= */
function init() {
  applyAccent();
  initTheme();
  applyMeta();
  bindText();

  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderExperience();
  renderAchievements();
  renderContact();
  renderFooter();
  refreshIcons();

  initNavigation();
  initScrollSpy();
  initReveal();
  initProjectFilters();
  initRoleText();
  initBackToTop();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();