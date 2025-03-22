import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Trading?</h2>
          <p className="mb-8 text-lg text-primary-foreground/80">
            Join thousands of traders who are making smarter decisions with TradeSmart. Get started today and experience
            the power of AI-driven trading insights.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

