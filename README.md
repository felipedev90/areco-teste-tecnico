# Areco · Controle de Qualidade — Landing Page

Desafio técnico para a vaga de Desenvolvedor Front-end (Marketing Data & Performance) na Areco.

**Produção:** https://areco-teste-tecnico.vercel.app
**Repositório:** https://github.com/felipedev90/areco-teste-tecnico

> Projeto de teste técnico, não afiliado oficialmente à Areco.

---

## Conceito

O módulo de Controle de Qualidade do VSat ERP hoje é apresentado numa página institucional densa, com abas que escondem a maior parte do conteúdo. Este projeto reestrutura esse conteúdo como landing page de conversão, com uma decisão central: promover o Índice de Qualidade de Fornecedor (IQF) — hoje a terceira de três abas — a mecanismo central da narrativa. É o único diferencial do produto frente a um QMS genérico: laudos e não-conformidade qualquer concorrente tem; um índice que bloqueia a compra de um fornecedor mal avaliado, antes do pedido sair, é específico.

## Direção visual

A linguagem visual deriva do domínio do produto — metrologia, documentação técnica industrial — em vez de um estilo genérico de SaaS. Decisões centrais:

- **Cor com função semântica, não decorativa.** Os tokens não se chamam `primary`/`secondary`; chamam-se `signal` (desvio, ação) e `conform` (conformidade). A cor de destaque só aparece onde há ação ou desvio real.
- **Tipografia única com variante mono.** IBM Plex Sans + IBM Plex Mono, mesma família tipográfica — números de tabela e texto corrido convivem sem ruído visual.
- **Filete no lugar de card com sombra.** Separação de seções por linha fina de 1px, não caixa elevada.
- **Grid assimétrico.** Colunas 7/5 ou 4/8, não 6/6 — evita a simetria perfeita comum em páginas geradas por template.
- **Movimento com propósito, não decoração.** O gráfico do Hero (carta de controle) tem flutuação sutil (`animate-drift`) e glow radial — reforça a leitura de "instrumento vivo" sem competir com o texto. Seções de conteúdo têm entrada suave ao rolar (`Reveal`, via `IntersectionObserver`), desativada automaticamente se o usuário tiver `prefers-reduced-motion` ativado.
- **Navegação responsiva completa.** Menu hambúrguer com scroll travado enquanto aberto, mantido até o breakpoint de tablet — não só mobile estrito.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript 5 (strict, `noUncheckedIndexedAccess`)
- Tailwind CSS v4 (CSS-first, `@theme`)
- React Hook Form + Zod (validação de formulário)
- Vitest + Testing Library (testes unitários)
- k6 (teste de carga)

Partiu de um [starter próprio](https://github.com/felipedev90/next-starter) com tooling estrito já configurado (ESLint 9 flat config, Husky, lint-staged, commitlint, CI), o que permitiu concentrar o tempo do desafio em design, performance e instrumentação de dados.

## Conteúdo ilustrativo

Alguns dados numéricos foram construídos para dar forma concreta ao mecanismo descrito na documentação pública da Areco, e não representam números reais do produto:

- Pesos de critério na tabela do IQF (seção "O mecanismo")
- Respostas da seção de perguntas de implementação

Ambos os pontos têm aviso textual visível na própria página. Os nomes dos critérios, funcionalidades listadas na seção de cobertura e a proposta de valor central vêm da documentação pública do produto.

## Performance e qualidade

Lighthouse (produção, mobile):

| Métrica        | Nota |
| -------------- | ---- |
| Performance    | 93   |
| Accessibility  | 100  |
| Best Practices | 100  |
| SEO            | 100  |

Decisões que sustentam esses números:

- Server Components por padrão — `'use client'` só nos componentes com estado real (Header, Hero, FAQ, Formulário, Reveal)
- Fontes via `next/font`, sem requisição externa ao Google em produção
- LCP é texto (`<h1>` do Hero), não imagem
- Correção de contraste de cor aplicada em ambas as versões (desktop e mobile) de cada componente — ver histórico de commits para o processo de diagnóstico
- Imagem única da página (seção "Da inspeção à decisão") servida via `next/image` com `loading="lazy"` — abaixo da dobra, sem impacto no LCP
- Queda de 99 para 93 atribuída à imagem adicionada e à animação contínua (`animate-drift`) no gráfico do Hero — trade-off deliberado entre performance pura e percepção de qualidade visual

## SEO técnico

- Metadata completa (`title`, `description`, OG, canonical) via `next/metadata`
- Structured data JSON-LD: `SoftwareApplication` e `FAQPage`, este último gerado a partir da mesma fonte de dado que renderiza a seção visual (uma única fonte de verdade)
- Hierarquia de heading validada: um único `<h1>`, `<h2>` em sequência sem saltos

## MarTech / dataLayer

Camada de analytics centralizada em `src/lib/analytics.ts`: cada tipo de evento é uma função tipada, não um `push` solto repetido pelo código. Convenção `snake_case`, compatível nativamente com GTM/GA4.

| Evento        | Quando dispara                               | Payload                       |
| ------------- | -------------------------------------------- | ----------------------------- |
| `cta_click`   | Clique em qualquer CTA da página             | `cta_label`, `cta_location`   |
| `form_step`   | Avanço ou retorno entre passos do formulário | `form_step`, `step_direction` |
| `form_submit` | Envio do formulário completo                 | `form_name`                   |
| `faq_toggle`  | Abertura ou fechamento de pergunta           | `faq_question`, `faq_state`   |

`trackSectionView` está implementada em `analytics.ts` e a infraestrutura de detecção de scroll já existe (`src/hooks/use-reveal.ts`, via `IntersectionObserver`, hoje usada para o efeito visual de entrada das seções — `src/components/ui/reveal.tsx`). As duas peças não foram conectadas por escopo de tempo: falta chamar `trackSectionView` dentro do callback do `useReveal`.

## Testes

```bash
npm run test        # Vitest — schema de validação + comportamento do FAQ (7 testes)
k6 run tests/load/homepage.js   # Teste de carga (requer k6 instalado)
```

**Resultado do teste de carga** (rampa de 0 a 50 usuários simultâneos, 40s, contra produção):

- p(95) de tempo de resposta: 129ms (limite definido: 800ms) ✓
- Taxa de erro: 0.16% — 1 timeout em 615 requisições, atribuído a cold start de infraestrutura serverless sob rampa de carga ✓

## Rodando localmente

```bash
npm install
npm run dev
```

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```

## Sobre o processo

Este projeto foi desenvolvido com apoio de IA (Claude, Anthropic) como par de trabalho, não como gerador autônomo. Cada decisão de conteúdo, arquitetura e design foi validada antes de aplicada; o histórico de commits reflete esse processo, com cada branch isolando uma decisão específica.

Coerência com o próprio critério do desafio: parte da direção visual buscou evitar padrões que "denunciam" geração automática. Ocultar o uso da ferramenta no processo seria inconsistente com essa exigência de honestidade, a mesma aplicada ao conteúdo ilustrativo (ver seção acima).
