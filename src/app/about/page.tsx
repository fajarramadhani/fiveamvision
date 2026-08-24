import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "About — Who We Are",
  description:
    "FiveAM Agency is a creative team crafting visual stories through photography, filmmaking and creative direction. Based in Jakarta, Indonesia.",
};

const beliefs = [
  {
    title: "Storytelling",
    body: "Setiap gambar harus bercerita. Kalau tidak ada ceritanya, kami cari dulu sebelum menekan shutter.",
  },
  {
    title: "Collaboration",
    body: "Project terbaik lahir dari dua arah — ide kamu plus perspektif kami.",
  },
  {
    title: "Creative Execution",
    body: "Ide bagus tanpa execution bagus itu cuma ide. Kami menuntaskan sampai detail terakhir.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-backdrop">
        <div className="container-site pb-14 pt-36 sm:pb-20 sm:pt-44">
          <Reveal>
            <p className="eyebrow">About</p>
            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tightest text-bone sm:text-7xl lg:text-8xl">
              The team behind{" "}
              <em className="font-accent font-normal italic text-mist">the stories.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Who we are */}
      <section className="border-t border-bone/10">
        <div className="container-site grid gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow">Who We Are</span>
            <h2 className="font-display text-2xl font-bold tracking-tightest text-bone sm:text-3xl">
              FiveAM is a creative team.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-6 text-sm leading-relaxed text-steel sm:text-base">
              <p>
                Bukan sekadar &ldquo;orang yang bawa kamera&rdquo; — FiveAM adalah creative partner
                yang membantu mengubah people, moments dan brands menjadi visual story yang punya value.
              </p>
              <p>
                Nama kami datang dari jam paling tenang dalam sehari — 5 AM. Jam ketika kota belum
                bangun, cahaya masih lembut, dan cerita hari itu belum dimulai. Kami suka mulai
                dari situ: sebelum semua orang lain melihatnya.
              </p>
              <p>
                Based in Jakarta, Indonesia. Working with couples, graduates, creators and growing brands.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we believe */}
      <section className="section-light">
        <div className="container-site py-20 sm:py-28">
          <Reveal>
            <span className="eyebrow text-navy-600">What We Believe</span>
            <h2 className="font-display text-3xl font-bold tracking-tightest text-night sm:text-5xl">
              Three things, no fluff.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {beliefs.map((belief, i) => (
              <Reveal key={belief.title} delay={i * 100}>
                <div className="border-t-2 border-night pt-6">
                  <p className="font-accent text-xl italic text-navy-600">0{i + 1}</p>
                  <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-night">
                    {belief.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ash">{belief.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the team */}
      <section className="border-b border-bone/10">
        <div className="container-site py-20 sm:py-28">
          <Reveal>
            <span className="eyebrow">Meet the Team</span>
            <h2 className="font-display text-3xl font-bold tracking-tightest text-bone sm:text-5xl">
              The humans of <em className="font-accent font-normal italic text-mist">FiveAM.</em>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-steel">
              [TEAM PHOTOS &amp; PROFILES — TO BE PROVIDED] Struktur peran di FiveAM: PIC,
              Creative Lead, Production Team &amp; Post Production.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2].map((i) => (
              <Reveal key={i} delay={i * 80}>
                <figure>
                  <PlaceholderImage label={`[TEAM MEMBER ${i + 1} PHOTO — TO BE PROVIDED]`} ratio="aspect-[3/4]" compact />
                  <figcaption className="mt-4 border-t border-bone/15 pt-4">
                    <p className="text-sm font-semibold text-bone/85">[NAME — TO BE PROVIDED]</p>
                    <p className="mt-1 text-[11px] uppercase tracking-widest text-steel/70">
                      [ROLE — TO BE PROVIDED]
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Like how we think?"
        highlight="You'll like how we work."
        whatsappMessage="Hi FiveAM! I just checked your About page and I'd love to work together."
      />
    </>
  );
}
