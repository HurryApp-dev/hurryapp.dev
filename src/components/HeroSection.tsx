"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import devicesHeroImg from "@/assets/devices-hero.png";
import { useLanguage } from "@/i18n/LanguageContext";

const devicesHero = devicesHeroImg.src;

const HeroSection = () => {
  const { t, language } = useLanguage();

  // Entrada palavra a palavra: +70ms por palavra; o destaque vai em degradê.
  const palavras = [
    ...t("hero.title1").trim().split(/\s+/).map((w) => ({ w, destaque: false })),
    ...t("hero.title2").trim().split(/\s+/).map((w) => ({ w, destaque: true })),
  ];
  const depois = palavras.length * 70; // subtítulo e botões entram em seguida

  return (
    <section id="home" className="relative overflow-hidden border-b border-border pt-16">
      <div aria-hidden="true" className="absolute inset-0 bg-grid" />
      <div aria-hidden="true" className="absolute inset-0 bg-halo" />

      <div className="container relative mx-auto grid min-h-[calc(85vh-4rem)] items-center gap-12 px-4 py-20 md:grid-cols-2 md:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex h-7 items-center gap-2 self-start rounded-full border border-accent/35 bg-accent/10 px-3 font-mono text-[11px] uppercase tracking-[.08em] text-[hsl(260_80%_82%)] animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-[hsl(260_70%_65%)] animate-pulse-dot" aria-hidden="true" />
            {t("hero.tag")}
          </span>

          <h1
            key={language}
            aria-label={`${t("hero.title1").trim()} ${t("hero.title2").trim()}`}
            className="flex flex-wrap gap-x-[.26em] font-display text-[clamp(40px,5.4vw,64px)] font-bold leading-[1.04] tracking-[-0.035em]"
          >
            {palavras.map(({ w, destaque }, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`inline-block animate-word-in ${destaque ? "text-gradient-brand" : ""}`}
                style={{ animationDelay: `${i * 70}ms` }}
              >
                {w}
              </span>
            ))}
          </h1>

          <p
            className="max-w-[52ch] text-lg leading-relaxed text-muted-foreground animate-fade-up"
            style={{ animationDelay: `${depois + 120}ms` }}
          >
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: `${depois + 240}ms` }}>
            <Link href="/contato" className="btn btn-primary btn-lg">
              {t("hero.cta")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/#portfolio" className="btn btn-secondary btn-lg">
              {t("hero.secondaryCta")}
            </Link>
          </div>

          <p
            className="flex items-center gap-2.5 text-[13px] text-muted-foreground animate-fade-up"
            style={{ animationDelay: `${depois + 360}ms` }}
          >
            <span className="tracking-[1px] text-brand-yellow" aria-hidden="true">
              ★★★★★
            </span>
            {t("hero.rating")}
          </p>
        </div>

        <div className="relative flex justify-center animate-fade-up" style={{ animationDelay: "200ms" }}>
          <div
            aria-hidden="true"
            className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/.22),transparent_65%)] blur-2xl"
          />
          <img src={devicesHero} alt={t("hero.devicesAlt")} className="relative h-auto max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
