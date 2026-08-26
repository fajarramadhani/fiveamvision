import Link from "next/link";
import { Reveal } from "@/components/Reveal";

interface CtaSectionProps {
  title: string;
  highlight: string;
  body?: string;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

/**
 * Pre-footer conversion section — reused across every page.
 * Fully prop-driven so each page supplies localized copy + links.
 */
/** External links (WhatsApp etc.) and hash anchors render as plain anchors. */
function isExternalHref(href: string): boolean {
  return /^(https?:|mailto:|tel:|#)/.test(href);
}

export function CtaSection({
  title,
  highlight,
  body,
  primaryLabel,
  primaryHref = "/",
  secondaryLabel,
  secondaryHref,
}: CtaSectionProps) {
  const PrimaryTag = isExternalHref(primaryHref) ? "a" : Link;
  const primaryProps =
    PrimaryTag === "a"
      ? { href: primaryHref, target: "_blank", rel: "noopener noreferrer" }
      : { href: primaryHref };
  return (
    <section className="hero-backdrop relative overflow-hidden">
      <div className="container-site py-24 text-center sm:py-32 lg:py-40">
        <Reveal>
          <h2 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-[1.02] tracking-tightest text-bone sm:text-5xl lg:text-6xl">
            {title}
            <br />
            <em className="font-accent font-normal italic text-mist">{highlight}</em>
          </h2>
          {body ? (
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-steel sm:text-base">
              {body}
            </p>
          ) : null}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryTag {...primaryProps} className="btn-primary w-full sm:w-auto">
              {primaryLabel}
            </PrimaryTag>
            {secondaryLabel && secondaryHref ? (
              <a
                href={secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full sm:w-auto"
              >
                {secondaryLabel}
              </a>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
