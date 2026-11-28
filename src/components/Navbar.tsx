"use client";

import { useState } from "react";
import hurryIconImg from "@/assets/hurryapp-icon.png";
import hurryTextImg from "@/assets/hurryapp-text.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import type { TranslationKey } from "@/i18n/translations";
import { useTemBlog } from "./Providers";

const hurryIcon = hurryIconImg.src;
const hurryText = hurryTextImg.src;

// href com âncora (/#id) funciona em qualquer página: fora da home, o Next
// navega para "/" e rola até o elemento.
const navItems: { labelKey: TranslationKey; href: string }[] = [
  { labelKey: "nav.portfolio", href: "/#portfolio" },
  { labelKey: "nav.calculator", href: "/orcamento" },
  { labelKey: "nav.services", href: "/servicos" },
  { labelKey: "nav.contact", href: "/contato" },
];
const blogItem: { labelKey: TranslationKey; href: string } = { labelKey: "nav.blog", href: "/blog" };

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();
  // "Blog" só entra no menu quando há ao menos um post visível.
  const temBlog = useTemBlog();
  const items = temBlog ? [...navItems.slice(0, 3), blogItem, navItems[3]] : navItems;

  // Na home, a rolagem suave é feita aqui; em outras páginas o Link navega.
  const handleClick = (e: React.MouseEvent, href: string) => {
    setMobileOpen(false);
    const [path, hash] = href.split("#");
    if (hash && pathname === (path || "/")) {
      e.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/75 backdrop-blur-[14px] border-b border-border/60">
      <div className="container mx-auto flex h-16 items-center gap-6 px-4">
        <Link
          href="/#home"
          onClick={(e) => handleClick(e, "/#home")}
          className="flex flex-none items-center gap-2 rounded-md transition-opacity duration-150 hover:opacity-90"
        >
          <img src={hurryIcon} alt="HurryApp" className="h-9" />
          <img src={hurryText} alt="" aria-hidden="true" className="h-5 hidden sm:block" />
        </Link>

        <div className="hidden md:flex flex-1 items-center gap-1">
          {items.map((item) => {
            const ativo = item.href.startsWith("/#") ? false : pathname.startsWith(item.href);
            return (
              <Link
                key={item.labelKey}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                aria-current={ativo ? "page" : undefined}
                className={`rounded-[10px] px-3 py-2 text-sm font-medium transition-all duration-150 hover:bg-secondary/60 hover:text-foreground active:scale-[.97] ${
                  ativo ? "text-foreground bg-secondary/60" : "text-muted-foreground"
                }`}
              >
                {t(item.labelKey)}
              </Link>
            );
          })}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitcher />
          <Link href="/contato" className="btn btn-primary hidden h-10 px-4 text-sm md:inline-flex">
            {t("hero.cta")}
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-md border border-transparent text-foreground transition-all duration-150 hover:border-[hsl(222_30%_24%)] hover:bg-secondary active:scale-[.94] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t("menu.close") : t("menu.open")}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border/60 bg-background px-4 pb-4 pt-2 animate-in fade-in-0 slide-in-from-top-2 duration-200">
          {items.map((item) => (
            <Link
              key={item.labelKey}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="block w-full rounded-[10px] px-3 py-3 text-left text-muted-foreground transition-colors duration-150 hover:bg-secondary/60 hover:text-foreground"
            >
              {t(item.labelKey)}
            </Link>
          ))}
          <Link href="/contato" onClick={() => setMobileOpen(false)} className="btn btn-primary mt-3 w-full">
            {t("hero.cta")}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
