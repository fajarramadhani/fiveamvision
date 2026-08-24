import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaSection } from "@/components/CtaSection";
import { processSteps } from "@/lib/services";
import { projects } from "@/lib/projects";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wedding Photographer & Videographer Jakarta",
  description:
    "Wedding photography, cinematic films, prewedding & intimate wedding documentation by FiveAM Agency. Every wedding has its own rhythm — we capture it as it happens.",
};

const weddingServices = [
  "Wedding Photography",
  "Wedding Films",
  "Engagement",
  "Prewedding",
  "Akad & Reception",
  "Intimate Wedding",
  "Couple Session",
];

const faqs = [
  {
    q: "How do we book FiveAM for our wedding date?",
    a: "Chat kami via WhatsApp, ceritakan tanggal dan konsep acara. Jika tanggal tersedia, kami kirim rekomendasi package lalu booking dikunci dengan down payment.",
  },
  {
    q: "Do you offer both photo and video?",
    a: "Ya. Kami bisa menangani photography saja, videography saja, atau keduanya dalam satu tim yang sudah terbiasa bekerja bersama.",
  },
  {
    q: "We're planning a small / intimate wedding. Is that okay?",
    a: "Sangat okay. Intimate wedding justru punya ruang lebih besar untuk storytelling — kami menyesuaikan package dengan skala acaranya.",
  },
  {
    q: "How many photos and how long is the film?",
    a: "Jumlah foto dan durasi film menyesuaikan package. Yang kami janjikan bukan jumlahnya — tapi cerita yang tersampaikan dari hari tersebut.",
  },
];

export default function WeddingPage() {
  const weddingStories = projects.filter((p) => p.category === "Wedding");

  return (
    <>
      {/* Hero */}
      <section className="hero-backdrop">
        <div className="container-site pb-14 pt-36 sm:pb-20 sm:pt-44">
          <Reveal>
            <p className="eyebrow">Weddings</p>
            <h1 className="font-display text-[13vw] font-bold leading-[0.95] tracking-tightest text-bone sm:text-7xl lg:text-8xl xl:text-[7rem]">
              Your day,
              <br />
              <em className="font-accent font-normal italic text-mist">your rhythm.</em>
            </h1>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-steel sm:text-base">
              Every wedding has its own rhythm, people and story. We capture it as it happens.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={waLink("Hi FiveAM! I'd like to check availability for our wedding date.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                Check Availability
              </a>
              <Link href="#wedding-stories" className="btn-outline w-full sm:w-auto">
                See Wedding Stories
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-light">
        <div className="container-site py-20 sm:py-28">
          <Reveal>
            <span className="eyebrow text-navy-600">Our Approach</span>
            <p className="max-w-3xl font-display text-2xl font-bold leading-snug tracking-tight text-night sm:text-4xl">
              Kami tidak mengarahkan hari bahagia kamu seperti pemotretan.{" "}
              <em className="font-accent font-normal italic text-navy-600">
                Kami mendokumentasikan apa yang benar-benar terjadi
              </em>{" "}
              — tawa, air mata, dan momen kecil di sela-selanya.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Selected wedding stories */}
      <section id="wedding-stories" className="scroll-mt-24 border-t border-bone/10 bg-navy/40">
        <div className="container-site py-20 sm:py-28">
          <SectionHeading
            eyebrow="Selected Wedding Stories"
            title={
              <>
                Recent <em className="font-accent font-normal italic text-mist">celebrations.</em>
              </>
            }
            lead="Slot di bawah siap diisi dengan wedding stories asli FiveAM."
          />
          <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2">
            {weddingStories.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
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
            eyebrow="What's Included"
            title={
              <>
                Coverage for <em className="font-accent font-normal italic text-mist">every chapter.</em>
              </>
            }
          />
          <ul className="grid gap-px self-start overflow-hidden border border-bone/10 bg-bone/10 sm:grid-cols-2">
            {weddingServices.map((service) => (
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
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 100}>
                <li className="border-t border-bone/15 pt-6">
                  <span className="font-accent text-2xl italic text-mist">{step.step}</span>
                  <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-bone">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-bone/10 bg-navy/40">
        <div className="container-site grid gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Questions, <em className="font-accent font-normal italic text-mist">answered.</em>
              </>
            }
          />
          <div>
            {faqs.map((faq) => (
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
        title="Getting married soon?"
        highlight="Let's tell your story properly."
        primaryLabel="Check Availability"
        whatsappMessage="Hi FiveAM! I'd like to check availability for our wedding date."
      />
    </>
  );
}

