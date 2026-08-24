import type { Metadata } from "next";
import { Inter, Space_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

// ASSUMPTION: metadataBase uses the placeholder domain from siteConfig —
// update it together with siteConfig.url when hosting is confirmed.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Creative Photography & Filmmaking, Jakarta`,
    template: `%s — ${siteConfig.name}`,
  },
  description:
    "FiveAM is a creative team crafting visual stories through photography, filmmaking and creative direction. Weddings, graduation, personal & brand content in Jakarta, Indonesia.",
  keywords: [
    "creative agency Jakarta",
    "wedding photographer Jakarta",
    "graduation photographer Jakarta",
    "product photographer Jakarta",
    "content production Jakarta",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Stories Worth Remembering`,
    description:
      "Creative photography & filmmaking for people, moments and brands. Jakarta, Indonesia.",
    // OG image: add /public/og.jpg (1200x630) then uncomment below.
    // images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${fraunces.variable}`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-bone focus:px-4 focus:py-2 focus:text-night"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
