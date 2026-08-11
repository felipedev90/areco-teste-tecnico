import type { CostItem } from '@/types/cost-item'

export const COST_ITEMS = [
  {
    code: '01',
    label: 'Devolução',
    description:
      'Produto ou lote retorna após a entrega, o custo do frete de volta some com o custo original.',
  },
  {
    code: '02',
    label: 'Retrabalho',
    description:
      'Correção depois do fato consome hora de produção que já estava contabilizada como concluída.',
  },
  {
    code: '03',
    label: 'Perda de cliente',
    description:
      'Uma não conformidade recorrente não gera reclamação, gera silêncio, e o próximo pedido não chega.',
  },
  {
    code: '04',
    label: 'Multa fiscal',
    description:
      'Divergência entre o que foi inspecionado e o que foi faturado abre exposição em auditoria.',
  },
  {
    code: '05',
    label: 'Lote comprometido',
    description:
      'Sem rastreabilidade por origem, um desvio pontual força o descarte ou a reinspeção do lote inteiro.',
  },
] as const satisfies readonly CostItem[]
