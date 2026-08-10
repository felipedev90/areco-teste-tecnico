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
        <Hero />
        <CostSection />
        <IqfSection />
        <ProcessFlow />
        <CoverageSection />
        <FaqSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
