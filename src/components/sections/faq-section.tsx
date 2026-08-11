'use client'

import { useState } from 'react'
import { FAQ_ITEMS } from '@/data/faq-items'
import { cn } from '@/lib/cn'
import { trackFaqToggle } from '@/lib/analytics'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="perguntas" className="band bg-paper">
      <div className="shell max-w-3xl">
        <p className="eyebrow mb-4">Antes de implementar</p>
        <h2 className="text-h2 font-medium tracking-tight text-balance">
          Perguntas de implementação
        </h2>

        <ul className="mt-10">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <li key={item.question} className="border-t border-line last:border-b">
                <button
                  type="button"
                  onClick={() => {
                    const next = isOpen ? null : index
                    trackFaqToggle({
                      question: item.question,
                      state: next === null ? 'close' : 'open',
                    })
                    setOpenIndex(next)
                  }}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left cursor-pointer"
                >
                  <span className="text-base font-medium text-ink">{item.question}</span>
                  <span
                    className={cn(
                      'font-mono text-lg text-muted transition-transform',
                      isOpen ? 'rotate-45' : 'rotate-0',
                    )}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen ? <p className="max-w-xl pb-5 text-sm text-muted">{item.answer}</p> : null}
              </li>
            )
          })}
        </ul>

        <p className="mt-6 text-sm text-muted">
          Respostas ilustrativas com base na documentação pública do produto.
        </p>
      </div>
    </section>
  )
}
