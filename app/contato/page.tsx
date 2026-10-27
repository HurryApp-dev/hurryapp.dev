import type { Metadata } from "next";
import Contato from "@/views/Contato";

export const metadata: Metadata = {
  title: "Contato — HurryApp",
  alternates: { canonical: "/contato" },
  openGraph: { url: "https://www.hurryapp.dev/contato" },
};

export default function Page() {
  return <Contato />;
}
