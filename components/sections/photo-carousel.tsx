"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { getInstagramPhotos } from "@/lib/api"

// Tipo para as fotos do Instagram
type InstagramPhoto = {
  id: number
  url: string
  caption: string
}

export function PhotoCarousel() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [photos, setPhotos] = useState<InstagramPhoto[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setIsLoading(true)
        const data = await getInstagramPhotos()
        setPhotos(data)
      } catch (err) {
        console.error("Erro ao buscar fotos do Instagram:", err)
        setError("Não foi possível carregar as fotos. Tente novamente mais tarde.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchPhotos()
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
      <section className="section-padding bg-primary">
        <div className="container">
          <div className="mx-auto mb-12 max-w-[58rem] text-center">
            <div className="mb-4 flex items-center justify-center">
              <Instagram className="mr-2 h-6 w-6 text-accent" />
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Nosso Instagram</h2>
            </div>
            <p className="text-white/80 md:text-xl">Carregando fotos...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="section-padding bg-primary">
        <div className="container">
          <div className="mx-auto mb-12 max-w-[58rem] text-center">
            <div className="mb-4 flex items-center justify-center">
              <Instagram className="mr-2 h-6 w-6 text-accent" />
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Nosso Instagram</h2>
            </div>
            <p className="text-white/80 md:text-xl">{error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-primary">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[58rem] text-center">
          <div className="mb-4 flex items-center justify-center">
            <Instagram className="mr-2 h-6 w-6 text-accent" />
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Nosso Instagram</h2>
          </div>
          <p className="text-white/80 md:text-xl">Acompanhe nosso dia a dia e fique por dentro das novidades</p>
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
            {photos.map((photo) => (
              <CarouselItem key={photo.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="card-hover overflow-hidden border-none bg-white/10 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <Image
                        src={photo.url || "/placeholder.svg"}
                        alt={photo.caption}
                        fill
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                    <div className="p-4 text-white">
                      <p className="text-sm">{photo.caption}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 pt-4">
            {photos.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 w-2.5 rounded-full ${current === index ? "bg-accent" : "bg-white/20"}`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <CarouselPrevious className="left-4 border-accent bg-accent text-primary hover:bg-accent/90" />
          <CarouselNext className="right-4 border-accent bg-accent text-primary hover:bg-accent/90" />
        </Carousel>
      </div>
    </section>
  )
}
