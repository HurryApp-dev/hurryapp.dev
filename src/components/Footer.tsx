"use client";

import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import hurryIconImg from "@/assets/hurryapp-icon.png";
import hurryTextImg from "@/assets/hurryapp-text.png";
import devEricaImg from "@/assets/dev-erica.jpg";
import devSamuelImg from "@/assets/dev-samuel.jpg";
import iconAcheumdevImg from "@/assets/icon-acheumdev.png";
import { useLanguage } from "@/i18n/LanguageContext";

const hurryIcon = hurryIconImg.src;
const hurryText = hurryTextImg.src;
const devErica = devEricaImg.src;
const devSamuel = devSamuelImg.src;
const iconAcheumdev = iconAcheumdevImg.src;

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="border-t border-border bg-[hsl(222_47%_5%)] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 md:grid-cols-5 md:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={hurryIcon} alt="HurryApp" className="h-10" />
              <img src={hurryText} alt="HurryApp" className="h-5" />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs font-medium uppercase tracking-[.12em] text-foreground/70">{t("footer.solutions")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t("footer.dev")}</li>
              <li>{t("footer.api")}</li>
              <li>{t("footer.design")}</li>
              <li>{t("footer.support")}</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs font-medium uppercase tracking-[.12em] text-foreground/70">{t("nav.contact")}</h4>
            <Link href="/contato" className="text-sm font-semibold text-[hsl(320_80%_68%)] transition-colors duration-150 hover:text-brand-yellow">
              {t("hero.cta")} →
            </Link>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs font-medium uppercase tracking-[.12em] text-foreground/70">Developers</h4>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <img src={devErica} alt="Erica" className="h-14 w-14 rounded-full border-2 border-primary/40 object-cover" />
                <span className="text-sm text-muted-foreground">Erica</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src={devSamuel} alt="Samuel" className="w-14 h-14 rounded-full object-cover border-2 border-accent/40" />
                <span className="text-sm text-muted-foreground">Samuel</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs font-medium uppercase tracking-[.12em] text-foreground/70">Links Profissionais</h4>
            <div className="flex items-center gap-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="https://acheumdev.com.br/profissional/devsamuel" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-[hsl(222_30%_22%)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-glow active:scale-95">
                    <span className="h-7 w-7 overflow-hidden"><img src={iconAcheumdev} alt="AcheUmDev" className="h-7 w-auto max-w-none" /></span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>Portifólio Acheumdev de Samuel</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="https://www.linkedin.com/in/erica-coelho-amaral-4a227265/" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-primary/40 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:shadow-glow active:scale-95">
                    <Linkedin size={16} className="text-primary" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Linkedin de Erica</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="https://www.linkedin.com/in/samuel-gra%C3%A7as-166202315/" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-accent/40 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-glow-accent active:scale-95">
                    <Linkedin size={16} className="text-accent" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Linkedin de Samuel</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-border/70 pt-6 font-mono text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} HurryApp Developers. {t("footer.rights")}
          </p>
          <p>hurryapp.dev · PT · EN · DE</p>
        </div>
      </div>
    </footer>);

};

export default Footer;