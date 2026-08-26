"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  LOCALE_COOKIE,
  locales,
  type Locale,
} from "@/lib/i18n";

interface LanguageSwitcherProps {
  current: Locale;
  ariaLabel: string;
}

/** Compact EN/ID toggle with a globe icon — switches the locale route segment. */
export function LanguageSwitcher({ current, ariaLabel }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: Locale) => {
    if (next === current) return;
    const segments = pathname.split("/");
    const hasLocalePrefix = locales.includes(segments[1] as Locale);
    let rest = hasLocalePrefix ? `/${segments.slice(2).join("/")}` : pathname;
    if (rest === "/") rest = "";
    rest = rest.replace(/\/+$/, "");

    document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=31536000;samesite=lax`;
    router.push(`/${next}${rest}`);
  };

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="inline-flex items-center gap-1 border border-bone/25 px-2.5 py-1.5"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="mr-1 h-3.5 w-3.5 shrink-0 text-steel"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14.5 14.5 0 0 1 0 18a14.5 14.5 0 0 1 0-18" />
      </svg>
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 ? (
            <span aria-hidden="true" className="mx-0.5 text-[10px] text-bone/30">
              /
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => switchTo(locale)}
            aria-pressed={locale === current}
            aria-label={locale.toUpperCase()}
            className={`px-0.5 text-[11px] font-bold uppercase tracking-widest transition-colors duration-200 ${
              locale === current ? "text-mist" : "text-bone/60 hover:text-bone"
            }`}
          >
            {locale}
          </button>
        </span>
      ))}
    </div>
  );
}
