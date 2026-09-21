/* ============================================================
   THEME.JS — Dark/Light Mode Toggle + Persistence
   Must load first (before <body> renders) to avoid flash.
   ============================================================ */

(function () {
  'use strict';

  const STORAGE_KEY = 'sr-theme';
  const root = document.documentElement;

  /**
   * Get stored theme or fall back to dark.
   */
  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  /**
   * Apply theme to <html> element.
   */
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;
  }

  /**
   * Save theme preference.
   */
  function saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) { /* storage disabled — ignore */ }
  }

  /* ---------- INITIAL APPLY (before paint) ---------- */
  const stored = getStoredTheme();
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const initial = stored || 'dark'; // Default: dark per spec
  applyTheme(initial);

  /* ---------- PUBLIC API ---------- */
  window.SRTheme = {
    get: () => root.getAttribute('data-theme') || 'dark',
    set(theme) {
      applyTheme(theme);
      saveTheme(theme);
      document.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
    },
    toggle() {
      const next = this.get() === 'dark' ? 'light' : 'dark';
      this.set(next);
      return next;
    }
  };
})();