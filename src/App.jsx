
import Gallery from './components/Gallery.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white">

      {/* Header */}
      <header className="border-b border-rose-100 bg-white/80">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

          {/* Small decorative label */}
          <div className="mb-3 inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold tracking-widest text-rose-600">
            PHOTO COLLECTION
          </div>

          {/* Main heading */}
          <h1 className="text-4xl font-extrabold tracking-tight text-rose-600 sm:text-5xl">
            Photo Gallery
          </h1>
          {/* Description */}
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Explore beautiful moments captured by photographers
            around the world. Search by photographer and save
            your favourite photos with a simple tap.
          </p>

        </div>
      </header>

      {/* Gallery */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Gallery />
      </main>

    </div>
  );
}

