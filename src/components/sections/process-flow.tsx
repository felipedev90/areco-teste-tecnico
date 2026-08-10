const STEPS = [
  {
    code: '01',
    label: 'Coleta na origem',
    description: 'Dados capturados direto no recebimento e na inspeção, sem redigitação.',
  },
  {
    code: '02',
    label: 'Cálculo parametrizado',
    description: 'Índice apurado em tempo real e consolidado no fechamento automático do período.',
  },
  {
    code: '03',
    label: 'Decisão na compra',
    description: 'Fornecedor abaixo do corte é alertado ou bloqueado, alimentando a homologação.',
  },
]

export function ProcessFlow() {
  return (
    <section id="como-funciona" className="band border-b border-line bg-paper">
      <div className="shell">
        <p className="eyebrow mb-4">Da inspeção à decisão</p>
        <h2 className="text-h2 font-medium tracking-tight text-balance max-w-2xl">
          Três tempos, um único fluxo.
        </h2>

        <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {STEPS.map((step) => (
            <li key={step.code} className="border-t border-line pt-6">
              <span className="font-mono text-sm text-signal" data-numeric>
                {step.code}
              </span>
              <p className="mt-3 text-h3 font-medium text-ink">{step.label}</p>
              <p className="mt-2 text-base text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
