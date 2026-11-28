"use client";

import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

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

const Stars = () => (
  <div className="flex gap-0.5" aria-label="5/5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            {t("testimonials.title1")} <span className="text-gradient">{t("testimonials.title2")}</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">{t("testimonials.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {testimonials.map((item) => (
            <figure
              key={item.id}
              className={`glass-card p-6 flex flex-col ${item.highlight ? "border-yellow-400/50" : ""}`}
            >
              <div className="flex items-center justify-between mb-4">
                <Stars />
                <Quote className="w-6 h-6 text-primary/40" aria-hidden="true" />
              </div>
              <p className="font-semibold font-display text-lg leading-snug mb-3">{t(item.headlineKey)}</p>
              <blockquote className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line flex-1">
                {t(item.textKey)}
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-border/50 text-sm">
                <span className="font-medium text-foreground">{t(item.whoKey)}</span>
                <span className="text-muted-foreground"> · {t(item.dateKey)}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {criteria.map((key) => (
            <span
              key={key}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/50 bg-secondary/40 text-xs text-muted-foreground"
            >
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              {t(key)} 5/5
            </span>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">{t("testimonials.note")}</p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
