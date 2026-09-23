import { Aurora } from "@/components/Aurora";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Expertise } from "@/components/Expertise";
import { Work } from "@/components/Work";
import { GraphicDesign } from "@/components/GraphicDesign";
import { Websites } from "@/components/Websites";
import { Reels } from "@/components/Reels";
import { Workflow } from "@/components/Workflow";
import { SystemDev } from "@/components/SystemDev";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Aurora />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Expertise />
        <Work />
        <GraphicDesign />
        <Websites />
        <Reels />
        <Workflow />
        <SystemDev />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
