export function scrollToTop(opts = {}) {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const behavior = prefersReduced ? "auto" : opts.behavior || "smooth";

  const el = opts.element || window;

  if (typeof el.scrollTo === "function") {
    el.scrollTo({ top: 0, left: 0, behavior });
  } else {
    window.scrollTo(0, 0);
  }
}
