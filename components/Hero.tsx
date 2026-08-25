"use client";

import { motion, type Variants } from "framer-motion";
import { profile } from "@/lib/data";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
import { HeroPortrait } from "@/components/HeroPortrait";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-24">
      <HeroPortrait />

      <motion.div variants={container} initial="hidden" animate="show" className="relative max-w-4xl">
        <motion.p
          variants={item}
          className="mb-6 font-mono text-sm tracking-[0.3em] text-muted uppercase"
        >
          {profile.location} · Available for select work
        </motion.p>

        <motion.h1
          variants={item}
          className="font-[family-name:var(--font-display)] text-5xl font-medium leading-[1.05] sm:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">{profile.name}</span>
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-2xl text-xl text-muted sm:text-2xl">
          {profile.title}
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-xl text-base text-muted/80 sm:text-lg">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <LiquidMetalButton
            label="Get in touch"
            onClick={() => {
              window.location.href = `mailto:${profile.email}`;
            }}
          />
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
          >
            LinkedIn ↗
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-6 flex items-center gap-3 text-xs text-muted md:left-12 lg:left-24"
      >
        <span className="h-8 w-px bg-gradient-to-b from-transparent via-muted to-transparent" />
        Scroll
      </motion.div>
    </section>
  );
}
