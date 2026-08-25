"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#systems", label: "Systems" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 lg:px-24"
    >
      <a href="#" className="text-sm font-medium tracking-tight">
        {profile.name.split(" ")[0]}
        <span className="text-accent">.</span>
      </a>
      <nav className="hidden gap-8 text-sm text-muted sm:flex">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
            {l.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
