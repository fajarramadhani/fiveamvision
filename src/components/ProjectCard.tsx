import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";

interface ProjectCardProps {
  project: Project;
  delay?: number;
  ratio?: string;
}

export function ProjectCard({ project, delay = 0, ratio = "aspect-[4/5]" }: ProjectCardProps) {
  return (
    <Reveal delay={delay}>
      <Link href={`/work/${project.slug}`} className="group block">
        <div className="relative overflow-hidden">
          {project.cover ? (
            <Image
              src={project.cover}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`${ratio} object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03]`}
            />
          ) : (
            <div className="transition-transform duration-700 ease-smooth group-hover:scale-[1.03]">
              <PlaceholderImage label={project.title} ratio={ratio} />
            </div>
          )}
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-bone/10 pt-4">
          <div>
            <h3 className="font-display text-lg font-bold tracking-tight text-bone transition-colors group-hover:text-mist sm:text-xl">
              {project.title}
            </h3>
            <p className="mt-1 text-[11px] uppercase tracking-widest text-steel/80">
              {project.category}
            </p>
          </div>
          <span aria-hidden="true" className="text-lg text-steel transition-all duration-300 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-mist">
            ↗
          </span>
        </div>
        <p className="mt-2 line-clamp-1 text-xs text-steel/60">{project.subtitle}</p>
      </Link>
    </Reveal>
  );
}
