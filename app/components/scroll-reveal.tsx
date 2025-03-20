"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { cn } from ".././lib/utils"

type AnimationDirection = "up" | "down" | "left" | "right" | "none"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: AnimationDirection
  distance?: string
  once?: boolean
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 800,
  direction = "up",
  distance = "20px",
  once = true,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const alreadyRevealed = useRef(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const getTransform = () => {
      switch (direction) {
        case "up":
          return `translateY(${distance})`
        case "down":
          return `translateY(-${distance})`
        case "left":
          return `translateX(${distance})`
        case "right":
          return `translateX(-${distance})`
        default:
          return "none"
      }
    }

    // Set initial styles
    element.style.opacity = "0"
    element.style.transform = getTransform()
    element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`
    element.style.willChange = "opacity, transform"

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !alreadyRevealed.current)) {
            // Delay the animation if needed
            setTimeout(() => {
              element.style.opacity = "1"
              element.style.transform = "translateY(0) translateX(0)"
              alreadyRevealed.current = true
            }, delay)

            if (once) {
              observer.unobserve(element)
            }
          } else if (!entry.isIntersecting && !once && alreadyRevealed.current) {
            // Reset the animation if not once
            element.style.opacity = "0"
            element.style.transform = getTransform()
            alreadyRevealed.current = false
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [delay, duration, direction, distance, once])

  return (
    <div ref={elementRef} className={cn(className)}>
      {children}
    </div>
  )
}

