import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { WorkFilter } from "@/components/WorkFilter";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Selected Stories",
  description:
    "Selected stories from FiveAM Agency — weddings, graduation sessions, portraits and brand campaigns in Jakarta, Indonesia.",
};

export default function WorkPage() {
  return (
    <>
      <section className="hero-backdrop">
        <div className="container-site pb-14 pt-36 sm:pb-20 sm:pt-44">
          <Reveal>
            <p className="eyebrow">Our Work</p>
            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tightest text-bone sm:text-7xl lg:text-8xl">
              Selected
              <br />
              <em className="font-accent font-normal italic text-mist">Stories.</em>
            </h1>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-steel sm:text-base">
              Setiap project adalah cerita. Filter berdasarkan kebutuhanmu — atau lihat semuanya.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-bone/10">
        <div className="container-site py-16 sm:py-24">
          <WorkFilter items={projects} />
        </div>
      </section>
    </>
  );
}
