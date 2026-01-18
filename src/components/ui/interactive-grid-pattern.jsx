import React, { useState, useMemo } from "react"
import { cn } from "@/lib/utils"

/**
 * The InteractiveGridPattern component with random filled squares.
 */
export function InteractiveGridPattern({
  width = 70,
  height = 70,
  squares = [60, 60],
  className,
  squaresClassName,
  fillPercentage = 15, // Percentage of squares to fill randomly
  ...props
}) {
  const [horizontal, vertical] = squares
  const [hoveredSquare, setHoveredSquare] = useState(null)
  
  // Generate random filled squares once
  const randomFilledSquares = useMemo(() => {
    const totalSquares = horizontal * vertical
    const numToFill = Math.floor(totalSquares * (fillPercentage / 100))
    const filled = new Set()
    
    while (filled.size < numToFill) {
      filled.add(Math.floor(Math.random() * totalSquares))
    }
    
    return filled
  }, [horizontal, vertical, fillPercentage])

  return (
    <svg
      width={width * horizontal}
      height={height * vertical}
      className={cn("absolute inset-0 h-full w-full border border-gray-400/30", className)}
      {...props}>
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * width
        const y = Math.floor(index / horizontal) * height
        const isRandomlyFilled = randomFilledSquares.has(index)
        
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            className={cn(
              "stroke-heading/30 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000",
              hoveredSquare === index 
                ? "fill-accent/5" 
                : isRandomlyFilled 
                  ? "fill-altbackground/20"
                  : "fill-heading/5",
              squaresClassName
            )}
            onMouseEnter={() => setHoveredSquare(index)}
            onMouseLeave={() => setHoveredSquare(null)} />
        )
      })}
    </svg>
  )
}