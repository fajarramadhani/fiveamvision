/**
 * Central site configuration for FiveAM Agency.
 *
 * ─────────────────────────────────────────────────────────────
 *  TO BE PROVIDED — replace the placeholder values below with
 *  the real FiveAM contact details before going live.
 * ─────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  name: "FiveAM Agency",
  shortName: "FiveAM",
  tagline: "Stories Worth Remembering.",
  // ASSUMPTION: final production domain — update when hosting is confirmed.
  url: "https://www.fiveamagency.com",

  // [WHATSAPP NUMBER — TO BE PROVIDED]
  // Format: country code + number, digits only (no "+", spaces, or dashes).
  whatsappNumber: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890", // [TO BE PROVIDED]

  // [EMAIL ADDRESS — TO BE PROVIDED]
  email: "hello@fiveamagency.com",

  // [INSTAGRAM URL — TO BE PROVIDED]
  instagram: "https://instagram.com/fiveam.agency",
  instagramHandle: "@fiveam.agency",

  // [TIKTOK URL — TO BE PROVIDED]
  tiktok: "https://tiktok.com/@fiveam.agency",
  tiktokHandle: "@fiveam.agency",

  location: "Jakarta, Indonesia",
} as const;

/** Build a WhatsApp deep link, optionally pre-filled with an inquiry message. */
export function waLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
