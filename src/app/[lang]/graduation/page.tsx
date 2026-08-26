import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { getDict, lp, type Locale } from "@/lib/i18n";
import { waLink } from "@/lib/site";

interface Props {
  params: { lang: Locale };
}

export function generateMetadata({ params }: Props): Metadata {
  const t = getDict(params.lang);
  return { title: t.graduationPage.meta.title, description: t.graduationPage.meta.description };
}

export default function GraduationPage({ params }: Props) {
  const { lang } = params;
  const t = getDict(lang);

  return (
    <>
      {/* Hero — energetic, youthful */}
      <section className="hero-backdrop">
        <div className="container-site pb-14 pt-36 sm:pb-20 sm:pt-44">
          <Reveal>
            <p className="eyebrow">{t.graduationPage.hero.eyebrow}</p>
            <h1 className="break-words font-display text-[13vw] font-bold leading-[0.95] tracking-tightest text-bone sm:text-7xl lg:text-8xl xl:text-[7rem]">
              {t.graduationPage.hero.title1}
              <br />
              <em className="font-accent font-normal italic text-mist">
                {t.graduationPage.hero.title2}
              </em>
            </h1>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-steel sm:text-base">
              {t.graduationPage.hero.sub}
            </p>
            <div className="mt-9">
              <a
                href={waLink(t.graduationPage.hero.bookWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                {t.graduationPage.hero.bookBtn}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Session types */}
      <section>
        <div className="container-site py-20 sm:py-28">
          <Reveal>
            <span className="eyebrow">{t.graduationPage.sessions.eyebrow}</span>
            <h2 className="font-display text-3xl font-bold tracking-tightest text-bone sm:text-5xl">
              {t.graduationPage.sessions.title}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.graduationPage.sessionTypes.map((type, i) => (
              <Reveal key={type.name} delay={i * 80} className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
                <article className="group flex h-full flex-col border border-bone/10 transition-colors hover:border-mist/50">
                  <div className="overflow-hidden">
                    <div className="transition-transform duration-700 ease-smooth group-hover:scale-[1.03]">
                      <PlaceholderImage label={`${type.name} session`} ratio="aspect-[16/10]" compact lang={lang} />
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
              {t.graduationPage.addons.titlePlain}{" "}
              <em className="font-accent font-normal italic text-mist">
                {t.graduationPage.addons.titleAccent}
              </em>
            </h2>
          </Reveal>
          <ul className="grid grid-cols-2 gap-px overflow-hidden border border-bone/10 bg-bone/10 sm:grid-cols-4">
            {t.graduationPage.addOnsList.map((addOn) => (
              <li key={addOn} className="bg-night px-4 py-6 text-center text-xs font-semibold uppercase tracking-widest text-bone/90 sm:py-8">
                {addOn}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection
        title={t.graduationPage.cta.title}
        highlight={t.graduationPage.cta.highlight}
        primaryLabel={t.graduationPage.cta.primary}
        primaryHref={waLink(t.graduationPage.cta.waMessage)}
        secondaryLabel={t.ctaDefault.secondary}
        secondaryHref={waLink(t.ctaDefault.waMessage)}
      />
    </>
  );
}
