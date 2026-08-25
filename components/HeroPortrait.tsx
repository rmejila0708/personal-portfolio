import Image from "next/image";
import { assetPath } from "@/lib/utils";

export function HeroPortrait() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 right-0 hidden h-[72%] w-[56%] lg:block"
      style={{
        maskImage:
          "radial-gradient(ellipse 70% 78% at 55% 42%, black 42%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 78% at 55% 42%, black 42%, transparent 80%)",
      }}
    >
      <Image
        src={assetPath("/profile/ricky-laptop-cutout.png")}
        alt="Ricky Mejila working on a laptop"
        fill
        priority
        sizes="56vw"
        className="object-contain object-bottom"
      />
    </div>
  );
}
