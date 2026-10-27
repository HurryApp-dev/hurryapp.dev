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

const hurryIcon = hurryIconImg.src;
const hurryText = hurryTextImg.src;

// href com âncora (/#id) funciona em qualquer página: fora da home, o Next
// navega para "/" e rola até o elemento.
const navItems: { labelKey: TranslationKey; href: string }[] = [
  { labelKey: "nav.portfolio", href: "/#portfolio" },
  { labelKey: "nav.calculator", href: "/#calculator" },
  { labelKey: "nav.services", href: "/servicos" },
  { labelKey: "nav.contact", href: "/contato" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/#home" onClick={(e) => handleClick(e, "/#home")} className="flex items-center gap-2 cursor-pointer">
          <img src={hurryIcon} alt="HurryApp" className="h-10" />
          <img src={hurryText} alt="HurryApp" className="h-6 hidden sm:block" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.labelKey}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(item.labelKey)}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border/30 px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.labelKey}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="block w-full text-left py-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
