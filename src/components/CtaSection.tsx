"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

/** Bloco de chamada final (Design System v2): pontos + halo, uma ação. */
const CtaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div
          data-reveal
          className="relative flex flex-col items-center gap-5 overflow-hidden rounded-2xl border border-[hsl(222_30%_20%)] bg-[hsl(222_44%_9%)] px-8 py-14 text-center"
        >
          <div aria-hidden="true" className="absolute inset-0 bg-dots" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(500px_circle_at_50%_120%,hsl(var(--primary)/.25),transparent_60%)]"
          />
          <h2 className="relative max-w-[18ch] text-balance font-display text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.025em]">
            {t("cta.title1")} <span className="text-gradient-brand">{t("cta.title2")}</span>
          </h2>
          <p className="relative max-w-[46ch] leading-relaxed text-muted-foreground">{t("cta.desc")}</p>
          <Link href="/contato" className="btn btn-primary btn-lg relative">
            {t("hero.cta")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
