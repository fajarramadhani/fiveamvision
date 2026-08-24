/**
 * Portfolio data — the single source for Work, Home (featured) and
 * project detail pages. Add / edit projects here.
 *
 * ─────────────────────────────────────────────────────────────────────
 *  NOTE: All entries below are PLACEHOLDERS so the layout can be
 *  reviewed before launch. They are clearly labelled as such and are
 *  NOT real FiveAM clients or projects. Replace them with actual work
 *  (title, visuals, story, credits) as soon as real projects exist.
 *
 *  Ideal portfolio item structure:
 *  Title · Slug · Category · Cover Image · Gallery · Description ·
 *  Client · Year · Credits · Featured
 * ─────────────────────────────────────────────────────────────────────
 */

export type ProjectCategory = "Wedding" | "Graduation" | "Personal" | "Brand";

export interface Credit {
  role: string;
  name: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** One-line descriptor shown on cards. */
  subtitle: string;
  description: string;
  year: string; // "TBA" until real project data exists
  client?: string;
  credits: Credit[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "placeholder-wedding-story",
    title: "Wedding Story No. 01",
    category: "Wedding",
    subtitle: "PLACEHOLDER — replace with a real FiveAM wedding project",
    description:
      "[PROJECT STORY — TO BE PROVIDED] Every wedding has its own rhythm, people and story. This placeholder stands in for the first real wedding story that will live here.",
    year: "TBA",
    credits: [
      { role: "Photography", name: "[TO BE PROVIDED]" },
      { role: "Videography", name: "[TO BE PROVIDED]" },
    ],
    featured: true,
  },
  {
    slug: "placeholder-graduation-story",
    title: "Graduation Story No. 01",
    category: "Graduation",
    subtitle: "PLACEHOLDER — replace with a real FiveAM graduation project",
    description:
      "[PROJECT STORY — TO BE PROVIDED] Celebrate the chapter you've completed. This placeholder stands in for a styled graduation session.",
    year: "TBA",
    credits: [{ role: "Photography", name: "[TO BE PROVIDED]" }],
    featured: true,
  },
  {
    slug: "placeholder-brand-story",
    title: "Brand Campaign No. 01",
    category: "Brand",
    subtitle: "PLACEHOLDER — replace with a real FiveAM brand campaign",
    description:
      "[PROJECT STORY — TO BE PROVIDED] Content made to move a brand forward. This placeholder stands in for an F&B or fashion campaign.",
    year: "TBA",
    client: "[CLIENT NAME — TO BE PROVIDED]",
    credits: [
      { role: "Creative Direction", name: "[TO BE PROVIDED]" },
      { role: "Photography", name: "[TO BE PROVIDED]" },
    ],
    featured: true,
  },
  {
    slug: "placeholder-personal-story",
    title: "Portrait Story No. 01",
    category: "Personal",
    subtitle: "PLACEHOLDER — replace with a real FiveAM portrait project",
    description:
      "[PROJECT STORY — TO BE PROVIDED] Visual storytelling for individuals and creators.",
    year: "TBA",
    credits: [{ role: "Photography", name: "[TO BE PROVIDED]" }],
  },
  {
    slug: "placeholder-intimate-wedding",
    title: "Intimate Wedding No. 01",
    category: "Wedding",
    subtitle: "PLACEHOLDER — replace with a real intimate wedding session",
    description:
      "[PROJECT STORY — TO BE PROVIDED] A smaller celebration, captured with the same care as a full wedding day.",
    year: "TBA",
    credits: [
      { role: "Photography", name: "[TO BE PROVIDED]" },
      { role: "Creative Direction", name: "[TO BE PROVIDED]" },
    ],
  },
  {
    slug: "placeholder-brand-lifestyle",
    title: "Lifestyle Content No. 01",
    category: "Brand",
    subtitle: "PLACEHOLDER — replace with real lifestyle content production",
    description:
      "[PROJECT STORY — TO BE PROVIDED] Ongoing content production for a growing local brand.",
    year: "TBA",
    client: "[CLIENT NAME — TO BE PROVIDED]",
    credits: [
      { role: "Photography", name: "[TO BE PROVIDED]" },
      { role: "Video", name: "[TO BE PROVIDED]" },
    ],
  },
  {
    slug: "placeholder-creator-story",
    title: "Creator Story No. 01",
    category: "Personal",
    subtitle: "PLACEHOLDER — replace with a real creator content project",
    description:
      "[PROJECT STORY — TO BE PROVIDED] Reels and portrait sessions built around a creator's personal brand.",
    year: "TBA",
    credits: [{ role: "Photography", name: "[TO BE PROVIDED]" }],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function featuredProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
