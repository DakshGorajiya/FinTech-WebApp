import Link from "next/link"
import { TrendingUp } from "lucide-react"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
        <TrendingUp className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold">TradeSmart</span>
    </Link>
  )
}

