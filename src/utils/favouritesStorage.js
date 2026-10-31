const STORAGE_KEY = 'photo-gallery:favourites';

/**
 * Reads favourites from localStorage. Never throws: if storage is unavailable,
 * empty, corrupted or not the expected shape, it returns an empty list.
 */
export function loadFavourites() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return [...new Set(parsed.filter((id) => typeof id === 'string'))];
  } catch {
    return [];
  }
}

/** Writes favourites to localStorage. Silently ignores storage failures. */
export function saveFavourites(favourites) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
  } catch {
    // Storage may be full or blocked (e.g. private mode); the app still works.
  }
}
