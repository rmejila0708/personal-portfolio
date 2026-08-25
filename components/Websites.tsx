"use client";

import { motion } from "framer-motion";
import { websiteSamples } from "@/lib/data";
import { assetPath } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Websites() {
  return (
    <section className="relative px-6 py-28 md:px-12 lg:px-24">
      <Reveal>
        <p className="mb-4 font-mono text-sm tracking-[0.3em] text-accent-2 uppercase">
          Selected Work
        </p>
        <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl font-medium sm:text-4xl">
          Website design
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Designed and maintained for client brands. Hover to scroll through the full page.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {websiteSamples.map((site, i) => (
          <Reveal key={site.url} delay={i * 0.08}>
            <motion.a
              href={site.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6 }}
              className="group block overflow-hidden rounded-2xl border border-border bg-[#0d1220]"
            >
              <div className="flex items-center gap-2 border-b border-border bg-[#12172a] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 text-xs text-muted">
                  {site.displayUrl}
                </span>
              </div>

              <div
                className="site-scroll h-[420px] w-full"
                style={{ backgroundImage: `url(${assetPath(site.image)})` }}
              />

              <div className="flex items-center justify-between px-5 py-4">
                <h3 className="font-[family-name:var(--font-display)] text-base font-medium">
                  {site.title}
                </h3>
                <span className="text-xs font-medium text-accent-2 opacity-0 transition-opacity group-hover:opacity-100">
                  Visit site ↗
                </span>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
