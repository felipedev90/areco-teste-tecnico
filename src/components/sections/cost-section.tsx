import { COST_ITEMS } from '@/data/cost-items'

export function CostSection() {
  return (
    <section className="band border-b border-line bg-paper">
      <div className="shell grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <p className="eyebrow mb-4">O que não é medido</p>
          <h2 className="text-h2 font-medium tracking-tight text-balance">
            Economia em inspeção volta como prejuízo em margem.
          </h2>
        </div>

        <ol className="md:col-span-8">
          {COST_ITEMS.map((item, index) => (
            <li
              key={item.code}
              className={`flex gap-6 py-6 ${index !== 0 ? 'border-t border-line' : ''}`}
            >
              <div>
                <p className="text-h3 font-medium text-ink">{item.label}</p>
                <p className="mt-1 text-base text-muted">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
