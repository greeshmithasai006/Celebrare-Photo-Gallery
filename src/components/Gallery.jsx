import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import useFetchPhotos from '../hooks/useFetchPhotos.js';
import {
  favouritesReducer,
  TOGGLE_FAVOURITE,
} from '../reducers/favouritesReducer.js';
import { loadFavourites, saveFavourites } from '../utils/favouritesStorage.js';
import LoadingSpinner from './LoadingSpinner.jsx';
import PhotoCard from './PhotoCard.jsx';
import SearchBar from './SearchBar.jsx';

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const [query, setQuery] = useState('');

  // Favourites are managed with useReducer. The third argument lazily restores
  // the saved list from localStorage on the first render.
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    undefined,
    loadFavourites
  );

  // Persist favourites whenever they change.
  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  // useCallback: keeps the same handler function between renders so SearchBar
  // is not handed a brand-new function every time the Gallery re-renders.
  const handleSearchChange = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  // dispatch is stable, so this handler is created once. That lets the memoised
  // PhotoCards skip re-rendering when nothing about them has changed.
  const handleToggleFavourite = useCallback((photoId) => {
    dispatch({ type: TOGGLE_FAVOURITE, payload: photoId });
  }, []);

  // useMemo: the filtered list is only recalculated when the photos or the
  // search text change, not on every unrelated re-render (e.g. a heart click).
  const filteredPhotos = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return photos;
    return photos.filter((photo) => photo.author.toLowerCase().includes(term));
  }, [photos, query]);

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div
        role="alert"
        className="mx-auto max-w-lg rounded-2xl border border-rose-200 bg-rose-50 px-6 py-10 text-center"
      >
        <h2 className="text-xl font-semibold text-rose-900">
          Photos could not be loaded
        </h2>
        <p className="mt-2 text-rose-800">{error}</p>
      </div>
    );
  }

  return (
    <section aria-label="Photo gallery">
      <SearchBar value={query} onChange={handleSearchChange} />

      {filteredPhotos.length === 0 ? (
        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold">No photos found</h2>
          <p className="mt-2 text-muted">
            No author matches “{query.trim()}”. Try a different name.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.includes(photo.id)}
              onToggleFavourite={handleToggleFavourite}
            />
          ))}
        </div>
      )}
    </section>
  );
}
