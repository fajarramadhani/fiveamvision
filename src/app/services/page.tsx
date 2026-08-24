import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CtaSection } from "@/components/CtaSection";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — What We Create",
  description:
    "Wedding & graduation (moments), personal & creator content (people), and photography, video, reels & creative direction for brands. Jakarta, Indonesia.",
};

const groups = [
  {
    id: "moments",
    label: "Moments",
    headline: "Hari-hari yang hanya terjadi sekali.",
    items: [
      {
        name: "Wedding",
        desc: "Photography, films, engagement, prewedding, akad, reception & intimate wedding.",
        href: "/wedding",
        cta: "Check Availability",
      },
      {
        name: "Graduation",
        desc: "Individual, couple, best friend, group & family sessions — plus reels.",
        href: "/graduation",
        cta: "Book Your Session",
      },
    ],
  },
  {
    id: "people",
    label: "People",
    headline: "Ceritamu, dengan cara yang berbeda.",
    items: [
      {
        name: "Personal / Creator",
        desc: "Personal photoshoot, portrait, personal branding, creator content & reels.",
        href: "/contact",
        cta: "Start a Session",
      },
    ],
  },
  {
    id: "brands",
    label: "Brands",
    headline: "Content yang menggerakkan brand kamu.",
    items: [
      {
        name: "Commercial & UMKM",
        desc: "Product photography, campaign, lifestyle content, reels, short-form video & creative direction. Tersedia juga monthly content production untuk kebutuhan konten berkelanjutan.",
        href: "/brand",
        cta: "Discuss Your Project",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero-backdrop">
        <div className="container-site pb-14 pt-36 sm:pb-20 sm:pt-44">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tightest text-bone sm:text-7xl lg:text-8xl">
              What We
              <br />
              <em className="font-accent font-normal italic text-mist">Create.</em>
            </h1>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-steel sm:text-base">
              People. Moments. Brands. Semua dalam satu creative ecosystem.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-bone/10">
        <div className="container-site py-16 sm:py-24">
          {groups.map((group) => (
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
                        Ask for Pricing <span aria-hidden="true">↗</span>
                      </a>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}

          <Reveal>
            <p className="max-w-xl border-t border-bone/15 pt-8 text-xs leading-relaxed text-steel/70">
              Harga tidak kami pasang di website setiap layanan — setiap project punya kebutuhan
              berbeda. Chat kami dan kami bantu rekomendasikan package yang paling cocok.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="Not sure where to start?"
        highlight="Let's talk it through."
        whatsappMessage="Hi FiveAM! I'm not sure which service fits my needs — can we discuss?"
      />
    </>
  );
}
