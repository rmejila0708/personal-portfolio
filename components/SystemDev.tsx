"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { systemProjects } from "@/lib/data";
import { assetPath } from "@/lib/utils";
import { Reveal } from "./Reveal";

function ProjectShowcase({ project }: { project: (typeof systemProjects)[number] }) {
  const [active, setActive] = useState(0);
  const screen = project.screens[active];

  return (
    <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr]">
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-border bg-[#0d1220]">
          <div className="flex items-center gap-2 border-b border-border bg-[#12172a] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 text-xs text-muted">
              {project.name} · {screen.label}
            </span>
          </div>
          <div className="relative aspect-[1920/1006] w-full bg-white">
            <AnimatePresence mode="wait">
              <motion.img
                key={screen.image}
                src={assetPath(screen.image)}
                alt={`${project.name} dashboard, ${screen.label} screen`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-3">
          {project.screens.map((s, i) => (
            <button
              key={s.image}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`group overflow-hidden rounded-lg border text-left transition-colors ${
                i === active ? "border-accent" : "border-border hover:border-foreground/30"
              }`}
            >
              <img
                src={assetPath(s.image)}
                alt=""
                className="aspect-[16/9] w-full object-cover object-top"
              />
              <span
                className={`block px-2 py-1.5 text-[11px] ${
                  i === active ? "text-foreground" : "text-muted"
                }`}
              >
                {s.label}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-6 space-y-2.5">
          {project.features.map((f) => (
            <li key={f} className="flex gap-3 text-sm text-foreground/85">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {f}
            </li>
          ))}
        </ul>

        <p className="mt-8 mb-3 font-mono text-xs tracking-[0.2em] text-muted uppercase">
          Built with
        </p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs text-foreground/80"
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export function SystemDev() {
  return (
    <section id="system-dev" className="relative px-6 py-28 md:px-12 lg:px-24">
      <Reveal>
        <p className="mb-4 font-mono text-sm tracking-[0.3em] text-accent-3 uppercase">
          System Dev
        </p>
        <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl font-medium sm:text-4xl">
          AI systems I&apos;ve built
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Full products, not just prompts: I design the workflow, build the backend and the
          dashboard, and wire in the AI models that do the work.
        </p>
      </Reveal>

      {systemProjects.map((p) => (
        <ProjectShowcase key={p.name} project={p} />
      ))}
    </section>
  );
}
