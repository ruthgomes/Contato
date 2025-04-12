import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section className="section-padding bg-white" id="about">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[58rem] text-center">
          <h2 className="mb-4 text-primary">Sobre Nossa Empresa</h2>
          <p className="text-muted-foreground md:text-xl">
            Conheça nossa história, valores e missão que nos guiam todos os dias.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          {/* História e Fundadores com Logo */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-xl bg-accent shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Logo da empresa"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="mb-3 text-2xl font-bold text-primary">Nossa História</h3>
                <p className="text-foreground">
                  Fundada em 2010, nossa empresa nasceu da visão de transformar o mercado com soluções inovadoras.
                  Começamos como uma pequena equipe de profissionais apaixonados e, ao longo dos anos, crescemos para
                  nos tornar uma referência no setor. Nossa trajetória é marcada por desafios superados e conquistas
                  significativas que moldaram quem somos hoje.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-bold text-primary">Nossos Fundadores</h3>
                <p className="text-foreground">
                  Nossa empresa foi fundada por um grupo de visionários que identificaram uma oportunidade de inovação
                  no mercado. Com experiência diversificada e complementar, nossos fundadores combinaram seus talentos
                  para criar uma organização que valoriza a excelência, a criatividade e o compromisso com o cliente.
                </p>
              </div>
            </div>
          </div>

          {/* Missão, Visão e Valores */}
          <div className="mb-12">
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="grid gap-8 bg-primary p-8 text-white md:grid-cols-3">
                <div>
                  <h3 className="mb-3 text-xl font-bold text-accent">Missão</h3>
                  <p className="text-white/90">
                    Oferecer soluções inovadoras que transformem positivamente a realidade de nossos clientes,
                    contribuindo para o seu crescimento e sucesso.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-accent">Visão</h3>
                  <p className="text-white/90">
                    Ser reconhecida como referência de excelência e inovação em nosso setor, expandindo nossa atuação
                    globalmente.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-accent">Valores</h3>
                  <ul className="ml-6 list-disc text-white/90">
                    <li>Integridade e ética em todas as relações</li>
                    <li>Inovação constante</li>
                    <li>Compromisso com a excelência</li>
                    <li>Valorização das pessoas</li>
                    <li>Responsabilidade social e ambiental</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Atuação */}
          <div>
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-primary">Cenários de Atuação</h3>
                <p className="mb-6 text-foreground">
                  Atuamos em diversos segmentos do mercado, oferecendo soluções personalizadas para cada necessidade.
                  Nossa expertise abrange desde pequenas empresas até grandes corporações, sempre com o compromisso de
                  entregar resultados excepcionais.
                </p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <div className="card-hover rounded-lg bg-primary/5 p-6 text-center">
                    <h4 className="mb-2 font-semibold text-primary">Tecnologia</h4>
                    <p className="text-sm text-muted-foreground">
                      Soluções digitais inovadoras para transformação de negócios.
                    </p>
                  </div>
                  <div className="card-hover rounded-lg bg-primary/5 p-6 text-center">
                    <h4 className="mb-2 font-semibold text-primary">Finanças</h4>
                    <p className="text-sm text-muted-foreground">
                      Consultoria financeira e estratégias para otimização de recursos.
                    </p>
                  </div>
                  <div className="card-hover rounded-lg bg-primary/5 p-6 text-center">
                    <h4 className="mb-2 font-semibold text-primary">Saúde</h4>
                    <p className="text-sm text-muted-foreground">
                      Tecnologias e serviços para melhorar a gestão e atendimento.
                    </p>
                  </div>
                  <div className="card-hover rounded-lg bg-primary/5 p-6 text-center">
                    <h4 className="mb-2 font-semibold text-primary">Educação</h4>
                    <p className="text-sm text-muted-foreground">
                      Plataformas e metodologias para aprendizado eficiente.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
