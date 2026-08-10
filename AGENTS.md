<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — Convenções do projeto

Documento de referência pra manter consistência entre sessões de trabalho com IA e entre humanos.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5 (strict + noUncheckedIndexedAccess)
- Tailwind v4 (CSS-first, design tokens em globals.css)
- ESLint 9 (flat config) + Prettier
- Husky + lint-staged + commitlint
- React Hook Form + Zod
- Vitest + Testing Library
- k6

## Git

- Conventional Commits com scope obrigatório em kebab-case
- Exemplo: `feat(hero): adiciona cta duplo`, `fix(a11y): corrige contraste`
- Branches: `feat/*`, `fix/*`, `chore/*`, `refactor/*`, `test/*`, `docs/*`
- Branch base: `main`

## Estrutura de pastas

- `src/components/ui/` — primitivos reutilizáveis (ex: ControlChart)
- `src/components/sections/` — composições de seção da página
- `src/components/layout/` — Header, Footer
- `src/data/` — fonte única de dados (`as const satisfies Type`)
- `src/types/` — tipagens compartilhadas
- `src/lib/` — utilities puras (cn, analytics, schemas)

## Nomenclatura

- Componentes: PascalCase (`Header.tsx`, `IqfSection.tsx`)
- Demais arquivos: kebab-case (`contact-schema.ts`, `use-scroll.ts`)
- Identifiers: inglês sempre
- Conteúdo/strings para usuário: pt-BR
- Constantes de dado: UPPER_SNAKE_CASE

## TypeScript

- `import type { X }` pra tipos puros
- `as const satisfies Type` pra dados estáticos com validação
- Evitar `any`; usar `unknown` + narrowing quando tipo é incerto

## Acessibilidade

- Target: WCAG 2.1 AA
- Ícones decorativos: `aria-hidden`
- `prefers-reduced-motion` respeitado
- Contraste mínimo 4.5:1 — validado com Lighthouse, ver README

## Performance (resultado real, ver README)

- Lighthouse: Performance 99, A11y 100, Best Practices 100, SEO 100
- LCP: texto (`<h1>`), sem imagem crítica acima da dobra

## Design tokens (globals.css)

- Cores semânticas por função: `signal` (desvio/ação), `conform` (conformidade), não `primary`/`secondary`
- Fontes: `--font-plex-sans` (corpo), `--font-plex-mono` (dado tabular)
- Classes geradas via `@theme` (Tailwind v4, CSS-first)
