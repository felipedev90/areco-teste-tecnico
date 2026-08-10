'use client'

import { ControlChart } from '@/components/ui/control-chart'
import { trackCtaClick } from '@/lib/analytics'

export function Hero() {
  return (
    <section className="bg-ink text-paper">
      <div className="shell band-loose grid gap-12 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <p className="eyebrow mb-6 text-on-dark-muted">VSat ERP · Controle de Qualidade</p>

          <h1 className="text-display font-medium tracking-tight text-balance">
            O índice que impede o pedido errado de sair.
          </h1>

          <p className="mt-6 max-w-xl text-lead text-on-dark">
            Cada recebimento, cada inspeção e cada devolução viram um único indicador por
            fornecedor: parametrizado, calculado em tempo real e conectado direto à decisão de
            compra.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              onClick={() =>
                trackCtaClick({
                  cta_label: 'Falar com um especialista',
                  cta_location: 'hero_primary',
                })
              }
              className="rounded-xs bg-signal px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
            >
              Falar com um especialista
            </a>
            <a
              href="#mecanismo"
              onClick={() =>
                trackCtaClick({
                  cta_label: 'Ver como o índice funciona',
                  cta_location: 'hero_secondary',
                })
              }
              className="rounded-xs border border-line-strong px-6 py-3 text-sm font-medium text-on-dark transition-colors hover:border-paper hover:text-paper"
            >
              Ver como o índice funciona
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <ControlChart />
        </div>
      </div>
    </section>
  )
}
