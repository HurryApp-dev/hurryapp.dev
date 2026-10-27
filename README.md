# hurryapp.dev

Site institucional da HurryApp (`https://www.hurryapp.dev`). Next.js (App Router) +
React + TypeScript + Tailwind, com shadcn/ui. Formulário de contato por e-mail
(AWS SES via SMTP, `nodemailer`).

Instruções de trabalho e regras do repositório: veja [AGENTS.md](AGENTS.md).

## Rodando localmente

```sh
npm install
cp .env.example .env.local   # preencha só se for testar o envio de e-mail
npm run dev                  # http://localhost:3000
```

Outros comandos: `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`.
