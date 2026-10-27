"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Boxes,
  CalendarClock,
  ChevronDown,
  ClipboardCheck,
  FileText,
  LifeBuoy,
  Plug,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { products, servicesPage, type ProductDetailIcon } from "@/data/servicos";
import portfolioAutomacaoLogo from "@/assets/portfolio-automacao-logo.png";

const detailIcons: Record<ProductDetailIcon, LucideIcon> = {
  description: FileText,
  integrations: Plug,
  costs: Wallet,
  signups: ClipboardCheck,
  delivery: CalendarClock,
  support: LifeBuoy,
};

const productImages: Record<string, string> = {
  "automacao-comercial": portfolioAutomacaoLogo.src,
};

const Servicos = () => {
  const { language } = useLanguage();
  const router = useRouter();
  const [openDetail, setOpenDetail] = useState<string | null>(null);

  const goToContact = () => {
    router.push("/contato");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mx-auto text-center mb-14">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {servicesPage.title[language]}
            </h1>
            <p className="text-muted-foreground">{servicesPage.subtitle[language]}</p>
          </header>

          <div className="space-y-12 max-w-5xl mx-auto">
            {products.map((product) => (
              <article key={product.slug} className="glass-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:items-center">
                  {productImages[product.slug] && (
                    <img
                      src={productImages[product.slug]}
                      alt={product.name[language]}
                      loading="lazy"
                      className="w-28 h-28 object-contain rounded-xl bg-muted/30 p-2 shrink-0"
                    />
                  )}
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-2">{product.name[language]}</h2>
                    <p className="text-sm text-muted-foreground">{product.tagline[language]}</p>
                  </div>
                  <div className="md:text-right shrink-0">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                      {servicesPage.total[language]}
                    </p>
                    <p className="text-xl font-bold text-primary">{product.totalPrice[language]}</p>
                    <p className="text-xs text-muted-foreground mt-1 max-w-[16rem]">
                      <span className="whitespace-pre-line">{product.priceNote[language]}</span>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                  {product.details.map((detail) => {
                    const Icon = detailIcons[detail.icon];
                    const id = `${product.slug}-${detail.icon}`;
                    const isOpen = openDetail === id;
                    return (
                      <div key={id} className="flex flex-col">
                        <button
                          type="button"
                          onClick={() => setOpenDetail(isOpen ? null : id)}
                          aria-expanded={isOpen}
                          aria-controls={`${id}-panel`}
                          className={`text-left rounded-xl border p-4 h-full transition-colors ${
                            isOpen
                              ? "border-primary/60 bg-primary/5"
                              : "border-border hover:border-primary/40"
                          }`}
                        >
                          <span className="flex items-center gap-2 mb-2">
                            <Icon className="w-5 h-5 text-primary shrink-0" />
                            <span className="font-medium text-sm">{detail.label[language]}</span>
                            <ChevronDown
                              className={`w-4 h-4 ml-auto text-muted-foreground transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </span>
                          <span className="block text-xs text-muted-foreground">
                            {detail.summary[language]}
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>

                {product.details.map((detail) => {
                  const id = `${product.slug}-${detail.icon}`;
                  if (openDetail !== id) return null;
                  const Icon = detailIcons[detail.icon];
                  return (
                    <div
                      key={`${id}-panel`}
                      id={`${id}-panel`}
                      className="mt-4 rounded-xl border border-primary/30 bg-muted/20 p-5"
                    >
                      <h3 className="flex items-center gap-2 font-semibold mb-2">
                        <Icon className="w-5 h-5 text-primary" />
                        {detail.label[language]}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {detail.full[language]}
                      </p>
                    </div>
                  );
                })}

                {product.modules.length > 0 && (
                  <div className="mt-8">
                    <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                      <Boxes className="w-4 h-4" />
                      {servicesPage.modules[language]}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {product.modules.map((module) => (
                        <div key={module.name.pt} className="rounded-xl border border-border p-4">
                          <p className="font-medium text-sm mb-1">{module.name[language]}</p>
                          <p className="text-primary font-semibold text-sm mb-2">
                            {module.price[language]}
                          </p>
                          <p className="text-xs text-muted-foreground">{module.summary[language]}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={goToContact}
                    className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                  >
                    {servicesPage.cta[language]}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Servicos;
