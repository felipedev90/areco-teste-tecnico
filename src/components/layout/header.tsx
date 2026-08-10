'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const NAV_ITEMS = [
  { href: '#mecanismo', label: 'O mecanismo' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-ink transition-colors duration-200 ${
        scrolled ? 'border-line-strong' : 'border-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-sm tracking-wide text-paper">
          VSat<span className="text-signal">·</span>Qualidade
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-on-dark transition-colors hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="rounded-xs bg-signal px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-90"
        >
          Falar com especialista
        </a>
      </div>
    </header>
  )
}
