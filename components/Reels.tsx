"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { videoGroups } from "@/lib/data";
import { assetPath } from "@/lib/utils";
import { Reveal } from "./Reveal";

function ReelCard({
  title,
  src,
  poster,
}: {
  title: string;
  src: string;
  poster: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="card-border flex h-full flex-col overflow-hidden rounded-2xl"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={assetPath(src)}
          poster={assetPath(poster)}
          controls={playing}
          playsInline
          preload="none"
          className="h-full w-full object-cover"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        {!playing && (
          <button
            type="button"
            aria-label={`Play ${title}`}
            onClick={() => videoRef.current?.play()}
            className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-black shadow-lg">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <p className="px-4 py-3 text-sm font-medium">{title}</p>
    </motion.div>
  );
}

export function Reels() {
  return (
    <section id="reels" className="relative px-6 py-28 md:px-12 lg:px-24">
      <Reveal>
        <p className="mb-4 font-mono text-sm tracking-[0.3em] text-accent-3 uppercase">
          Selected Work
        </p>
        <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl font-medium sm:text-4xl">
          Video &amp; Reels
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Short-form video edited for client brands and social channels.
        </p>
      </Reveal>

      <div className="mt-14 space-y-16">
        {videoGroups.map((group) => (
          <div key={group.client}>
            <Reveal>
              <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-accent-2">
                {group.client}
              </h3>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {group.videos.map((v, i) => (
                <Reveal key={v.src} delay={i * 0.08}>
                  <ReelCard {...v} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
