"use client";

import { useEffect } from "react";

/**
 * Keeps <html lang> in sync with the active locale.
 * The attribute is set after hydration to avoid SSR/hydration mismatches;
 * crawlers also get explicit hreflang signals from the sitemap & metadata.
 */
export function LangSync({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
