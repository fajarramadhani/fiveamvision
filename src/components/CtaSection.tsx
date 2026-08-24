import Link from "next/link";
import { waLink } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

interface CtaSectionProps {
  title?: string;
  highlight?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  whatsappMessage?: string;
}

/**
 * Pre-footer conversion section — reused across every page.
 */
export function CtaSection({
  title = "Have a story to tell?",
  highlight = "Let's create something worth remembering.",
  body = "Tell us about your moment, your session or your brand. We'll help you turn it into a story people remember.",
  primaryLabel = "Start a Project",
  primaryHref = "/contact",
  whatsappMessage = "Hi FiveAM! I'd like to discuss a project.",
}: CtaSectionProps) {
  return (
    <section className="hero-backdrop relative overflow-hidden">
      <div className="container-site py-24 text-center sm:py-32 lg:py-40">
        <Reveal>
          <h2 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-[1.02] tracking-tightest text-bone sm:text-5xl lg:text-6xl">
            {title}
            <br />
            <em className="font-accent font-normal italic text-mist">{highlight}</em>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-steel sm:text-base">
            {body}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={primaryHref} className="btn-primary w-full sm:w-auto">
              {primaryLabel}
            </Link>
            <a
              href={waLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto"
            >
              Talk to FiveAM
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
