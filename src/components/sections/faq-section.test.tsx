import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FaqSection } from './faq-section'

describe('FaqSection', () => {
  it('renderiza todas as perguntas fechadas por padrão', () => {
    render(<FaqSection />)
    const buttons = screen.getAllByRole('button')
    buttons.forEach((button) => {
      expect(button).toHaveAttribute('aria-expanded', 'false')
    })
  })

  it('abre uma pergunta ao clicar', async () => {
    const user = userEvent.setup()
    render(<FaqSection />)

    const firstButton = screen.getAllByRole('button')[0]
    if (!firstButton) throw new Error('Nenhum botão de FAQ encontrado')

    await user.click(firstButton)

    expect(firstButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('fecha a pergunta ao clicar novamente', async () => {
    const user = userEvent.setup()
    render(<FaqSection />)

    const firstButton = screen.getAllByRole('button')[0]
    if (!firstButton) throw new Error('Nenhum botão de FAQ encontrado')

    await user.click(firstButton)
    await user.click(firstButton)

    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
  })
})
