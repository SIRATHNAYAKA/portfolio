/* ============================================================
   FILTERS.JS — Project Category Filtering
   ============================================================ */

(function () {
  'use strict';

  function init() {
    const filterBar = document.querySelector('.filters');
    const grid = document.getElementById('projectGrid');
    if (!filterBar || !grid) return;

    const buttons = filterBar.querySelectorAll('.filter');
    const cards = grid.querySelectorAll('.project-card');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // Update active state
        buttons.forEach(b => {
          const isActive = b === btn;
          b.classList.toggle('is-active', isActive);
          b.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        // Filter cards
        cards.forEach(card => {
          const cats = (card.dataset.categories || '').split(/\s+/);
          const show = filter === 'all' || cats.includes(filter);

          if (show) {
            card.classList.remove('is-hidden');
            card.style.opacity = '0';
            card.style.transform = 'translateY(12px)';
            requestAnimationFrame(() => {
              card.style.transition = 'opacity .45s var(--ease), transform .45s var(--ease)';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          } else {
            card.classList.add('is-hidden');
            card.style.transition = '';
            card.style.opacity = '';
            card.style.transform = '';
          }
        });
      });
    });
  }

  window.SRFilters = { init };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();