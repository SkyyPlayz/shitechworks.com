import Image from "next/image";

const COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Customizability", href: "#customizability" },
      { label: "AI Agents", href: "#agents" },
      { label: "Timeline", href: "#timeline" },
      { label: "Auto-linking", href: "#auto-linking" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Sky High Infinite Techwork", href: "/" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image src="/brand/logo.png" alt="" width={28} height={28} className="rounded-md" />
              <span className="font-heading text-[0.95rem] text-heading">Sky High Infinite Techwork</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted">
              We Build Nothing Less Than the Best. Mythos Writer is our flagship — a local-first,
              fully re-themeable writing companion.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-label">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors duration-150 hover:text-heading"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-hairline pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Sky High Infinite Techwork. shitechworks.com</span>
          <span>Built with Mythos Writer&rsquo;s own Liquid Neon design system.</span>
        </div>
      </div>
    </footer>
  );
}
