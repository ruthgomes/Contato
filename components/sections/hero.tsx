import Image from "next/image"

export function Hero() {
  return (
    <section className="relative pt-16">
      <div className="hero-gradient absolute inset-0 -z-10 h-full w-full"></div>
      <div className="container grid grid-cols-1 items-center gap-8 py-24 md:grid-cols-2 md:py-32">
        {/* Conteúdo à esquerda */}
        <div className="flex flex-col items-start justify-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl">Bem-vindo à Nossa Empresa</h1>
          <p className="max-w-[42rem] text-white/80 md:text-xl">
            Transformando ideias em soluções inovadoras para o seu negócio. Descubra como podemos ajudar a impulsionar o
            seu sucesso.
          </p>
        </div>

        {/* Imagem à direita */}
        <div className="flex items-center justify-center">
          <div className="relative h-[300px] w-[300px] overflow-hidden rounded-lg border-4 border-white/20 shadow-xl md:h-[400px] md:w-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Imagem da empresa"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
