import { describe, it, expect } from 'vitest'
import { contactSchema } from './contact-schema'

describe('contactSchema', () => {
  it('aceita dados válidos', () => {
    const result = contactSchema.safeParse({
      name: 'Felipe Augusto',
      email: 'felipe@exemplo.com',
      phone: '11975059454',
      company: 'Areco',
      role: 'Front-end Design Engineer',
    })

    expect(result.success).toBe(true)
  })

  it('rejeita email inválido', () => {
    const result = contactSchema.safeParse({
      name: 'Felipe',
      email: 'nao-e-email',
      phone: '11975059454',
      company: 'Areco',
      role: 'Dev',
    })

    expect(result.success).toBe(false)
  })

  it('rejeita nome com menos de 2 caracteres', () => {
    const result = contactSchema.safeParse({
      name: 'F',
      email: 'felipe@exemplo.com',
      phone: '11975059454',
      company: 'Areco',
      role: 'Dev',
    })

    expect(result.success).toBe(false)
  })

  it('rejeita telefone com letras', () => {
    const result = contactSchema.safeParse({
      name: 'Felipe',
      email: 'felipe@exemplo.com',
      phone: 'abc123',
      company: 'Areco',
      role: 'Dev',
    })

    expect(result.success).toBe(false)
  })
})
