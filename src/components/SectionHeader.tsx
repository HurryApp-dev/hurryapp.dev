import type { ReactNode } from "react";

/**
 * Título de seção do Design System v2: rótulo mono em magenta ("// Serviços"),
 * título Space Grotesk (degradê só em 1–3 palavras) e subtítulo opcional.
 */
const SectionHeader = ({
  eyebrow,
  title,
  highlight,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  /** Trecho do título em degradê; vai depois de `title`. */
  highlight?: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
}) => (
  <div
    data-reveal
    className={`mb-12 flex max-w-2xl flex-col gap-3.5 ${center ? "mx-auto items-center text-center" : ""}`}
  >
    {eyebrow && <span className="eyebrow">{`// ${eyebrow}`}</span>}
    <h2 className="text-balance font-display text-[clamp(30px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.02em]">
      {title}
      {highlight && (
        <>
          {" "}
          <span className="text-gradient-brand">{highlight}</span>
        </>
      )}
    </h2>
    {subtitle && <p className="text-[17px] leading-relaxed text-muted-foreground">{subtitle}</p>}
  </div>
);

export default SectionHeader;
