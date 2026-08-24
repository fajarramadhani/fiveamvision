interface PlaceholderImageProps {
  /** Short label identifying what image should replace this block. */
  label: string;
  /** Tailwind aspect-ratio class, e.g. "aspect-[4/5]". */
  ratio?: string;
  className?: string;
  compact?: boolean;
}

/**
 * Styled placeholder for photography that hasn't been delivered yet.
 * Clearly labelled so real FiveAM visuals can drop in without layout changes.
 */
export function PlaceholderImage({
  label,
  ratio = "aspect-[4/5]",
  className = "",
  compact = false,
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder visual — replace with FiveAM project photo: ${label}`}
      className={`ph-visual ph-lines relative flex flex-col items-center justify-center overflow-hidden ${ratio} ${className}`}
    >
      {/* Corner marks */}
      <span aria-hidden="true" className="absolute left-3 top-3 h-4 w-4 border-l border-t border-bone/25" />
      <span aria-hidden="true" className="absolute right-3 top-3 h-4 w-4 border-r border-t border-bone/25" />
      <span aria-hidden="true" className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-bone/25" />
      <span aria-hidden="true" className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-bone/25" />

      <p
        className={`px-6 text-center font-semibold uppercase tracking-widest text-steel/80 ${
          compact ? "text-[9px]" : "text-[10px]"
        }`}
      >
        Replace with FiveAM project image
      </p>
      <p
        className={`mt-2 px-6 text-center font-display ${
          compact ? "text-xs" : "text-sm"
        } text-bone/70`}
      >
        {label}
      </p>
    </div>
  );
}
