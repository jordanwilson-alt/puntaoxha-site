// ─────────────────────────────────────────────────────────────
// Sozo Stays — Client-side motion init
// Lenis smooth scroll + reveal-on-scroll observer.
// Respects prefers-reduced-motion.
// Loaded via inline <script> in BaseLayout, runs on every page.
// ─────────────────────────────────────────────────────────────

import Lenis from 'lenis';

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// ── Lenis smooth scroll ─────────────────────────────────────
let lenis: Lenis | null = null;
if (!prefersReducedMotion) {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    syncTouch: false,
  });

  const raf = (time: number) => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

// ── Reveal-on-scroll ────────────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger by 80ms per element in viewport
        setTimeout(() => {
          entry.target.classList.add('is-revealed');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1,
  }
);

const forceRevealAll = () => {
  document
    .querySelectorAll('.will-reveal:not(.is-revealed)')
    .forEach((el) => el.classList.add('is-revealed'));
};

const revealAll = () => {
  document.querySelectorAll('.will-reveal:not(.is-revealed)').forEach((el) => {
    if (prefersReducedMotion) {
      el.classList.add('is-revealed');
    } else {
      observer.observe(el);
    }
  });

  // Fail-safe: content must NEVER stay invisible. The reveal starts hidden
  // (opacity:0) and relies on the IntersectionObserver — which can miss
  // elements under smooth-scroll timing, fast scrolling, programmatic
  // scroll, or bfcache restores. Reveal anything still hidden shortly
  // after load/navigation so nothing renders as a blank block.
  if (!prefersReducedMotion) {
    window.setTimeout(forceRevealAll, 1400);
  }
};

// Extra safety nets for edge cases the observer/timeout can miss.
window.addEventListener('pageshow', forceRevealAll); // bfcache back/forward
window.addEventListener('load', () => window.setTimeout(forceRevealAll, 1600));

revealAll();

// Re-run after Astro page navigation (View Transitions)
document.addEventListener('astro:after-swap', () => {
  // Re-init Lenis after page swap (scroll position resets)
  lenis?.scrollTo(0, { immediate: true });
  revealAll();
});

// ── Nav hide-on-scroll-down ─────────────────────────────────
let lastScrollY = 0;
let ticking = false;

const updateNav = () => {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;

  const currentScrollY = window.scrollY;
  const delta = currentScrollY - lastScrollY;

  if (currentScrollY < 80) {
    // Always show near top
    nav.dataset.state = 'visible';
  } else if (delta > 4) {
    // Scrolling down
    nav.dataset.state = 'hidden';
  } else if (delta < -4) {
    // Scrolling up
    nav.dataset.state = 'visible';
  }

  lastScrollY = currentScrollY;
  ticking = false;
};

window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNav);
      ticking = true;
    }
  },
  { passive: true }
);

export {};
