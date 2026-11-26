import Navbar from "@/components/Navbar";
import CalculatorSection from "@/components/CalculatorSection";
import Footer from "@/components/Footer";

const Orcamento = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <CalculatorSection />
      </main>
      <Footer />
    </div>
  );
};

export default Orcamento;
