'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/cn'
import { trackCtaClick } from '@/lib/analytics'

const NAV_ITEMS = [
  { href: '#mecanismo', label: 'O mecanismo' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#perguntas', label: 'Perguntas' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  function handleNavClick() {
    setMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-ink transition-colors duration-200',
        scrolled ? 'border-line-strong' : 'border-transparent',
      )}
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
          className="hidden rounded-xs bg-signal px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-90 md:inline-block"
          onClick={() =>
            trackCtaClick({ cta_label: 'Falar com um especialista', cta_location: 'header' })
          }
        >
          Falar com um especialista
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="flex h-9 w-9 cursor-pointer items-center justify-center md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={cn(
                'absolute left-0 top-0 h-px w-5 bg-paper transition-transform',
                menuOpen && 'translate-y-1.75 rotate-45',
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 bg-paper transition-opacity',
                menuOpen && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'absolute bottom-0 left-0 h-px w-5 bg-paper transition-transform',
                menuOpen && '-translate-y-1.75 -rotate-45',
              )}
            />
          </span>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-line-strong/40 bg-ink md:hidden">
          <nav className="shell flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="py-2 text-sm text-on-dark transition-colors hover:text-paper text-center"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => {
                handleNavClick()
                trackCtaClick({
                  cta_label: 'Falar com um especialista',
                  cta_location: 'header_mobile',
                })
              }}
              className="mt-2 rounded-xs bg-signal px-4 py-3 text-center text-sm font-medium text-paper"
            >
              Falar com um especialista
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
