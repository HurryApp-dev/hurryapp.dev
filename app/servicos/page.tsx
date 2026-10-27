import type { Metadata } from "next";
import Servicos from "@/views/Servicos";

export const metadata: Metadata = {
  title: "Serviços — HurryApp",
  alternates: { canonical: "/servicos" },
  openGraph: { url: "https://www.hurryapp.dev/servicos" },
};

export default function Page() {
  return <Servicos />;
}
