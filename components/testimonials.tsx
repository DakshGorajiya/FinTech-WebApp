import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Day Trader",
    content:
      "The AI trading assistant has completely transformed my approach to the market. I'm making more informed decisions and seeing consistent returns.",
    avatar: "AT",
  },
  {
    name: "Sarah Johnson",
    role: "Investment Analyst",
    content:
      "As a professional analyst, I appreciate the depth of market data and the intuitive interface. TradeSmart has become an essential part of my daily workflow.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Retail Investor",
    content:
      "I was intimidated by trading until I found TradeSmart. The educational resources and AI guidance have given me the confidence to build a solid portfolio.",
    avatar: "MC",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Traders Worldwide</h2>
          <p className="text-lg text-muted-foreground">
            See what our users are saying about their experience with TradeSmart.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-background shadow-md">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

