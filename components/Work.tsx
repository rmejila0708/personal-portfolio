"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { blogSamples, socialGroups } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="relative px-6 py-28 md:px-12 lg:px-24">
      <Reveal>
        <p className="mb-4 font-mono text-sm tracking-[0.3em] text-accent uppercase">
          Selected Work
        </p>
        <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl font-medium sm:text-4xl">
          Blog &amp; content samples
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Written, art-directed, and shipped for RevUp Now AI — live on the site today.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {blogSamples.map((post, i) => (
          <Reveal key={post.link} delay={i * 0.08}>
            <motion.a
              href={post.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6 }}
              className="card-border group block h-full overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {post.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-medium leading-snug transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent-2">
                  Read on revupnow.ai ↗
                </span>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-28">
        <p className="mb-4 font-mono text-sm tracking-[0.3em] text-accent-2 uppercase">
          Selected Work
        </p>
        <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl font-medium sm:text-4xl">
          Social media graphics
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Concept, copy, and design for client social campaigns.
        </p>
      </Reveal>

      <div className="mt-14 space-y-14">
        {socialGroups.map((group) => (
          <div key={group.client}>
            <Reveal>
              <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-accent-2">
                {group.client}
              </h3>
            </Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {group.samples.map((s, i) => (
                <Reveal key={s.image} delay={i * 0.05}>
                  <motion.a
                    href={s.image}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -4 }}
                    className="group block overflow-hidden rounded-xl border border-border"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.caption}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <p className="bg-black/40 px-3 py-2 text-xs text-muted">{s.caption}</p>
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
