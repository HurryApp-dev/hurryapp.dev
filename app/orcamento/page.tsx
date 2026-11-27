import type { Metadata } from "next";
import Orcamento from "@/views/Orcamento";

export const metadata: Metadata = {
  title: "Orçamento — HurryApp",
  alternates: { canonical: "/orcamento" },
  openGraph: { url: "https://www.hurryapp.dev/orcamento" },
};

export default function Page() {
  return <Orcamento />;
}
