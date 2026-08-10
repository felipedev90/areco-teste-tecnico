import type { CoverageItem } from '@/types/coverage-item'

export const COVERAGE_ITEMS = [
  {
    label: 'Laudos e aprovações automáticas',
    description: 'Suporte a padrões de laudos, com emissão junto ao faturamento.',
  },
  {
    label: 'Planos de controle e skip lote',
    description: 'Amostragem estatística que reduz o número de inspeções sem perder conformidade.',
  },
  {
    label: 'Controle de devoluções',
    description:
      'Automação de notas fiscais e gestão de garantias, integrada a financeiro e estoque.',
  },
  {
    label: 'Gestão de não conformidades',
    description: 'Relatórios de desvio com histórico de ações e responsáveis.',
  },
  {
    label: 'Controle de instrumentos de medição',
    description: 'Calibração e histórico de uso dos instrumentos de garantia da qualidade.',
  },
  {
    label: 'Painéis gerenciais',
    description: 'Dashboards de devoluções e ações com filtros temporais e por produto.',
  },
] as const satisfies readonly CoverageItem[]
