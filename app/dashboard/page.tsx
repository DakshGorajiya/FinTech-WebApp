import type { Metadata } from "next"

import { Dashboard } from "@/components/dashboard"

export const metadata: Metadata = {
  title: "Dashboard - TradeSmart",
  description: "View your portfolio performance and market insights",
}

export default function DashboardPage() {
  return (
    <div className="container py-10">
      <h1 className="mb-6 text-3xl font-bold">Your Dashboard</h1>
      <Dashboard />
    </div>
  )
}

