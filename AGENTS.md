# hurryapp.dev — site institucional

Este é o código do site **publicado** em `https://www.hurryapp.dev`. Vite + React
+ TypeScript + Tailwind, com shadcn/ui. Publicação pela Vercel.

## O formulário de contato usa EmailJS

`src/components/CalculatorSection.tsx` e `src/components/MeetingSection.tsx`
enviam por `@emailjs/browser`. **Não há back-end, webhook nem API própria** por
trás do formulário — se você procurar por um, não vai achar, e não é porque está
faltando.

Os identificadores de service e template do EmailJS estão no código de propósito:
é assim que a biblioteca funciona no navegador, e eles já viajam no bundle
publicado. Não são segredo e não devem ser tratados como tal.

## Antes de publicar, confira que é daqui

Já existiu mais de um repositório com um site da HurryApp dentro, de desenhos
diferentes. **Só este gera o que está no ar.** O teste rápido: o código publicado
importa `@emailjs/browser`. Se o repositório em que você está não importa, não é
este — e publicar dele troca um formulário que funciona por um que não funciona.

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

## Estes dois arquivos são iguais

`CLAUDE.md` e `AGENTS.md` têm o mesmo conteúdo, para Claude e Codex lerem o mesmo.
**Editou um, copie no outro.**
