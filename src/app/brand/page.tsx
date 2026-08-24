import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaSection } from "@/components/CtaSection";
import { projects } from "@/lib/projects";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Brand & UMKM Content Production Jakarta",
  description:
    "Product photography, campaign, lifestyle content, reels, short-form video & creative direction for growing brands and UMKM. Content made to move your brand forward.",
};

const brandServices = [
  { title: "Photography", items: ["Product", "Campaign", "Lifestyle", "Food", "Fashion"] },
  { title: "Video Content", items: ["Reels", "Short-form video", "Cinematic", "Product video"] },
  { title: "Creative", items: ["Creative Direction", "Social Media Content", "Campaign Concept"] },
];

export default function BrandPage() {
  const brandStories = projects.filter((p) => p.category === "Brand");

  return (
    <>
      {/* Hero */}
      <section className="hero-backdrop">
        <div className="container-site pb-14 pt-36 sm:pb-20 sm:pt-44">
          <Reveal>
            <p className="eyebrow">Brands &amp; UMKM</p>
            <h1 className="font-display text-[13vw] font-bold leading-[0.95] tracking-tightest text-bone sm:text-7xl lg:text-8xl xl:text-[7rem]">
              Content made to
              <br />
              <em className="font-accent font-normal italic text-mist">move you forward.</em>
            </h1>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-steel sm:text-base">
              Untuk UMKM dan brand yang sedang tumbuh — bukan sekadar foto produk,
              tapi konten dengan arah kreatif yang jelas.
            </p>
            <div className="mt-9">
              <a
                href={waLink("Hi FiveAM! I'd like to discuss content production for my brand.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                Discuss Your Project
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="container-site py-20 sm:py-28">
          <SectionHeading
            eyebrow="Capabilities"
            title={
              <>
                One partner,{" "}
                <em className="font-accent font-normal italic text-mist">full coverage.</em>
              </>
            }
          />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {brandServices.map((service, i) => (
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
              Butuh konten{" "}
              <em className="font-accent font-normal italic text-mist">terus-menerus?</em>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-steel sm:text-base">
              Monthly Content Production: photoshoot, reels dan content assets setiap bulan —
              feed brand kamu selalu hidup tanpa kamu mikir tiap bulan.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={waLink("Hi FiveAM! I'm interested in the monthly content production.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-fit"
            >
              Ask About Monthly Plan
            </a>
          </Reveal>
        </div>
      </section>

      {/* Brand stories as campaigns */}
      <section>
        <div className="container-site py-20 sm:py-28">
          <SectionHeading
            eyebrow="Selected Brand Work"
            title={
              <>
                Campaigns, not just{" "}
                <em className="font-accent font-normal italic text-mist">product shots.</em>
              </>
            }
          />
          <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2">
            {brandStories.map((project, i) => (
              <ProjectCard key={project.slug} project={project} delay={i * 100} ratio="aspect-[4/3]" />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Have a brand to build?"
        highlight="Let's make content that works."
        primaryLabel="Discuss Your Project"
        whatsappMessage="Hi FiveAM! I'd like to discuss a project for my brand."
      />
    </>
  );
}
