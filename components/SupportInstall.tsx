import type { ReactNode } from "react";

function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-12 font-heading text-[1.45rem] text-heading">{children}</h2>;
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-8 font-heading text-[1.15rem] text-heading">{children}</h3>;
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-[1.05rem] leading-[1.75] text-body">{children}</p>;
}

function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-heading">{children}</strong>;
}

function FileName() {
  return (
    <code className="font-mono text-[0.92em] text-heading">{"Mythos Writer-<version>.exe"}</code>
  );
}

const REQUIREMENTS: { label: string; windows: string; mac: string; linux: string }[] = [
  { label: "Status", windows: "Main target", mac: "TBD", linux: "TBD" },
  { label: "OS version", windows: "TBD", mac: "macOS 13 or newer", linux: "TBD" },
  { label: "Chip", windows: "64-bit (x64)", mac: "Intel or Apple silicon", linux: "64-bit (x64)" },
  {
    label: "Download type",
    windows: "Installer (.exe) or portable .zip",
    mac: ".dmg or .zip",
    linux: "AppImage, .deb or .rpm",
  },
  { label: "Memory (RAM)", windows: "TBD", mac: "TBD", linux: "TBD" },
  { label: "Disk space", windows: "TBD", mac: "TBD", linux: "TBD" },
  {
    label: "Internet",
    windows: "Needed for AI and updates (TBD, needs review)",
    mac: "same",
    linux: "same",
  },
  { label: "AI", windows: "Your own OpenRouter key", mac: "same", linux: "same" },
];

export function SupportInstall() {
  return (
    <>
      <H2>Requirements</H2>
      <div className="mt-6 text-sm leading-[1.6]">
        <div className="hidden border-b border-hairline py-3 font-medium text-heading md:grid md:grid-cols-[9rem_1fr_1fr_1fr] md:gap-x-4">
          <span>
            <span className="sr-only">Requirement</span>
          </span>
          <span>Windows</span>
          <span>macOS</span>
          <span>Linux</span>
        </div>
        {REQUIREMENTS.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-1 gap-y-1 border-b border-hairline py-3 md:grid-cols-[9rem_1fr_1fr_1fr] md:gap-x-4"
          >
            <div className="font-medium text-heading">{row.label}</div>
            <div className="text-body">
              <span className="text-muted md:hidden">Windows: </span>
              {row.windows}
            </div>
            <div className="text-body">
              <span className="text-muted md:hidden">macOS: </span>
              {row.mac}
            </div>
            <div className="text-body">
              <span className="text-muted md:hidden">Linux: </span>
              {row.linux}
            </div>
          </div>
        ))}
      </div>

      <H2>Windows</H2>
      <H3>Install</H3>
      <P>Only download Mythos Writer from shitechworks.com.</P>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-[1.05rem] leading-[1.75] text-body marker:text-muted">
        <li>
          Download <FileName />.
        </li>
        <li>Open the file.</li>
        <li>Windows may show a blue SmartScreen box. This is because the installer is not signed yet.</li>
        <li>
          If you trust the download, click <Strong>More info</Strong>, then <Strong>Run anyway</Strong>.
        </li>
        <li>Pick where to install. You can change the folder.</li>
        <li>Finish. The app adds a Desktop and Start menu shortcut.</li>
        <li>
          Open <Strong>Mythos Writer</Strong>.
        </li>
        <li>
          To use AI, add your OpenRouter key in the app&rsquo;s model and key settings.
        </li>
      </ol>

      <H3>Update</H3>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-[1.05rem] leading-[1.75] text-body marker:text-muted">
        <li>
          Open <Strong>Settings → About</Strong>.
        </li>
        <li>
          Click <Strong>Check for updates</Strong>.
        </li>
        <li>If an update is found, let it install and restart.</li>
        <li>
          Optional: pick <Strong>Stable</Strong> or <Strong>Beta</Strong> under the Update channel.
        </li>
      </ol>
      <P>Your writing is kept during updates.</P>

      <H3>Uninstall</H3>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-[1.05rem] leading-[1.75] text-body marker:text-muted">
        <li>
          Open Windows <Strong>Settings → Apps</Strong>. Find <Strong>Mythos Writer</Strong>. Click{" "}
          <Strong>Uninstall</Strong>.
        </li>
        <li>
          The uninstaller shows a box: <Strong>Also delete my Mythos vaults / writing data</Strong>.
        </li>
        <li>Leave it off to keep your writing and settings. Only small caches are removed.</li>
        <li>
          Turn it on only if you want everything gone. This also removes saved settings and keys. It
          cannot be undone.
        </li>
      </ol>

      <H2>macOS (TBD)</H2>
      <P>Steps held until Mac support is confirmed. Builds are set up as .dmg for Intel and Apple silicon.</P>

      <H2>Linux (TBD)</H2>
      <P>Steps held until Linux support is confirmed. Builds are set up as AppImage, .deb and .rpm.</P>
      <P>On Linux without a keyring, saved API keys may be blank after a restart.</P>
    </>
  );
}
