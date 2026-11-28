"use client";

import { useEffect } from "react";

/**
 * Entrada ao rolar (Design System v2): elementos com `data-reveal` sobem e
 * aparecem (fade-up 600ms, +70ms por item, máx. 6) quando entram na tela.
 * Roda uma vez só por elemento. O que já está visível ao carregar não é
 * escondido (evita piscar), e "reduzir movimento" desliga tudo.
 */
export function useReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.classList.remove("opacity-0");
          el.classList.add("animate-fade-up");
          io.unobserve(el);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    let i = 0;
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return; // já visível
      el.style.animationDelay = `${(i++ % 6) * 70}ms`;
      el.classList.add("opacity-0"); // só esconde se o JS rodou
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);
}
