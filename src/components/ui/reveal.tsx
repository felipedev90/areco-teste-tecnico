'use client'

import { useReveal } from '@/hooks/use-reveal'
import { cn } from '@/lib/cn'

type RevealProps = {
  children: React.ReactNode
  className?: string
}

export function Reveal({ children, className }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className={cn('reveal', visible && 'reveal-visible', className)}>
      {children}
    </div>
  )
}
