# hurryapp.dev — site institucional

Este é o código do site **publicado** em `https://www.hurryapp.dev`. Next.js
(App Router) + React + TypeScript + Tailwind, com shadcn/ui. Rotas: `/`,
`/servicos`, `/contato` e a página 404 (`app/not-found.tsx`). Textos em
português, inglês e alemão (`src/i18n`), com troca no cliente.

## O formulário de contato usa AWS SES

`src/components/CalculatorSection.tsx` e `src/components/MeetingSection.tsx`
enviam por `src/lib/enviarContato.ts`, que faz POST em `/api/contato`. Quem
recebe é `app/api/contato/route.ts` (runtime Node): valida os campos
(`src/lib/contato.ts`, com testes), confere a origem, descarta o honeypot
`website` e manda o e-mail por `nodemailer` via SMTP do AWS SES.

As variáveis (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTATO_DE`,
`CONTATO_PARA`) existem **só no `.env.local` do servidor**. O `.env.example` lista
os nomes, sem valor. Sem elas a rota responde 500 e registra no log do servidor
quais faltam. `CONTATO_HOSTS_EXTRA` (opcional) aceita outros hosts como origem do
formulário, para testar num endereço provisório; fora isso, só `hurryapp.dev`,
`www.hurryapp.dev` e `localhost`.

## Antes de publicar, confira que é daqui

Já existiu mais de um repositório com um site da HurryApp dentro, de desenhos
diferentes. **Só este gera o que está no ar.** O teste rápido: existe
`app/api/contato/route.ts`. Se o repositório em que você está não tem esse
arquivo, não é este.

Publicação no servidor da HurryApp, ver repositório de docs (a definir).

## Antes de mexer

```
npm install
npm run dev        # desenvolvimento
npm run lint
npm run typecheck
npm test           # vitest
npm run build      # confere que compila
```

## Segredos — nunca

Nenhuma chave, token ou `.env` com valor real entra aqui. **Este repositório é
público.** O que entra aqui é lido por qualquer pessoa, para sempre, mesmo que
seja apagado depois.

## Fluxo de trabalho

- Uma tarefa = uma branch a partir da `main` = um PR.
- Nunca commit direto na `main`.
- Quem não abriu o PR revisa (Samuel e Erica); quem abriu faz o merge.
- O PR leva a saída de `npm run lint`, `typecheck`, `test` e `build`. O CI
  (`.github/workflows/ci.yml`) roda os mesmos passos.

## Como este arquivo é lido

O conteúdo vive **só aqui**, no `AGENTS.md`. O `CLAUDE.md` ao lado tem uma linha
só — `@AGENTS.md` — que importa este arquivo. O Codex lê este; o Claude lê o
outro, que aponta para este. **Um conteúdo, dois leitores, nenhuma cópia para
divergir.**

Para mudar as instruções, edite **este** arquivo. Não escreva conteúdo no
`CLAUDE.md`.
