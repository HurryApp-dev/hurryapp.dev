"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const langs: { lang: Language; code: string; label: string }[] = [
  { lang: "pt", code: "PT", label: "Português" },
  { lang: "en", code: "EN", label: "English" },
  { lang: "de", code: "DE", label: "Deutsch" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const atual = langs.find((l) => l.lang === language) ?? langs[0];

  // Menu suspenso (não é popup): fecha ao clicar fora ou com Esc.
  useEffect(() => {
    if (!open) return;
    const fora = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", fora);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", fora);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t("menu.language")}: ${atual.label}`}
        className="inline-flex h-10 items-center gap-2 rounded-md border border-[hsl(222_30%_22%)] px-3 font-mono text-[13px] font-medium text-foreground transition-all duration-150 hover:border-primary/50 hover:bg-[hsl(222_40%_16%)] active:scale-[.97]"
      >
        {atual.code}
        <ChevronDown
          className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t("menu.language")}
          className="absolute right-0 top-12 z-50 min-w-[180px] rounded-lg border border-[hsl(222_30%_20%)] bg-card p-1.5 shadow-md animate-in fade-in-0 zoom-in-95 slide-in-from-top-1 duration-200"
        >
          {langs.map((l) => (
            <li key={l.lang} role="option" aria-selected={l.lang === language}>
              <button
                type="button"
                onClick={() => {
                  setLanguage(l.lang);
                  setOpen(false);
                }}
                className="flex h-10 w-full items-center gap-2.5 rounded-sm px-2.5 text-left text-sm font-medium text-foreground/90 transition-colors duration-100 hover:bg-[hsl(222_40%_16%)] active:scale-[.98]"
              >
                <code className="w-6 font-mono text-xs text-[hsl(320_80%_70%)]">{l.code}</code>
                <span className="flex-1">{l.label}</span>
                {l.lang === language && <Check className="h-4 w-4 text-brand-yellow" aria-hidden="true" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
