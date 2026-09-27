export function ComingSoonBadge({ className = "" }: { className?: string }) {
  return (
    <p
      className={[
        "inline-flex rounded-pill border border-n1/40 bg-glass px-4 py-1.5 text-sm font-semibold text-heading shadow-glow-1 backdrop-blur-panel",
        className,
      ].join(" ")}
    >
      Coming soon
    </p>
  );
}
