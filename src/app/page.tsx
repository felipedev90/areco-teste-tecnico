import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { CostSection } from '@/components/sections/cost-section'
import { IqfSection } from '@/components/sections/iqf-section'
import { ProcessFlow } from '@/components/sections/process-flow'
import { CoverageSection } from '@/components/sections/coverage-section'
import { FaqSection } from '@/components/sections/faq-section'
import { getSoftwareApplicationSchema, getFaqSchema } from '@/lib/structured-data'
import dynamic from 'next/dynamic'
import { Reveal } from '@/components/ui/reveal'

const ContactForm = dynamic(() =>
  import('@/components/sections/contact-form').then((mod) => mod.ContactForm),
)

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getSoftwareApplicationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema()) }}
      />
      <Header />
      <main>
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <CostSection />
        </Reveal>
        <Reveal>
          <IqfSection />
        </Reveal>
        <Reveal>
          <ProcessFlow />
        </Reveal>
        <Reveal>
          <CoverageSection />
        </Reveal>
        <Reveal>
          <FaqSection />
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </main>
      <Footer />
    </>
  )
}
