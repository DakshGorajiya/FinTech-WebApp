import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Basic",
    description: "Essential tools for casual traders",
    price: "$9.99",
    duration: "per month",
    features: [
      "Real-time market data",
      "Basic AI trading assistant",
      "Portfolio tracking",
      "5 stock alerts",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    description: "Advanced features for active traders",
    price: "$29.99",
    duration: "per month",
    features: [
      "Everything in Basic",
      "Advanced AI insights",
      "Technical analysis tools",
      "Unlimited stock alerts",
      "Priority support",
      "Trading strategy backtesting",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for professional traders",
    price: "$99.99",
    duration: "per month",
    features: [
      "Everything in Pro",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "Advanced risk analytics",
      "White-label options",
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section className="container py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Choose the Right Plan for You</h2>
        <p className="text-lg text-muted-foreground">Select a plan that fits your trading needs and goals.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
            {plan.popular && (
              <div className="absolute right-4 top-0 -translate-y-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                {plan.price}
                <span className="ml-1 text-sm font-medium text-muted-foreground">{plan.duration}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

