"use client";

import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";

const Providers = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>
    <TooltipProvider>
      <Toaster />
      {children}
    </TooltipProvider>
  </LanguageProvider>
);

export default Providers;
