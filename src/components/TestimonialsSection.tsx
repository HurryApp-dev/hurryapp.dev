"use client";

import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import SectionHeader from "./SectionHeader";

// Avaliações reais de clientes (nota 5 de 5 em todos os critérios).
// O texto em pt é o original do cliente; en e de são traduções.
const testimonials: {
  id: number;
  headlineKey: TranslationKey;
  textKey: TranslationKey;
  whoKey: TranslationKey;
  dateKey: TranslationKey;
  highlight?: boolean;
}[] = [
  {
    id: 3,
    headlineKey: "testimonials.3.headline",
    textKey: "testimonials.3.text",
    whoKey: "testimonials.3.who",
    dateKey: "testimonials.3.date",
    highlight: true,
  },
  {
    id: 2,
    headlineKey: "testimonials.2.headline",
    textKey: "testimonials.2.text",
    whoKey: "testimonials.2.who",
    dateKey: "testimonials.2.date",
  },
  {
    id: 1,
    headlineKey: "testimonials.1.headline",
    textKey: "testimonials.1.text",
    whoKey: "testimonials.1.who",
    dateKey: "testimonials.1.date",
  },
];

const criteria: TranslationKey[] = [
  "testimonials.criteria.quality",
  "testimonials.criteria.deadline",
  "testimonials.criteria.communication",
  "testimonials.criteria.again",
];

const Stars = ({ size = "w-4 h-4" }: { size?: string }) => (
  <div className="flex gap-0.5" role="img" aria-label="5/5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`${size} fill-brand-yellow text-brand-yellow`} aria-hidden="true" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="depoimentos" className="border-t border-border/70 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow={t("eyebrow.testimonials")}
          title={t("testimonials.title1")}
          highlight={t("testimonials.title2")}
          subtitle={t("testimonials.subtitle")}
        />

        {/* Depoimentos são estáticos: nada aqui reage ao mouse. */}
        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {testimonials.map((item) => {
            const card = (
              <figure
                className={`flex h-full flex-col gap-4 rounded-lg p-7 ${
                  item.highlight ? "rounded-[11px] bg-[hsl(222_44%_9%)]" : "glass"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Stars />
                  <Quote className="h-6 w-6 text-primary/40" aria-hidden="true" />
                </div>
                <p className="font-display text-lg font-semibold leading-snug">{t(item.headlineKey)}</p>
                <blockquote className="flex-1 whitespace-pre-line text-[15px] leading-relaxed text-foreground/80">
                  {t(item.textKey)}
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-border/50 pt-4">
                  <span
                    className="grid h-10 w-10 flex-none place-items-center rounded-full bg-gradient-ai"
                    aria-hidden="true"
                  >
                    <Quote className="h-4 w-4 text-white" />
                  </span>
                  <span className="flex flex-col">
                    <strong className="text-sm font-semibold">{t(item.whoKey)}</strong>
                    <span className="font-mono text-[11px] text-muted-foreground">{t(item.dateKey)}</span>
                  </span>
                </figcaption>
              </figure>
            );
            return item.highlight ? (
              <div key={item.id} data-reveal>
                {/* A borda viva fica num elemento próprio para a entrada não sobrescrever a animação. */}
                <div className="border-animated h-full shadow-[0_0_80px_-24px_hsl(var(--primary)/.6)]">{card}</div>
              </div>
            ) : (
              <div key={item.id} data-reveal>
                {card}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {criteria.map((key) => (
            <span
              key={key}
              className="inline-flex items-center gap-1.5 rounded-full border border-[hsl(222_30%_22%)] bg-card/60 px-3 py-1.5 font-mono text-xs text-foreground/80"
            >
              <Star className="h-3 w-3 fill-brand-yellow text-brand-yellow" aria-hidden="true" />
              {t(key)} 5/5
            </span>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">{t("testimonials.note")}</p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
