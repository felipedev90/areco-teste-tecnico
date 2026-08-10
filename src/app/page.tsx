import { Header } from '@/components/layout/header'
import { Hero } from '@/components/sections/hero'
import { CostSection } from '@/components/sections/cost-section'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CostSection />
      </main>
    </>
  )
}
