/* ============================================================
   MAIN.JS — Header, Footer, Loader, Nav, Cursor, ToTop, Toast
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     ICON HELPERS (inline SVG so no external icon library needed)
     ============================================================ */
  const ICONS = {
    'arrow-right': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
    'arrow-up-right': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>',
    'arrow-up': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
    'github': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.4-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.6 11.6 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>',
    'linkedin': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>',
    'download': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
    'send': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>',
    'copy': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    'sun': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
    'moon': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    'info': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
    'x': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>'
  };

  /**
   * Replace <i data-icon="name"> with inline SVG.
   */
  function hydrateIcons(root) {
    (root || document).querySelectorAll('[data-icon]').forEach(el => {
      const name = el.getAttribute('data-icon');
      const svg = ICONS[name];
      if (svg) {
        el.innerHTML = svg;
        el.removeAttribute('data-icon');
        el.setAttribute('aria-hidden', 'true');
      }
    });
  }

  /* ============================================================
     HEADER
     ============================================================ */
  const NAV_ITEMS = [
    { href: 'index.html#home', label: 'Home', id: 'home' },
    { href: 'index.html#about', label: 'About', id: 'about' },
    { href: 'index.html#skills', label: 'Skills', id: 'skills' },
    { href: 'index.html#services', label: 'Services', id: 'services' },
    { href: 'index.html#projects', label: 'Projects', id: 'projects' },
    { href: 'index.html#experience', label: 'Experience', id: 'experience' },
    { href: 'index.html#certificates', label: 'Certificates', id: 'certificates' },
    { href: 'index.html#contact', label: 'Contact', id: 'contact' }
  ];

  function buildHeader() {
    const host = document.getElementById('site-header');
    if (!host) return;

    const currentPage = document.body.getAttribute('data-page') || 'home';

    const navHTML = NAV_ITEMS.map(item => {
      const isActive = currentPage === 'home' && item.id === 'home';
      return `<li><a href="${item.href}" class="nav__link${isActive ? ' is-active' : ''}" data-nav="${item.id}">${item.label}</a></li>`;
    }).join('');

    const mobileHTML = NAV_ITEMS.map((item, i) => {
      const num = String(i + 1).padStart(2, '0');
      return `<li><a href="${item.href}" class="mobile-menu__link"><span>${num}</span>${item.label}</a></li>`;
    }).join('');

    host.innerHTML = `
      <header class="header" id="header">
        <div class="container nav">
          <a href="index.html" class="logo" aria-label="Sachin Rathnayaka — Home">SACHIN<span>.</span></a>

          <nav class="nav__menu" aria-label="Primary navigation">
            <ul class="nav__list">${navHTML}</ul>
            <div class="nav__actions">
              <a href="#contact" class="btn btn--primary btn--sm nav__gh-link">Let's Talk</a>
              <button class="icon-btn" id="themeToggle" aria-label="Toggle color theme" title="Toggle theme">
                <span data-theme-icon></span>
              </button>
              <a href="https://github.com/SIRATHNAYAKA" class="icon-btn nav__gh-link" target="_blank" rel="noopener" aria-label="GitHub profile">
                <span data-icon="github"></span>
              </a>
              <a href="[REPLACE WITH YOUR LINKEDIN URL]" class="icon-btn nav__gh-link" target="_blank" rel="noopener" aria-label="LinkedIn profile">
                <span data-icon="linkedin"></span>
              </a>
              <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">
                <span></span><span></span><span></span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
        <ul class="mobile-menu__list">${mobileHTML}</ul>
        <div class="mobile-menu__actions">
          <a href="#contact" class="btn btn--primary">Let's Talk</a>
          <a href="assets/downloads/Sachin-Rathnayaka-CV.pdf" class="btn btn--ghost" download>
            Download CV
          </a>
        </div>
      </div>
    `;

    // Restore any <i data-icon> placeholders that were inside header
    hydrateIcons(host);
    updateThemeIcon();
  }

 /* ============================================================
   FOOTER — Customized
   ============================================================ */
function buildFooter() {
  const host = document.getElementById('site-footer');
  if (!host) return;

  const year = new Date().getFullYear();

  host.innerHTML = `
    <footer class="footer">
      <div class="container">

        <!-- TOP GRID -->
        <div class="footer__grid">

          <!-- Brand + Social -->
          <div class="footer__brand">
            <h3>SACHIN RATHNAYAKA</h3>
            <p>Web Developer • Graphic Designer • Creative Developer. Building modern web applications and thoughtful digital experiences from Sri Lanka.</p>

            <div class="footer__social">
              <a href="https://github.com/SIRATHNAYAKA" target="_blank" rel="noopener"
                 class="footer-social-btn" aria-label="GitHub" title="GitHub">
                <span data-icon="github"></span>
              </a>
              <a href="https://www.linkedin.com/in/sachin-rathnayaka/" target="_blank" rel="noopener"
                 class="footer-social-btn" aria-label="LinkedIn" title="LinkedIn">
                <span data-icon="linkedin"></span>
              </a>
              <a href="mailto:imantha0316@gmail.com"
                 class="footer-social-btn" aria-label="Email" title="Email">
                <span data-icon="send"></span>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="index.html#home">Home</a></li>
              <li><a href="index.html#about">About</a></li>
              <li><a href="index.html#projects">Projects</a></li>
              <li><a href="index.html#services">Services</a></li>
              <li><a href="index.html#contact">Contact</a></li>
            </ul>
          </div>

          <!-- Services -->
          <div class="footer__col">
            <h4>Services</h4>
            <ul>
              <li><a href="services.html">Web Development</a></li>
              <li><a href="services.html">WordPress</a></li>
              <li><a href="services.html">UI/UX Design</a></li>
              <li><a href="services.html">Graphic Design</a></li>
              <li><a href="services.html">Landing Pages</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="footer__col">
            <h4>Get in Touch</h4>
            <ul>
              <li>
                <a href="mailto:imantha0316@gmail.com">
                  <span data-icon="send"></span> imantha0316@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+94765593492">
                  <span data-icon="info"></span> +94 76 559 3492
                </a>
              </li>
              <li>
                <a href="index.html#contact">
                  <span data-icon="arrow-right"></span> Embilipitiya, Sri Lanka
                </a>
              </li>
              <li>
                <a href="assets/downloads/Sachin Rathnayaka.pdf" download>
                  <span data-icon="download"></span> Download CV
                </a>
              </li>
            </ul>
          </div>

        </div>

        <!-- BLACK STUDIO STRIP -->
        <div class="footer__studio">
          <div class="footer__studio-left">
            <span class="footer__studio-brand">BLACK<span>STUDIO</span></span>
            <span class="footer__studio-tag">Where design meets technology</span>
          </div>
          <a href="index.html#studio" class="link-arrow">
            Explore <span data-icon="arrow-right"></span>
          </a>
        </div>

        <!-- BOTTOM -->
        <div class="footer__bottom">
          <p>© ${year} Sachin Rathnayaka. All Rights Reserved.</p>
          <p class="footer__credit">
            <span>Built with</span>
            <span class="footer__heart">♥</span>
            <span>using HTML, CSS &amp; JavaScript</span>
          </p>
          <p>
            <a href="index.html#home" id="footerBackTop" class="footer__backtop">
              Back to top <span data-icon="arrow-up"></span>
            </a>
          </p>
        </div>

      </div>
    </footer>
  `;

  if (window.hydrateIcons) window.hydrateIcons(host);

  const backTop = host.querySelector('#footerBackTop');
  if (backTop) {
    backTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

  /* ============================================================
     THEME TOGGLE
     ============================================================ */
  function updateThemeIcon() {
    const iconHost = document.querySelector('[data-theme-icon]');
    if (!iconHost || !window.SRTheme) return;
    const theme = window.SRTheme.get();
    iconHost.innerHTML = theme === 'dark' ? ICONS.sun : ICONS.moon;
  }

  function initThemeToggle() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      if (!window.SRTheme) return;
      const next = window.SRTheme.toggle();
      updateThemeIcon();
      showToast(`Switched to ${next} mode`, 'success');
    });
    document.addEventListener('themechange', updateThemeIcon);
  }

  /* ============================================================
     LOADER
     ============================================================ */
  function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) {
      document.body.classList.remove('is-loading');
      return;
    }
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('is-hidden');
        document.body.classList.remove('is-loading');
      }, 350);
    });
    // Failsafe
    setTimeout(() => {
      loader.classList.add('is-hidden');
      document.body.classList.remove('is-loading');
    }, 2500);
  }

  /* ============================================================
     HEADER SCROLL STATE + SCROLL PROGRESS
     ============================================================ */
  function initScrollState() {
    const header = document.getElementById('header');
    const bar = document.getElementById('scrollBar');
    const toTop = document.getElementById('toTop');

    let ticking = false;

    function onScroll() {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (y / max) * 100 : 0;

      if (header) header.classList.toggle('is-scrolled', y > 20);
      if (bar) bar.style.width = pct + '%';
      if (toTop) toTop.classList.toggle('is-visible', y > 600);

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });

    onScroll();

    if (toTop) {
      toTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  /* ============================================================
     ACTIVE NAV (IntersectionObserver on home page)
     ============================================================ */
  function initActiveNav() {
    if (document.body.getAttribute('data-page') !== 'home') return;

    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav__link[data-nav]');
    if (!sections.length || !links.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(l => l.classList.toggle('is-active', l.dataset.nav === id));
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));
  }

  /* ============================================================
     MOBILE MENU
     ============================================================ */
  function initMobileMenu() {
    const burger = document.getElementById('hamburger');
    const menu = document.getElementById('mobileMenu');
    if (!burger || !menu) return;

    function close() {
      burger.classList.remove('is-open');
      menu.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function open() {
      burger.classList.add('is-open');
      menu.classList.add('is-open');
      burger.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    burger.addEventListener('click', () => {
      burger.classList.contains('is-open') ? close() : open();
    });

    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') close();
    });

    // Reset on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) close();
    });
  }

  /* ============================================================
     CUSTOM CURSOR (desktop only)
     ============================================================ */
  function initCursor() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cursor = document.querySelector('.cursor');
    if (!cursor) return;

    const dot = cursor.querySelector('.cursor__dot');
    const ring = cursor.querySelector('.cursor__ring');

    let mx = 0, my = 0;
    let rx = 0, ry = 0;

    window.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
      cursor.classList.add('is-active');
    });

    function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    }
    loop();

    document.addEventListener('mouseover', e => {
      const target = e.target.closest('a, button, .filter, input, textarea, .cert-card, .service-card, .project-card');
      cursor.classList.toggle('is-hover', !!target);
    });

    document.addEventListener('mouseleave', () => cursor.classList.remove('is-active'));
  }

  /* ============================================================
     COPY EMAIL
     ============================================================ */
  function initCopyEmail() {
    document.addEventListener('click', async (e) => {
      const btn = e.target.closest('#copyEmail, [data-copy]');
      if (!btn) return;
      const text = btn.getAttribute('data-copy');
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
        showToast('Email copied to clipboard', 'success');
      } catch {
        showToast('Could not copy — please copy manually', 'error');
      }
    });
  }

  /* ============================================================
     TOAST
     ============================================================ */
  let toastTimer;
  function showToast(message, type = '') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = 'toast is-visible' + (type ? ' is-' + type : '');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2800);
  }

  /* ============================================================
     MAGNETIC BUTTONS
     ============================================================ */
  function initMagnetic() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.addEventListener('mousemove', (e) => {
      document.querySelectorAll('.magnetic').forEach(el => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        const range = Math.max(r.width, r.height) + 60;
        if (dist < range) {
          const strength = (1 - dist / range) * 8;
          el.style.transform = `translate(${(dx / range) * strength}px, ${(dy / range) * strength}px)`;
        } else {
          el.style.transform = '';
        }
      });
    });

    document.addEventListener('mouseleave', () => {
      document.querySelectorAll('.magnetic').forEach(el => el.style.transform = '');
    });
  }

  /* ============================================================
     SMOOTH ANCHOR SCROLL
     ============================================================ */
  function initSmoothScroll() {
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }

  /* ============================================================
     INIT
     ============================================================ */
  function init() {
    buildHeader();
    buildFooter();
    initThemeToggle();
    initLoader();
    initScrollState();
    initActiveNav();
    initMobileMenu();
    initCursor();
    initCopyEmail();
    initMagnetic();
    initSmoothScroll();

    // Expose toast globally
    window.showToast = showToast;
    window.hydrateIcons = hydrateIcons;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();