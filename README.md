# Celebrare Photo Gallery

React + Vite + Tailwind CSS photo gallery using the Picsum Photos API.

## Run it

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (usually http://localhost:5173).

Production build: `npm run build`, then `npm run preview`.

## Where things are

- `src/hooks/useFetchPhotos.js` – custom hook returning `{ photos, loading, error }`
- `src/reducers/favouritesReducer.js` – favourites reducer (`TOGGLE_FAVOURITE`)
- `src/utils/favouritesStorage.js` – safe localStorage load/save
- `src/components/Gallery.jsx` – uses the hook, `useReducer`, `useCallback`, `useMemo`
