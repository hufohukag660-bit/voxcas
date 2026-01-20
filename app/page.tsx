import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Statistics } from "@/components/sections/statistics"
import { FeaturesShowcase } from "@/components/sections/features-showcase"
import { FeaturedSlots } from "@/components/sections/games"
import { Tutorial } from "@/components/sections/tutorial"
import { Bonuses } from "@/components/sections/bonuses"
import { Benefits } from "@/components/sections/benefits"
import { Payments } from "@/components/sections/payments"
import { Security } from "@/components/sections/security"
import { Providers } from "@/components/sections/providers"
import { Mobile } from "@/components/sections/mobile"
import { Support } from "@/components/sections/support"
import { Comparison } from "@/components/sections/comparison"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#171a29] to-[#1a1d2e]">
      <Header />
      <main>
        <Hero />
        <About />
        <Statistics />
        <FeaturesShowcase />
        <FeaturedSlots />
        {/* <Providers /> */}
        <Tutorial />
        <Bonuses />
        <Benefits />
        <Payments />
        <Security />
        <Mobile />
        {/* <Support /> */}
        <Comparison />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
