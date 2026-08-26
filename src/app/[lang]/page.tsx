import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaSection } from "@/components/CtaSection";
import { getDict, lp, type Locale } from "@/lib/i18n";
import { serviceRowHrefs, serviceRowOrder } from "@/lib/services";
import { waLink } from "@/lib/site";
import { featuredProjects } from "@/lib/projects";

interface Props {
  params: { lang: Locale };
}

export function generateMetadata({ params }: Props): Metadata {
  const t = getDict(params.lang);
  return { title: t.home.meta.title, description: t.home.meta.description };
}

// Isi dengan testimoni & logo klien asli — section di bawah otomatis tampil
// saat data tersedia (tidak ada review palsu, sesuai Master Context).
const testimonials: Array<{ quote: string; author: string }> = [];
const clientLogos: string[] = [];

export default function HomePage({ params }: Props) {
  const { lang } = params;
  const t = getDict(lang);
  const featured = featuredProjects();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero-backdrop relative flex min-h-svh flex-col justify-end overflow-hidden">
        <div className="container-site pb-10 pt-36 sm:pb-14 sm:pt-40">
          <Reveal>
            <p className="eyebrow">{t.home.hero.eyebrow}</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="break-words font-display text-[15vw] font-bold leading-[0.95] tracking-tightest text-bone sm:text-7xl lg:text-8xl xl:text-[7.5rem]">
              {t.home.hero.title1}
              <br />
              <em className="font-accent font-normal italic text-mist">
                {t.home.hero.title2}
              </em>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-steel sm:text-base">
              {t.home.hero.sub}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href={lp(lang, "/work")} className="btn-primary w-full sm:w-auto">
                {t.home.hero.explore}
              </Link>
              <Link href={lp(lang, "/contact")} className="btn-outline w-full sm:w-auto">
                {t.home.hero.startProject}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-16 flex items-center justify-between border-t border-bone/10 pt-5 text-[11px] font-semibold uppercase tracking-widest text-steel/80 sm:mt-20">
              {t.home.hero.strip.map((word, i) => (
                <span key={word} className="flex items-center gap-4 sm:gap-6">
                  {i > 0 ? (
                    <span aria-hidden="true" className="hidden sm:inline">—</span>
                  ) : null}
                  {word}
                </span>
              ))}
              <span aria-hidden="true" className="animate-bounce">↓</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── INTRODUCTION ─────────────────────────────────────── */}
      <section className="section-light">
        <div className="container-site py-24 sm:py-32 lg:py-40">
          <Reveal>
            <span className="eyebrow text-navy-600">{t.home.intro.eyebrow}</span>
            <p className="max-w-4xl font-display text-2xl font-bold leading-snug tracking-tight text-night sm:text-4xl lg:text-[2.75rem]">
              {t.home.intro.segments.map((segment, i) =>
                segment.a ? (
                  <em key={i} className="font-accent font-normal italic text-navy-600">
                    {segment.t}
                  </em>
                ) : (
                  <span key={i}>{segment.t}</span>
                )
              )}
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden border border-night/10 bg-night/10 sm:grid-cols-3 sm:mt-24">
            {t.home.intro.pillars.map((item, i) => (
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
            eyebrow={t.home.servicesSec.eyebrow}
            title={
              <>
                {t.home.servicesSec.titlePlain}{" "}
                <em className="font-accent font-normal italic text-mist">
                  {t.home.servicesSec.titleAccent}
                </em>
              </>
            }
            lead={t.home.servicesSec.lead}
          />

          <div className="mt-14 border-b border-bone/10">
            {serviceRowOrder.map((rowId, i) => {
              const row = t.home.rows[rowId];
              return (
                <Reveal key={rowId} delay={i * 60}>
                  <Link
                    href={lp(lang, serviceRowHrefs[rowId])}
                    className="group flex flex-col gap-3 border-t border-bone/10 py-8 transition-colors hover:bg-bone/[0.02] sm:flex-row sm:items-center sm:gap-8 sm:py-10"
                  >
                    <span className="font-accent text-base italic text-mist">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-3xl font-bold tracking-tightest text-bone transition-colors group-hover:text-mist sm:w-[22rem] sm:text-5xl">
                      {row.name}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-steel">{row.tagline}</p>
                    <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-bone/80 transition-all duration-300 ease-smooth group-hover:gap-3 group-hover:text-bone">
                      {row.cta}
                      <span aria-hidden="true">↗</span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SELECTED STORIES / FEATURED WORK ─────────────────── */}
      <section className="border-t border-bone/10 bg-navy/40">
        <div className="container-site py-24 sm:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={t.home.featured.eyebrow}
              title={
                <>
                  {t.home.featured.titlePlain}{" "}
                  <em className="font-accent font-normal italic text-mist">
                    {t.home.featured.titleAccent}
                  </em>
                </>
              }
            />
            <Reveal delay={150}>
              <Link
                href={lp(lang, "/work")}
                className="mb-1 inline-flex items-center gap-2 border-b border-bone/30 pb-1 text-[11px] font-bold uppercase tracking-widest text-bone/80 transition-colors hover:border-bone hover:text-bone"
              >
                {t.home.featured.viewAll} <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>

          {/* Asymmetric editorial grid */}
          <div className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-12">
            {featured[0] ? (
              <div className="md:col-span-7">
                <ProjectCard project={featured[0]} lang={lang} ratio="aspect-[4/3]" />
              </div>
            ) : null}
            {featured[1] ? (
              <div className="md:col-span-5 md:mt-24">
                <ProjectCard project={featured[1]} lang={lang} delay={120} ratio="aspect-[4/5]" />
              </div>
            ) : null}
            {featured[2] ? (
              <div className="md:col-span-8 md:col-start-3 md:-mt-6">
                <ProjectCard project={featured[2]} lang={lang} delay={80} ratio="aspect-[16/9]" />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* ── WHY FIVEAM ───────────────────────────────────────── */}
      <section className="section-light">
        <div className="container-site py-24 sm:py-32">
          <SectionHeading
            dark={false}
            eyebrow={t.home.why.eyebrow}
            title={
              <>
                {t.home.why.titlePlain}{" "}
                <em className="font-accent font-normal italic text-navy-600">
                  {t.home.why.titleAccent}
                </em>
              </>
            }
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.why.items.map((item, i) => (
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
            eyebrow={t.home.process.eyebrow}
            title={
              <>
                {t.home.process.titlePlain}{" "}
                <em className="font-accent font-normal italic text-mist">
                  {t.home.process.titleAccent}
                </em>
              </>
            }
          />
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.process.steps.map((step, i) => (
              <li key={step.step}>
                <Reveal delay={i * 100} className="h-full border-t border-bone/15 pt-6">
                  <span className="font-accent text-2xl italic text-mist">{step.step}</span>
                  <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-bone">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{step.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── SOCIAL PROOF (renders once real content exists) ──── */}
      {testimonials.length > 0 ? (
        <section className="border-t border-bone/10 bg-navy/40">
          <div className="container-site py-24 sm:py-28">
            <SectionHeading
              eyebrow={t.home.kindWords.eyebrow}
              title={
                <>
                  {t.home.kindWords.titlePlain}{" "}
                  <em className="font-accent font-normal italic text-mist">
                    {t.home.kindWords.titleAccent}
                  </em>
                </>
              }
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, i) => (
                <Reveal key={testimonial.author} delay={(i % 3) * 100}>
                  <figure className="flex h-full min-h-44 flex-col justify-between border border-bone/15 p-7">
                    <blockquote className="text-sm leading-relaxed text-steel">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 text-[11px] uppercase tracking-widest text-steel/80">
                      {testimonial.author}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {clientLogos.length > 0 ? (
        <section className="border-t border-bone/10" aria-label={t.home.kindWords.trustedBy}>
          <div className="container-site py-16 sm:py-20">
            <p className="eyebrow text-center">{t.home.kindWords.trustedBy}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {clientLogos.map((logo) => (
                <span
                  key={logo}
                  className="font-display text-lg font-bold tracking-tight text-bone/80"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CtaSection
        title={t.ctaDefault.title}
        highlight={t.ctaDefault.highlight}
        body={t.ctaDefault.body}
        primaryLabel={t.ctaDefault.primary}
        primaryHref={lp(lang, "/contact")}
        secondaryLabel={t.ctaDefault.secondary}
        secondaryHref={waLink(t.ctaDefault.waMessage)}
      />
    </>
  );
}
