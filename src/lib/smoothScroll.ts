function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function smoothScrollTo(targetId: string, navOffset = 80, duration = 700) {
  const el = document.getElementById(targetId);
  if (!el) return;

  const start = window.scrollY;
  const end = el.getBoundingClientRect().top + window.scrollY - navOffset;
  const change = end - start;
  const startTime = performance.now();

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + change * easeInOutCubic(progress));
    if (elapsed < duration) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}
