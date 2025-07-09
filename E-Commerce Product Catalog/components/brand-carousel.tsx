"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const brands = ["WIKIMEDIA", "Fortune", "Atlantic", "Kununu", "ADLER", "WIKIMEDIA", "Fortune", "Atlantic"]

export default function BrandCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (brands.length - 5))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (brands.length - 5)) % (brands.length - 5))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden">
          <Button
            variant="outline"
            size="sm"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-10 h-10 p-0 bg-transparent"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div
            className="flex items-center gap-8 px-12 transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 132}px)` }}
          >
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-24 h-10 bg-gray-400 rounded flex items-center justify-center text-white text-xs font-semibold opacity-70 hover:opacity-100 transition-opacity"
              >
                {brand}
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full w-10 h-10 p-0 bg-transparent"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
