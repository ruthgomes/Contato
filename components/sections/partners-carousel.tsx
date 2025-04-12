"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { getPartners } from "@/lib/api"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// Tipo para os parceiros
type Partner = {
  id: number
  name: string
  logo: string
  website: string
}

export function PartnersCarousel() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [partners, setPartners] = useState<Partner[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPartners() {
      try {
        setIsLoading(true)
        const data = await getPartners()
        setPartners(data)
      } catch (err) {
        console.error("Erro ao buscar parceiros:", err)
        setError("Não foi possível carregar os parceiros. Tente novamente mais tarde.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchPartners()
  }, [])

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [api])

  useEffect(() => {
    if (!api) return

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", handleSelect)

    return () => {
      api.off("select", handleSelect)
    }
  }, [api])

  if (isLoading) {
    return (
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="mx-auto mb-12 max-w-[58rem] text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Nossos Parceiros</h2>
            <p className="text-muted-foreground md:text-xl">Carregando parceiros...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="mx-auto mb-12 max-w-[58rem] text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Nossos Parceiros</h2>
            <p className="text-muted-foreground md:text-xl">{error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-muted">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[58rem] text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Nossos Parceiros</h2>
          <p className="text-muted-foreground md:text-xl">Conheça as empresas que colaboram conosco</p>
        </div>

        <Carousel
          setApi={setApi}
          className="mx-auto max-w-5xl"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {partners.map((partner) => (
              <CarouselItem key={partner.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="card-hover overflow-hidden border-none">
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                      <div className="relative aspect-square h-32 w-32">
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          fill
                          className="object-contain transition-all hover:scale-105"
                        />
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 pt-4">
            {partners.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 w-2.5 rounded-full ${current === index ? "bg-primary" : "bg-muted-foreground/20"}`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <CarouselPrevious className="left-4 border-primary bg-primary text-white hover:bg-primary/90" />
          <CarouselNext className="right-4 border-primary bg-primary text-white hover:bg-primary/90" />
        </Carousel>
      </div>
    </section>
  )
}
