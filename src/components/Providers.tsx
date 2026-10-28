"use client";

import { createContext, useContext, type ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";

// O layout (servidor) diz se há post visível; a Navbar só mostra "Blog" se houver.
const TemBlogContext = createContext(false);
export const useTemBlog = () => useContext(TemBlogContext);

const Providers = ({ children, temBlog = false }: { children: ReactNode; temBlog?: boolean }) => (
  <TemBlogContext.Provider value={temBlog}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        {children}
      </TooltipProvider>
    </LanguageProvider>
  </TemBlogContext.Provider>
);

export default Providers;
