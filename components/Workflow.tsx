"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { workflowStages } from "@/lib/data";
import { Reveal } from "./Reveal";

const allTools = Array.from(new Set(workflowStages.flatMap((s) => s.tools)));
const totalRows = Math.ceil(workflowStages.length / 2);

export function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="systems" className="relative px-6 py-28 md:px-12 lg:px-24">
      <Reveal>
        <p className="mb-4 font-mono text-sm tracking-[0.3em] text-accent uppercase">
          How I Work
        </p>
        <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl font-medium sm:text-4xl">
          A real content pipeline, end to end
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          The actual automated workflow behind RevUp Now AI&apos;s blog: one topic goes in, a
          reviewed, published, socially-repurposed post comes out — with a human still in the loop.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
        {allTools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-border bg-white/[0.03] px-3.5 py-1.5 text-xs text-foreground/80"
          >
            {tool}
          </span>
        ))}
      </Reveal>

      <div
        ref={containerRef}
        className="relative mt-20 grid grid-cols-[1fr_3px_1fr] gap-x-6 sm:gap-x-10"
      >
        <div
          className="relative"
          style={{ gridColumn: 2, gridRow: `1 / span ${totalRows}` }}
        >
          <div className="absolute inset-0 rounded-full bg-border" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-accent via-accent-2 to-accent-3 shadow-[0_0_12px_var(--accent-2)]"
          />
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="dot-flow absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white"
              style={{ animationDelay: `${i * 1.7}s` }}
            />
          ))}
        </div>

        {workflowStages.map((stage, i) => {
          const isLeft = i % 2 === 0;
          const row = Math.floor(i / 2) + 1;
          return (
            <div
              key={stage.title}
              style={{ gridColumn: isLeft ? 1 : 3, gridRow: row }}
              className="py-3"
            >
              <Reveal delay={(i % 2) * 0.08}>
                <StageCard index={i} stage={stage} align={isLeft ? "right" : "left"} />
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function StageCard({
  index,
  stage,
  align,
}: {
  index: number;
  stage: { title: string; description: string; tools: string[] };
  align: "left" | "right";
}) {
  const isRight = align === "right";
  return (
    <div className={`card-border rounded-2xl p-6 ${isRight ? "sm:ml-auto sm:text-right" : ""} sm:max-w-md`}>
      <div className={`flex items-center gap-3 ${isRight ? "sm:flex-row-reverse" : ""}`}>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 font-mono text-xs text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-[family-name:var(--font-display)] text-lg font-medium">{stage.title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{stage.description}</p>
      <div className={`mt-4 flex flex-wrap gap-1.5 ${isRight ? "sm:justify-end" : ""}`}>
        {stage.tools.map((tool) => (
          <span key={tool} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-accent-2">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
