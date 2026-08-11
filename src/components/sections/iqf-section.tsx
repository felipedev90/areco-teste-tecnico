import { CRITERIA } from '@/data/criteria'

export function IqfSection() {
  return (
    <section id="mecanismo" className="band-loose bg-ink text-paper">
      <div className="shell max-w-3xl">
        <p className="eyebrow mb-4 text-on-dark-muted">O mecanismo</p>
        <h2 className="text-h2 font-medium tracking-tight text-balance">
          O índice não é relatório. É regra de operação.
        </h2>
        <p className="mt-6 text-lead text-on-dark">
          Fornecedor abaixo do corte é alertado ou bloqueado antes da compra sair, não depois, em
          relatório de fechamento.
        </p>
      </div>

      <div className="shell mt-16">
        {/* Mobile: lista empilhada */}
        <ul className="divide-y divide-line-strong/40 md:hidden">
          {CRITERIA.map((c) => (
            <li key={c.code} className="py-4">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-base text-paper">{c.label}</span>
                <span className="flex items-baseline gap-1.5">
                  <span className="font-mono text-xs text-on-dark-muted">peso</span>
                  <span className="font-mono text-sm text-on-dark" data-numeric>
                    {c.weight}
                  </span>
                </span>
              </div>
              <div className="mt-1 flex gap-3 text-sm text-on-dark-muted">
                <span className="font-mono" data-numeric>
                  {c.code}
                </span>
                <span>{c.source}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Desktop: tabela */}
        <table className="hidden w-full border-collapse text-left md:table">
          <thead>
            <tr className="border-b border-line-strong text-on-dark-muted">
              <th className="pb-3 pr-4 font-mono text-sm font-normal">Código</th>
              <th className="pb-3 pr-4 font-mono text-sm font-normal">Critério</th>
              <th className="pb-3 pr-4 font-mono text-sm font-normal">Peso</th>
              <th className="pb-3 font-mono text-sm font-normal">Origem</th>
            </tr>
          </thead>
          <tbody>
            {CRITERIA.map((c) => (
              <tr key={c.code} className="border-b border-line-strong/40">
                <td className="py-4 pr-4 font-mono text-sm text-on-dark-muted" data-numeric>
                  {c.code}
                </td>
                <td className="py-4 pr-4 text-base text-paper">{c.label}</td>
                <td className="py-4 pr-4 font-mono text-sm text-on-dark" data-numeric>
                  {c.weight}
                </td>
                <td className="py-4 text-sm text-on-dark-muted">{c.source}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="mt-4 text-sm text-on-dark-muted">
          Estrutura de parametrização ilustrativa, com pesos configuráveis por critério e por
          fornecedor.
        </p>
      </div>
    </section>
  )
}
