export default function LoadingSpinner() {
  return (
    <div
      role="status"
      className="flex flex-col items-center justify-center gap-4 py-24"
    >
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-slate-300 border-t-ink motion-reduce:animate-none"
        aria-hidden="true"
      />
      <p className="text-sm font-medium text-muted">Loading photos…</p>
    </div>
  );
}
