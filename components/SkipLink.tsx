export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-inverse"
    >
      Skip to content
    </a>
  );
}
