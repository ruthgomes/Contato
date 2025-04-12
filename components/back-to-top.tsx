"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={`fixed bottom-4 right-4 z-50 rounded-full border-accent bg-accent text-primary transition-opacity duration-300 hover:bg-primary hover:text-white ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
    >
      <ArrowUp className="h-5 w-5" />
      <span className="sr-only">Voltar ao topo</span>
    </Button>
  )
}
