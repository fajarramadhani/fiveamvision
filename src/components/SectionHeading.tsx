import { Reveal } from "@/components/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  dark?: boolean;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  dark = true,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <span className={`eyebrow ${dark ? "text-mist" : "text-navy-600"}`}>{eyebrow}</span>
      <h2
        className={`font-display text-3xl font-bold leading-[1.05] tracking-tightest sm:text-4xl lg:text-5xl ${
          dark ? "text-bone" : "text-night"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-6 max-w-xl text-base leading-relaxed ${
            dark ? "text-steel" : "text-ash"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
