import type { Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-plex-sans',
  preload: true,
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-plex-mono',
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://areco-teste-tecnico.vercel.app'),
  title: 'Controle de Qualidade | VSat ERP',
  description:
    'O índice de qualidade de fornecedor que bloqueia a compra antes do prejuízo. Laudos, skip lote e devoluções integrados ao ciclo operacional.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Controle de Qualidade | VSat ERP',
    description: 'O índice de qualidade de fornecedor que bloqueia a compra antes do prejuízo.',
    url: '/',
    siteName: 'VSat ERP',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
