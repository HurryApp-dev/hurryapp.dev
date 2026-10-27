import nodemailer from "nodemailer";
import { origemPermitida, validarContato } from "@/lib/contato";

export const runtime = "nodejs";

const resposta = (status: number, ok: boolean) => Response.json({ ok }, { status });

export async function POST(request: Request) {
  if (!origemPermitida(request.headers.get("origin"))) return resposta(403, false);

  let corpo: unknown;
  try {
    corpo = await request.json();
  } catch {
    return resposta(400, false);
  }

  const validacao = validarContato(corpo);
  // Robô: responde como se tivesse dado certo, mas não envia nada.
  if (validacao.tipo === "honeypot") return resposta(200, true);
  if (validacao.tipo === "invalido") return resposta(400, false);
  const { name, email, whatsapp, message, origem } = validacao.dados;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTATO_DE, CONTATO_PARA } = process.env;
  const faltando = Object.entries({ SMTP_HOST, SMTP_USER, SMTP_PASS, CONTATO_DE, CONTATO_PARA })
    .filter(([, valor]) => !valor)
    .map(([nome]) => nome);
  if (faltando.length > 0) {
    // Só o servidor sabe o que falta; o cliente recebe um 500 sem detalhe.
    console.error(`[contato] variaveis de ambiente ausentes: ${faltando.join(", ")}`);
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
        `WhatsApp: ${whatsapp || "(não informado)"}`,
        `Origem: ${origem}`,
        "",
        "Mensagem:",
        message,
      ].join("\n"),
    });
    return resposta(200, true);
  } catch (erro) {
    console.error("[contato] envio falhou:", erro instanceof Error ? erro.message : erro);
    return resposta(502, false);
  }
}
