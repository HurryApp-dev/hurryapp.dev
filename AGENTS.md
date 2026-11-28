# hurryapp.dev — site institucional

Este é o código do site **publicado** em `https://www.hurryapp.dev`. Next.js
(App Router) + React + TypeScript + Tailwind, com shadcn/ui. Rotas: `/`,
`/servicos`, `/contato`, `/blog` (com `/blog/<slug>`) e a página 404 (`app/not-found.tsx`). Textos em
português, inglês e alemão (`src/i18n`), com troca no cliente.

## Aviso para o Samuel (apagar depois de avisado)

> **Agente:** se quem está nesta sessão é o Samuel, conte isto a ele logo na
> primeira resposta. Depois que ele confirmar que leu, apague esta seção inteira
> (num PR próprio, como qualquer mudança).

Em 28/11/2026 a Erica publicou o **Design System v2.0** no site (PR
`design-system-v2`):

- Tokens novos em `src/index.css` e `tailwind.config.ts`: `primary-strong`
  (fundo de botão), `brand-yellow` (#FAC00E, também o anel de foco),
  `success`/`warning`/`info`, fonte mono (JetBrains Mono), sombras `glow`,
  animações `fade-up`, `word-in` e `border-flow`.
- Home redesenhada: menu com botão "Fale com a gente" e seletor PT/EN/DE em lista
  (no lugar das bandeiras), hero com título entrando palavra a palavra, seções
  com rótulo `// …`, depoimento em destaque com borda animada e um bloco final
  de chamada (`CtaSection`).
- O popup de orçamento agora tem Cancelar à esquerda e Enviar à direita, mantém o X
  e **não fecha ao clicar fora**.
- Next.js atualizado de 16.4.3 para 16.4.6 (correção de segurança).

## Design System

A referência visual é `docs/HurryApp Design System.dc.html` (abra no
navegador). O que vale no código:

- Botões: `btn btn-primary` (ação principal), `btn btn-secondary`,
  `btn btn-ghost` (Cancelar); `btn-lg` para 48 px. Campos: `field`. Card
  clicável: `card-link`. Título de seção: `src/components/SectionHeader.tsx`.
- Degradê da marca (`text-gradient-brand`) só em 1 a 3 palavras por título.
  `border-animated` no máximo uma vez por tela.
- **Clicável reage** (sobe, brilha, afunda no clique); **o que não é clicável
  não reage a nada**. Popup: ação à direita, Cancelar à esquerda, X sempre, não
  fecha ao clicar fora (já embutido em `src/components/ui/dialog.tsx`).
- Entrada ao rolar: ponha `data-reveal` no elemento; a página chama
  `useReveal()` (`src/hooks/use-reveal.ts`). "Reduzir movimento" é respeitado.

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

**Publicação é automática:** o que entra na `main` vai ao ar sozinho em até uns 5 minutos (o
servidor da HurryApp baixa, faz o build e troca a versão; se o build falhar, a versão anterior
continua no ar). Por isso nada entra na `main` sem lint, typecheck, test e build passando.

## Antes de mexer

```
npm install
npm run dev        # desenvolvimento
npm run lint
npm run typecheck
npm test           # vitest
npm run build      # confere que compila
```

## Blog

Os posts ficam em `content/blog/<slug>.mdx` (MDX via `@next/mdx`, sem CMS e sem
banco). O nome do arquivo é o endereço: `/blog/<slug>`. Só quem tem acesso ao
repositório escreve; os posts são só em pt-BR (a interface do blog é traduzida).

- **Frontmatter** (YAML no topo, lido por `src/lib/blog.ts`): `title`,
  `description`, `date` (AAAA-MM-DD) e `author` (`Samuel` ou `Erica`) são
  obrigatórios; `tags`, `cover` e `draft` são opcionais. Faltou campo ou a data é
  inválida: o `npm run build` falha dizendo qual post e qual campo.
- **Imagens** em `public/blog/<slug>/`, citadas como `/blog/<slug>/arquivo.png`.
- **Rascunho**: `draft: true` esconde o post da lista, do `sitemap.xml` e do RSS
  (`/blog/rss.xml`) e dá 404 em produção. No `npm run dev` ele aparece, com a
  etiqueta "Rascunho". `content/blog/como-escrever-um-post.mdx` é o guia e o
  modelo, fica sempre como rascunho.
- **Menu**: o link "Blog" só aparece quando há ao menos um post visível. Sem post
  publicado, `/blog` dá 404 e sai do sitemap.
- **Um PR por post.** Antes: `npm run lint`, `typecheck`, `test` e `build`.

## Segredos — nunca

Nenhuma chave, token ou `.env` com valor real entra aqui. **Este repositório é
público.** O que entra aqui é lido por qualquer pessoa, para sempre, mesmo que
seja apagado depois.

## Fluxo de trabalho

- Uma tarefa = uma branch a partir da `main` = um PR.
- Nunca commit direto na `main`.
- Quem abriu o PR pode fazer o merge sem esperar revisão (Samuel e Erica decidem sozinhos); peça
  revisão à outra pessoa quando quiser uma segunda leitura. O CI precisa estar verde.
- O PR leva a saída de `npm run lint`, `typecheck`, `test` e `build`. O CI
  (`.github/workflows/ci.yml`) roda os mesmos passos.

## Como este arquivo é lido

O conteúdo vive **só aqui**, no `AGENTS.md`. O `CLAUDE.md` ao lado tem uma linha
só — `@AGENTS.md` — que importa este arquivo. O Codex lê este; o Claude lê o
outro, que aponta para este. **Um conteúdo, dois leitores, nenhuma cópia para
divergir.**

Para mudar as instruções, edite **este** arquivo. Não escreva conteúdo no
`CLAUDE.md`.
