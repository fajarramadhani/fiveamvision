export const locales = ["en", "id"] as const;

export type Locale = (typeof locales)[number];

/** English is the default across the whole site. */
export const defaultLocale: Locale = "en";

/** Cookie that remembers the visitor's language choice for middleware redirects. */
export const LOCALE_COOKIE = "fiveam-lang";

export function isLocale(value: string | undefined | null): value is Locale {
  return locales.includes(value as Locale);
}
