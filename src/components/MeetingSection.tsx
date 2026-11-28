"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { enviarContato } from "@/lib/enviarContato";
import { useToast } from "@/hooks/use-toast";

const MeetingSection = () => {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", message: "" });
  const [sending, setSending] = useState(false);
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      await enviarContato({
        origem: "reuniao",
        name: form.name,
        email: form.email,
        whatsapp: form.whatsapp,
        message: form.message,
        website: String(new FormData(e.currentTarget as HTMLFormElement).get("website") ?? ""),
      });

      toast({ title: t("meeting.success") });
      setForm({ name: "", email: "", whatsapp: "", message: "" });
    } catch (error) {
      console.error("Envio do formulario falhou:", error);
      toast({ title: t("meeting.error"), variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="meeting" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-lg text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">{t("meeting.title")}</h2>
        <p className="text-muted-foreground mb-10">{t("meeting.subtitle")}</p>

        <form onSubmit={handleSubmit} className="glass-card space-y-4 p-6 text-left md:p-8">
          {/* Honeypot: o atributo hidden (e não a classe) evita que o space-y-4 empurre o campo seguinte. */}
          <div hidden aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </div>
          {[
            { label: t("meeting.name"), key: "name" as const, type: "text" },
            { label: t("meeting.email"), key: "email" as const, type: "email" },
            { label: t("meeting.whatsapp"), key: "whatsapp" as const, type: "tel" },
          ].map((field) => (
            <div key={field.key}>
              <label className="mb-1.5 block text-[13px] font-medium text-foreground/90">{field.label}</label>
              <input
                type={field.type}
                value={form[field.key]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                className="field"
                required
              />
            </div>
          ))}

          <div>
            <label className="mb-1.5 block text-[13px] font-medium text-foreground/90">{t("meeting.message")}</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="field h-auto resize-none py-3"
              required
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="btn btn-primary btn-lg mt-2 w-full"
          >
            {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            {t("meeting.cta")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default MeetingSection;
