"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import SectionHeader from "./SectionHeader";
import iconResponsiveImg from "@/assets/icon-responsive.png";
import iconCustomImg from "@/assets/icon-custom.png";
import iconIntegrationImg from "@/assets/icon-integration.png";
import iconDesignImg from "@/assets/icon-design.png";
import iconFasterImg from "@/assets/icon-faster.png";
import iconPlatformsImg from "@/assets/icon-platforms.png";

const iconResponsive = iconResponsiveImg.src;
const iconCustom = iconCustomImg.src;
const iconIntegration = iconIntegrationImg.src;
const iconDesign = iconDesignImg.src;
const iconFaster = iconFasterImg.src;
const iconPlatforms = iconPlatformsImg.src;

const features: {image: string;titleKey: TranslationKey;descKey: TranslationKey;}[] = [
{ image: iconResponsive, titleKey: "features.responsive.title", descKey: "features.responsive.desc" },
{ image: iconCustom, titleKey: "features.custom.title", descKey: "features.custom.desc" },
{ image: iconIntegration, titleKey: "features.integration.title", descKey: "features.integration.desc" },
{ image: iconDesign, titleKey: "features.design.title", descKey: "features.design.desc" },
{ image: iconFaster, titleKey: "features.faster.title", descKey: "features.faster.desc" },
{ image: iconPlatforms, titleKey: "features.platforms.title", descKey: "features.platforms.desc" }];

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="border-t border-border/70 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow={t("eyebrow.services")} title={t("features.title")} subtitle={t("features.subtitle")} />

        {/* Cards informativos: não são clicáveis, então não reagem ao mouse. */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div key={feature.titleKey} data-reveal className="glass rounded-lg p-6 flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <img src={feature.image} alt="" className="h-12 w-12 object-contain" />
                <span className="font-mono text-xs text-brand-yellow">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-display text-xl font-semibold">{t(feature.titleKey)}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t(feature.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;