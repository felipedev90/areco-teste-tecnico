type DataLayerEvent = {
  event: string
  [key: string]: unknown
}

declare global {
  interface Window {
    dataLayer: DataLayerEvent[]
  }
}

function pushEvent(payload: DataLayerEvent) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
}

export function trackSectionView(section: string) {
  pushEvent({
    event: 'section_view',
    section_name: section,
  })
}

export function trackCtaClick(params: { cta_label: string; cta_location: string }) {
  pushEvent({
    event: 'cta_click',
    cta_label: params.cta_label,
    cta_location: params.cta_location,
  })
}

export function trackFormStep(params: { step: string; direction: 'advance' | 'back' }) {
  pushEvent({
    event: 'form_step',
    form_step: params.step,
    step_direction: params.direction,
  })
}

export function trackFormSubmit(params: { form_name: string }) {
  pushEvent({
    event: 'form_submit',
    form_name: params.form_name,
  })
}

export function trackFaqToggle(params: { question: string; state: 'open' | 'close' }) {
  pushEvent({
    event: 'faq_toggle',
    faq_question: params.question,
    faq_state: params.state,
  })
}
