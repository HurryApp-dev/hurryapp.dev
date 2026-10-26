import nodemailer from "nodemailer";

const ORIGENS_PERMITIDAS = ["hurryapp.dev", "www.hurryapp.dev"];

const limpar = (valor: unknown, max: number) =>
  String(valor ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);

const origemPermitida = (request: Request) => {
  const origem = request.headers.get("origin");
  if (!origem) return false;
  try {
    const { hostname } = new URL(origem);
    return (
      ORIGENS_PERMITIDAS.includes(hostname) ||
      hostname.endsWith(".vercel.app") ||
      hostname === "localhost"
    );
  } catch {
    return false;
  }
};

const resposta = (status: number, ok: boolean) => Response.json({ ok }, { status });

export default {
  async fetch(request: Request) {
    if (request.method !== "POST") return resposta(405, false);
    if (!origemPermitida(request)) return resposta(403, false);

    let corpo: Record<string, unknown>;
    try {
      corpo = await request.json();
    } catch {
      return resposta(400, false);
    }

    // Campo escondido no formulário: pessoa não preenche, robô costuma preencher.
    if (corpo.website) return resposta(200, true);

    const name = limpar(corpo.name, 120);
    const email = limpar(corpo.email, 200);
    const whatsapp = limpar(corpo.whatsapp, 40);
    const origem = limpar(corpo.origem, 20) || "site";
    const message = String(corpo.message ?? "").trim().slice(0, 5000);

    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return resposta(400, false);
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTATO_DE, CONTATO_PARA } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTATO_DE || !CONTATO_PARA) {
      console.error("[contato] variaveis de ambiente do SMTP ausentes");
      return resposta(500, false);
    }

    const porta = Number(SMTP_PORT ?? 465);
    const transporte = nodemailer.createTransport({
      host: SMTP_HOST,
      port: porta,
      secure: porta === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    try {
      await transporte.sendMail({
        from: `"Site HurryApp" <${CONTATO_DE}>`,
        to: CONTATO_PARA,
        replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
        subject: `Contato pelo site (${origem}): ${name}`,
        text: [
          `Nome: ${name}`,
          `E-mail: ${email}`,
          whatsapp ? `WhatsApp: ${whatsapp}` : "",
          `Origem: ${origem}`,
          "",
          message,
        ]
          .filter((linha, i) => linha !== "" || i === 4)
          .join("\n"),
      });
      return resposta(200, true);
    } catch (erro) {
      console.error("[contato] envio falhou:", erro instanceof Error ? erro.message : erro);
      return resposta(502, false);
    }
  },
};
