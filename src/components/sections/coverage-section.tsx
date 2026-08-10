import { COVERAGE_ITEMS } from '@/data/coverage-items'

export function CoverageSection() {
  return (
    <section id="cobertura" className="band bg-surface">
      <div className="shell">
        <p className="eyebrow mb-4">Cobertura do módulo</p>
        <h2 className="text-h2 font-medium tracking-tight text-balance max-w-2xl">
          O índice é o centro. <br /> O módulo cobre o resto.
        </h2>

        <ul className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {COVERAGE_ITEMS.map((item) => (
            <li key={item.label} className="border-t border-line pt-4">
              <p className="text-base font-medium text-ink">{item.label}</p>
              <p className="mt-1 text-sm text-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
