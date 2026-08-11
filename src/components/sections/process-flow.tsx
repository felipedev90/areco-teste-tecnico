import Image from 'next/image'

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
      <div className="shell grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <p className="eyebrow mb-4">Da inspeção à decisão</p>
          <h2 className="text-h2 font-medium tracking-tight text-balance">
            Três tempos, um único fluxo.
          </h2>

          <div className="relative mt-8 aspect-4/3 overflow-hidden rounded-xs">
            <Image
              src="/images/quality_inspection.webp"
              alt="Inspetor de qualidade avaliando peça em linha de produção"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <ol className="md:col-span-8">
          {STEPS.map((step, index) => (
            <li key={step.code} className={`py-6 ${index !== 0 ? 'border-t border-line' : ''}`}>
              <span className="font-mono text-sm text-signal" data-numeric>
                {step.code}
              </span>
              <p className="mt-3 text-h3 font-medium text-ink">{step.label}</p>
              <p className="mt-2  text-base text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
