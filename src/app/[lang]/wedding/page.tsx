import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaSection } from "@/components/CtaSection";
import { getDict, lp, type Locale } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { waLink } from "@/lib/site";

interface Props {
  params: { lang: Locale };
}

export function generateMetadata({ params }: Props): Metadata {
  const t = getDict(params.lang);
  return { title: t.weddingPage.meta.title, description: t.weddingPage.meta.description };
}

export default function WeddingPage({ params }: Props) {
  const { lang } = params;
  const t = getDict(lang);
  const weddingStories = projects.filter((p) => p.category === "Wedding");

  return (
    <>
      {/* Hero */}
      <section className="hero-backdrop">
        <div className="container-site pb-14 pt-36 sm:pb-20 sm:pt-44">
          <Reveal>
            <p className="eyebrow">{t.weddingPage.hero.eyebrow}</p>
            <h1 className="break-words font-display text-[13vw] font-bold leading-[0.95] tracking-tightest text-bone sm:text-7xl lg:text-8xl xl:text-[7rem]">
              {t.weddingPage.hero.title1}
              <br />
              <em className="font-accent font-normal italic text-mist">
                {t.weddingPage.hero.title2}
              </em>
            </h1>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-steel sm:text-base">
              {t.weddingPage.hero.sub}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={waLink(t.weddingPage.hero.checkWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                {t.weddingPage.hero.checkAvailability}
              </a>
              <Link href="#wedding-stories" className="btn-outline w-full sm:w-auto">
                {t.weddingPage.hero.seeStories}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-light">
        <div className="container-site py-20 sm:py-28">
          <Reveal>
            <span className="eyebrow text-navy-600">{t.weddingPage.approach.eyebrow}</span>
            <p className="max-w-3xl font-display text-2xl font-bold leading-snug tracking-tight text-night sm:text-4xl">
              {t.weddingPage.approach.segments.map((segment, i) =>
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
        </div>
      </section>

      {/* Selected wedding stories */}
      <section id="wedding-stories" className="scroll-mt-24 border-t border-bone/10 bg-navy/40">
        <div className="container-site py-20 sm:py-28">
          <SectionHeading
            eyebrow={t.weddingPage.stories.eyebrow}
            title={
              <>
                {t.weddingPage.stories.titlePlain}{" "}
                <em className="font-accent font-normal italic text-mist">
                  {t.weddingPage.stories.titleAccent}
                </em>
              </>
            }
          />
          <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2">
            {weddingStories.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                lang={lang}
                delay={i * 100}
                ratio={i % 2 === 0 ? "aspect-[4/5]" : "aspect-[4/5] md:mt-16"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="container-site grid gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            eyebrow={t.weddingPage.included.eyebrow}
            title={
              <>
                {t.weddingPage.included.titlePlain}{" "}
                <em className="font-accent font-normal italic text-mist">
                  {t.weddingPage.included.titleAccent}
                </em>
              </>
            }
          />
          <ul className="grid gap-px self-start overflow-hidden border border-bone/10 bg-bone/10 sm:grid-cols-2">
            {t.weddingPage.servicesList.map((service) => (
              <li key={service} className="bg-night p-6 text-sm font-medium text-bone/90">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-bone/10">
        <div className="container-site py-20 sm:py-28">
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* FAQ */}
      <section className="border-t border-bone/10 bg-navy/40">
        <div className="container-site grid gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading
            eyebrow={t.weddingPage.faq.eyebrow}
            title={
              <>
                {t.weddingPage.faq.titlePlain}{" "}
                <em className="font-accent font-normal italic text-mist">
                  {t.weddingPage.faq.titleAccent}
                </em>
              </>
            }
          />
          <div>
            {t.weddingPage.faq.items.map((faq) => (
              <details
                key={faq.q}
                className="group border-b border-bone/15 py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6 font-display text-base font-bold tracking-tight text-bone sm:text-lg">
                  {faq.q}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl text-steel transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-steel">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={t.weddingPage.cta.title}
        highlight={t.weddingPage.cta.highlight}
        primaryLabel={t.weddingPage.cta.primary}
        primaryHref={waLink(t.weddingPage.cta.waMessage)}
      />
    </>
  );
}
