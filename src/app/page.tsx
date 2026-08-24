import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaSection } from "@/components/CtaSection";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { serviceCategories, whyFiveam, processSteps } from "@/lib/services";
import { featuredProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "FiveAM Agency — Stories Worth Remembering | Creative Photography & Filmmaking Jakarta",
  description:
    "Creative photography & filmmaking for people, moments and brands. Weddings, graduation sessions, personal & creator content, and brand production in Jakarta, Indonesia.",
};

export default function HomePage() {
  const featured = featuredProjects();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero-backdrop relative flex min-h-svh flex-col justify-end overflow-hidden">
        <div className="container-site pb-10 pt-36 sm:pb-14 sm:pt-40">
          <Reveal>
            <p className="eyebrow">Creative Photography &amp; Filmmaking — Jakarta</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display text-[15vw] font-bold leading-[0.95] tracking-tightest text-bone sm:text-7xl lg:text-8xl xl:text-[7.5rem]">
              Stories Worth
              <br />
              <em className="font-accent font-normal italic text-mist">Remembering.</em>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-steel sm:text-base">
              Creative photography &amp; filmmaking for people, moments and brands.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/work" className="btn-primary w-full sm:w-auto">
                Explore Our Work
              </Link>
              <Link href="/contact" className="btn-outline w-full sm:w-auto">
                Start a Project
              </Link>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-16 flex items-center justify-between border-t border-bone/10 pt-5 text-[11px] font-semibold uppercase tracking-widest text-steel/80 sm:mt-20">
              <span>People</span>
              <span aria-hidden="true" className="hidden sm:inline">—</span>
              <span>Moments</span>
              <span aria-hidden="true" className="hidden sm:inline">—</span>
              <span>Brands</span>
              <span aria-hidden="true" className="animate-bounce">↓</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── INTRODUCTION ─────────────────────────────────────── */}
      <section className="section-light">
        <div className="container-site py-24 sm:py-32 lg:py-40">
          <Reveal>
            <span className="eyebrow text-navy-600">Who We Are</span>
            <p className="max-w-4xl font-display text-2xl font-bold leading-snug tracking-tight text-night sm:text-4xl lg:text-[2.75rem]">
              FiveAM is a creative team crafting visual stories through{" "}
              <em className="font-accent font-normal italic text-navy-600">photography</em>,{" "}
              <em className="font-accent font-normal italic text-navy-600">filmmaking</em> and{" "}
              <em className="font-accent font-normal italic text-navy-600">creative direction</em>.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden border border-night/10 bg-night/10 sm:grid-cols-3 sm:mt-24">
            {[
              { word: "People", note: "Pengantin, wisudawan, kreator & personal brand." },
              { word: "Moments", note: "Wedding, graduation dan momen yang layak diabadikan." },
              { word: "Brands", note: "UMKM & brand yang sedang tumbuh." },
            ].map((item, i) => (
              <Reveal key={item.word} delay={i * 120} className="bg-bone">
                <div className="p-8 sm:p-10">
                  <p className="text-xs uppercase tracking-widest text-navy-600">0{i + 1}</p>
                  <p className="mt-6 font-display text-2xl font-bold tracking-tightest sm:text-3xl">
                    {item.word}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ash">{item.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE CATEGORIES ───────────────────────────────── */}
      <section>
        <div className="container-site py-24 sm:py-32">
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                One team. <em className="font-accent font-normal italic text-mist">Four stories</em> to tell.
              </>
            }
            lead="Dari hari bahagia sampai brand yang sedang tumbuh — semuanya kami tangani dengan pendekatan yang sama: cari ceritanya dulu, baru ambil kameranya."
          />

          <div className="mt-14">
            {serviceCategories.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 60}>
                <Link
                  href={cat.href}
                  className="group flex flex-col gap-3 border-t border-bone/10 py-8 transition-colors last:border-b hover:bg-bone/[0.02] sm:flex-row sm:items-center sm:gap-8 sm:py-10"
                >
                  <span className="font-accent text-base italic text-mist">{cat.index}</span>
                  <h3 className="font-display text-3xl font-bold tracking-tightest text-bone transition-colors group-hover:text-mist sm:w-[22rem] sm:text-5xl">
                    {cat.name}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-steel">{cat.tagline}</p>
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-bone/70 transition-all duration-300 ease-smooth group-hover:gap-3 group-hover:text-bone">
                    {cat.cta}
                    <span aria-hidden="true">↗</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED STORIES / FEATURED WORK ─────────────────── */}
      <section className="border-t border-bone/10 bg-navy/40">
        <div className="container-site py-24 sm:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected Stories"
              title={
                <>
                  Work we&apos;re <em className="font-accent font-normal italic text-mist">proud of.</em>
                </>
              }
            />
            <Reveal delay={150}>
              <Link
                href="/work"
                className="mb-1 inline-flex items-center gap-2 border-b border-bone/30 pb-1 text-[11px] font-bold uppercase tracking-widest text-bone/80 transition-colors hover:border-bone hover:text-bone"
              >
                View All Work <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>

          {/* Asymmetric editorial grid */}
          <div className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-12">
            {featured[0] ? (
              <div className="md:col-span-7">
                <ProjectCard project={featured[0]} ratio="aspect-[4/3]" />
              </div>
            ) : null}
            {featured[1] ? (
              <div className="md:col-span-5 md:mt-24">
                <ProjectCard project={featured[1]} delay={120} ratio="aspect-[4/5]" />
              </div>
            ) : null}
            {featured[2] ? (
              <div className="md:col-span-8 md:col-start-3 md:-mt-6">
                <ProjectCard project={featured[2]} delay={80} ratio="aspect-[16/9]" />
              </div>
            ) : null}
          </div>

          <Reveal delay={100}>
            <p className="mt-12 max-w-lg text-xs leading-relaxed text-steel/70">
              Layout di atas menggunakan placeholder. Setiap slot siap diganti dengan foto asli
              FiveAM — cukup tambahkan project di{" "}
              <code className="text-steel">src/lib/projects.ts</code>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── WHY FIVEAM ───────────────────────────────────────── */}
      <section className="section-light">
        <div className="container-site py-24 sm:py-32">
          <SectionHeading
            dark={false}
            eyebrow="Why FiveAM"
            title={
              <>
                Simple approach, <em className="font-accent font-normal italic text-navy-600">serious craft.</em>
              </>
            }
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyFiveam.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="border-t-2 border-night pt-6">
                  <h3 className="font-display text-xl font-bold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ash">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────── */}
      <section>
        <div className="container-site py-24 sm:py-32">
          <SectionHeading
            eyebrow="How It Works"
            title={
              <>
                From hello to <em className="font-accent font-normal italic text-mist">delivered.</em>
              </>
            }
          />
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 100}>
                <li className="border-t border-bone/15 pt-6">
                  <span className="font-accent text-2xl italic text-mist">{step.step}</span>
                  <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-bone">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── SOCIAL PROOF (STRUCTURE + PLACEHOLDERS) ──────────── */}
      <section className="border-t border-bone/10 bg-navy/40">
        <div className="container-site py-24 sm:py-28">
          <SectionHeading
            eyebrow="Kind Words"
            title={
              <>
                What clients say <em className="font-accent font-normal italic text-mist">after the story.</em>
              </>
            }
            lead="Testimoni akan ditambahkan dari project yang telah selesai. Kami tidak menampilkan review palsu — trust dibangun dari pekerjaan yang nyata."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <Reveal key={i} delay={i * 100}>
                <figure className="flex h-full min-h-44 flex-col justify-between border border-dashed border-bone/20 p-7">
                  <blockquote className="text-sm leading-relaxed text-steel">
                    [CLIENT TESTIMONIAL — TO BE PROVIDED]
                  </blockquote>
                  <figcaption className="mt-6 text-[11px] uppercase tracking-widest text-steel/60">
                    [CLIENT NAME · SERVICE] — TO BE PROVIDED
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          {/* Client logos / collaborations strip */}
          <Reveal delay={120}>
            <div className="mt-14 border-t border-bone/10 pt-10">
              <PlaceholderImage
                label="Client logos & collaborations strip — TO BE PROVIDED"
                ratio="h-28 w-full"
                compact
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CtaSection />



    </>
  );
}
