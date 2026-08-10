import { FAQ_ITEMS } from '@/data/faq-items'

export function getSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'VSat ERP — Controle de Qualidade',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'Módulo de controle de qualidade do VSat ERP: laudos automáticos, skip lote, controle de devoluções e índice de qualidade de fornecedor.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
  }
}

export function getFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
