import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { InquiryForm } from "@/components/InquiryForm";
import { getDict, type Locale } from "@/lib/i18n";
import { siteConfig, waLink } from "@/lib/site";

interface Props {
  params: { lang: Locale };
}

export function generateMetadata({ params }: Props): Metadata {
  const t = getDict(params.lang);
  return { title: t.contactPage.meta.title, description: t.contactPage.meta.description };
}

export default function ContactPage({ params }: Props) {
  const { lang } = params;
  const t = getDict(lang);

  const contactChannels = [
    {
      label: t.contactPage.channels[0].label,
      value: siteConfig.whatsappDisplay,
      href: waLink(t.waFloat.message),
    },
    {
      label: t.contactPage.channels[1].label,
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      label: t.contactPage.channels[2].label,
      value: siteConfig.instagramHandle,
      href: siteConfig.instagram,
    },
  ].map((channel, i) => ({ ...channel, note: t.contactPage.channels[i].note }));

  return (
    <>
      <section className="hero-backdrop">
        <div className="container-site pb-14 pt-36 sm:pb-16 sm:pt-44">
          <Reveal>
            <p className="eyebrow">{t.contactPage.eyebrow}</p>
            <h1 className="break-words font-display text-5xl font-bold leading-[0.95] tracking-tightest text-bone sm:text-7xl lg:text-8xl">
              {t.contactPage.title1}{" "}
              <em className="font-accent font-normal italic text-mist">
                {t.contactPage.title2}
              </em>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-bone/10">
        <div className="container-site grid gap-14 py-16 sm:py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          {/* Channels */}
          <Reveal>
            <h2 className="font-display text-xl font-bold tracking-tight text-bone">
              {t.contactPage.talkHeading}
            </h2>
            <ul className="mt-8 space-y-6">
              {contactChannels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block border border-bone/10 p-5 transition-colors hover:border-bone/30"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-steel/85">
                      {channel.label}
                    </p>
                    <p className="mt-2 flex items-center justify-between gap-3 text-sm font-semibold text-bone group-hover:text-mist">
                      {channel.value}
                      <span aria-hidden="true" className="text-steel transition-transform duration-300 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-steel/80">{channel.note}</p>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-10 border-t border-bone/15 pt-6 text-xs uppercase tracking-widest text-steel/80">
              {t.contactPage.location}
            </p>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <InquiryForm t={t.inquiry} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
