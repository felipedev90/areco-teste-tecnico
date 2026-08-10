export function ControlChart() {
  return (
    <svg
      viewBox="0 0 440 300"
      role="img"
      aria-label="Carta de controle mostrando um ponto de medição fora do limite superior"
      className="h-auto w-full"
    >
      {/* Eixo — moldura de referência, quase invisível */}
      <rect
        x="0.5"
        y="0.5"
        width="439"
        height="299"
        fill="none"
        stroke="var(--color-line)"
        strokeWidth="1"
      />

      {/* Limite superior (LSC) e inferior (LIC) — tracejados,
          porque são referência, não dado medido */}
      <line x1="32" y1="70" x2="408" y2="70" stroke="var(--color-line-strong)" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="32" y1="220" x2="408" y2="220" stroke="var(--color-line-strong)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Linha central (LC) — pontilhada, mais sutil que os limites */}
      <line x1="32" y1="145" x2="408" y2="145" stroke="var(--color-line)" strokeWidth="1" strokeDasharray="1 4" />

      {/* Rótulos técnicos em mono — reforça leitura de instrumento */}
      <text x="8" y="74" className="font-mono" fontSize="10" fill="var(--color-muted)">LSC</text>
      <text x="8" y="149" className="font-mono" fontSize="10" fill="var(--color-muted)">LC</text>
      <text x="8" y="224" className="font-mono" fontSize="10" fill="var(--color-muted)">LIC</text>

      {/* Série de medições — polyline conecta os pontos na ordem
          em que foram coletados, como um gráfico de controle real */}
      <polyline
        points="60,150 106,158 152,140 198,166 244,44 290,152 336,134 382,148"
        fill="none"
        stroke="var(--color-on-dark-muted)"
        strokeWidth="1.5"
      />

      {/* Pontos conformes */}
      {[
        [60, 150], [106, 158], [152, 140],
        [198, 166], [290, 152], [336, 134], [382, 148],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="var(--color-conform)" />
      ))}

      {/* O ponto fora do limite — o único momento de cor de alerta
          na peça inteira. É essa escassez que dá força ao sinal */}
      <circle cx="244" cy="44" r="5.5" fill="var(--color-signal)" />
      <circle cx="244" cy="44" r="10" fill="var(--color-signal)" opacity="0.15" />
    </svg>
  );
}