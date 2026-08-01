import { SCROLL_CONFIG } from "./constants";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function smoothScrollTo(
  targetId: string,
  navOffset = SCROLL_CONFIG.navScrollOffset,
  duration = SCROLL_CONFIG.navScrollDuration
) {
  const el = document.getElementById(targetId);
  if (!el) return;

  const start = window.scrollY;
  const end = el.getBoundingClientRect().top + window.scrollY - navOffset;
  const change = end - start;
  const startTime = performance.now();

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + change * easeOutCubic(progress));
    if (elapsed < duration) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}
