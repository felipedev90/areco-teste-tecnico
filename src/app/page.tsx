import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { CostSection } from '@/components/sections/cost-section'
import { IqfSection } from '@/components/sections/iqf-section'
import { ProcessFlow } from '@/components/sections/process-flow'
import { CoverageSection } from '@/components/sections/coverage-section'
import { FaqSection } from '@/components/sections/faq-section'
import { ContactForm } from '@/components/sections/contact-form'

export default function Home() {
  return (
    <>
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
