import { MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import MeetingSection from "@/components/MeetingSection";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const WHATSAPP_NUMBER = "5511997647688";
const WHATSAPP_MESSAGE = "Vim através da Hurryapp e gostaria de tirar uma dúvida...";

const Contato = () => {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <MeetingSection />
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              {t("meeting.whatsapp_cta")}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
