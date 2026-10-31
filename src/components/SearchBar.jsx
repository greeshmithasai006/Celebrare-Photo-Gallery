export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full max-w-md">
      <label htmlFor="author-search" className="sr-only">
        Search photos by author
      </label>
      <svg
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
      <input
        id="author-search"
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Search by author name"
        autoComplete="off"
        className="w-full rounded-full border border-slate-300 bg-white py-3 pl-12 pr-4 text-base shadow-sm placeholder:text-slate-400 focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/20"
      />
    </div>
  );
}
