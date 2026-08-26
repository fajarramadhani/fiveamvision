import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaSection } from "@/components/CtaSection";
import { getDict, type Locale } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { waLink } from "@/lib/site";

interface Props {
  params: { lang: Locale };
}

export function generateMetadata({ params }: Props): Metadata {
  const t = getDict(params.lang);
  return { title: t.brandPage.meta.title, description: t.brandPage.meta.description };
}

export default function BrandPage({ params }: Props) {
  const { lang } = params;
  const t = getDict(lang);
  const brandStories = projects.filter((p) => p.category === "Brand");

  return (
    <>
      {/* Hero */}
      <section className="hero-backdrop">
        <div className="container-site pb-14 pt-36 sm:pb-20 sm:pt-44">
          <Reveal>
            <p className="eyebrow">{t.brandPage.hero.eyebrow}</p>
            <h1 className="break-words font-display text-[13vw] font-bold leading-[0.95] tracking-tightest text-bone sm:text-7xl lg:text-8xl xl:text-[7rem]">
              {t.brandPage.hero.title1}
              <br />
              <em className="font-accent font-normal italic text-mist">
                {t.brandPage.hero.title2}
              </em>
            </h1>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-steel sm:text-base">
              {t.brandPage.hero.sub}
            </p>
            <div className="mt-9">
              <a
                href={waLink(t.brandPage.hero.discussWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                {t.brandPage.hero.discussBtn}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="container-site py-20 sm:py-28">
          <SectionHeading
            eyebrow={t.brandPage.capabilities.eyebrow}
            title={
              <>
                {t.brandPage.capabilities.titlePlain}{" "}
                <em className="font-accent font-normal italic text-mist">
                  {t.brandPage.capabilities.titleAccent}
                </em>
              </>
            }
          />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {t.brandPage.groups.map((service, i) => (
              <Reveal key={service.title} delay={i * 100}>
                <div className="border-t-2 border-navy-600 pt-6">
                  <h3 className="font-display text-xl font-bold tracking-tight text-bone">
                    {service.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-steel">
                        <span aria-hidden="true" className="text-mist">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly content production — recurring revenue angle */}
      <section className="border-y border-bone/10 bg-navy/40">
        <div className="container-site grid gap-8 py-16 sm:py-20 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tightest text-bone sm:text-4xl">
              {t.brandPage.monthly.titlePlain}{" "}
              <em className="font-accent font-normal italic text-mist">
                {t.brandPage.monthly.titleAccent}
              </em>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-steel sm:text-base">
              {t.brandPage.monthly.body}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={waLink(t.brandPage.monthly.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-fit"
            >
              {t.brandPage.monthly.btn}
            </a>
          </Reveal>
        </div>
      </section>

      {/* Brand stories as campaigns */}
      <section>
        <div className="container-site py-20 sm:py-28">
          <SectionHeading
            eyebrow={t.brandPage.stories.eyebrow}
            title={
              <>
                {t.brandPage.stories.titlePlain}{" "}
                <em className="font-accent font-normal italic text-mist">
                  {t.brandPage.stories.titleAccent}
                </em>
              </>
            }
          />
          <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2">
            {brandStories.map((project, i) => (
              <ProjectCard key={project.slug} project={project} lang={lang} delay={i * 100} ratio="aspect-[4/3]" />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={t.brandPage.cta.title}
        highlight={t.brandPage.cta.highlight}
        primaryLabel={t.brandPage.cta.primary}
        primaryHref={waLink(t.brandPage.cta.waMessage)}
        secondaryLabel={t.ctaDefault.secondary}
        secondaryHref={waLink(t.ctaDefault.waMessage)}
      />
    </>
  );
}
