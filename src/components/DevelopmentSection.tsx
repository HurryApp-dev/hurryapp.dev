"use client";

import { Ear, Lightbulb, Code, Rocket } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import SectionHeader from "./SectionHeader";

const steps: {
  icon: typeof Ear;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}[] = [
  { icon: Ear, titleKey: "dev.step1.title", descKey: "dev.step1.desc" },
  { icon: Lightbulb, titleKey: "dev.step2.title", descKey: "dev.step2.desc" },
  { icon: Code, titleKey: "dev.step3.title", descKey: "dev.step3.desc" },
  { icon: Rocket, titleKey: "dev.step4.title", descKey: "dev.step4.desc" },
];

const DevelopmentSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-t border-border/70 py-16 md:py-24">
      <div className="container relative z-10 mx-auto px-4">
        <SectionHeader
          center
          eyebrow={t("dev.tag")}
          title={t("dev.title1").trim()}
          highlight={t("dev.title2")}
          subtitle={t("dev.desc")}
        />

        <ol className="relative mx-auto grid max-w-6xl gap-6 pt-7 sm:grid-cols-2 lg:grid-cols-4">
          {/* linha que liga as etapas (só no desktop) */}
          <div
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-14 hidden h-px bg-gradient-to-r from-primary/60 via-accent/60 to-brand-yellow/60 lg:block"
          />
          {steps.map((step, i) => {
            const Icon = step.icon;
            const last = i === steps.length - 1;
            return (
              <li
                key={step.titleKey}
                data-reveal
                className={`glass relative rounded-lg p-6 pt-10 ${last ? "!border-brand-yellow/50" : ""}`}
              >
                <span
                  className={`absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-full ring-4 ring-background ${
                    last ? "bg-brand-yellow text-background" : "bg-gradient-ai text-white shadow-glow-accent"
                  }`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="absolute right-5 top-4 font-mono text-xs text-brand-yellow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 font-display text-xl font-semibold">{t(step.titleKey)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(step.descKey)}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default DevelopmentSection;
