import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { LangSync } from "@/components/LangSync";
import { getDict, isLocale, locales, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Metadata {
  const t = getDict(params.lang);
  return {
    title: {
      default: t.home.meta.title,
      template: `%s — ${siteConfig.name}`,
    },
    description: t.home.meta.description,
    openGraph: {
      type: "website",
      locale: params.lang === "id" ? "id_ID" : "en_US",
      siteName: siteConfig.name,
      images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { lang } = params;
  if (!isLocale(lang)) notFound();

  const t = getDict(lang);

  return (
    <>
      <LangSync lang={lang} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-bone focus:px-4 focus:text-night"
      >
        {t.nav.skipToContent}
      </a>
      <Navbar lang={lang} t={t} />
      <main id="main">{children}</main>
      <Footer lang={lang} t={t} />
      <WhatsAppFloat ariaLabel={t.waFloat.ariaLabel} message={t.waFloat.message} />
    </>
  );
}
