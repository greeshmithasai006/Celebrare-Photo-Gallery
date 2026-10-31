import { memo } from 'react';

function HeartIcon({ filled }) {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

// memo: the card only re-renders when its own props change, so toggling one
// favourite or typing in search does not re-render every unchanged card.
const PhotoCard = memo(function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  // Request a 600x450 thumbnail instead of the full-size original image.
  const src = `https://picsum.photos/id/${photo.id}/600/450`;

  return (
    <article
      className={`group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
        isFavourite ? 'ring-2 ring-rose-500' : 'ring-slate-200'
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
        <img
          src={src}
          alt={`Photo by ${photo.author}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          aria-pressed={isFavourite}
          aria-label={
            isFavourite
              ? `Remove photo by ${photo.author} from favourites`
              : `Add photo by ${photo.author} to favourites`
          }
          className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full shadow-md transition hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink motion-reduce:transition-none motion-reduce:hover:scale-100 ${
            isFavourite
              ? 'bg-rose-500 text-white'
              : 'bg-white/95 text-slate-600 hover:text-rose-500'
          }`}
        >
          <HeartIcon filled={isFavourite} />
        </button>
      </div>

      <div className="px-4 py-4">
        <p className="truncate text-base font-semibold" title={photo.author}>
          {photo.author}
        </p>
      </div>
    </article>
  );
});

export default PhotoCard;
