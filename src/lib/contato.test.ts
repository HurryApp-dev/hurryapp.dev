import { describe, it, expect } from "vitest";
import { LIMITES, origemPermitida, validarContato } from "./contato";

const valido = {
  name: "Maria Souza",
  email: "maria@exemplo.com",
  whatsapp: "11 99999-0000",
  message: "Quero um orçamento de app.",
  origem: "reuniao",
  website: "",
};

const campoInvalido = (corpo: unknown) => {
  const r = validarContato(corpo);
  return r.tipo === "invalido" ? r.campo : r.tipo;
};

describe("validarContato", () => {
  it("aceita um corpo completo", () => {
    expect(validarContato(valido)).toEqual({
      tipo: "ok",
      dados: {
        name: "Maria Souza",
        email: "maria@exemplo.com",
        whatsapp: "11 99999-0000",
        message: "Quero um orçamento de app.",
        origem: "reuniao",
      },
    });
  });

  it("whatsapp é opcional", () => {
    const { whatsapp: _whatsapp, ...semWhats } = valido;
    const r = validarContato(semWhats);
    expect(r.tipo).toBe("ok");
    if (r.tipo === "ok") expect(r.dados.whatsapp).toBe("");
  });

  it("recusa corpo que não é objeto", () => {
    expect(campoInvalido(null)).toBe("corpo");
    expect(campoInvalido("texto")).toBe("corpo");
    expect(campoInvalido([valido])).toBe("corpo");
  });

  it("recusa campos obrigatórios faltando ou em branco", () => {
    expect(campoInvalido({ ...valido, name: "" })).toBe("name");
    expect(campoInvalido({ ...valido, name: "   " })).toBe("name");
    expect(campoInvalido({ ...valido, email: undefined })).toBe("email");
    expect(campoInvalido({ ...valido, message: "" })).toBe("message");
  });

  it("recusa tipos errados (número, objeto)", () => {
    expect(campoInvalido({ ...valido, name: 123 })).toBe("name");
    expect(campoInvalido({ ...valido, message: { a: 1 } })).toBe("message");
  });

  it("recusa e-mail inválido", () => {
    for (const email of ["maria", "maria@", "@exemplo.com", "maria@exemplo", "ma ria@exemplo.com"]) {
      expect(campoInvalido({ ...valido, email })).toBe("email");
    }
  });

  it("honeypot preenchido vira honeypot, mesmo com o resto inválido", () => {
    expect(validarContato({ ...valido, website: "http://spam" }).tipo).toBe("honeypot");
    expect(validarContato({ website: "x" }).tipo).toBe("honeypot");
  });

  it("respeita os tamanhos máximos", () => {
    expect(validarContato({ ...valido, name: "a".repeat(LIMITES.name) }).tipo).toBe("ok");
    expect(campoInvalido({ ...valido, name: "a".repeat(LIMITES.name + 1) })).toBe("name");
    expect(campoInvalido({ ...valido, whatsapp: "1".repeat(LIMITES.whatsapp + 1) })).toBe("whatsapp");
    expect(validarContato({ ...valido, message: "m".repeat(LIMITES.message) }).tipo).toBe("ok");
    expect(campoInvalido({ ...valido, message: "m".repeat(LIMITES.message + 1) })).toBe("message");
    const longo = "a".repeat(LIMITES.email) + "@x.com";
    expect(campoInvalido({ ...valido, email: longo })).toBe("email");
  });

  it("tira quebras de linha de nome, e-mail e whatsapp", () => {
    const r = validarContato({ ...valido, name: "Maria\r\nBcc: x@y.com" });
    expect(r.tipo).toBe("ok");
    if (r.tipo === "ok") expect(r.dados.name).toBe("Maria Bcc: x@y.com");
  });

  it("mantém as quebras de linha da mensagem", () => {
    const r = validarContato({ ...valido, message: "linha 1\nlinha 2" });
    expect(r.tipo).toBe("ok");
    if (r.tipo === "ok") expect(r.dados.message).toBe("linha 1\nlinha 2");
  });

  it("origem desconhecida vira site", () => {
    const r = validarContato({ ...valido, origem: "qualquer-coisa" });
    expect(r.tipo).toBe("ok");
    if (r.tipo === "ok") expect(r.dados.origem).toBe("site");
  });
});

describe("origemPermitida", () => {
  it("aceita o site e o localhost", () => {
    expect(origemPermitida("https://hurryapp.dev")).toBe(true);
    expect(origemPermitida("https://www.hurryapp.dev")).toBe(true);
    expect(origemPermitida("http://localhost:3210")).toBe(true);
  });

  it("recusa outras origens, inclusive vercel.app e domínios parecidos", () => {
    expect(origemPermitida(null)).toBe(false);
    expect(origemPermitida("não é url")).toBe(false);
    expect(origemPermitida("https://hurryapp-site.vercel.app")).toBe(false);
    expect(origemPermitida("https://hurryapp.dev.malicioso.com")).toBe(false);
    expect(origemPermitida("https://outro.com")).toBe(false);
  });

  it("aceita os hosts extras do servidor e só eles", () => {
    const extras = ["novo.hurryapp.dev"];
    expect(origemPermitida("https://novo.hurryapp.dev", extras)).toBe(true);
    expect(origemPermitida("https://www.hurryapp.dev", extras)).toBe(true);
    expect(origemPermitida("https://outro.hurryapp.dev", extras)).toBe(false);
    expect(origemPermitida("https://novo.hurryapp.dev", [])).toBe(false);
  });
});
