import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // O next dev reescreve o AGENTS.md sozinho; aqui o conteúdo é mantido à mão.
  agentRules: false,
};

export default nextConfig;
