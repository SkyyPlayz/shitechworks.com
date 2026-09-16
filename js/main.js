/* Mythos Writer — Liquid Neon Landing Page — main.js */

(function () {
  'use strict';

  /* ---- Stars Canvas ---- */
  function initStars() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const stars = [];
    const STAR_COUNT = 28;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function createStar() {
      return {
        x: Math.random(),
        y: Math.random(),
        r: 1 + Math.random() * 2.5,
        baseOpacity: 0.2 + Math.random() * 0.7,
        opacity: 0,
        speed: 2000 + Math.random() * 3000,
        phase: Math.random() * Math.PI * 2,
      };
    }

    for (let i = 0; i < STAR_COUNT; i++) stars.push(createStar());

    let lastTime = 0;

    function draw(time) {
      if (!lastTime) lastTime = time;
      const elapsed = time - lastTime;
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of stars) {
        s.phase += (elapsed / s.speed) * Math.PI * 2;
        const t = (Math.sin(s.phase) + 1) / 2;
        s.opacity = prefersReduced ? s.baseOpacity * 0.5 : s.baseOpacity * 0.25 + t * s.baseOpacity * 0.75;

        ctx.beginPath();
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 249, 255, ${s.opacity})`;

        if (!prefersReduced && s.r > 2) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = 'rgba(200, 240, 255, 0.8)';
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }

      requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    requestAnimationFrame(draw);
  }

  /* ---- Flow Lines SVG ---- */
  function initFlowLines() {
    const el = document.getElementById('flow-lines');
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '0.06';
      return;
    }
  }

  /* ---- Scroll-reveal ---- */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => io.observe(el));
  }

  /* ---- Nav scroll state ---- */
  function initNav() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    function onScroll() {
      if (window.scrollY > 40) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile toggle
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');

    if (toggle && links) {
      toggle.addEventListener('click', () => {
        const open = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });

      // Close on link click
      links.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', () => {
          links.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (!nav.contains(e.target)) {
          links.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  /* ---- Carousels ---- */
  function initCarousels() {
    document.querySelectorAll('.carousel').forEach((carousel) => {
      const track = carousel.querySelector('.carousel-track');
      const dots = carousel.querySelectorAll('.carousel-dot');
      const btnPrev = carousel.querySelector('.carousel-btn[data-dir="-1"]');
      const btnNext = carousel.querySelector('.carousel-btn[data-dir="1"]');
      const slides = carousel.querySelectorAll('.carousel-slide');

      if (!track || !slides.length) return;

      let current = 0;
      let autoTimer = null;

      function goTo(idx) {
        current = ((idx % slides.length) + slides.length) % slides.length;
        track.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
      }

      function startAuto() {
        clearInterval(autoTimer);
        autoTimer = setInterval(() => goTo(current + 1), 4000);
      }

      function stopAuto() {
        clearInterval(autoTimer);
      }

      if (btnPrev) btnPrev.addEventListener('click', () => { goTo(current - 1); stopAuto(); });
      if (btnNext) btnNext.addEventListener('click', () => { goTo(current + 1); stopAuto(); });

      dots.forEach((dot, i) => {
        dot.addEventListener('click', () => { goTo(i); stopAuto(); });
      });

      // Touch swipe
      let touchStartX = 0;
      carousel.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
      carousel.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) { goTo(current + (dx < 0 ? 1 : -1)); stopAuto(); }
      }, { passive: true });

      goTo(0);

      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        startAuto();
        carousel.addEventListener('mouseenter', stopAuto);
        carousel.addEventListener('mouseleave', startAuto);
        carousel.addEventListener('focusin', stopAuto);
        carousel.addEventListener('focusout', startAuto);
      }
    });
  }

  /* ---- OS-aware download button ---- */
  function initDownloadBtns() {
    const GITHUB_BASE = 'https://github.com/SkyyPlayz/Mythos-Writer/releases/latest';

    function detectOS() {
      const ua = navigator.userAgent;
      if (/Mac/i.test(ua)) return 'mac';
      if (/Linux/i.test(ua) && !/Android/i.test(ua)) return 'linux';
      return 'windows';
    }

    const os = detectOS();
    const labels = { mac: '⬇ Download for Mac', windows: '⬇ Download for Windows', linux: '⬇ Download for Linux' };

    document.querySelectorAll('.download-btn-dynamic').forEach((btn) => {
      btn.textContent = labels[os] || '⬇ Download Free';
      btn.href = GITHUB_BASE;
    });
  }

  /* ---- Keyboard focus ring only on keyboard nav ---- */
  function initFocusRing() {
    let usingKeyboard = false;
    document.addEventListener('mousedown', () => { usingKeyboard = false; document.body.classList.remove('keyboard-nav'); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') { usingKeyboard = true; document.body.classList.add('keyboard-nav'); }
    });
  }

  /* ---- Init ---- */
  document.addEventListener('DOMContentLoaded', () => {
    initStars();
    initFlowLines();
    initReveal();
    initNav();
    initCarousels();
    initDownloadBtns();
    initFocusRing();
  });
})();
