"use client";

import { motion } from "framer-motion";
import { profile, expertise } from "@/lib/data";
import { Reveal } from "./Reveal";
import { ToolsMarquee } from "./ToolsMarquee";

export function Expertise() {
  return (
    <section id="about" className="relative px-6 py-28 md:px-12 lg:px-24">
      <Reveal>
        <p className="mb-4 font-mono text-sm tracking-[0.3em] text-accent-2 uppercase">
          About
        </p>
        <p className="max-w-3xl text-2xl leading-relaxed text-foreground/90 sm:text-3xl">
          {profile.summary}
        </p>
      </Reveal>

      <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {expertise.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              className="card-border h-full rounded-2xl p-8 backdrop-blur-sm"
            >
              <h3 className="font-[family-name:var(--font-display)] text-xl font-medium">
                {e.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{e.blurb}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-14">
        <ToolsMarquee />
      </Reveal>
    </section>
  );
}
