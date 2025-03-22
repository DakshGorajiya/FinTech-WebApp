"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, BarChart4, LineChart, Maximize2, Minimize2 } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StockChart } from "@/components/stock-chart"
import { Dashboard } from "@/components/dashboard"
import { ChatInterface } from "@/components/chat-interface"

export default function Hero() {
  const [chatWidth, setChatWidth] = useState(400)
  const [isExpanded, setIsExpanded] = useState(true)

  const handleResize = (e: React.MouseEvent, startX: number) => {
    if (e === null) return

    const startWidth = chatWidth

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (moveEvent === null) return
      const newWidth = Math.max(300, Math.min(800, startWidth + moveEvent.clientX - startX))
      setChatWidth(newWidth)
    }

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.h1
            className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AI-Powered Trading <span className="text-primary">Insights</span>
          </motion.h1>
          <motion.p
            className="mb-8 text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Make smarter investment decisions with real-time market analysis and personalized AI recommendations.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </motion.div>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Chat Interface */}
          <div
            className="relative flex flex-col rounded-xl border bg-card shadow-lg transition-all duration-300"
            style={{ width: isExpanded ? `${chatWidth}px` : "60px" }}
          >
            <div className="flex items-center justify-between border-b p-4">
              <h3 className={`font-semibold ${!isExpanded && "hidden"}`}>AI Trading Assistant</h3>
              <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </Button>
            </div>

            {isExpanded && (
              <>
                <ChatInterface />
                <div
                  className="absolute right-0 top-0 bottom-0 w-1 cursor-ew-resize"
                  onMouseDown={(e) => handleResize(e, e.clientX)}
                />
              </>
            )}
          </div>

          {/* Dashboard/Chart Area */}
          <div className="flex-1 rounded-xl border bg-card p-6 shadow-lg">
            <Tabs defaultValue="dashboard">
              <div className="mb-6 flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="dashboard">
                    <BarChart4 className="mr-2 h-4 w-4" />
                    Dashboard
                  </TabsTrigger>
                  <TabsTrigger value="chart">
                    <LineChart className="mr-2 h-4 w-4" />
                    Market Chart
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="dashboard" className="mt-0">
                <Dashboard />
              </TabsContent>

              <TabsContent value="chart" className="mt-0">
                <StockChart />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

