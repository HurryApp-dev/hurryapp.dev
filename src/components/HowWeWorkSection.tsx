"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import SectionHeader from "./SectionHeader";

import defaultImg1Img from "@/assets/how-step-1.png";
import defaultImg2Img from "@/assets/how-step-2.png";
import defaultImg3Img from "@/assets/how-step-3.png";
import defaultImg4Img from "@/assets/how-step-4.png";

const defaultImg1 = defaultImg1Img.src;
const defaultImg2 = defaultImg2Img.src;
const defaultImg3 = defaultImg3Img.src;
const defaultImg4 = defaultImg4Img.src;

const defaultImages = [defaultImg1, defaultImg2, defaultImg3, defaultImg4];

const steps: {titleKey: TranslationKey;descKey: TranslationKey;}[] = [
{ titleKey: "how.understand.title", descKey: "how.understand.desc" },
{ titleKey: "how.plan.title", descKey: "how.plan.desc" },
{ titleKey: "how.build.title", descKey: "how.build.desc" },
{ titleKey: "how.improve.title", descKey: "how.improve.desc" }];


const HowWeWorkSection = () => {
  const { t } = useLanguage();
  const [images, setImages] = useState<string[]>(defaultImages);

  const handleImageUpload = (index: number) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/png,image/webp,image/svg+xml";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setImages((prev) => {
          const next = [...prev];
          next[index] = url;
          return next;
        });
      }
    };
    input.click();
  };

  return (
    <section className="border-t border-border/70 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow={t("eyebrow.how")} title={t("how.title")} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.titleKey} data-reveal className="glass relative flex flex-col gap-3 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <button
                  type="button"
                  onClick={() => handleImageUpload(i)}
                  className="rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:drop-shadow-[0_6px_16px_hsl(var(--primary)/.5)] active:scale-95"
                  title="Clique para trocar a imagem"
                >
                  <img src={images[i]} alt={t(step.titleKey)} className="h-12 w-12 object-contain" />
                </button>
                <span className="font-mono text-xs text-brand-yellow">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-display text-xl font-semibold">{t(step.titleKey)}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t(step.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;