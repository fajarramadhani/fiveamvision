import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Graduation Photographer Jakarta — Book Your Session",
  description:
    "Graduation photography & reels by FiveAM Agency — individual, couple, best friend, group and family sessions. Celebrate the chapter you've completed.",
};

const sessionTypes = [
  { name: "Individual", desc: "Fokus penuh ke kamu dan pencapaianmu." },
  { name: "Couple", desc: "Rayakan babak baru bersama pasangan." },
  { name: "Best Friend", desc: "Foto wisuda paling seru bareng bestie." },
  { name: "Group", desc: "Satu kelas, satu frame, satu kenangan." },
  { name: "Family", desc: "Orang tua yang ikut bangga — abadikan mereka juga." },
];

const addOns = ["Graduation Reels", "Cinematic Video", "Same Day Edit", "Additional Hour"];

export default function GraduationPage() {
  return (
    <>
      {/* Hero — energetic, youthful */}
      <section className="hero-backdrop">
        <div className="container-site pb-14 pt-36 sm:pb-20 sm:pt-44">
          <Reveal>
            <p className="eyebrow">Graduation</p>
            <h1 className="font-display text-[13vw] font-bold leading-[0.95] tracking-tightest text-bone sm:text-7xl lg:text-8xl xl:text-[7rem]">
              You did it.
              <br />
              <em className="font-accent font-normal italic text-mist">Now remember it.</em>
            </h1>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-steel sm:text-base">
              Tahun-tahun hard work, ditutup dalam satu hari. Celebrate the chapter
              you&apos;ve completed — and keep it forever.
            </p>
            <div className="mt-9">
              <a
                href={waLink("Hi FiveAM! I'd like to book a graduation session.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                Book Graduation Session
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Session types */}
      <section>
        <div className="container-site py-20 sm:py-28">
          <Reveal>
            <span className="eyebrow">Pick Your Vibe</span>
            <h2 className="font-display text-3xl font-bold tracking-tightest text-bone sm:text-5xl">
              Session types.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sessionTypes.map((type, i) => (
              <Reveal key={type.name} delay={i * 80} className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
                <article className="group flex h-full flex-col border border-bone/10 transition-colors hover:border-mist/50">
                  <div className="overflow-hidden">
                    <div className="transition-transform duration-700 ease-smooth group-hover:scale-[1.03]">
                      <PlaceholderImage label={`${type.name} session`} ratio="aspect-[16/10]" compact />
                    </div>
                  </div>
                  <h3 className="mt-6 px-6 font-display text-xl font-bold tracking-tight text-bone">
                    {type.name}
                  </h3>
                  <p className="mt-2 px-6 pb-7 text-sm leading-relaxed text-steel">{type.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons + CTA band */}
      <section className="border-y border-bone/10 bg-navy/40">
        <div className="container-site grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tightest text-bone sm:text-4xl">
              Level it up with{" "}
              <em className="font-accent font-normal italic text-mist">add-ons.</em>
            </h2>
          </Reveal>
          <ul className="grid grid-cols-2 gap-px overflow-hidden border border-bone/10 bg-bone/10 sm:grid-cols-4">
            {addOns.map((addOn) => (
              <li key={addOn} className="bg-night px-4 py-6 text-center text-xs font-semibold uppercase tracking-widest text-bone/90 sm:py-8">
                {addOn}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection
        title="Graduation season fills up fast."
        highlight="Book your session early."
        primaryLabel="Book Graduation Session"
        whatsappMessage="Hi FiveAM! I'd like to ask about graduation packages for this season."
      />
    </>
  );
}
