"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/wedding", label: "Wedding" },
  { href: "/graduation", label: "Graduation" },
  { href: "/brand", label: "Brand" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth ${
        scrolled && !open
          ? "border-b border-bone/10 bg-night/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tightest text-bone"
          aria-label="FiveAM Agency — Home"
        >
          FIVEAM
          <span className="ml-2 align-middle text-[9px] font-medium uppercase tracking-widest text-steel">
            Agency
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-200 ${
                pathname === link.href ? "text-mist" : "text-bone/80 hover:text-bone"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-bone/25 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-bone transition-colors duration-300 ease-smooth hover:bg-bone hover:text-night"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
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

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 top-16 z-[-1] flex flex-col overflow-y-auto bg-night pb-10 pt-8 transition-opacity duration-300 sm:top-20 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-site flex flex-col gap-1">
          {primaryLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-bone/10 py-4 font-display text-3xl font-bold tracking-tightest text-bone"
            >
              <span className="mr-4 font-accent text-base italic text-mist">0{i + 1}</span>
              {link.label}
            </Link>
          ))}

          <p className="eyebrow mt-10">Services</p>
          <div className="flex flex-wrap gap-3">
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-bone/20 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-bone/85"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="btn-primary mt-10 w-full"
          >
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
