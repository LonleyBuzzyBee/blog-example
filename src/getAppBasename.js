/**
 * Base path for the app (e.g. /blog-example on GitHub Pages).
 * Uses CRA's PUBLIC_URL; if that is missing, infers from the main bundle script URL
 * so the router still matches after a hard refresh or cache oddities.
 */
function trimSlash(s) {
  return (s || '').replace(/\/$/, '');
}

export function getAppBasename() {
  const fromEnv = trimSlash(process.env.PUBLIC_URL);
  if (fromEnv) return fromEnv;

  if (typeof document === 'undefined') return undefined;

  const marker = '/static/js/bundle.js';
  for (let i = 0; i < document.scripts.length; i++) {
    const src = document.scripts[i].src;
    if (!src) continue;
    try {
      const { pathname } = new URL(src);
      if (pathname.endsWith(marker)) {
        const base = pathname.slice(0, -marker.length);
        return trimSlash(base) || undefined;
      }
    } catch (_) {
      /* ignore */
    }
  }
  return undefined;
}
