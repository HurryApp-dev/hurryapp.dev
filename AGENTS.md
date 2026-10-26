# hurryapp.dev — site institucional

Este é o código do site **publicado** em `https://www.hurryapp.dev`. Vite + React
+ TypeScript + Tailwind, com shadcn/ui. Publicação pela Vercel.

## O formulário de contato envia pelo AWS SES

`src/components/CalculatorSection.tsx` e `src/components/MeetingSection.tsx`
chamam `enviarContato` (`src/lib/enviarContato.ts`), que faz `POST /api/contato`.
A função `api/contato.ts` (Vercel Function, Node) valida, descarta robô (campo
escondido `website`) e envia por SMTP do AWS SES (`nodemailer`).

As credenciais ficam **só nas variáveis de ambiente da Vercel**, nunca no
código: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTATO_DE`,
`CONTATO_PARA`. A senha SMTP é a do usuário IAM `HurryApp`; o CSV está no cofre.
O EmailJS foi removido.

## Antes de publicar, confira que é daqui

Já existiu mais de um repositório com um site da HurryApp dentro, de desenhos
diferentes. **Só este gera o que está no ar.** O teste rápido: este repositório tem
`api/contato.ts` e os formulários importam `@/lib/enviarContato`. Se o
repositório em que você está não tem, não é este — e publicar dele troca um
formulário que funciona por um que não funciona.

## Antes de mexer

```
npm install
npm run dev      # desenvolvimento
npm run build    # confere que compila
npm run test     # vitest
```

## Segredos — nunca

Nenhuma chave, token ou `.env` com valor real entra aqui. **Este repositório é
público.** O que entra aqui é lido por qualquer pessoa, para sempre, mesmo que
seja apagado depois.

## Git

`git pull` no começo, `git push` no fim. O `sincronizar.bat` faz os três passos.

## Como este arquivo é lido

O conteúdo vive **só aqui**, no `AGENTS.md`. O `CLAUDE.md` ao lado tem uma linha
só — `@AGENTS.md` — que importa este arquivo. O Codex lê este; o Claude lê o
outro, que aponta para este. **Um conteúdo, dois leitores, nenhuma cópia para
divergir.**

Para mudar as instruções, edite **este** arquivo. Não escreva conteúdo no
`CLAUDE.md`.
