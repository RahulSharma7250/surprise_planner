import type { ReactNode } from "react"
import { cn } from "../lib/utils"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "bg-background/50 backdrop-blur-md rounded-xl p-6 shadow-lg border border-muted/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
        className,
      )}
    >
      <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

