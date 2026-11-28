"use client";

import { useState, useRef } from "react";
import { ExternalLink } from "lucide-react";
import portfolioAdegaImg from "@/assets/portfolio-adega.png";
import portfolioLogo2Img from "@/assets/portfolio-logo2.jpg";
import portfolioSuperlojaImg from "@/assets/portfolio-superloja.jpg";
import portfolioAdegaDetailImg from "@/assets/portfolio-adega-detail.jpg";
import portfolioCoordenacaoLogoImg from "@/assets/portfolio-coordenacao-logo.jpg";
import portfolioCoordenacaoDetailImg from "@/assets/portfolio-coordenacao-detail.jpg";
import portfolioAutomacaoLogoImg from "@/assets/portfolio-automacao-logo.png";
import portfolioAutomacaoDetailImg from "@/assets/portfolio-automacao-telas.jpg";
import portfolioUseplusLogoImg from "@/assets/portfolio-useplus-logo.png";
import portfolioUseplusDetailImg from "@/assets/portfolio-useplus-detail.jpg";
import portfolioRapidoLogoImg from "@/assets/portfolio-rapidonobairro-logo.jpg";
import portfolioRapidoDetailImg from "@/assets/portfolio-rapidonobairro-detail.png";
import portfolioYnosLogoImg from "@/assets/portfolio-ynos-logo.jpg";
import portfolioYnosDetailImg from "@/assets/portfolio-ynos-detail.jpg";
import portfolioEsteiraLogoImg from "@/assets/portfolio-esteira-logo.jpg";
import portfolioEsteiraDetailImg from "@/assets/portfolio-esteira-detail.jpg";
import portfolioAtendeaiLogoImg from "@/assets/portfolio-atendeai-logo.png";
import portfolioAtendeaiDetailImg from "@/assets/portfolio-atendeai-detail.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import SectionHeader from "./SectionHeader";

const portfolioAdega = portfolioAdegaImg.src;
const portfolioLogo2 = portfolioLogo2Img.src;
const portfolioSuperloja = portfolioSuperlojaImg.src;
const portfolioAdegaDetail = portfolioAdegaDetailImg.src;
const portfolioCoordenacaoLogo = portfolioCoordenacaoLogoImg.src;
const portfolioCoordenacaoDetail = portfolioCoordenacaoDetailImg.src;
const portfolioAutomacaoLogo = portfolioAutomacaoLogoImg.src;
const portfolioAutomacaoDetail = portfolioAutomacaoDetailImg.src;
const portfolioUseplusLogo = portfolioUseplusLogoImg.src;
const portfolioUseplusDetail = portfolioUseplusDetailImg.src;
const portfolioRapidoLogo = portfolioRapidoLogoImg.src;
const portfolioRapidoDetail = portfolioRapidoDetailImg.src;
const portfolioYnosLogo = portfolioYnosLogoImg.src;
const portfolioYnosDetail = portfolioYnosDetailImg.src;
const portfolioEsteiraLogo = portfolioEsteiraLogoImg.src;
const portfolioEsteiraDetail = portfolioEsteiraDetailImg.src;
const portfolioAtendeaiLogo = portfolioAtendeaiLogoImg.src;
const portfolioAtendeaiDetail = portfolioAtendeaiDetailImg.src;

interface PortfolioItem {
  image: string;
  name: string;
  details?: {
    photos: string[];
    video?: string;
    description: string;
    descriptionKey: string;
    link?: string;
  };
}

const portfolioItems: PortfolioItem[] = [
  {
    image: portfolioAtendeaiLogo,
    name: "AtendeAI",
    details: {
      photos: [portfolioAtendeaiDetail],
      video: "/portfolio/atendeai.mp4",
      description: "",
      descriptionKey: "portfolio.atendeai.description",
      link: "https://atendeai.hurryapp.dev/",
    },
  },
  {
    image: portfolioAdega,
    name: "Adega Ventura",
    details: {
      photos: [portfolioAdegaDetail],
      description: "",
      descriptionKey: "portfolio.adega.description",
    },
  },
  {
    image: portfolioAutomacaoLogo,
    name: "Automação Comercial",
    details: {
      photos: [portfolioAutomacaoDetail],
      description: "",
      descriptionKey: "portfolio.automacao.description",
    },
  },
  {
    image: portfolioLogo2,
    name: "Super Loja",
    details: {
      photos: [portfolioSuperloja],
      description: "",
      descriptionKey: "portfolio.client.description",
    },
  },
  {
    image: portfolioCoordenacaoLogo,
    name: "Coordenação de Equipe",
    details: {
      photos: [portfolioCoordenacaoDetail],
      description: "",
      descriptionKey: "portfolio.coordenacao.description",
      link: "https://coordenao-71272.bubbleapps.io/version-test/login",
    },
  },
  {
    image: portfolioUseplusLogo,
    name: "Use+",
    details: {
      photos: [portfolioUseplusDetail],
      description: "",
      descriptionKey: "portfolio.useplus.description",
    },
  },
  {
    image: portfolioRapidoLogo,
    name: "Rápido no Bairro",
    details: {
      photos: [portfolioRapidoDetail],
      description: "",
      descriptionKey: "portfolio.rapidonobairro.description",
      link: "https://rapidonobairro.com.br/",
    },
  },
  {
    image: portfolioYnosLogo,
    name: "Ynos",
    details: {
      photos: [portfolioYnosDetail],
      description: "",
      descriptionKey: "portfolio.ynos.description",
      link: "https://www.ynosseguros.com.br/",
    },
  },
  {
    image: portfolioEsteiraLogo,
    name: "Esteira Imobiliária",
    details: {
      photos: [portfolioEsteiraDetail],
      description: "",
      descriptionKey: "portfolio.esteira.description",
    },
  },
];

const PortfolioSection = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<string>(portfolioItems[0].name);
  const detailsRef = useRef<HTMLDivElement>(null);

  const selectedItem = portfolioItems.find((item) => item.name === selected);

  const handleSelect = (name: string) => {
    setSelected(name);
    if (window.innerWidth < 1024 && detailsRef.current) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <section id="portfolio" className="border-t border-border/70 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow={t("eyebrow.portfolio")} title={t("portfolio.title")} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[340px_1fr]">
          {/* Lista de projetos (esquerda): cada item é um botão. */}
          <div
            data-reveal
            className="portfolio-scrollbar -m-2 flex max-h-[400px] flex-col gap-3 overflow-y-auto p-2 lg:max-h-[600px]"
          >
            {portfolioItems.map((item) => {
              const ativo = selected === item.name;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleSelect(item.name)}
                  aria-pressed={ativo}
                  className={`flex w-full flex-none items-center gap-4 rounded-lg border p-4 text-left transition-all duration-200 ease-out active:scale-[.99] ${
                    ativo
                      ? "border-primary/60 bg-card shadow-glow"
                      : "border-border/50 bg-card/60 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_12px_32px_-16px_hsl(var(--primary)/.55)]"
                  }`}
                >
                  <img src={item.image} alt="" className="h-14 w-14 flex-shrink-0 rounded-md object-contain" />
                  <span className="flex-1 text-sm font-medium text-foreground">{item.name}</span>
                  {ativo && <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />}
                </button>
              );
            })}
          </div>

          {/* Detalhes (direita) */}
          {selectedItem?.details && (
            <div
              key={selectedItem.name}
              ref={detailsRef}
              className="glass scroll-mt-24 rounded-xl p-6 text-left shadow-inner-hl animate-fade-up md:p-10"
            >
              <span className="eyebrow">{t("eyebrow.portfolio")}</span>
              <h3 className="mb-4 mt-2 font-display text-[28px] font-semibold leading-tight tracking-[-0.015em]">
                {selectedItem.name}
              </h3>
              <p className="mb-6 max-w-[68ch] leading-relaxed text-muted-foreground">
                {t(selectedItem.details.descriptionKey as TranslationKey)}
              </p>

              {selectedItem.details.link && (
                <a
                  href={selectedItem.details.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mb-6"
                >
                  {t("portfolio.viewProject")}
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              )}

              {selectedItem.details.video && (
                <video
                  key={selectedItem.details.video}
                  src={selectedItem.details.video}
                  poster={selectedItem.details.photos[0]}
                  controls
                  playsInline
                  preload="none"
                  className="w-full rounded-lg border border-border"
                />
              )}

              {!selectedItem.details.video && selectedItem.details.photos.length > 0 && (
                <div className="grid grid-cols-1 gap-4">
                  {selectedItem.details.photos.map((photo, idx) => (
                    <img
                      key={idx}
                      src={photo}
                      alt={`${selectedItem.name} screenshot ${idx + 1}`}
                      className="w-full rounded-lg border border-border object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
