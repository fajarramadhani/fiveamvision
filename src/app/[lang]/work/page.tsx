import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { WorkFilter } from "@/components/WorkFilter";
import { getDict, type Locale } from "@/lib/i18n";
import { projects } from "@/lib/projects";

interface Props {
  params: { lang: Locale };
}

export function generateMetadata({ params }: Props): Metadata {
  const t = getDict(params.lang);
  return { title: t.workPage.meta.title, description: t.workPage.meta.description };
}

export default function WorkPage({ params }: Props) {
  const { lang } = params;
  const t = getDict(lang);

  return (
    <>
      <section className="hero-backdrop">
        <div className="container-site pb-14 pt-36 sm:pb-20 sm:pt-44">
          <Reveal>
            <p className="eyebrow">{t.workPage.eyebrow}</p>
            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tightest text-bone sm:text-7xl lg:text-8xl">
              {t.workPage.title1}
              <br />
              <em className="font-accent font-normal italic text-mist">
                {t.workPage.title2}
              </em>
            </h1>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-steel sm:text-base">
              {t.workPage.sub}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-bone/10">
        <div className="container-site py-16 sm:py-24">
          <WorkFilter items={projects} lang={lang} t={t.workFilter} />
        </div>
      </section>
    </>
  );
}
