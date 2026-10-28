import { describe, it, expect } from "vitest";
import { filtrarVisiveis, formatarData, ordenarPosts, parsePost, type Post } from "./blog";

const mdx = (campos: string) => `---\n${campos}\n---\n\nTexto.\n`;
const base = `title: "Olá"\ndescription: "Resumo"\ndate: 2026-10-27\nauthor: Erica`;

const post = (slug: string, date: string, draft = false): Post => ({
  slug,
  title: slug,
  description: "d",
  date,
  author: "Samuel",
  tags: [],
  draft,
});

describe("parsePost", () => {
  it("lê um post válido, com data sem aspas", () => {
    expect(parsePost("ola", mdx(base))).toEqual({
      slug: "ola",
      title: "Olá",
      description: "Resumo",
      date: "2026-10-27",
      author: "Erica",
      tags: [],
      cover: undefined,
      draft: false,
    });
  });

  it("aceita data entre aspas, tags, cover e draft", () => {
    const p = parsePost(
      "x",
      mdx(`title: T\ndescription: D\ndate: "2026-01-05"\nauthor: Samuel\ntags: [a, b]\ncover: /blog/x/c.png\ndraft: true`),
    );
    expect(p).toMatchObject({ date: "2026-01-05", tags: ["a", "b"], cover: "/blog/x/c.png", draft: true });
  });

  it.each(["title", "description", "date", "author"])("sem %s quebra com erro que nomeia o post e o campo", (campo) => {
    const sem = base
      .split("\n")
      .filter((l) => !l.startsWith(`${campo}:`))
      .join("\n");
    expect(() => parsePost("meu-post", mdx(sem))).toThrow(new RegExp(`meu-post.*"${campo}" é obrigatório`));
  });

  it("rejeita título vazio, data inválida e autor desconhecido", () => {
    expect(() => parsePost("a", mdx(base.replace('"Olá"', '""')))).toThrow(/"title"/);
    expect(() => parsePost("a", mdx(base.replace("2026-10-27", "2026-13-40")))).toThrow(/"date".*AAAA-MM-DD/);
    expect(() => parsePost("a", mdx(base.replace("2026-10-27", "ontem")))).toThrow(/"date"/);
    expect(() => parsePost("a", mdx(base.replace("Erica", "Joas")))).toThrow(/"author".*Samuel ou Erica/);
  });

  it("rejeita draft e tags com tipo errado", () => {
    expect(() => parsePost("a", mdx(`${base}\ndraft: sim`))).toThrow(/"draft"/);
    expect(() => parsePost("a", mdx(`${base}\ntags: 3`))).toThrow(/"tags"/);
  });

  it("post sem frontmatter quebra", () => {
    expect(() => parsePost("a", "# só texto")).toThrow(/obrigatório/);
  });
});

describe("ordenarPosts", () => {
  it("do mais novo para o mais antigo, sem mexer na lista original", () => {
    const lista = [post("b", "2026-01-01"), post("c", "2026-12-01"), post("a", "2026-06-01")];
    expect(ordenarPosts(lista).map((p) => p.slug)).toEqual(["c", "a", "b"]);
    expect(lista[0].slug).toBe("b");
  });

  it("empate no dia desempata por slug", () => {
    expect(ordenarPosts([post("z", "2026-01-01"), post("a", "2026-01-01")]).map((p) => p.slug)).toEqual(["a", "z"]);
  });
});

describe("filtrarVisiveis", () => {
  const lista = [post("a", "2026-01-01"), post("rascunho", "2026-02-01", true)];
  it("em produção esconde draft", () => {
    expect(filtrarVisiveis(lista, false).map((p) => p.slug)).toEqual(["a"]);
  });
  it("em dev mostra draft", () => {
    expect(filtrarVisiveis(lista, true)).toHaveLength(2);
  });
});

describe("formatarData", () => {
  it("escreve em pt-BR sem deslocar o dia por fuso", () => {
    expect(formatarData("2026-10-27")).toBe("27 de outubro de 2026");
    expect(formatarData("2026-01-01")).toBe("1 de janeiro de 2026");
  });
});
