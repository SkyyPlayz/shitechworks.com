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
    lede: "Draft in a rich TipTap scene, then keep the book as Markdown you can move, diff, and keep.",
    crop: "writing",
    alt: "Mythos Writer manuscript — chapter heading and scene prose in the Liquid Neon editor",
    points: [
      {
        title: "Story Vault",
        body: "Stories → Chapters → Scenes as plain Markdown you own.",
      },
      {
        title: "WikiLinks & drafts",
        body: "Link a name, mark a draft state, watch the word count.",
      },
      {
        title: "Normal / Focus / Edit",
        body: "Three writing modes for the hour you are in.",
      },
      {
        title: "Boards",
        body: "Kanban-style scene cards when the outline needs to move.",
      },
      {
        title: "Snapshots",
        body: "Per-scene history so a cut is never gone for good.",
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
    lede: "Worldbuilding stays in a Notes Vault — free-form Markdown, then entities and a graph when you need the map.",
    crop: "world",
    alt: "Mythos Writer story navigator — chapters and scenes in the left vault",
    points: [
      {
        title: "Notes Vault",
        body: "Research and lore as Markdown, next to the manuscript.",
      },
      {
        title: "Entity browser",
        body: "Characters, locations, factions, items, events, concepts.",
      },
      {
        title: "WikiLink graph",
        body: "See how names connect across notes and scenes.",
      },
      {
        title: "Project templates",
        body: "Novel (3-Act), Short Story, World-building Bible, Series Bible — plus custom save, import, and export.",
      },
    ],
  },
  {
    id: "ai",
    slot: "n2",
    kicker: "AI",
    title: "Three collaborators. Your model.",
    lede: "Agents read the work you already wrote. Bring a key, or keep inference on the machine.",
    crop: "ai",
    alt: "Mythos Writer agent sidebar on the right of the writing desk",
    points: [
      {
        title: "Brainstorm",
        body: "Catch ideas before they evaporate, then file them into notes.",
      },
      {
        title: "Writing Assistant",
        body: "Craft help in the margin — you stay the author.",
      },
      {
        title: "Archive",
        body: "Continuity and vault memory when the series gets long.",
      },
      {
        title: "Providers",
        body: "Anthropic, OpenAI-compatible, Ollama, and LM Studio.",
      },
      {
        title: "Voice, optional",
        body: "Local-first STT/TTS; a cloud voice only if you want one.",
      },
    ],
  },
  {
    id: "local",
    slot: "n5",
    kicker: "Local-first",
    title: "No account required to write",
    lede: "An Electron desktop app. Vaults stay on disk. The chrome is Liquid Neon — glass, glow, and ten wallpaper themes.",
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
          Designed for the way novels get written
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
