// Elite Window Cleaning Co. — small progressive-enhancement script
// No dependencies, no tracking.

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile nav toggle ---
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu after tapping a link (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Gallery videos: only fetch/play while scrolled into view (keeps initial page load light) ---
  var galleryVideos = document.querySelectorAll('.js-gallery-video');
  if (galleryVideos.length && 'IntersectionObserver' in window) {
    var videoObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(function () { /* autoplay may be blocked; poster stays visible */ });
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.4 });

    galleryVideos.forEach(function (video) {
      videoObserver.observe(video);
    });
  }

  // --- Footer year ---
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --- Quote form: friendly inline confirmation after FormSubmit redirect fallback ---
  // (FormSubmit posts the form itself; this just guards against double-submits.)
  var form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', function () {
      var btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Sending…';
      }
    });
  }
});
