"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Briefcase, Clock, Search } from "lucide-react"
import { JobApplicationModal } from "@/components/job-application-modal"

export function JobOpenings() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedArea, setSelectedArea] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [mounted, setMounted] = useState(false)

  // Dados simulados de vagas
  const jobs = [
    {
      id: 1,
      title: "Desenvolvedor Full Stack",
      area: "development",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description:
        "Estamos buscando um desenvolvedor Full Stack com experiência em React, Node.js e bancos de dados SQL/NoSQL para integrar nossa equipe de tecnologia.",
      requirements: ["Experiência com React e Node.js", "Conhecimento em bancos de dados", "Git", "Metodologias ágeis"],
      date: "Publicada há 2 dias",
    },
    {
      id: 2,
      title: "Analista de Marketing Digital",
      area: "marketing",
      location: "Remoto",
      type: "Tempo Integral",
      description:
        "Procuramos um Analista de Marketing Digital para gerenciar campanhas online, análise de métricas e estratégias de crescimento.",
      requirements: [
        "Experiência com Google Analytics",
        "Conhecimento em SEO/SEM",
        "Gestão de redes sociais",
        "Criação de conteúdo",
      ],
      date: "Publicada há 5 dias",
    },
    {
      id: 3,
      title: "Gerente de Projetos",
      area: "management",
      location: "Rio de Janeiro, RJ",
      type: "Tempo Integral",
      description:
        "Buscamos um Gerente de Projetos para liderar equipes multidisciplinares e garantir a entrega de projetos dentro do prazo e orçamento.",
      requirements: [
        "Certificação PMP",
        "Experiência em gestão de equipes",
        "Conhecimento em metodologias ágeis",
        "Habilidades de comunicação",
      ],
      date: "Publicada há 1 semana",
    },
    {
      id: 4,
      title: "Assistente Administrativo",
      area: "administrative",
      location: "Belo Horizonte, MG",
      type: "Meio Período",
      description:
        "Vaga para Assistente Administrativo para auxiliar nas rotinas administrativas, atendimento e organização de documentos.",
      requirements: ["Ensino médio completo", "Conhecimento em pacote Office", "Organização", "Boa comunicação"],
      date: "Publicada há 3 dias",
    },
    {
      id: 5,
      title: "Analista de Recursos Humanos",
      area: "hr",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description:
        "Procuramos um Analista de RH para atuar nos processos de recrutamento, seleção, treinamento e desenvolvimento de colaboradores.",
      requirements: [
        "Formação em Psicologia ou RH",
        "Experiência em recrutamento e seleção",
        "Conhecimento em legislação trabalhista",
        "Habilidades interpessoais",
      ],
      date: "Publicada há 4 dias",
    },
  ]

  // Usar useEffect para garantir que o componente só seja renderizado no cliente
  useEffect(() => {
    setMounted(true)
  }, [])

  // Filtrar vagas com base nos critérios de busca
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesArea = selectedArea === "all" || job.area === selectedArea
    const matchesLocation = selectedLocation === "all" || job.location.includes(selectedLocation)

    return matchesSearch && matchesArea && matchesLocation
  })

  // Não renderizar nada durante a montagem do componente no servidor
  if (!mounted) {
    return null
  }

  return (
    <section className="py-8 bg-white">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold text-primary md:text-3xl">Vagas Abertas</h2>
            <p className="text-muted-foreground">
              Confira nossas oportunidades disponíveis e encontre a vaga ideal para você
            </p>
          </div>

          {/* Filtros de busca */}
          <div className="mb-8 flex flex-col gap-4 rounded-lg bg-card border border-border/40 p-4 md:flex-row md:items-end">
            <div className="flex-1 space-y-2">
              <label htmlFor="search" className="text-sm font-medium text-primary">
                Buscar vagas
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/60" />
                <Input
                  id="search"
                  placeholder="Cargo, habilidade ou palavra-chave"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-border/40 bg-card pl-10 text-primary placeholder:text-muted-foreground focus:border-accent"
                />
              </div>
            </div>
            <div className="w-full space-y-2 md:w-48">
              <label htmlFor="area" className="text-sm font-medium text-primary">
                Área
              </label>
              <Select value={selectedArea} onValueChange={setSelectedArea}>
                <SelectTrigger id="area" className="border-border/40 bg-card text-primary focus:border-accent">
                  <SelectValue placeholder="Todas as áreas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as áreas</SelectItem>
                  <SelectItem value="development">Desenvolvimento</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="management">Gestão</SelectItem>
                  <SelectItem value="administrative">Administrativo</SelectItem>
                  <SelectItem value="hr">Recursos Humanos</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full space-y-2 md:w-48">
              <label htmlFor="location" className="text-sm font-medium text-primary">
                Localização
              </label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger id="location" className="border-border/40 bg-card text-primary focus:border-accent">
                  <SelectValue placeholder="Todas as localidades" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as localidades</SelectItem>
                  <SelectItem value="São Paulo">São Paulo</SelectItem>
                  <SelectItem value="Rio de Janeiro">Rio de Janeiro</SelectItem>
                  <SelectItem value="Belo Horizonte">Belo Horizonte</SelectItem>
                  <SelectItem value="Remoto">Remoto</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-accent text-primary hover:bg-accent/90 transition-all duration-300 hover:scale-105 active:scale-95">
              Buscar
            </Button>
          </div>

          {/* Lista de vagas */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Card
                  key={job.id}
                  className="overflow-hidden border-none bg-card border border-border/40 transition-all duration-300 hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div>
                        <CardTitle className="text-primary">{job.title}</CardTitle>
                        <CardDescription className="text-muted-foreground">{job.date}</CardDescription>
                      </div>
                      <Badge className="w-fit bg-accent text-primary">{job.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-foreground">{job.description}</p>
                    <div className="mb-4 flex flex-wrap gap-4">
                      <div className="flex items-center text-muted-foreground">
                        <Briefcase className="mr-2 h-4 w-4 text-accent" />
                        <span>
                          {job.area === "development"
                            ? "Desenvolvimento"
                            : job.area === "marketing"
                              ? "Marketing"
                              : job.area === "management"
                                ? "Gestão"
                                : job.area === "administrative"
                                  ? "Administrativo"
                                  : job.area === "hr"
                                    ? "Recursos Humanos"
                                    : job.area}
                        </span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4 text-accent" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4 text-accent" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-primary">Requisitos:</h4>
                      <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <JobApplicationModal jobTitle={job.title} jobId={job.id} />
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="rounded-lg bg-card border border-border/40 p-8 text-center">
                <h3 className="mb-2 text-xl font-medium text-primary">Nenhuma vaga encontrada</h3>
                <p className="text-muted-foreground">
                  Tente ajustar seus filtros de busca ou verifique novamente mais tarde.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
