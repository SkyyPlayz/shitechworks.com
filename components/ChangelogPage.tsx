import { APP_RELEASES, type ChangelogEntry } from "@/lib/changelog";

function ReleaseNote({ entry }: { entry: ChangelogEntry }) {
  return (
    <li
      id={entry.version}
      className="scroll-mt-24 rounded-2xl border border-hairline bg-glass px-6 py-8 backdrop-blur-panel sm:px-8"
    >
      <h2 className="text-balance font-heading text-[clamp(1.35rem,2.5vw,1.85rem)] leading-snug text-heading">
        <span className="font-mono text-[0.92rem] font-medium tracking-normal text-n1">
          {entry.version}
        </span>
        <span className="px-2 font-sans text-base font-normal tracking-normal text-muted">·</span>
        <time
          dateTime={entry.dateTime}
          className="font-sans text-base font-normal tracking-normal text-muted"
        >
          {entry.date}
        </time>
        <span className="px-2 font-sans text-base font-normal tracking-normal text-muted">·</span>
        {entry.title}
      </h2>
      <p className="mt-4 text-[1.05rem] leading-[1.75] text-body">{entry.lede}</p>
      {entry.groups.map((group) => (
        <section key={group.heading} className="mt-8">
          <h3 className="font-heading text-[1.2rem] text-heading">{group.heading}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[1.02rem] leading-[1.7] text-body marker:text-n1">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </li>
  );
}

export function ChangelogPage() {
  return (
    <article className="bg-cosmos">
      <div className="mx-auto max-w-[46rem] px-6 pb-24 pt-16 sm:pt-20">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
          Mythos Writer
        </p>
        <h1 className="mt-4 font-heading text-[clamp(2.2rem,5vw,3.4rem)] text-heading">
          What&rsquo;s new
        </h1>
        <p className="mt-6 text-[1.05rem] leading-[1.75] text-body">
          Release notes for Mythos Writer.
        </p>

        <section aria-label="Release notes" className="mt-12">
          {APP_RELEASES.length === 0 ? (
            <p className="rounded-2xl border border-hairline bg-glass px-6 py-8 text-[1.05rem] leading-[1.75] text-body backdrop-blur-panel sm:px-8">
              Release notes start with the first public Mythos Writer beta.
            </p>
          ) : (
            <ol className="space-y-8">
              {APP_RELEASES.map((entry) => (
                <ReleaseNote key={entry.version} entry={entry} />
              ))}
            </ol>
          )}
        </section>
      </div>
    </article>
  );
}
