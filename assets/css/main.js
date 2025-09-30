// assets/js/main.js

document.addEventListener('DOMContentLoaded', function () {
  // Start header gradient animation unless user prefers reduced motion
  const header = document.querySelector('.header');
  if (header) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      // small delay so layout settles before animation (gives smoother paint)
      setTimeout(() => header.classList.add('header--anim'), 120);
    }
  }
});

/* ...existing code... */