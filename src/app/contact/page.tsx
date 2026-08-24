import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { InquiryForm } from "@/components/InquiryForm";
import { siteConfig, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Let's Create Something",
  description:
    "Start a project with FiveAM Agency. Weddings, graduation sessions, personal & creator content, or brand production — chat via WhatsApp or send an inquiry.",
};

const contactChannels = [
  {
    label: "WhatsApp",
    value: siteConfig.whatsappDisplay,
    href: waLink("Hi FiveAM!"),
    note: "Fastest response — usually within a few hours.", // [RESPONSE TIME — TO BE CONFIRMED]
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "For proposals & collaborations.",
  },
  {
    label: "Instagram",
    value: siteConfig.instagramHandle,
    href: siteConfig.instagram,
    note: "See our latest work & behind the scenes.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="hero-backdrop">
        <div className="container-site pb-14 pt-36 sm:pb-16 sm:pt-44">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tightest text-bone sm:text-7xl lg:text-8xl">
              Let&apos;s create{" "}
              <em className="font-accent font-normal italic text-mist">something.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-bone/10">
        <div className="container-site grid gap-14 py-16 sm:py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          {/* Channels */}
          <Reveal>
            <h2 className="font-display text-xl font-bold tracking-tight text-bone">
              Talk to FiveAM directly
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
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-steel/70">
                      {channel.label}
                      <span className="ml-2 normal-case tracking-normal">[TO BE PROVIDED]</span>
                    </p>
                    <p className="mt-2 flex items-center justify-between gap-3 text-sm font-semibold text-bone group-hover:text-mist">
                      {channel.value}
                      <span aria-hidden="true" className="text-steel transition-transform duration-300 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-steel/60">{channel.note}</p>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-10 border-t border-bone/15 pt-6 text-xs uppercase tracking-widest text-steel/60">
              {siteConfig.location}
            </p>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <InquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
