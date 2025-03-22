import Hero from "@/components/hero"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
    </div>
  )
}

