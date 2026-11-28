import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Providers from "@/components/Providers";
import { listarPosts } from "@/lib/blogFs";
import "@/index.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const SITE = "https://www.hurryapp.dev";
const TITULO = "HurryApp — Apps e sistemas No-code e IA";
const DESCRICAO =
  "Desenvolvemos apps e sistemas sob medida com No-code e IA: integrações, pagamentos, automações em N8N e WhatsApp — até 5x mais rápido.";
const DESCRICAO_SOCIAL =
  "Apps e sistemas sob medida com No-code e IA: integrações de pagamento, automações em N8N e WhatsApp, entrega até 5x mais rápida.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITULO,
  description: DESCRICAO,
  authors: [{ name: "HurryApp" }],
  alternates: { canonical: "/" },
  icons: { icon: [{ url: "/favicon.png", type: "image/png" }] },
  openGraph: {
    type: "website",
    url: `${SITE}/`,
    title: TITULO,
    description: DESCRICAO_SOCIAL,
    images: [`${SITE}/og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: DESCRICAO_SOCIAL,
    images: [`${SITE}/og-image.png`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "HurryApp",
      url: `${SITE}/`,
      logo: `${SITE}/favicon.png`,
      description: "Desenvolvimento de apps e sistemas sob medida com tecnologias No-code e IA.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: "HurryApp",
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "Service",
      name: "Desenvolvimento de apps e sistemas No-code e IA",
      serviceType: "Desenvolvimento de software No-code e IA",
      provider: { "@id": `${SITE}/#organization` },
      areaServed: "BR",
      url: `${SITE}/`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços HurryApp",
        itemListElement: [
          "Desenvolvimento de aplicativos No-code",
          "Integrações de API e pagamentos",
          "Automações em N8N e WhatsApp",
          "Inclusão de IA em aplicações",
          "Testes de aplicativos e relatório de UI/UX",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="alternate" type="application/rss+xml" title="Blog HurryApp" href="/blog/rss.xml" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\u003c") }}
        />
        <Providers temBlog={listarPosts().length > 0}>{children}</Providers>
      </body>
    </html>
  );
}
