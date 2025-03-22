import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the AI trading assistant work?",
    answer:
      "Our AI trading assistant analyzes market data, news, and trends to provide personalized recommendations. It uses machine learning algorithms to identify patterns and potential opportunities based on your trading preferences and risk tolerance.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Yes, we take security very seriously. All your financial data is encrypted using industry-standard protocols. We use secure connections and never share your personal information with third parties without your explicit consent.",
  },
  {
    question: "Can I connect my existing brokerage account?",
    answer:
      "Yes, TradeSmart integrates with most major brokerage platforms. You can connect your existing accounts to track your portfolio and receive personalized insights without transferring any assets.",
  },
  {
    question: "Do I need trading experience to use TradeSmart?",
    answer:
      "No, TradeSmart is designed for traders of all experience levels. Beginners can benefit from our educational resources and simplified interface, while experienced traders can leverage our advanced analytics and AI insights.",
  },
  {
    question: "What markets and assets does TradeSmart cover?",
    answer:
      "TradeSmart covers major global stock markets, ETFs, cryptocurrencies, forex, and commodities. Our platform provides comprehensive data and analysis for thousands of assets across these markets.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. If you cancel, you'll continue to have access until the end of your current billing period.",
  },
]

export default function FAQ() {
  return (
    <section className="container py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground">Find answers to common questions about TradeSmart.</p>
      </div>

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

