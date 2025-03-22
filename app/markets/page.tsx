import type { Metadata } from "next"

import { StockChart } from "@/components/stock-chart"

export const metadata: Metadata = {
  title: "Markets - TradeSmart",
  description: "Explore market data and stock charts",
}

export default function MarketsPage() {
  return (
    <div className="container py-10">
      <h1 className="mb-6 text-3xl font-bold">Markets</h1>
      <StockChart />
    </div>
  )
}

