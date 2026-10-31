import { useEffect, useState } from 'react';

const API_URL = 'https://picsum.photos/v2/list?limit=30';

/**
 * Fetches the photo list from the Picsum API once, when the component mounts.
 * Returns { photos, loading, error }. `error` is a readable message or null.
 */
export default function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPhotos() {
      try {
        const response = await fetch(API_URL, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`The photo service responded with status ${response.status}.`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error('The photo service returned data in an unexpected format.');
        }

        setPhotos(data);
      } catch (err) {
        // The request was cancelled because the component unmounted: ignore it.
        if (err.name === 'AbortError') return;

        setError(
          err instanceof TypeError
            ? 'Could not reach the photo service. Check your internet connection and refresh the page.'
            : err.message || 'Something went wrong while loading photos.'
        );
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadPhotos();

    // Cancel the request if the component unmounts mid-fetch.
    return () => controller.abort();
  }, []);

  return { photos, loading, error };
}
