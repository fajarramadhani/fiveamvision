import { en, type Dict } from "./en";
import { id } from "./id";
import { defaultLocale, isLocale, type Locale } from "./config";

const dictionaries: Record<Locale, Dict> = { en, id };

/** Get the dictionary for a locale (falls back to English). */
export function getDict(lang: string | undefined): Dict {
  return isLocale(lang) ? dictionaries[lang] : dictionaries[defaultLocale];
}

/**
 * Prefix an internal path with the locale, e.g.
 * lp("id", "/work") → "/id/work" · lp("en", "/") → "/en"
 */
export function lp(lang: Locale, path: string): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${clean}`;
}

export { locales, defaultLocale, LOCALE_COOKIE, isLocale } from "./config";
export type { Locale } from "./config";
export type { Dict } from "./en";
