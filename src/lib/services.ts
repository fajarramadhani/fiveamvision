/**
 * Service architecture — kept intentionally simple per the Master Context:
 * four core categories inside one creative ecosystem (People · Moments · Brands).
 * All display copy lives in the i18n dictionaries (src/lib/i18n/*).
 */

export type ServiceRowId = "weddings" | "graduation" | "personal" | "brands";

/** Display order of the four service rows on the home page. */
export const serviceRowOrder: ServiceRowId[] = [
  "weddings",
  "graduation",
  "personal",
  "brands",
];

/** Internal href for each service row. */
export const serviceRowHrefs: Record<ServiceRowId, string> = {
  weddings: "/wedding",
  graduation: "/graduation",
  personal: "/contact",
  brands: "/brand",
};
