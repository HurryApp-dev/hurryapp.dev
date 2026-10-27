import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // O next dev reescreve o AGENTS.md sozinho; aqui o conteúdo é mantido à mão.
  agentRules: false,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

// Plugins por nome (texto): é o que o Turbopack aceita. O remark-frontmatter só
// faz o bloco `---` do topo do post não aparecer no texto; os campos são lidos
// por src/lib/blog.ts.
const withMDX = createMDX({
  options: { remarkPlugins: ["remark-frontmatter"] },
});

export default withMDX(nextConfig);
