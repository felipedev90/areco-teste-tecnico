const COLUMNS = [
  {
    title: 'Soluções',
    links: ['Produtos', 'VSat', 'arc', 'e-Pier'],
  },
  {
    title: 'Institucional',
    links: ['A Areco', 'Faça parte', 'Lideranças', 'Notícias'],
  },
  {
    title: 'Comunidade',
    links: ['Eventos', 'Feedbacks', 'Destaques', 'Vivências'],
  },
  {
    title: 'Central de Atendimento',
    links: ['Contatos', 'WhatsApp'],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-line-strong/40 bg-ink text-paper">
      <div className="shell band-tight grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-mono text-sm tracking-wide">
            VSat<span className="text-signal">·</span>Qualidade
          </p>
          <p className="mt-3 max-w-xs text-sm text-on-dark-muted">
            Projeto desenvolvido como desafio técnico para a Areco.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:col-span-8 md:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-medium text-paper">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link} className="text-sm text-on-dark-muted">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-line-strong/40">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-on-dark-muted sm:flex-row sm:justify-between">
          <p>Projeto de teste técnico, não afiliado oficialmente à Areco.</p>
          <p>Desenvolvido por Felipe Augusto</p>
        </div>
      </div>
    </footer>
  )
}
