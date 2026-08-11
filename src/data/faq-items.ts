import type { FaqItem } from '@/types/faq-item'

export const FAQ_ITEMS = [
  {
    question: 'O que acontece quando um fornecedor cai abaixo do corte no índice?',
    answer:
      'O sistema alerta ou bloqueia a criação de novos pedidos para aquele fornecedor, dependendo da regra configurada. O histórico permanece registrado e alimenta o processo de homologação.',
  },
  {
    question: 'Como funciona o skip lote?',
    answer:
      'É um método de amostragem estatística: em vez de inspecionar todos os lotes recebidos, o sistema reduz a frequência de inspeção com base no histórico de conformidade do fornecedor, mantendo a garantia de qualidade.',
  },
  {
    question: 'Os pesos dos critérios podem ser diferentes por fornecedor?',
    answer:
      'Sim. A parametrização é configurável por critério e pode ser ajustada conforme o perfil de risco ou a categoria de cada fornecedor.',
  },
  {
    question: 'O laudo emitido substitui certificado de conformidade em auditoria?',
    answer:
      'O laudo é gerado com envio automático junto ao faturamento e mantém rastreabilidade completa, servindo como evidência de conformidade dentro do processo auditável.',
  },
] as const satisfies readonly FaqItem[]
