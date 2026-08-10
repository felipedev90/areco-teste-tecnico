import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Informe seu nome completo'),
  email: z.string().trim().email('Email inválido'),
  phone: z
    .string()
    .trim()
    .min(10, 'Telefone inválido')
    .regex(/^[\d\s()-]+$/, 'Use apenas números e símbolos de telefone'),
  company: z.string().trim().min(2, 'Informe o nome da empresa'),
  role: z.string().trim().min(2, 'Informe seu cargo'),
})

export type ContactFormData = z.infer<typeof contactSchema>
