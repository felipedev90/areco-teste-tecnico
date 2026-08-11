'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/contact-schema'
import { cn } from '@/lib/cn'
import { trackFormStep, trackFormSubmit } from '@/lib/analytics'

type Step = 'contact' | 'company'

const STEP_FIELDS: Record<Step, (keyof ContactFormData)[]> = {
  contact: ['name', 'email', 'phone'],
  company: ['company', 'role'],
}

export function ContactForm() {
  const [step, setStep] = useState<Step>('contact')
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  })

  async function handleNext() {
    const valid = await trigger(STEP_FIELDS.contact)
    if (valid) {
      trackFormStep({ step: 'company', direction: 'advance' })
      setStep('company')
    }
  }

  function onSubmit(data: ContactFormData) {
    // Sem integração real, apenas log para simular envio
    console.log('contact-form:submit', data)
    trackFormSubmit({ form_name: 'contact_iqf' })
    setSubmitted(true)
  }

  return (
    <section id="contato" className="band-loose bg-ink text-paper">
      <div className="shell grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow mb-4 text-on-dark-muted">Fale com um especialista</p>
          <h2 className="text-h2 font-medium tracking-tight text-balance">
            Veja o índice funcionando na sua operação.
          </h2>
          <p className="mt-4 max-w-sm text-base text-on-dark">
            Preencha os dados e entraremos em contato para apresentar o módulo e entender como ele
            se encaixa no seu processo.
          </p>
        </div>

        <div className="md:col-span-7">
          {submitted ? (
            <div className="border border-conform/40 bg-conform-soft/10 p-6">
              <p className="text-base font-medium text-paper">Recebido.</p>
              <p className="mt-1 text-sm text-on-dark-muted">Entraremos em contato em breve.</p>
            </div>
          ) : (
            <>
              <p className="mb-6 font-mono text-sm text-on-dark-muted" data-numeric>
                Passo {step === 'contact' ? '1' : '2'} de 2 -{' '}
                {step === 'contact' ? 'Contato' : 'Empresa'}
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className={cn(step !== 'contact' && 'hidden')}>
                  <div className="space-y-5">
                    <Field
                      label="Nome"
                      placeholder="Seu nome"
                      error={errors.name?.message}
                      {...register('name')}
                    />
                    <Field
                      label="Email"
                      type="email"
                      placeholder="Seu email"
                      error={errors.email?.message}
                      {...register('email')}
                    />
                    <Field
                      label="Telefone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      error={errors.phone?.message}
                      {...register('phone')}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="mt-5 rounded-xs bg-signal px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
                  >
                    Próximo
                  </button>
                </div>

                <div className={cn(step !== 'company' && 'hidden')}>
                  <div className="space-y-5">
                    <Field
                      label="Empresa"
                      placeholder="Nome da empresa"
                      error={errors.company?.message}
                      {...register('company')}
                    />
                    <Field
                      label="Cargo"
                      placeholder="Seu cargo"
                      error={errors.role?.message}
                      {...register('role')}
                    />
                  </div>
                  <div className="mt-5 flex gap-3">
                    <button
                      onClick={() => {
                        trackFormStep({ step: 'contact', direction: 'back' })
                        setStep('contact')
                      }}
                      className="rounded-xs border border-line-strong px-6 py-3 text-sm font-medium text-on-dark transition-colors hover:border-paper hover:text-paper"
                    >
                      Voltar
                    </button>
                    <button
                      type="submit"
                      className="rounded-xs bg-signal px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>

              <p className="mt-4 text-xs text-on-dark-muted">
                Ao enviar, você concorda com o uso dos dados exclusivamente para fins de contato.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-on-dark-muted">{label}</span>
      <input
        {...props}
        className={cn(
          'w-full border bg-transparent px-4 py-3 text-sm text-paper',
          'placeholder:text-on-dark-muted focus:outline-none',
          error ? 'border-signal' : 'border-line-strong focus:border-signal',
        )}
      />
      {error ? <p className="mt-1 text-xs text-signal">{error}</p> : null}
    </label>
  )
}
