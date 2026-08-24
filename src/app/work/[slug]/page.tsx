import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaSection } from "@/components/CtaSection";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";
import { getProject, projects } from "@/lib/projects";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.category}`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      {/* Hero visual */}
      <div className="pt-16 sm:pt-20">
        {project.cover ? (
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={project.cover}
              alt={`${project.title} — hero`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ) : (
          <PlaceholderImage
            label={`${project.title} — hero visual`}
            ratio="aspect-[16/9] w-full"
          />
        )}
      </div>

      {/* Header */}
      <section className="border-t border-bone/10">
        <div className="container-site grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">{project.category}</p>
            <h1 className="font-display text-4xl font-bold leading-[1] tracking-tightest text-bone sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-steel sm:text-base">
              {project.description}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <dl className="space-y-5 border-t border-bone/15 pt-6 text-sm lg:border-t-0 lg:pt-8">
              <div className="flex justify-between gap-6 border-b border-bone/10 pb-4">
                <dt className="text-[11px] uppercase tracking-widest text-steel/70">Category</dt>
                <dd className="text-bone">{project.category}</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-bone/10 pb-4">
                <dt className="text-[11px] uppercase tracking-widest text-steel/70">Year</dt>
                <dd className="text-bone">{project.year}</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-bone/10 pb-4">
                <dt className="text-[11px] uppercase tracking-widest text-steel/70">Client</dt>
                <dd className="text-right text-bone">{project.client ?? "[TO BE PROVIDED]"}</dd>
              </div>
              {project.credits.map((credit) => (
                <div
                  key={credit.role}
                  className="flex justify-between gap-6 border-b border-bone/10 pb-4"
                >
                  <dt className="text-[11px] uppercase tracking-widest text-steel/70">
                    {credit.role}
                  </dt>
                  <dd className="text-right text-bone">{credit.name}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section aria-label="Project gallery" className="pb-20">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {project.gallery && project.gallery.length > 0
            ? project.gallery.map((src, i) => (
                <div key={src + i} className={`relative aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "md:mt-14" : ""}`}>
                  <Image
                    src={src}
                    alt={`${project.title} — gallery ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))
            : (
              <>
                <PlaceholderImage label={`${project.title} — gallery image 01`} />
                <PlaceholderImage label={`${project.title} — gallery image 02`} className="md:mt-14" />
                <PlaceholderImage label={`${project.title} — gallery image 03`} className="md:-mt-8" />
                <PlaceholderImage label={`${project.title} — gallery image 04`} />
              </>
            )}
        </div>
      </section>

      {/* More stories */}
      <section className="border-t border-bone/10 bg-navy/40">
        <div className="container-site py-16 sm:py-20">
          <h2 className="font-display text-2xl font-bold tracking-tightest text-bone sm:text-3xl">
            More stories
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/work/${other.slug}`}
                className="group flex items-center justify-between gap-6 border border-bone/10 p-6 transition-colors hover:border-bone/30"
              >
                <div>
                  <p className="font-display text-lg font-bold tracking-tight text-bone group-hover:text-mist">
                    {other.title}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-widest text-steel/80">
                    {other.category}
                  </p>
                </div>
                <span aria-hidden="true" className="text-xl text-steel group-hover:text-mist">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Have a similar story?"
        highlight="Start a Similar Project."
        primaryLabel="Start a Similar Project"
        whatsappMessage={`Hi FiveAM! I saw "${project.title}" and I'd love to create something similar.`}
      />
    </>
  );
}
