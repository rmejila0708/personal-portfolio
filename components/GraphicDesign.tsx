"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { graphicGroups } from "@/lib/data";
import { assetPath } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function GraphicDesign() {
  return (
    <section className="relative px-6 py-28 md:px-12 lg:px-24">
      <Reveal>
        <p className="mb-4 font-mono text-sm tracking-[0.3em] text-accent uppercase">
          Selected Work
        </p>
        <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl font-medium sm:text-4xl">
          Print &amp; graphic design
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Listing collateral designed for real estate clients — brochures, fact sheets, and flyers.
        </p>
      </Reveal>

      <div className="mt-14 space-y-14">
        {graphicGroups.map((group) => (
          <div key={group.client}>
            <Reveal>
              <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-accent-2">
                {group.client}
              </h3>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {group.samples.map((s, i) => (
                <Reveal key={s.image} delay={i * 0.08}>
                  <motion.a
                    href={assetPath(s.image)}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -6 }}
                    className="card-border group block h-full overflow-hidden rounded-2xl"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={assetPath(s.image)}
                        alt={s.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                        {s.tag}
                      </span>
                    </div>
                    <div className="p-5">
                      <h4 className="font-[family-name:var(--font-display)] text-base font-medium leading-snug transition-colors group-hover:text-accent">
                        {s.title}
                      </h4>
                    </div>
                  </motion.a>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
