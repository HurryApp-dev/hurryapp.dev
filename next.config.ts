import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // O next dev reescreve o AGENTS.md sozinho; aqui o conteúdo é mantido à mão.
  agentRules: false,
  // O endereço oficial é o www: quem chega pelo domínio sem www vai para a mesma página no www
  // (308, permanente; o caminho e a query vão junto).
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "hurryapp.dev" }],
        destination: "https://www.hurryapp.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
