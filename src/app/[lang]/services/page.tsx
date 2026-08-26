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
  return { title: t.servicesPage.meta.title, description: t.servicesPage.meta.description };
}

export default function ServicesPage({ params }: Props) {
  const { lang } = params;
  const t = getDict(lang);

  return (
    <>
      <section className="hero-backdrop">
        <div className="container-site pb-14 pt-36 sm:pb-20 sm:pt-44">
          <Reveal>
            <p className="eyebrow">{t.servicesPage.eyebrow}</p>
            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tightest text-bone sm:text-7xl lg:text-8xl">
              {t.servicesPage.title1}
              <br />
              <em className="font-accent font-normal italic text-mist">
                {t.servicesPage.title2}
              </em>
            </h1>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-steel sm:text-base">
              {t.servicesPage.sub}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-bone/10">
        <div className="container-site py-16 sm:py-24">
          {t.servicesPage.groups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-28 py-14 first:pt-0 last:pb-0">
              <Reveal>
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3 border-b border-bone/15 pb-6">
                  <h2 className="font-accent text-2xl italic text-mist">{group.label}</h2>
                  <p className="text-sm text-steel">{group.headline}</p>
                </div>
              </Reveal>

              <div className="mt-10 grid gap-10 lg:grid-cols-2">
                {group.items.map((item, i) => (
                  <Reveal key={item.name} delay={i * 100}>
                    <article className="border border-bone/10 p-7 transition-colors hover:border-bone/25 sm:p-9">
                      <PlaceholderImage
                        label={`${item.name} service visual`}
                        ratio="aspect-[16/9]"
                        compact
                        lang={lang}
                      />
                      <h3 className="mt-7 font-display text-2xl font-bold tracking-tightest text-bone sm:text-3xl">
                        {item.name}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-steel">{item.desc}</p>
                      <a
                        href={waLink(
                          `Hi FiveAM! I'd like to ask about your ${item.name} services.` // Ask for pricing → starts a conversation
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 inline-flex items-center gap-2 border-b border-bone/30 pb-1 text-[11px] font-bold uppercase tracking-widest text-bone/85 transition-colors hover:border-bone hover:text-bone"
                      >
                        {item.cta} <span aria-hidden="true">↗</span>
                      </a>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}

          <Reveal>
            <p className="max-w-xl border-t border-bone/15 pt-8 text-xs leading-relaxed text-steel/85">
              {t.servicesPage.pricingNote}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title={t.servicesPage.cta.title}
        highlight={t.servicesPage.cta.highlight}
        primaryLabel={t.ctaDefault.primary}
        primaryHref={lp(lang, "/contact")}
        secondaryLabel={t.ctaDefault.secondary}
        secondaryHref={waLink(t.servicesPage.cta.waMessage)}
      />
    </>
  );
}
