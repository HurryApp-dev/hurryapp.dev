"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DevelopmentSection from "@/components/DevelopmentSection";
import PortfolioSection from "@/components/PortfolioSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DevelopmentSection />
        <PortfolioSection />
        <TestimonialsSection />
        <HowWeWorkSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
