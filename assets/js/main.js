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

  // --- Gallery videos: click-to-play. Nothing is fetched until the visitor
  // taps the play button (the <video> has preload="none"), so scrolling
  // past a clip never pulls video data. Scrolling a playing clip out of
  // view pauses it; it needs another tap to resume, it never auto-resumes.
  var galleryVideoItems = document.querySelectorAll('.gallery-item--video');
  galleryVideoItems.forEach(function (item) {
    var video = item.querySelector('video');
    var playBtn = item.querySelector('.gallery-play-btn');
    if (!video || !playBtn) return;

    playBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      video.play().catch(function () { /* playback blocked; button stays visible */ });
    });

    video.addEventListener('click', function () {
      if (video.paused) {
        video.play().catch(function () {});
      } else {
        video.pause();
      }
    });

    video.addEventListener('play', function () { item.classList.add('is-playing'); });
    video.addEventListener('pause', function () { item.classList.remove('is-playing'); });

    if ('IntersectionObserver' in window) {
      var videoObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            video.pause();
          }
        });
      }, { threshold: 0.2 });
      videoObserver.observe(item);
    }
  });

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
