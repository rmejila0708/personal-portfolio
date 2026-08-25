"use client";

import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 md:px-12 lg:px-24">
      <Reveal>
        <p className="mb-6 font-mono text-sm tracking-[0.3em] text-accent-3 uppercase">
          Get in touch
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-medium leading-tight sm:text-6xl">
          Have content, a workflow, or an
          <br className="hidden sm:block" /> automation to build?{" "}
          <span className="text-gradient">Let&apos;s talk.</span>
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <LiquidMetalButton
            label={profile.email}
            onClick={() => {
              window.location.href = `mailto:${profile.email}`;
            }}
          />
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:bg-white/5"
          >
            LinkedIn ↗
          </a>
        </div>
      </Reveal>

      <div className="mt-24 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} {profile.fullName}</span>
        <span>Built with Next.js &amp; Framer Motion</span>
      </div>
    </section>
  );
}
