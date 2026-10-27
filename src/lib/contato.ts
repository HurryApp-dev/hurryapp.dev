// Validação do formulário de contato. Função pura: usada pela rota
// app/api/contato/route.ts e coberta por testes (contato.test.ts).

export const LIMITES = {
  name: 120,
  email: 254,
  whatsapp: 40,
  message: 5000,
} as const;

export const ORIGENS_FORMULARIO = ["calculadora", "reuniao"] as const;

export interface DadosContato {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
  origem: string;
}

export type ResultadoValidacao =
  | { tipo: "ok"; dados: DadosContato }
  // Campo escondido preenchido: robô. A rota responde 200 e não envia.
  | { tipo: "honeypot" }
  | { tipo: "invalido"; campo: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Texto de uma linha só: sem quebra de linha (evita injeção em cabeçalho de e-mail).
const umaLinha = (valor: unknown) =>
  typeof valor === "string" ? valor.replace(/[\r\n]+/g, " ").trim() : "";

export function validarContato(corpo: unknown): ResultadoValidacao {
  if (typeof corpo !== "object" || corpo === null || Array.isArray(corpo)) {
    return { tipo: "invalido", campo: "corpo" };
  }
  const c = corpo as Record<string, unknown>;

  // Campo escondido no formulário: pessoa não preenche, robô costuma preencher.
  if (c.website) return { tipo: "honeypot" };

  const name = umaLinha(c.name);
  const email = umaLinha(c.email);
  const whatsapp = umaLinha(c.whatsapp);
  const message = typeof c.message === "string" ? c.message.trim() : "";
  const origemInformada = umaLinha(c.origem);
  const origem = (ORIGENS_FORMULARIO as readonly string[]).includes(origemInformada)
    ? origemInformada
    : "site";

  if (!name || name.length > LIMITES.name) return { tipo: "invalido", campo: "name" };
  if (!EMAIL.test(email) || email.length > LIMITES.email) {
    return { tipo: "invalido", campo: "email" };
  }
  if (whatsapp.length > LIMITES.whatsapp) return { tipo: "invalido", campo: "whatsapp" };
  if (!message || message.length > LIMITES.message) {
    return { tipo: "invalido", campo: "message" };
  }

  return { tipo: "ok", dados: { name, email, whatsapp, message, origem } };
}

const HOSTS_PERMITIDOS = ["hurryapp.dev", "www.hurryapp.dev", "localhost"];

// Aceita só requisições vindas do próprio site (cabeçalho Origin).
export function origemPermitida(origin: string | null): boolean {
  if (!origin) return false;
  try {
    return HOSTS_PERMITIDOS.includes(new URL(origin).hostname);
  } catch {
    return false;
  }
}
