"use client";

import { useState } from "react";
import type { Project, ProjectCategory } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

const filters: Array<"All" | ProjectCategory> = [
  "All",
  "Wedding",
  "Graduation",
  "Personal",
  "Brand",
];

export function WorkFilter({ items }: { items: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible =
    active === "All" ? items : items.filter((p) => p.category === active);

  return (
    <>
      <Reveal>
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="flex flex-wrap gap-2"
        >
          {filters.map((filter) => {
            const selected = active === filter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(filter)}
                className={`border px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 ease-smooth ${
                  selected
                    ? "border-bone bg-bone text-night"
                    : "border-bone/20 text-bone/70 hover:border-bone/50 hover:text-bone"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <ProjectCard key={project.slug} project={project} delay={(i % 3) * 100} />
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-12 text-sm text-steel">No stories in this category yet.</p>
      ) : null}
    </>
  );
}
