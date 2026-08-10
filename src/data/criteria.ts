import type { Criterion } from '@/types/criterion'

export const CRITERIA = [
  { code: '01', label: 'Prazo de entrega', weight: '25%', source: 'Recebimento' },
  { code: '02', label: 'Conformidade de quantidade', weight: '20%', source: 'Recebimento' },
  { code: '03', label: 'Qualidade na inspeção', weight: '35%', source: 'Inspeção' },
  { code: '04', label: 'Devoluções no período', weight: '20%', source: 'Pós-entrega' },
] as const satisfies readonly Criterion[]
