"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { lp, type Dict, type Locale } from "@/lib/i18n";

interface NavbarProps {
  lang: Locale;
  t: Dict;
}

const siteName = "FiveAM Agency";

export function Navbar({ lang, t }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const primaryLinks = [
    { href: "/", label: t.nav.home },
    { href: "/work", label: t.nav.work },
    { href: "/services", label: t.nav.services },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  const serviceLinks = t.footer.serviceLinks;

  // Active for the route itself and any child route (e.g. /en/work/slug).
  const active = (href: string) => {
    const full = lp(lang, href);
    return pathname === full || pathname.startsWith(`${full}/`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Focus trap + Escape inside the fullscreen mobile menu.
  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    if (!menu) return;

    const focusables = () =>
      Array.from(menu.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"));

    const focusTimer = window.setTimeout(() => focusables()[0]?.focus(), 60);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const els = focusables();
      if (els.length === 0) return;
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth ${
        scrolled && !open
          ? "border-b border-bone/10 bg-night/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link
          href={lp(lang, "/")}
          className="font-display text-lg font-bold tracking-tightest text-bone"
          aria-label={`${siteName} — ${t.nav.home}`}
        >
          FIVEAM
          <span className="ml-2 align-middle text-[9px] font-medium uppercase tracking-widest text-steel">
            Agency
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label={t.nav.primaryAria} className="hidden items-center gap-7 lg:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={lp(lang, link.href)}
              aria-current={active(link.href) ? "page" : undefined}
              className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-200 ${
                active(link.href) ? "text-mist" : "text-bone/80 hover:text-bone"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher current={lang} ariaLabel={t.switcher.ariaLabel} />
          <Link
            href={lp(lang, "/contact")}
            className={`inline-flex items-center gap-2 border px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ease-smooth ${
              active("/contact")
                ? "border-bone bg-bone text-night"
                : "border-bone/25 text-bone hover:bg-bone hover:text-night"
            }`}
          >
            {t.nav.startProject}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher current={lang} ariaLabel={t.switcher.ariaLabel} />

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-px w-6 bg-bone transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-bone transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal={open}
        aria-label={t.nav.mobileAria}
        className={`fixed inset-0 top-16 z-[-1] flex flex-col overflow-y-auto bg-night pb-10 pt-8 transition-opacity duration-300 sm:top-20 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label={t.nav.mobileAria} className="container-site flex flex-col gap-1">
          {primaryLinks.map((link, i) => (
            <Link
              key={link.href}
              href={lp(lang, link.href)}
              aria-current={active(link.href) ? "page" : undefined}
              className={`border-b border-bone/10 py-4 font-display text-3xl font-bold tracking-tightest ${
                active(link.href) ? "text-mist" : "text-bone"
              }`}
            >
              <span className="mr-4 font-accent text-base italic text-mist">0{i + 1}</span>
              {link.label}
            </Link>
          ))}

          <p className="eyebrow mt-10">{t.nav.servicesGroupLabel}</p>
          <div className="flex flex-wrap gap-3">
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={lp(lang, link.href)}
                aria-current={active(link.href) ? "page" : undefined}
                className={`border px-5 py-3 text-xs font-semibold uppercase tracking-widest transition-colors ${
                  active(link.href)
                    ? "border-mist bg-mist text-night"
                    : "border-bone/20 text-bone/85 hover:border-bone/50 hover:text-bone"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href={lp(lang, "/contact")}
            className="btn-primary mt-10 w-full"
          >
            {t.nav.startProject}
          </Link>
        </nav>
      </div>
    </header>
  );
}
