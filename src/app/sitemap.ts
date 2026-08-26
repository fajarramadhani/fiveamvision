import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";
import { defaultLocale, locales } from "@/lib/i18n/config";

/**
 * One entry per localized URL, cross-linked via hreflang alternates
 * so search engines serve the right language version.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/work",
    "/services",
    "/wedding",
    "/graduation",
    "/brand",
    "/about",
    "/contact",
    ...projects.map((project) => `/work/${project.slug}`),
  ];

  const now = new Date();

  return routes.map((route) => {
    const path = route === "" ? "" : route;
    const urlFor = (lang: string) => `${siteConfig.url}/${lang}${path}`;

    return {
      url: urlFor(defaultLocale),
      lastModified: now,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((lang) => [lang, urlFor(lang)])),
          "x-default": urlFor(defaultLocale),
        },
      },
    };
  });
}
