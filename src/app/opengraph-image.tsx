import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'VSat ERP — Controle de Qualidade'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        backgroundColor: '#1c272f',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: 28,
          color: '#8c9aa6',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom: 24,
        }}
      >
        VSat ERP · Controle de Qualidade
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          fontSize: 64,
          fontWeight: 600,
          color: '#ffffff',
          lineHeight: 1.15,
          maxWidth: 950,
          columnGap: 18,
          rowGap: 8,
        }}
      >
        <span>O</span>
        <span style={{ color: '#e0713f' }}>índice</span>
        <span>que</span>
        <span style={{ color: '#e0713f' }}>impede</span>
        <span>o pedido errado de sair.</span>
      </div>
    </div>,
    { ...size },
  )
}
