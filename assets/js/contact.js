/* ============================================================
   CONTACT.JS — Form validation + mailto/Formspree submission
   ============================================================ */

(function () {
  'use strict';

  function init() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    // ================================================================
    // CONFIGURATION
    // 1. Set FORMSPREE_ENDPOINT to your Formspree URL (e.g. https://formspree.io/f/xxxxxx)
    // 2. Set FALLBACK_EMAIL to your email for the mailto: fallback.
    // If FORMSPREE_ENDPOINT is empty or contains "REPLACE", the form
    // automatically falls back to opening the user's mail client.
    // ================================================================
    const FORMSPREE_ENDPOINT = ''; // <-- paste your Formspree endpoint here
    const FALLBACK_EMAIL = '[REPLACE WITH YOUR EMAIL]';

    const fields = {
      name: form.querySelector('#name'),
      email: form.querySelector('#email'),
      subject: form.querySelector('#subject'),
      message: form.querySelector('#message')
    };

    function setError(field, msg) {
      const wrap = field.closest('.field');
      const errEl = wrap.querySelector('.field__error');
      if (msg) {
        wrap.classList.add('has-error');
        errEl.textContent = msg;
      } else {
        wrap.classList.remove('has-error');
        errEl.textContent = '';
      }
    }

    function validate() {
      let ok = true;

      if (!fields.name.value.trim()) {
        setError(fields.name, 'Please enter your name');
        ok = false;
      } else setError(fields.name, '');

      const email = fields.email.value.trim();
      if (!email) {
        setError(fields.email, 'Please enter your email');
        ok = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError(fields.email, 'Please enter a valid email');
        ok = false;
      } else setError(fields.email, '');

      if (!fields.subject.value.trim()) {
        setError(fields.subject, 'Please enter a subject');
        ok = false;
      } else setError(fields.subject, '');

      if (!fields.message.value.trim() || fields.message.value.trim().length < 10) {
        setError(fields.message, 'Please write a message (min 10 characters)');
        ok = false;
      } else setError(fields.message, '');

      return ok;
    }

    // Real-time clear on input
    Object.values(fields).forEach(f => {
      f.addEventListener('input', () => setError(f, ''));
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validate()) return;

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending...';

      const payload = {
        name: fields.name.value.trim(),
        email: fields.email.value.trim(),
        subject: fields.subject.value.trim(),
        message: fields.message.value.trim()
      };

      // ---- Formspree path ----
      if (FORMSPREE_ENDPOINT && !FORMSPREE_ENDPOINT.includes('REPLACE')) {
        try {
          const res = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          if (res.ok) {
            form.reset();
            if (window.showToast) window.showToast('Message sent — thank you!', 'success');
          } else {
            throw new Error('Formspree responded ' + res.status);
          }
        } catch (err) {
          console.error(err);
          if (window.showToast) window.showToast('Could not send — opening email instead', 'error');
          openMailto(payload);
        }
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        return;
      }

      // ---- mailto fallback ----
      openMailto(payload);
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    });

    function openMailto(payload) {
      const subject = encodeURIComponent(payload.subject);
      const body = encodeURIComponent(
        `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`
      );
      window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
      if (window.showToast) window.showToast('Opening your email app...', '');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();