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
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

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

interface PortfolioItem {
  image: string;
  name: string;
  details?: {
    photos: string[];
    description: string;
    descriptionKey: string;
    link?: string;
  };
}

const portfolioItems: PortfolioItem[] = [
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
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center">
          {t("portfolio.title")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8">
          {/* Cards list - left side */}
          <div className="flex flex-col gap-3 max-h-[400px] lg:max-h-[600px] overflow-y-auto pr-2 portfolio-scrollbar">
            {portfolioItems.map((item) => (
              <div
                key={item.name}
                onClick={() => handleSelect(item.name)}
                className={`glass-card p-4 flex items-center gap-4 cursor-pointer transition-all ${
                  selected === item.name
                    ? "portfolio-selected"
                    : "hover:border-primary/30"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 object-contain rounded-md flex-shrink-0"
                />
                <p className="text-sm font-medium text-foreground">{item.name}</p>
              </div>
            ))}
          </div>

          {/* Details - right side */}
          {selectedItem?.details && (
            <div ref={detailsRef} className="glass-card p-6 md:p-10 text-left animate-in fade-in duration-300">
              <h3 className="text-2xl font-bold font-display mb-4">
                {selectedItem.name}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t(selectedItem.details.descriptionKey as TranslationKey)}
              </p>

              {selectedItem.details.link && (
                <a
                  href={selectedItem.details.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  {t("portfolio.viewProject")}
                  <ExternalLink size={16} />
                </a>
              )}

              {selectedItem.details.photos.length > 0 && (
                <div className="grid grid-cols-1 gap-4">
                  {selectedItem.details.photos.map((photo, idx) => (
                    <img
                      key={idx}
                      src={photo}
                      alt={`${selectedItem.name} screenshot ${idx + 1}`}
                      className="rounded-lg w-full object-cover border border-border"
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
