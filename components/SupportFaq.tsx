import type { ReactNode } from "react";
import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/legal";
import { SUPPORT_INSTALL_ROUTE } from "@/lib/site";

function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-12 font-heading text-[1.45rem] text-heading">{children}</h2>;
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-[1.05rem] leading-[1.75] text-body">{children}</p>;
}

export function SupportFaq() {
  return (
    <>
      <H2>What is Mythos Writer?</H2>
      <P>It is a desktop app for writing fiction. It is in beta, so it is still being finished.</P>

      <H2>Where are my files kept?</H2>
      <P>
        On your own computer. If you turn on AI, the text you ask about is sent to OpenRouter and an
        AI provider to get a reply. Your story lives in a folder you pick. The files are plain files.
      </P>

      <H2>Do I need an account?</H2>
      <P>No. The app does not have accounts yet. Accounts are planned for a later beta.</P>

      <H2>Does the AI write my book for me?</H2>
      <P>
        The AI is built to suggest, not write. It can&rsquo;t change your manuscript files, and every
        edit is yours to make. AI suggestions cannot change your manuscript files. There is no button
        that puts AI fixes into your story.
      </P>

      <H2>How do I turn on the AI?</H2>
      <P>
        Add your own OpenRouter key in the app&rsquo;s model and key settings. You pay OpenRouter for
        what you use. Subscriptions are planned for later.
      </P>

      <H2>Does the AI company train on my writing?</H2>
      <P>
        We don&rsquo;t collect your writing. When you use AI, the app turns on OpenRouter&rsquo;s zero
        data retention and no data collection settings, and skips Google models. You use your own
        OpenRouter key, so your OpenRouter account terms also apply.
      </P>

      <H2>Which computers can run it?</H2>
      <P>
        Windows (64-bit). macOS and Linux builds exist in the build setup. Support for them is TBD. See
        the{" "}
        <Link href={SUPPORT_INSTALL_ROUTE} className="text-heading underline-offset-4 hover:underline">
          Install help page
        </Link>{" "}
        for details.
      </P>

      <H2>Why does Windows show a warning when I install?</H2>
      <P>
        The Windows installer is not signed yet. Because of this, Windows SmartScreen may warn you.
        Code signing is planned.
      </P>

      <H2>How do I get updates?</H2>
      <P>
        The app can check for updates and install them. You can pick the Stable or Beta update channel.
      </P>

      <H2>Will uninstalling delete my writing?</H2>
      <P>
        No, not unless you ask it to. The Windows uninstaller has a box: &quot;Also delete my Mythos
        vaults / writing data&quot;. It is off by default. Updates keep your writing and settings.
      </P>

      <H2>Is it on Steam?</H2>
      <P>Not yet. Steam and Microsoft Store are planned for the 1.0 launch.</P>

      <H2>What is your refund policy?</H2>
      <P>
        Website purchases: refund within 14 days for the full amount paid, tax included. Steam
        purchases: follow Steam&rsquo;s refund policy. You cannot buy it yet. It is coming soon.
      </P>

      <H2>How do I get help?</H2>
      <P>
        Email{" "}
        <a href={CONTACT_MAILTO} className="text-heading underline-offset-4 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </P>
    </>
  );
}
