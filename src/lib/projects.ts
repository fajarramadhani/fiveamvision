import raw from "../../data/projects.json";

/**
 * Portfolio data — loaded from `data/projects.json`, which is edited either
 * manually (via Git) or through the built-in CMS at `/admin`.
 * Adding a project here automatically updates Work, filters, sitemap,
 * detail pages and the home featured grid.
 */

export type ProjectCategory = "Wedding" | "Graduation" | "Personal" | "Brand";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "Wedding",
  "Graduation",
  "Personal",
  "Brand",
];

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
  /** Cover photo path, e.g. "/images/projects/foo.jpg" (uploaded via CMS). */
  cover?: string;
  /** Gallery photo paths. */
  gallery?: string[];
  /** Client-only flag marking a freshly created draft (never persisted). */
  isNewDraft?: boolean;
}

export const projects: Project[] = raw as unknown as Project[];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function featuredProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

/** Generate a URL-safe slug from a project title. */
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}
