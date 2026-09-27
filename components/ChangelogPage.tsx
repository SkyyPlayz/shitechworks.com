import { APP_RELEASES, type ChangelogEntry } from "@/lib/changelog";

const FEED_GRID =
  "grid grid-cols-1 gap-4 md:grid-cols-[10.5rem_minmax(0,1fr)] md:items-start md:gap-14 lg:gap-16";

const FEED_ROW = `${FEED_GRID} px-6 py-10 md:py-12`;

function ReleaseNote({ entry }: { entry: ChangelogEntry }) {
  return (
    <li id={entry.version} className={`${FEED_ROW} scroll-mt-24`}>
      <div className="font-mono text-sm leading-relaxed text-muted">
        <p>{entry.version}</p>
        <time dateTime={entry.dateTime} className="mt-1 block">
          {entry.date}
        </time>
      </div>
      <div className="min-w-0 max-w-[42rem]">
        <h2 className="text-balance font-heading text-[clamp(1.45rem,2.4vw,1.9rem)] leading-snug text-heading">
          {entry.title}
        </h2>
        <p className="mt-4 text-[1.05rem] leading-[1.75] text-body">{entry.lede}</p>
        {entry.groups.map((group) => (
          <section key={group.heading} className="mt-8">
            <h3 className="font-heading text-[1.15rem] text-heading">{group.heading}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[1.02rem] leading-[1.7] text-body marker:text-muted">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </li>
  );
}

export function ChangelogPage() {
  return (
    <article className="bg-cosmos">
      <div className="mx-auto max-w-5xl px-6 pb-28 pt-16 sm:pt-20">
        <header className={FEED_GRID}>
          <div className="hidden md:block" aria-hidden="true" />
          <div className="max-w-[42rem]">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
              Mythos Writer
            </p>
            <h1 className="mt-4 font-heading text-[clamp(2.2rem,5vw,3.4rem)] text-heading">
              What&rsquo;s new
            </h1>
            <p className="mt-6 text-[1.05rem] leading-[1.75] text-body">
              Release notes for Mythos Writer.
            </p>
          </div>
        </header>

        <section aria-label="Release notes" className="mt-14">
          <ol className="-mx-6 list-none divide-y divide-hairline border-y border-hairline bg-glass backdrop-blur-panel">
            {APP_RELEASES.length === 0 ? (
              <li className={FEED_ROW}>
                <div className="hidden md:block" aria-hidden="true" />
                <p className="max-w-[42rem] text-[1.05rem] leading-[1.75] text-body">
                  Release notes start with the first public Mythos Writer beta.
                </p>
              </li>
            ) : (
              APP_RELEASES.map((entry) => <ReleaseNote key={entry.version} entry={entry} />)
            )}
          </ol>
        </section>
      </div>
    </article>
  );
}
