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
  return { title: t.aboutPage.meta.title, description: t.aboutPage.meta.description };
}

// Isi saat data tim asli tersedia — grid di bawah otomatis tampil.
const team: Array<{ name: string; role: string }> = [];

export default function AboutPage({ params }: Props) {
  const { lang } = params;
  const t = getDict(lang);

  return (
    <>
      <section className="hero-backdrop">
        <div className="container-site pb-14 pt-36 sm:pb-20 sm:pt-44">
          <Reveal>
            <p className="eyebrow">{t.aboutPage.hero.eyebrow}</p>
            <h1 className="break-words font-display text-5xl font-bold leading-[0.95] tracking-tightest text-bone sm:text-7xl lg:text-8xl">
              {t.aboutPage.hero.title1}{" "}
              <em className="font-accent font-normal italic text-mist">
                {t.aboutPage.hero.title2}
              </em>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Who we are */}
      <section className="border-t border-bone/10">
        <div className="container-site grid gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow">{t.aboutPage.who.eyebrow}</span>
            <h2 className="font-display text-2xl font-bold tracking-tightest text-bone sm:text-3xl">
              {t.aboutPage.who.title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-6 text-sm leading-relaxed text-steel sm:text-base">
              {t.aboutPage.who.paras.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we believe */}
      <section className="section-light">
        <div className="container-site py-20 sm:py-28">
          <Reveal>
            <span className="eyebrow text-navy-600">{t.aboutPage.beliefs.eyebrow}</span>
            <h2 className="font-display text-3xl font-bold tracking-tightest text-night sm:text-5xl">
              {t.aboutPage.beliefs.title}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {t.aboutPage.beliefs.items.map((belief, i) => (
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
            <span className="eyebrow">{t.aboutPage.team.eyebrow}</span>
            <h2 className="font-display text-3xl font-bold tracking-tightest text-bone sm:text-5xl">
              {t.aboutPage.team.titlePlain}{" "}
              <em className="font-accent font-normal italic text-mist">
                {t.aboutPage.team.titleAccent}
              </em>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-steel">
              {t.aboutPage.team.sub}
            </p>
          </Reveal>

          {team.length > 0 ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, i) => (
                <Reveal key={member.name} delay={(i % 4) * 80}>
                  <figure>
                    <PlaceholderImage label={member.name} ratio="aspect-[3/4]" compact lang={lang} />
                    <figcaption className="mt-4 border-t border-bone/15 pt-4">
                      <p className="text-sm font-semibold text-bone/85">{member.name}</p>
                      <p className="mt-1 text-[11px] uppercase tracking-widest text-steel/85">
                        {member.role}
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <CtaSection
        title={t.aboutPage.cta.title}
        highlight={t.aboutPage.cta.highlight}
        primaryLabel={t.ctaDefault.primary}
        primaryHref={lp(lang, "/contact")}
        secondaryLabel={t.ctaDefault.secondary}
        secondaryHref={waLink(t.aboutPage.cta.waMessage)}
      />
    </>
  );
}
