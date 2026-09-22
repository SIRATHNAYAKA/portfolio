/* ============================================================
   CERTIFICATES.JS — Render certificates + modal viewer
   Reads from window.SR_CERTIFICATES (data/certificates.js)
   Works on file://, localhost and GitHub Pages — no fetch needed.
   ============================================================ */

(function () {
  'use strict';

  function esc(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /* ---------- Get data (works everywhere) ---------- */
  function getCertificates() {
    if (Array.isArray(window.SR_CERTIFICATES)) return window.SR_CERTIFICATES;
    if (window.SR_CERTIFICATES && Array.isArray(window.SR_CERTIFICATES.certificates)) {
      return window.SR_CERTIFICATES.certificates;
    }
    return [];
  }

  /* ---------- Render Grid ---------- */
  function loadAndRender() {
    const grid = document.getElementById('certGrid');
    if (!grid) return;

    const list = getCertificates();

    if (!list.length) {
      grid.innerHTML = `
        <p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:3rem 1rem">
          No certificates found. Make sure <code>data/certificates.js</code> is loaded before <code>certificates.js</code>.
        </p>`;
      return;
    }

    grid.innerHTML = list.map(c => `
      <article class="cert-card" data-cert-id="${esc(c.id)}" tabindex="0" role="button" aria-label="View ${esc(c.name)}">
        <div class="cert-card__media">
          <img src="${esc(c.image)}" alt="${esc(c.name)}" loading="lazy" decoding="async" onerror="this.style.opacity='0.25'">
        </div>
        <div class="cert-card__body">
          <span class="cert-card__cat">${esc(c.category)}</span>
          <h3 class="cert-card__title">${esc(c.name)}</h3>
          <p class="cert-card__meta">${esc(c.issuer)} • ${esc(c.year)}</p>
        </div>
      </article>
    `).join('');

    // Click / keyboard handlers
    grid.querySelectorAll('.cert-card').forEach(card => {
      const open = () => openModal(card, list);
      card.addEventListener('click', open);
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open();
        }
      });
    });

    // Reveal animation on cards
    requestAnimationFrame(() => {
      grid.querySelectorAll('.cert-card').forEach((el, i) => {
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

  /* ---------- Modal Viewer ---------- */
  function openModal(card, list) {
    const id = card.dataset.certId;
    const cert = list.find(c => c.id === id);
    if (!cert) return;

    let modal = document.getElementById('certModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'certModal';
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal__overlay" data-close></div>
        <div class="modal__content">
          <button class="modal__close" data-close aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          <img id="certModalImg" src="" alt="">
          <div class="modal__caption">
            <h3 id="certModalTitle"></h3>
            <p id="certModalMeta" style="font-size:var(--fs-sm);color:var(--text-muted)"></p>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      modal.querySelectorAll('[data-close]').forEach(el =>
        el.addEventListener('click', () => closeModal(modal))
      );
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal(modal);
      });
    }

    modal.querySelector('#certModalImg').src = cert.image;
    modal.querySelector('#certModalImg').alt = cert.name;
    modal.querySelector('#certModalTitle').textContent = cert.name;
    modal.querySelector('#certModalMeta').textContent = `${cert.issuer} • ${cert.year} • ${cert.category}`;

    requestAnimationFrame(() => modal.classList.add('is-open'));
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  /* ---------- Init ---------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAndRender);
  } else {
    loadAndRender();
  }
})();