import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // O next dev reescreve o AGENTS.md sozinho; aqui o conteúdo é mantido à mão.
  agentRules: false,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
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

// Plugins por nome (texto): é o que o Turbopack aceita. O remark-frontmatter só
// faz o bloco `---` do topo do post não aparecer no texto; os campos são lidos
// por src/lib/blog.ts.
const withMDX = createMDX({
  options: { remarkPlugins: ["remark-frontmatter"] },
});

export default withMDX(nextConfig);
