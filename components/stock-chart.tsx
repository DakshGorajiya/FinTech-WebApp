"use client"

import { useState } from "react"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Generate random stock data
const generateStockData = (days: number, volatility = 1) => {
  const data = []
  let price = 150 + Math.random() * 50

  for (let i = 0; i < days; i++) {
    const date = new Date()
    date.setDate(date.getDate() - (days - i))

    const change = (Math.random() - 0.5) * volatility
    price = Math.max(50, price * (1 + change / 10))

    data.push({
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      price: Number.parseFloat(price.toFixed(2)),
      volume: Math.floor(Math.random() * 10000000) + 1000000,
    })
  }

  return data
}

const stockSymbols = [
  { symbol: "AAPL", name: "Apple Inc." },
  { symbol: "MSFT", name: "Microsoft Corp." },
  { symbol: "GOOGL", name: "Alphabet Inc." },
  { symbol: "AMZN", name: "Amazon.com Inc." },
  { symbol: "TSLA", name: "Tesla Inc." },
]

export function StockChart() {
  const [activeSymbol, setActiveSymbol] = useState(stockSymbols[0])
  const [timeRange, setTimeRange] = useState("1M")

  const getDaysFromRange = (range: string) => {
    switch (range) {
      case "1D":
        return 1
      case "1W":
        return 7
      case "1M":
        return 30
      case "3M":
        return 90
      case "1Y":
        return 365
      default:
        return 30
    }
  }

  const data = generateStockData(getDaysFromRange(timeRange))

  // Add null checks to prevent errors
  const currentPrice = data.length > 0 ? data[data.length - 1].price : 0
  const previousPrice = data.length > 1 ? data[data.length - 2].price : currentPrice
  const priceChange = currentPrice - previousPrice
  const percentChange = previousPrice !== 0 ? (priceChange / previousPrice) * 100 : 0

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            {activeSymbol?.name || "Stock"} ({activeSymbol?.symbol || "SYM"})
          </h2>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">${currentPrice.toFixed(2)}</span>
            <span className={`text-sm font-medium ${priceChange >= 0 ? "text-green-500" : "text-red-500"}`}>
              {priceChange >= 0 ? "+" : ""}
              {priceChange.toFixed(2)} ({percentChange.toFixed(2)}%)
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          {["1D", "1W", "1M", "3M", "1Y"].map((range) => (
            <Button
              key={range}
              variant={timeRange === range ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeRange(range)}
            >
              {range}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="md:col-span-3">
          <CardHeader className="pb-2">
            <CardTitle>Price Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                      minTickGap={10}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                      domain={["auto", "auto"]}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="price"
                      stroke="hsl(var(--primary))"
                      fillOpacity={1}
                      fill="url(#colorPrice)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Market Symbols</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {stockSymbols.map((stock) => (
                  <Button
                    key={stock.symbol}
                    variant={activeSymbol?.symbol === stock.symbol ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setActiveSymbol(stock)}
                  >
                    {stock.symbol}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    return (
      <ChartTooltip>
        <ChartTooltipContent>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">{payload[0]?.payload?.date || ""}</span>
            <span className="font-bold">${payload[0]?.value?.toFixed(2) || "0.00"}</span>
          </div>
        </ChartTooltipContent>
      </ChartTooltip>
    )
  }

  return null
}

