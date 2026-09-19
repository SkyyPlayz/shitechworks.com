import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { ProductFrame } from "./ProductFrame";
import { MockupShot, type MockupCrop } from "./MockupShot";

type FeatureGroup = {
  id: string;
  slot: "n1" | "n2" | "n5" | "n6";
  kicker: string;
  title: string;
  lede: string;
  crop: MockupCrop;
  alt: string;
  points: { title: string; body: string }[];
};

const GROUPS: FeatureGroup[] = [
  {
    id: "writing",
    slot: "n1",
    kicker: "Writing",
    title: "A scene editor that stays out of the way",
    lede: "Draft in a Word-like scene, then keep the book as Markdown you can move, diff, and keep. Structure, Editor, and Book are three views of the same manuscript.",
    crop: "writing",
    alt: "Mythos Writer manuscript — chapter heading and scene prose in the Liquid Neon editor",
    points: [
      {
        title: "Structure · Editor · Book",
        body: "Cards, the page, and a compiled read — one manuscript, three desks.",
      },
      {
        title: "Wiki links",
        body: "Type a name as a [[wiki-link]] and it stays live in the vault.",
      },
      {
        title: "Notes Properties",
        body: "Tags, fields, and backlinks sit on the note — not in a separate database.",
      },
      {
        title: "Boards",
        body: "Kanban-style cards when the outline needs to move.",
      },
      {
        title: "Scene Crafter",
        body: "Shape a scene — POV, goal, conflict, beats — then write the prose yourself.",
      },
      {
        title: "Export",
        body: "EPUB and DOCX when the draft is ready to leave the vault.",
      },
    ],
  },
  {
    id: "world",
    slot: "n6",
    kicker: "World",
    title: "A bible that lives beside the book",
    lede: "A Mythos Vault is one world. Story Vaults hold the manuscript; Notes Vaults hold lore. Open an Obsidian vault in place — it stays a folder you own.",
    crop: "world",
    alt: "Mythos Writer story navigator — chapters and scenes in the left vault",
    points: [
      {
        title: "Mythos Vault",
        body: "One world on disk: Story Vaults plus Notes Vaults, plain Markdown.",
      },
      {
        title: "Open Obsidian in place",
        body: "Keep an existing vault where it is. Mythos adds a Story Vault beside it.",
      },
      {
        title: "WikiLink graph",
        body: "See how names connect across notes and scenes.",
      },
      {
        title: "Timeline",
        body: "Multi-calendar, nested-world math is in the product. The desk UX is still being polished.",
      },
    ],
  },
  {
    id: "ai",
    slot: "n2",
    kicker: "AI",
    title: "Four collaborators. Your model.",
    lede: "Coach, Brainstorm, Archive, and Beta read the work you already wrote. Bring a key, run locally, or write with every AI surface off.",
    crop: "ai",
    alt: "Mythos Writer agent sidebar on the right of the writing desk",
    points: [
      {
        title: "Coach",
        body: "Craft help from your own pages — it teaches; it does not ghost-write.",
      },
      {
        title: "Brainstorm",
        body: "Catch ideas before they evaporate, then file them into notes.",
      },
      {
        title: "Archive",
        body: "Continuity and vault memory when the series gets long.",
      },
      {
        title: "Beta",
        body: "A reader-eye pass as comments — you keep the pen.",
      },
      {
        title: "Manual path",
        body: "No model connected? Every tool stays usable by hand.",
      },
    ],
  },
  {
    id: "local",
    slot: "n5",
    kicker: "Local-first",
    title: "No account required to write",
    lede: "An Electron desktop app. Vaults stay on disk as folders you own. The chrome is Liquid Neon — glass, glow, and ten wallpaper themes.",
    crop: "chrome",
    alt: "Mythos Writer desktop window chrome and Liquid Neon title bar",
    points: [
      {
        title: "Yours on disk",
        body: "Core writing does not need an account. The vault is a folder.",
      },
      {
        title: "BYO keys — or none",
        body: "Cloud models are opt-in. Local models are first-class.",
      },
      {
        title: "Liquid Neon",
        body: "Frosted glass, theme slots, and a living frame around the desk.",
      },
    ],
  },
];

export function FeatureCards() {
  return (
    <section id="features" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24" aria-labelledby="features-heading">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
          Writing · World · AI · Local-first
        </span>
        <h2 id="features-heading" className="mt-4 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)]">
          Built for the way novels actually get written
        </h2>
        <p className="mt-4 text-[1.02rem] leading-[1.7] text-body">
          Four rooms in one desktop studio. Nothing here requires a cloud account to start a chapter.
        </p>
      </div>

      <div className="mt-16 space-y-20">
        {GROUPS.map((group, index) => {
          const imageLeft = index % 2 === 1;
          return (
            <Reveal key={group.id}>
              <article
                id={group.id}
                className="scroll-mt-24 grid items-center gap-10 lg:grid-cols-2"
              >
                <div className={imageLeft ? "lg:order-1" : "lg:order-2"}>
                  <ProductFrame>
                    <MockupShot crop={group.crop} alt={group.alt} />
                  </ProductFrame>
                </div>
                <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
                  <span
                    className="text-[0.68rem] font-semibold uppercase tracking-[0.12em]"
                    style={{ color: `var(--${group.slot})` }}
                  >
                    {group.kicker}
                  </span>
                  <h3 className="mt-3 font-heading text-[clamp(1.5rem,2.4vw,2rem)] text-heading">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-[1.02rem] leading-[1.7] text-body">{group.lede}</p>
                  <RevealGroup className="mt-6 grid gap-3 sm:grid-cols-2" stagger={0.06}>
                    {group.points.map((point) => (
                      <RevealItem key={point.title}>
                        <div className="h-full rounded-xl border border-hairline bg-glass/70 px-4 py-4 backdrop-blur-panel">
                          <h4 className="text-sm font-semibold text-heading">{point.title}</h4>
                          <p className="mt-1.5 text-sm leading-[1.65] text-body">{point.body}</p>
                        </div>
                      </RevealItem>
                    ))}
                  </RevealGroup>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
