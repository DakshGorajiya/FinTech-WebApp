"use client"

import { Cell, LineChart, Line, PieChart, Pie, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { ArrowUpRight, DollarSign, TrendingUp, Users } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data for dashboard
const portfolioPerformance = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
  { name: "Aug", value: 4000 },
  { name: "Sep", value: 5000 },
  { name: "Oct", value: 6000 },
  { name: "Nov", value: 7000 },
  { name: "Dec", value: 9000 },
]

const sectorAllocation = [
  { name: "Technology", value: 35 },
  { name: "Healthcare", value: 20 },
  { name: "Finance", value: 15 },
  { name: "Consumer", value: 10 },
  { name: "Energy", value: 10 },
  { name: "Other", value: 10 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82ca9d"]

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Gain/Loss</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+$2,350.00</div>
            <p className="text-xs text-muted-foreground">+5.2% today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Trades</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">+18 trades this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">+4% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Portfolio Performance</CardTitle>
            <CardDescription>Your portfolio value over the past year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={portfolioPerformance}
                    margin={{
                      top: 5,
                      right: 10,
                      left: 10,
                      bottom: 0,
                    }}
                  >
                    <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={10} />
                    <YAxis tickLine={false} axisLine={false} tickMargin={10} tickFormatter={(value) => `$${value}`} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Sector Allocation</CardTitle>
            <CardDescription>Distribution of your investments by sector</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sectorAllocation}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {sectorAllocation.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip content={<PieTooltip />} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Performers</CardTitle>
            <CardDescription>Your best performing assets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="font-semibold text-blue-600">AAPL</span>
                  </div>
                  <div>
                    <p className="font-medium">Apple Inc.</p>
                    <p className="text-sm text-muted-foreground">Technology</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">$182.63</p>
                  <p className="text-sm text-green-500">+2.4%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="font-semibold text-green-600">MSFT</span>
                  </div>
                  <div>
                    <p className="font-medium">Microsoft Corp.</p>
                    <p className="text-sm text-muted-foreground">Technology</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">$415.32</p>
                  <p className="text-sm text-green-500">+1.8%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="font-semibold text-purple-600">NVDA</span>
                  </div>
                  <div>
                    <p className="font-medium">NVIDIA Corp.</p>
                    <p className="text-sm text-muted-foreground">Technology</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">$950.02</p>
                  <p className="text-sm text-green-500">+3.2%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Underperformers</CardTitle>
            <CardDescription>Assets that need attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="font-semibold text-red-600">META</span>
                  </div>
                  <div>
                    <p className="font-medium">Meta Platforms</p>
                    <p className="text-sm text-muted-foreground">Technology</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">$472.22</p>
                  <p className="text-sm text-red-500">-1.5%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="font-semibold text-orange-600">NFLX</span>
                  </div>
                  <div>
                    <p className="font-medium">Netflix Inc.</p>
                    <p className="text-sm text-muted-foreground">Entertainment</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">$605.88</p>
                  <p className="text-sm text-red-500">-0.8%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                    <span className="font-semibold text-yellow-600">TSLA</span>
                  </div>
                  <div>
                    <p className="font-medium">Tesla Inc.</p>
                    <p className="text-sm text-muted-foreground">Automotive</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">$175.34</p>
                  <p className="text-sm text-red-500">-2.1%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <ChartTooltip>
        <ChartTooltipContent>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">{label || ""}</span>
            <span className="font-bold">${payload[0]?.value?.toLocaleString() || "0"}</span>
          </div>
        </ChartTooltipContent>
      </ChartTooltip>
    )
  }

  return null
}

function PieTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    return (
      <ChartTooltip>
        <ChartTooltipContent>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">{payload[0]?.name || ""}</span>
            <span className="font-bold">{payload[0]?.value || 0}%</span>
          </div>
        </ChartTooltipContent>
      </ChartTooltip>
    )
  }

  return null
}

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
  if (
    cx === undefined ||
    cy === undefined ||
    midAngle === undefined ||
    innerRadius === undefined ||
    outerRadius === undefined ||
    percent === undefined
  ) {
    return null
  }

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

