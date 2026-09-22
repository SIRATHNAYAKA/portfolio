/* ============================================================
   PROJECTS.JS — Render projects + case studies
   Reads from window.SR_PROJECTS (data/projects.js)
   Works on file://, localhost and GitHub Pages — no fetch needed.
   ============================================================ */

(function () {
  'use strict';

  const PAGE = document.body.getAttribute('data-page') || 'home';

  /* ---------- Utilities ---------- */
  function esc(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function img(src, alt) {
    return `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async" onerror="this.style.opacity='0.25'">`;
  }

  /* ---------- Get data (works everywhere) ---------- */
  function getProjects() {
    if (Array.isArray(window.SR_PROJECTS)) return window.SR_PROJECTS;
    if (window.SR_PROJECTS && Array.isArray(window.SR_PROJECTS.projects)) {
      return window.SR_PROJECTS.projects;
    }
    return [];
  }

  /* ---------- Project Card ---------- */
  function projectCard(p) {
    const wideClass = p.wide ? ' project-card--wide' : '';
    const tags = (p.technologies || []).map(t => `<li>${esc(t)}</li>`).join('');

    const liveBtn = p.live
      ? `<a href="${esc(p.live)}" class="btn btn--ghost btn--sm" target="_blank" rel="noopener">Live Demo</a>`
      : '';
    const ghBtn = p.github
      ? `<a href="${esc(p.github)}" class="btn btn--ghost btn--sm" target="_blank" rel="noopener">GitHub</a>`
      : '';

    return `
      <article class="project-card${wideClass}" data-categories="${(p.categories || []).join(' ')}">
        <div class="project-card__media">
          <span class="project-card__category">${esc(p.categoryLabel || p.category)}</span>
          ${img(p.image, p.title + ' preview')}
        </div>
        <div class="project-card__body">
          <h3 class="project-card__title">${esc(p.title)}</h3>
          <p class="project-card__desc">${esc(p.short)}</p>
          <ul class="project-card__tags">${tags}</ul>
          <div class="project-card__actions">
            ${liveBtn}
            ${ghBtn}
            <a href="project-details.html?id=${encodeURIComponent(p.id)}" class="btn btn--primary btn--sm">
              View Case Study
            </a>
          </div>
        </div>
      </article>
    `;
  }

  /* ---------- Render Grid ---------- */
  function renderGrid() {
    const grid = document.getElementById('projectGrid');
    if (!grid) return;

    const all = getProjects();

    if (!all.length) {
      grid.innerHTML = `
        <p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:3rem 1rem">
          No projects found. Make sure <code>data/projects.js</code> is loaded before <code>projects.js</code>.
        </p>`;
      return;
    }

    // Home page → featured only (or all if none marked featured)
    // Projects page → everything
    let list;
    if (PAGE === 'projects') {
      list = all;
    } else {
      const featured = all.filter(p => p.featured);
      list = featured.length ? featured : all;
    }

    grid.innerHTML = list.map(projectCard).join('');

    // Wire up filters
    if (window.SRFilters && typeof window.SRFilters.init === 'function') {
      window.SRFilters.init();
    }

    // Hydrate icons (arrow-right etc.) inside the grid
    if (window.hydrateIcons) window.hydrateIcons(grid);

    // Reveal animation on cards
    requestAnimationFrame(() => {
      grid.querySelectorAll('.project-card').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity .6s var(--ease) ${i * 0.06}s, transform .6s var(--ease) ${i * 0.06}s`;
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      });
    });
  }

  /* ---------- Case Study (project-details.html) ---------- */
  function renderCaseStudy() {
    const host = document.getElementById('caseStudy');
    if (!host) return;

    const params = new URLSearchParams(location.search);
    const id = params.get('id');

    if (!id) {
      host.innerHTML = `
        <p style="text-align:center;padding:4rem 1rem">
          No project specified. <a href="projects.html" style="color:var(--accent)">Back to projects →</a>
        </p>`;
      return;
    }

    const all = getProjects();
    const p = all.find(x => x.id === id);

    if (!p) {
      host.innerHTML = `
        <p style="text-align:center;padding:4rem 1rem">
          Project not found. <a href="projects.html" style="color:var(--accent)">Back to projects →</a>
        </p>`;
      return;
    }

    document.title = `${p.title} — Sachin Rathnayaka`;

    const features = (p.features || []).map(f => `<li>${esc(f)}</li>`).join('');
    const tech = (p.technologies || []).map(t => `<li>${esc(t)}</li>`).join('');
    const shots = (p.screenshots || []).filter(Boolean);
    const shotHTML = shots.length
      ? shots.map(s => `<figure class="case-shot">${img(s, p.title + ' screenshot')}</figure>`).join('')
      : '';

    const liveBtn = p.live
      ? `<a href="${esc(p.live)}" class="btn btn--primary" target="_blank" rel="noopener">Live Demo</a>`
      : '';
    const ghBtn = p.github
      ? `<a href="${esc(p.github)}" class="btn btn--ghost" target="_blank" rel="noopener">GitHub Repository</a>`
      : '';

    host.innerHTML = `
      <div class="case-hero">
        <p class="section__index">Case Study</p>
        <h1 class="case-hero__title">${esc(p.title)}</h1>
        <p class="case-hero__lead">${esc(p.overview || p.short)}</p>

        <div class="case-hero__meta">
          <div><span>Category</span><strong>${esc(p.categoryLabel || p.category)}</strong></div>
          <div><span>Role</span><strong>${esc(p.role || 'Full Stack Developer')}</strong></div>
          <div><span>Stack</span><strong>${(p.technologies || []).slice(0, 3).join(' • ')}</strong></div>
        </div>

        <div class="case-hero__media">${img(p.image, p.title)}</div>
      </div>

      <div class="case-body">
        <section class="case-section">
          <h2>The Challenge</h2>
          <p>${esc(p.problem || '')}</p>
        </section>

        <section class="case-section">
          <h2>The Solution</h2>
          <p>${esc(p.solution || '')}</p>
        </section>

        <section class="case-section">
          <h2>Key Features</h2>
          <ul class="case-list">${features}</ul>
        </section>

        <section class="case-section">
          <h2>Technology Stack</h2>
          <ul class="case-tech">${tech}</ul>
        </section>

        <section class="case-section">
          <h2>My Contribution</h2>
          <p>${esc(p.role || '')}</p>
        </section>

        <section class="case-section">
          <h2>Challenges</h2>
          <p>${esc(p.challenges || '')}</p>
        </section>

        <section class="case-section">
          <h2>Outcome</h2>
          <p>${esc(p.outcome || '')}</p>
        </section>

        ${shotHTML ? `<section class="case-section"><h2>Screenshots</h2><div class="case-shots">${shotHTML}</div></section>` : ''}

        <div class="case-actions">${liveBtn}${ghBtn}<a href="projects.html" class="btn btn--ghost">← All Projects</a></div>
      </div>
    `;

    if (window.hydrateIcons) window.hydrateIcons(host);
  }

  /* ---------- Init ---------- */
  function init() {
    if (document.getElementById('projectGrid')) renderGrid();
    if (document.getElementById('caseStudy')) renderCaseStudy();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();