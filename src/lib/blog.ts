import matter from "gray-matter";
import * as yaml from "js-yaml";

export const AUTORES = ["Samuel", "Erica"] as const;
export type Autor = (typeof AUTORES)[number];

export type Post = {
  slug: string;
  title: string;
  description: string;
  /** AAAA-MM-DD */
  date: string;
  author: Autor;
  tags: string[];
  cover?: string;
  draft: boolean;
};

const DATA_RE = /^\d{4}-\d{2}-\d{2}$/;

const erro = (slug: string, msg: string) =>
  new Error(`Post "${slug}" (content/blog/${slug}.mdx): ${msg}`);

const texto = (slug: string, campo: string, valor: unknown): string => {
  if (typeof valor !== "string" || valor.trim() === "") {
    throw erro(slug, `o campo "${campo}" é obrigatório no frontmatter`);
  }
  return valor.trim();
};

// JSON_SCHEMA não converte `date: 2026-10-27` em Date: a data fica texto e é
// validada aqui (sem "2026-13-40" virando outro dia em silêncio).
const opcoes = { engines: { yaml: (s: string) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object } };

const normalizarData = (slug: string, valor: unknown): string => {
  const s = texto(slug, "date", valor);
  const d = new Date(`${s}T00:00:00Z`);
  const real = DATA_RE.test(s) && !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
  if (!real) throw erro(slug, `"date" deve ser uma data AAAA-MM-DD válida (recebi "${s}")`);
  return s;
};

/** Lê o frontmatter de um .mdx e valida. Campo obrigatório faltando quebra com erro claro. */
export function parsePost(slug: string, raw: string): Post {
  const { data } = matter(raw, opcoes);
  const title = texto(slug, "title", data.title);
  const description = texto(slug, "description", data.description);
  const date = normalizarData(slug, data.date);
  const author = texto(slug, "author", data.author);
  if (!(AUTORES as readonly string[]).includes(author)) {
    throw erro(slug, `"author" deve ser ${AUTORES.join(" ou ")} (recebi "${author}")`);
  }
  if (data.tags !== undefined && !(Array.isArray(data.tags) && data.tags.every((t: unknown) => typeof t === "string"))) {
    throw erro(slug, `"tags" deve ser uma lista de textos`);
  }
  if (data.draft !== undefined && typeof data.draft !== "boolean") {
    throw erro(slug, `"draft" deve ser true ou false`);
  }
  if (data.cover !== undefined && typeof data.cover !== "string") {
    throw erro(slug, `"cover" deve ser um caminho de imagem (ex.: /blog/${slug}/capa.png)`);
  }
  return {
    slug,
    title,
    description,
    date,
    author: author as Autor,
    tags: data.tags ?? [],
    cover: data.cover,
    draft: data.draft === true,
  };
}

/** Mais novo primeiro; no mesmo dia, por slug, para a ordem ser estável. */
export function ordenarPosts(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

/** Em produção, draft some. Em `next dev` (incluirDrafts), aparece para quem escreve. */
export function filtrarVisiveis(posts: Post[], incluirDrafts: boolean): Post[] {
  return posts.filter((p) => incluirDrafts || !p.draft);
}

export function formatarData(date: string): string {
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(`${date}T00:00:00Z`),
  );
}
