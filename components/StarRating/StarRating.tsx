"use client"

import { Star } from "lucide-react"

interface StarRatingProps {
  percentage: number
  size?: number
  className?: string
}

export function StarRating({
  percentage,
  size = 24,
  className,
}: StarRatingProps) {
  // Clamp percentage between 0 and 100
  const clampedPercentage = Math.max(0, Math.min(100, percentage))
  
  // Convert percentage to stars (0-5)
  const filledStars = (clampedPercentage / 100) * 5

  return (
    <div className={"flex items-center gap-1"}>
      <div className="flex">
        {[0, 1, 2, 3, 4].map((index) => {
          // Calculate fill for this star (0 to 1)
          const starFill = Math.max(0, Math.min(1, filledStars - index))
          
          return (
            <div
              key={index}
              className="relative"
              style={{ width: size, height: size }}
            >
              {/* Background star (empty) */}
              <Star
                className="absolute inset-0 text-muted-foreground/30"
                size={size}
                strokeWidth={2}
              />
              
              {/* Foreground star (filled) with clip */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${starFill * 100}%` }}
              >
                <Star
                  className="text-inherit fill-inherit"
                  size={size}
                  strokeWidth={2}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
