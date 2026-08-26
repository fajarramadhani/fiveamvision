import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { lp, type Dict, type Locale } from "@/lib/i18n";

interface FooterProps {
  lang: Locale;
  t: Dict;
}

export function Footer({ lang, t }: FooterProps) {
  const navigateLinks = [
    { href: "/", label: t.nav.home },
    { href: "/work", label: t.nav.work },
    { href: "/services", label: t.nav.services },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  const socialLinks = [
    { href: siteConfig.instagram, label: "Instagram", handle: siteConfig.instagramHandle },
    { href: siteConfig.tiktok, label: "TikTok", handle: siteConfig.tiktokHandle },
    { href: `https://wa.me/${siteConfig.whatsappNumber}`, label: "WhatsApp", handle: siteConfig.whatsappDisplay },
    { href: `mailto:${siteConfig.email}`, label: "Email", handle: siteConfig.email },
  ];

  return (
    <footer className="border-t border-bone/10 bg-night">
      <div className="container-site py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <p className="font-display text-xl font-bold tracking-tightest">FIVEAM</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel">
              {t.footer.blurb}
            </p>
            <p className="mt-6 text-xs uppercase tracking-widest text-steel/85">
              {t.footer.location}
            </p>
          </div>

          <nav aria-label={`${t.footer.navigate} — footer`}>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-steel/85">
              {t.footer.navigate}
            </p>
            <ul className="space-y-3">
              {navigateLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={lp(lang, link.href)}
                    className="text-sm text-bone/85 transition-colors hover:text-mist"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={`${t.footer.servicesTitle} — footer`}>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-steel/85">
              {t.footer.servicesTitle}
            </p>
            <ul className="space-y-3">
              {t.footer.serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={lp(lang, link.href)}
                    className="text-sm text-bone/85 transition-colors hover:text-mist"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-steel/85">
              {t.footer.connect}
            </p>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-4 text-sm text-bone/85 transition-colors hover:text-mist"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-steel/80 group-hover:text-steel">{link.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 select-none overflow-hidden" aria-hidden="true">
          <p className="text-outline whitespace-nowrap font-display text-[18vw] font-bold leading-none tracking-tightest md:text-[11rem]">
            FIVEAM
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-bone/10 pt-6 text-xs text-steel/85 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
          <p>{t.footer.tagline} — {t.footer.location}</p>
        </div>
      </div>
    </footer>
  );
}
