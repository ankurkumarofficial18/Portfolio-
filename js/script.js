/* ==========================================================
   Ankur Kumar — Portfolio interactions (vanilla JS)
   Edit CONFIG and the DATA blocks below; nothing else needs to change.
   ========================================================== */
(() => {
  'use strict';

  /* ---------- CONFIG ---------- */
  const CONFIG = {
    email: 'ankurkumarofficial18@gmail.com',
    // Replace with your real URLs. While these still contain "your-", the links are hidden.
    github: 'https://github.com/your-username',
    linkedin: 'https://www.linkedin.com/in/your-profile',
    // Paste a Formspree / EmailJS endpoint here to make the form really send. '' = not connected.
    formEndpoint: ''
  };

  /* ---------- DATA (from your CV) ---------- */
  const STRENGTHS = ['Quick Learner', 'Problem Solving', 'Analytical Thinking', 'Team Collaboration', 'Adaptability', 'Continuous Learning'];

  const FOCUS = [
    { icon: '◆', title: 'Oracle Enterprise Development', text: 'Database-driven applications with Oracle APEX, SQL and PL/SQL, plus basic Oracle Fusion and Integration Cloud exposure.' },
    { icon: '✎', title: 'Website Development', text: 'WordPress sites with responsive layouts, content, plugins and configuration — built with Astra and Elementor.' },
    { icon: '⬡', title: 'Backend Engineering', text: 'Learning the MERN stack — MongoDB, Express.js, Node.js — and building solid JavaScript foundations.' },
    { icon: '☁', title: 'Cloud, DevOps & AI', text: 'Exploring Docker, AWS, AI Agents, RAG and MCP for intelligent enterprise automation.' }
  ];

  // level: core = used in practical work, working = hands-on but basic, exploring = learning now
  const SKILLS = [
    { group: 'Enterprise & Database', items: [
      ['Oracle APEX', 'core'], ['SQL', 'core'], ['PL/SQL', 'core'],
      ['Oracle Fusion Cloud', 'working'], ['Oracle Integration Cloud', 'working'], ['Database Management', 'exploring'] ] },
    { group: 'Programming', items: [
      ['Python', 'core'], ['HTML', 'core'], ['CSS', 'core'], ['JavaScript', 'exploring'] ] },
    { group: 'Backend (MERN path)', items: [
      ['Node.js', 'exploring'], ['Express.js', 'exploring'], ['MongoDB', 'exploring'], ['REST APIs', 'exploring'], ['PostgreSQL', 'exploring'] ] },
    { group: 'Website & CMS', items: [
      ['WordPress', 'core'], ['Elementor', 'core'], ['Astra', 'core'] ] },
    { group: 'Cloud & DevOps', items: [
      ['Git', 'working'], ['GitHub', 'working'], ['Docker', 'exploring'], ['AWS', 'exploring'], ['CI/CD', 'exploring'] ] },
    { group: 'AI & Tools', items: [
      ['AI Tools', 'working'], ['VS Code', 'core'], ['Google Workspace', 'core'], ['Microsoft Office', 'core'],
      ['OpenAI API', 'exploring'], ['LangChain', 'exploring'], ['LangGraph', 'exploring'], ['RAG', 'exploring'], ['AI Agents', 'exploring'], ['MCP', 'exploring'] ] }
  ];

  const JOURNEY = [
    { when: '2022 – 2023', title: 'Matriculation (C.B.S.E)', text: 'Prakritik School, Patna, Bihar — 77.8%.' },
    { when: '2023 – 2025', title: 'Intermediate of Science (B.S.E.B)', text: 'Ram Krishna Dwarika, Patna, Bihar — 60.1%.' },
    { when: '2025 – 2028', title: 'Bachelor of Computer Applications', text: 'Indian Institute of Business Management (IIBM), Patna. Currently in the 2nd semester — Database Management, Programming Fundamentals, Web Technologies.' },
    { when: 'Hands-on work', title: 'Oracle APEX Web Application', text: 'Built a database-driven web application with SQL and PL/SQL backend logic, and designed interactive UI components, forms and reports using APEX tools.' },
    { when: 'Hands-on work', title: 'WordPress Website Development', text: 'Built and customised functional WordPress websites, including a medical group site (rasoiopathy.in), with responsive layouts and managed content, plugins and configuration.' },
    { when: 'Workshop', title: 'InUnity Innovation & Design Thinking Program', text: 'Participant — design thinking, problem identification, ideation and rapid prototyping, applied to real-world innovation challenges in a team.' },
    { when: 'Learning now', title: 'MERN Stack & Backend', text: 'Developing JavaScript, Node.js, Express.js, MongoDB and API fundamentals.' },
    { when: 'Next', title: 'Cloud, DevOps & AI', text: 'Exploring Docker, AWS, AI Agents, RAG and enterprise AI integration.', future: true }
  ];

  const ROADMAP = [
    ['Advanced Backend Engineering', 'Node.js, Express.js, APIs and database design.'],
    ['AWS & Cloud Computing', 'Cloud fundamentals and deploying real applications.'],
    ['Docker & DevOps', 'Containers, Git workflows and CI/CD pipelines.'],
    ['System Design', 'Designing scalable, reliable systems.'],
    ['AI Agents', 'Building tool-using, task-driven agents.'],
    ['RAG Pipelines', 'Grounding AI answers in real data.'],
    ['LangGraph & MCP', 'Orchestrating agents and connecting tools.'],
    ['Oracle + Cloud Integration', 'Deepening Fusion Cloud and OIC integration skills.'],
    ['Enterprise AI Integration', 'Bringing AI into business workflows.']
  ];

  /* ---------- Helpers ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  };
  const setFilter = (container, btn) => {
    $$('.filter-btn', container).forEach((b) => {
      const on = b === btn;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });
  };

  /* ---------- Render ---------- */
  function renderStrengths() {
    const box = $('#strengths');
    STRENGTHS.forEach((s) => box.append(el('span', 'chip', s)));
  }

  function renderFocus() {
    const grid = $('#focus-grid');
    FOCUS.forEach((f) => {
      const c = el('article', 'card reveal');
      const icon = el('div', 'focus-icon', f.icon);
      icon.setAttribute('aria-hidden', 'true');
      c.append(icon, el('h3', 'font-heading', f.title), el('p', 'desc', f.text));
      grid.append(c);
    });
  }

  function renderSkills() {
    const grid = $('#skills-grid');
    const labels = { core: 'Core — used in practical work', working: 'Working knowledge', exploring: 'Exploring — currently learning' };
    SKILLS.forEach((g) => {
      const c = el('article', 'card reveal');
      c.append(el('h3', 'font-heading', g.group));
      const tags = el('div', 'tags');
      g.items.forEach(([name, level]) => {
        const t = el('span', 'tag', name);
        t.dataset.level = level;
        t.title = labels[level];
        tags.append(t);
      });
      c.append(tags);
      grid.append(c);
    });

    const bar = $('#skill-filters');
    bar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      const f = btn.dataset.filter;
      setFilter(bar, btn);
      $$('#skills-grid .tag').forEach((t) => t.classList.toggle('is-dim', f !== 'all' && t.dataset.level !== f));
    });
  }

  function renderJourney() {
    const ol = $('#timeline');
    JOURNEY.forEach((j) => {
      const li = el('li', 'reveal');
      if (j.future) li.dataset.future = 'true';
      li.append(el('p', 'when', j.when), el('h3', '', j.title), el('p', 'txt', j.text));
      ol.append(li);
    });
  }

  function renderRoadmap() {
    const ol = $('#roadmap');
    ROADMAP.forEach(([title, text], i) => {
      const li = el('li', 'card road-item reveal');
      const body = el('div');
      body.append(el('h3', 'font-heading', title), el('p', 'desc', text));
      li.append(el('span', 'n', String(i + 1).padStart(2, '0')), body);
      ol.append(li);
    });
  }

  /* ---------- Contact details from CONFIG ---------- */
  function applyConfig() {
    $$('[data-email]').forEach((n) => (n.textContent = CONFIG.email));
    $$('[data-email-link]').forEach((a) => (a.href = 'mailto:' + CONFIG.email));
    const social = [['[data-github]', CONFIG.github], ['[data-linkedin]', CONFIG.linkedin]];
    social.forEach(([sel, url]) => {
      $$(sel).forEach((a) => {
        if (!url || url.includes('your-')) {
          // Placeholder not replaced yet: hide rather than ship a dead link.
          (a.closest('li') || a).remove();
        } else {
          a.href = url;
        }
      });
    });
    $('#year').textContent = new Date().getFullYear();
  }

  /* ---------- Typewriter ---------- */
  function typewriter() {
    const target = $('#typewriter');
    const text = 'Welcome to my digital space. I build backend systems, enterprise applications, and explore the future of AI-powered technology.';
    if (reduceMotion) { target.textContent = text; return; }
    const cursor = el('span', 'cursor');
    cursor.setAttribute('aria-hidden', 'true');
    const out = document.createTextNode('');
    target.setAttribute('aria-label', text);
    target.append(out, cursor);
    let i = 0;
    setTimeout(function tick() {
      i++;
      out.nodeValue = text.slice(0, i);
      if (i < text.length) setTimeout(tick, 38);
      else cursor.remove();
    }, 600);
  }

  /* ---------- Delayed pill entrance (400 ms, independent of typewriter) ---------- */
  function pills() {
    const box = $('#hero-pills');
    setTimeout(() => box.classList.remove('pills-hidden'), 400);
  }

  /* ---------- Copy email ---------- */
  function copyEmail() {
    const btn = $('#copy-email');
    const toast = $('#copy-toast');
    let timer;
    const flash = (msg) => {
      toast.textContent = msg;
      toast.style.opacity = '1';
      clearTimeout(timer);
      timer = setTimeout(() => (toast.style.opacity = '0'), 1600);
    };
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(CONFIG.email);
        flash('Copied!');
      } catch (_) {
        try {
          const ta = el('textarea');
          ta.value = CONFIG.email;
          ta.style.cssText = 'position:fixed;opacity:0';
          document.body.append(ta);
          ta.select();
          const ok = document.execCommand('copy');
          ta.remove();
          flash(ok ? 'Copied!' : 'Copy failed');
        } catch (__) {
          flash('Copy failed');
        }
      }
    });
  }

  /* ---------- Mobile menu ---------- */
  function mobileMenu() {
    const btn = $('#menu-btn');
    const menu = $('#mobile-menu');
    const header = $('#site-header');
    const set = (open) => {
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menu.classList.toggle('is-open', open);
      menu.setAttribute('aria-hidden', String(!open));
      header.classList.toggle('menu-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };
    btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
    $$('a', menu).forEach((a) => a.addEventListener('click', () => set(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') set(false); });
    window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => { if (e.matches) set(false); });
  }

  /* ---------- Header state, active nav, reveal, back-to-top ---------- */
  function scrollFeatures() {
    const header = $('#site-header');
    const links = $$('.nav-link');
    const top = $('#to-top');

    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 40);
      top.classList.toggle('is-shown', y > window.innerHeight * 0.6);
      // Clear the active underline while the hero is on screen.
      if (y < window.innerHeight * 0.5) links.forEach((l) => l.classList.remove('is-active'));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));

    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting && window.scrollY >= window.innerHeight * 0.5) {
          links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === '#' + en.target.id));
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['about', 'skills', 'journey', 'contact'].forEach((id) => { const s = document.getElementById(id); if (s) spy.observe(s); });

    const reveal = new IntersectionObserver((entries, obs) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); obs.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    $$('.reveal').forEach((n) => (reduceMotion ? n.classList.add('is-visible') : reveal.observe(n)));
  }

  /* ---------- Background video scrubbing ---------- */
  function videoScrub() {
    const video = $('#bg-video');
    const fallback = $('#bg-fallback');
    if (!video) return;

    const SENSITIVITY = 0.8;
    const state = { target: 0, seeking: false, ready: false };

    video.addEventListener('error', () => { video.style.display = 'none'; fallback.style.display = 'block'; });

    video.addEventListener('loadedmetadata', () => {
      state.ready = Number.isFinite(video.duration) && video.duration > 0;
      state.target = 0;
      try { video.currentTime = 0.01; } catch (_) { /* ignore */ }
    });

    const seek = () => {
      if (!state.ready || state.seeking) return;
      if (Math.abs(video.currentTime - state.target) < 0.01) return;
      state.seeking = true;
      try { video.currentTime = state.target; } catch (_) { state.seeking = false; }
    };

    video.addEventListener('seeking', () => { state.seeking = true; });
    video.addEventListener('seeked', () => {
      state.seeking = false;
      if (Math.abs(video.currentTime - state.target) >= 0.01) seek(); // target moved meanwhile
    });

    if (reduceMotion) return;

    let prevX = null;
    const move = (x) => {
      if (!state.ready) return;
      if (prevX === null) { prevX = x; return; }
      const deltaX = x - prevX;
      prevX = x;
      const deltaTime = (deltaX / window.innerWidth) * SENSITIVITY * video.duration;
      state.target = Math.min(Math.max(state.target + deltaTime, 0), video.duration);
      seek();
    };

    window.addEventListener('mousemove', (e) => move(e.clientX), { passive: true });
    document.addEventListener('mouseleave', () => { prevX = null; });
    window.addEventListener('touchmove', (e) => { if (e.touches[0]) move(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('touchend', () => { prevX = null; }, { passive: true });
  }

  /* ---------- Contact form ---------- */
  function contactForm() {
    const form = $('#contact-form');
    const status = $('#form-status');
    const rules = {
      name: (v) => (v.trim().length >= 2 ? '' : 'Please enter your name.'),
      email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email.'),
      subject: (v) => (v.trim().length >= 3 ? '' : 'Please enter a subject.'),
      message: (v) => (v.trim().length >= 10 ? '' : 'At least 10 characters, please.')
    };
    const check = (input) => {
      const msg = rules[input.name](input.value);
      $('#e-' + input.name).textContent = msg;
      input.setAttribute('aria-invalid', msg ? 'true' : 'false');
      return !msg;
    };

    $$('.field', form).forEach((i) => {
      i.addEventListener('blur', () => check(i));
      i.addEventListener('input', () => { if (i.getAttribute('aria-invalid') === 'true') check(i); });
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.textContent = '';
      const inputs = $$('.field', form);
      const results = inputs.map(check);
      if (results.includes(false)) { inputs[results.indexOf(false)].focus(); return; }

      if (!CONFIG.formEndpoint) {
        // Nothing is sent until a real endpoint is configured.
        status.textContent = 'This form is not connected to an email service yet — please email me directly.';
        return;
      }
      status.textContent = 'Sending…';
      try {
        const res = await fetch(CONFIG.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(form)))
        });
        if (!res.ok) throw new Error('Request failed');
        status.textContent = 'Message sent. Thank you!';
        form.reset();
      } catch (_) {
        status.textContent = 'Something went wrong — please email me directly.';
      }
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    renderStrengths();
    renderFocus();
    renderSkills();
    renderJourney();
    renderRoadmap();
    applyConfig();
    typewriter();
    pills();
    copyEmail();
    mobileMenu();
    scrollFeatures(); // after rendering so .reveal nodes exist
    videoScrub();
    contactForm();
  });
})();
