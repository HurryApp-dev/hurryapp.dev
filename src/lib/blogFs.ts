import fs from "node:fs";
import path from "node:path";
import { filtrarVisiveis, ordenarPosts, parsePost, type Post } from "./blog";

const PASTA = path.join(process.cwd(), "content", "blog");

export const SITE = "https://www.hurryapp.dev";

// Draft só aparece em `next dev`; no build e no `next start` o NODE_ENV é production.
const incluirDrafts = () => process.env.NODE_ENV !== "production";

/** Lê todos os posts de content/blog, já validados e ordenados (mais novo primeiro). */
export function listarPosts(): Post[] {
  if (!fs.existsSync(PASTA)) return [];
  const todos = fs
    .readdirSync(PASTA)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      return parsePost(slug, fs.readFileSync(path.join(PASTA, f), "utf8"));
    });
  return ordenarPosts(filtrarVisiveis(todos, incluirDrafts()));
}

export function acharPost(slug: string): Post | undefined {
  return listarPosts().find((p) => p.slug === slug);
}
