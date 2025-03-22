import { ArrowRight, BarChart3, Bot, LineChart, Shield, TrendingUp } from "lucide-react"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Bot,
    title: "AI-Powered Insights",
    description: "Get personalized trading recommendations and market analysis from our advanced AI assistant.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Market Data",
    description: "Access up-to-the-minute market data, price alerts, and trend analysis for informed decisions.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Analytics",
    description: "Visualize your portfolio performance with comprehensive analytics and risk assessment tools.",
  },
  {
    icon: LineChart,
    title: "Advanced Charting",
    description: "Analyze market trends with professional-grade charts and technical indicators.",
  },
  {
    icon: Shield,
    title: "Secure Trading",
    description: "Trade with confidence knowing your data and transactions are protected by enterprise-grade security.",
  },
  {
    icon: ArrowRight,
    title: "Educational Resources",
    description: "Learn trading strategies and market concepts with our extensive library of resources.",
  },
]

export default function Features() {
  return (
    <section className="container py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Powerful Features for Smart Trading</h2>
        <p className="text-lg text-muted-foreground">
          Our platform combines cutting-edge technology with user-friendly tools to help you make better trading
          decisions.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="transition-all hover:shadow-lg">
            <CardHeader>
              <feature.icon className="h-10 w-10 text-primary" />
              <CardTitle className="mt-4">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="ghost" className="p-0">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

