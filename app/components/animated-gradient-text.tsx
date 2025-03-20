"use client"

import { cn } from ".././lib/utils"

interface AnimatedGradientTextProps {
  text: string
  className?: string
}

export function AnimatedGradientText({ text, className }: AnimatedGradientTextProps) {
  return <span className={cn("animated-gradient-text", className)}>{text}</span>
}

