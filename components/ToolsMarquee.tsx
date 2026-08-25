"use client";

import type { IconType } from "react-icons";
import {
  SiClaudecode,
  SiAnthropic,
  SiHubspot,
  SiZapier,
  SiWordpress,
  SiClickup,
  SiDavinciresolve,
} from "react-icons/si";

type Tool = { name: string; Icon?: IconType; color?: string };

// react-icons/si (Simple Icons) doesn't ship marks for these brands
// (Adobe's suite, Canva, OpenAI/ChatGPT, Monday.com, GoHighLevel aren't
// in the package). Rather than a generic gray placeholder, each gets its
// real brand color behind the initials so it reads as intentional.
const row1: Tool[] = [
  { name: "Claude Code", Icon: SiClaudecode },
  { name: "ChatGPT", color: "#10A37F" },
  { name: "Anthropic", Icon: SiAnthropic },
  { name: "HubSpot", Icon: SiHubspot },
  { name: "GoHighLevel", color: "#FB2E01" },
  { name: "Zapier", Icon: SiZapier },
  { name: "Monday.com", color: "#FF3D57" },
];

const row2: Tool[] = [
  { name: "WordPress", Icon: SiWordpress },
  { name: "ClickUp", Icon: SiClickup },
  { name: "DaVinci Resolve", Icon: SiDavinciresolve },
  { name: "Adobe Premiere Pro", color: "#9999FF" },
  { name: "After Effects", color: "#9999FF" },
  { name: "Photoshop", color: "#31A8FF" },
  { name: "Illustrator", color: "#FF9A00" },
  { name: "Canva", color: "#00C4CC" },
];

function Tile({ tool }: { tool: Tool }) {
  const { name, Icon, color } = tool;
  return (
    <div className="group flex shrink-0 items-center gap-3 rounded-2xl border border-border bg-white/[0.03] px-5 py-4 transition-colors hover:border-accent/40 hover:bg-white/[0.06]">
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors group-hover:text-accent-2 ${
          !Icon && color ? "" : "bg-white/5 text-foreground/80"
        }`}
        style={!Icon && color ? { backgroundColor: `${color}26`, color } : undefined}
      >
        {Icon ? (
          <Icon size={18} />
        ) : (
          <span className="text-[11px] font-semibold">
            {name
              .split(/[\s.]+/)
              .map((w) => w[0])
              .slice(0, 2)
              .join("")
              .toUpperCase()}
          </span>
        )}
      </span>
      <span className="whitespace-nowrap text-sm text-foreground/80">{name}</span>
    </div>
  );
}

function MarqueeRow({ tools, reverse = false }: { tools: Tool[]; reverse?: boolean }) {
  const items = [...tools, ...tools];
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={`flex w-max gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {items.map((tool, i) => (
          <Tile key={`${tool.name}-${i}`} tool={tool} />
        ))}
      </div>
    </div>
  );
}

export function ToolsMarquee() {
  return (
    <div className="card-border rounded-2xl p-6 sm:p-8">
      <p className="mb-6 text-xs uppercase tracking-[0.2em] text-muted">
        Tools &amp; Platforms
      </p>
      <div className="space-y-4">
        <MarqueeRow tools={row1} />
        <MarqueeRow tools={row2} reverse />
      </div>
    </div>
  );
}
