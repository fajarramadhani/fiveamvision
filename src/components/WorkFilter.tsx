"use client";

import { useState } from "react";
import type { Project, ProjectCategory } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import type { Dict, Locale } from "@/lib/i18n";

/** Canonical category values — index-aligned with the localized labels in dict.workFilter.filters. */
const categoryValues: Array<"All" | ProjectCategory> = [
  "All",
  "Wedding",
  "Graduation",
  "Personal",
  "Brand",
];

interface WorkFilterProps {
  items: Project[];
  lang: Locale;
  t: Dict["workFilter"];
}

export function WorkFilter({ items, lang, t }: WorkFilterProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = categoryValues[activeIndex];

  const visible =
    active === "All" ? items : items.filter((p) => p.category === active);

  return (
    <>
      <Reveal>
        <div
          role="group"
          aria-label={t.ariaLabel}
          className="flex flex-wrap gap-2"
        >
          {t.filters.map((label, i) => {
            const selected = activeIndex === i;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={selected}
                onClick={() => setActiveIndex(i)}
                className={`border px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 ease-smooth ${
                  selected
                    ? "border-bone bg-bone text-night"
                    : "border-bone/25 text-bone/80 hover:border-bone/60 hover:text-bone"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <ProjectCard key={project.slug} project={project} lang={lang} delay={(i % 3) * 100} />
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-12 text-sm text-steel">{t.empty}</p>
      ) : null}
    </>
  );
}
