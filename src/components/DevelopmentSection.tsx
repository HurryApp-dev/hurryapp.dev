"use client";

import { Ear, Lightbulb, Code, Rocket } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

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
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="font-medium mb-4 tracking-wider uppercase text-sm text-yellow-400">{t("dev.tag")}</p>
          <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight mb-5">
            {t("dev.title1")}
            <span className="text-gradient">{t("dev.title2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{t("dev.desc")}</p>
        </div>

        <ol className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* linha que liga as etapas (só no desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-[12.5%] right-[12.5%] top-7 h-px bg-gradient-to-r from-[hsl(320,80%,58%,0.6)] via-[hsl(260,70%,55%,0.6)] to-[hsl(230,50%,50%,0.6)]"
          />
          {steps.map((step, i) => {
            const Icon = step.icon;
            const last = i === steps.length - 1;
            return (
              <li
                key={step.titleKey}
                className={`relative rounded-2xl p-6 pt-10 backdrop-blur-md border transition-transform duration-300 hover:-translate-y-1 ${
                  last
                    ? "border-yellow-400/50 bg-gradient-to-br from-[hsl(320,80%,58%,0.2)] to-[hsl(230,50%,50%,0.12)]"
                    : "border-border/30 bg-gradient-to-br from-[hsl(260,70%,55%,0.12)] to-[hsl(230,50%,50%,0.05)]"
                }`}
              >
                <span
                  className={`absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-full ring-4 ring-background ${
                    last ? "bg-yellow-400 text-background" : "bg-gradient-primary text-primary-foreground"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <span className="absolute top-4 right-5 font-display text-4xl font-bold text-foreground/10">
                  {i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold mb-2">{t(step.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(step.descKey)}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default DevelopmentSection;
