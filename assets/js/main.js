/* Sky High Infinite Techwork — landing interactions
   Vanilla JS, no dependencies. Respects prefers-reduced-motion. */
(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Theme toggle (persisted, system-aware) ------------------------ */
  var root = document.documentElement;
  // Deep space is our signature — default to dark, honor a saved choice.
  var stored = null;
  try { stored = localStorage.getItem("shi-theme"); } catch (e) {}
  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
  }
  function toggleTheme() {
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("shi-theme", next); } catch (e) {}
  }
  var tbtn = document.getElementById("themeBtn");
  if (tbtn) tbtn.addEventListener("click", toggleTheme);

  /* ---- Nav shadow on scroll ------------------------------------------ */
  var nav = document.querySelector(".nav");
  function onScroll() { if (nav) nav.classList.toggle("scrolled", window.scrollY > 8); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Reveal on scroll ---------------------------------------------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Starfield ----------------------------------------------------- */
  var canvas = document.getElementById("stars");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var stars = [], w, h, dpr = Math.min(window.devicePixelRatio || 1, 2), raf;
    function resize() {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.min(160, Math.round((w * h) / 12000));
      stars = [];
      for (var i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w, y: Math.random() * h,
          r: Math.random() * 1.3 + 0.2,
          a: Math.random() * 0.6 + 0.2,
          tw: Math.random() * 0.02 + 0.004,
          dir: Math.random() > 0.5 ? 1 : -1
        });
      }
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        s.a += s.tw * s.dir;
        if (s.a > 0.85 || s.a < 0.15) s.dir *= -1;
        ctx.globalAlpha = s.a;
        ctx.fillStyle = i % 7 === 0 ? "#00f0ff" : (i % 11 === 0 ? "#7c6af7" : "#ffffff");
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }
    resize();
    if (reduceMotion) {
      // paint a single static frame
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i]; ctx.globalAlpha = s.a; ctx.fillStyle = "#ffffff";
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
    } else {
      draw();
    }
    var rt;
    window.addEventListener("resize", function () {
      clearTimeout(rt); rt = setTimeout(function () { if (raf) cancelAnimationFrame(raf); resize(); if (!reduceMotion) draw(); }, 180);
    });
    // Pause when tab hidden to save battery
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { if (raf) cancelAnimationFrame(raf); }
      else if (!reduceMotion) { draw(); }
    });
  }

  /* ---- Year in footer ------------------------------------------------ */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
