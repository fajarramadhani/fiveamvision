import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales, LOCALE_COOKIE } from "@/lib/i18n/config";

/**
 * Redirects bare paths to their localized version:
 *   "/"            → "/en" (or cookie / browser language)
 *   "/work"        → "/en/work"
 * Paths already prefixed with a locale, plus /admin, /api and files
 * (og.jpg, sitemap.xml, …) pass through untouched.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (locales.includes(firstSegment as (typeof locales)[number])) {
    return NextResponse.next();
  }

  if (
    firstSegment === "admin" ||
    firstSegment === "api" ||
    /\.[^/]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const cookieLang = request.cookies.get(LOCALE_COOKIE)?.value;
  let target = locales.includes(cookieLang as (typeof locales)[number])
    ? cookieLang!
    : null;

  if (!target) {
    const acceptLanguage = request.headers.get("accept-language") ?? "";
    target = acceptLanguage.toLowerCase().startsWith("id") ? "id" : defaultLocale;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${target}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
