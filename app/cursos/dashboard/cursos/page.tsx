"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CourseCard } from "@/components/cursos/course-card"
import { useAuth } from "@/components/cursos/auth-provider"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CursosPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/cursos")
    }
  }, [user, isLoading, router])

  if (isLoading || !user) {
    return <div className="container py-10">Carregando...</div>
  }

  return (
    <div className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Catálogo de Cursos</h1>
        <p className="text-muted-foreground">
          Explore nossa biblioteca de cursos e encontre o conteúdo ideal para o seu desenvolvimento.
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="search"
            placeholder="Buscar cursos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit">Buscar</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as categorias</SelectItem>
              <SelectItem value="leadership">Liderança</SelectItem>
              <SelectItem value="technology">Tecnologia</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="personal">Desenvolvimento Pessoal</SelectItem>
              <SelectItem value="finance">Finanças</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Nível" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os níveis</SelectItem>
              <SelectItem value="beginner">Básico</SelectItem>
              <SelectItem value="intermediate">Intermediário</SelectItem>
              <SelectItem value="advanced">Avançado</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="relevance">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevância</SelectItem>
              <SelectItem value="newest">Mais recentes</SelectItem>
              <SelectItem value="oldest">Mais antigos</SelectItem>
              <SelectItem value="az">A-Z</SelectItem>
              <SelectItem value="za">Z-A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6 w-full justify-start">
          <TabsTrigger value="all">Todos os Cursos</TabsTrigger>
          <TabsTrigger value="in-progress">Em Andamento</TabsTrigger>
          <TabsTrigger value="completed">Concluídos</TabsTrigger>
          <TabsTrigger value="recommended">Recomendados</TabsTrigger>
          <TabsTrigger value="new">Novos</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CourseCard
              title="Liderança Estratégica"
              description="Desenvolva habilidades essenciais para liderar equipes e projetos com eficiência."
              image="/placeholder.svg?height=200&width=350"
              category="Liderança"
              duration="8 horas"
              level="Intermediário"
              progress={45}
            />
            <CourseCard
              title="Marketing Digital"
              description="Aprenda estratégias e ferramentas para impulsionar sua presença online."
              image="/placeholder.svg?height=200&width=350"
              category="Marketing"
              duration="10 horas"
              level="Intermediário"
              progress={60}
            />
            <CourseCard
              title="Excel Avançado"
              description="Domine fórmulas avançadas, tabelas dinâmicas e automação com macros."
              image="/placeholder.svg?height=200&width=350"
              category="Tecnologia"
              duration="6 horas"
              level="Avançado"
              progress={30}
            />
            <CourseCard
              title="Gestão de Projetos"
              description="Metodologias e ferramentas para gerenciar projetos com eficiência."
              image="/placeholder.svg?height=200&width=350"
              category="Gestão"
              duration="8 horas"
              level="Intermediário"
              progress={15}
            />
            <CourseCard
              title="Inteligência Emocional"
              description="Desenvolva habilidades para gerenciar emoções e melhorar relacionamentos interpessoais."
              image="/placeholder.svg?height=200&width=350"
              category="Desenvolvimento Pessoal"
              duration="6 horas"
              level="Intermediário"
            />
            <CourseCard
              title="Gestão de Tempo"
              description="Técnicas e ferramentas para otimizar seu tempo e aumentar a produtividade."
              image="/placeholder.svg?height=200&width=350"
              category="Produtividade"
              duration="4 horas"
              level="Básico"
            />
            <CourseCard
              title="Análise de Dados"
              description="Aprenda a interpretar dados e tomar decisões baseadas em evidências."
              image="/placeholder.svg?height=200&width=350"
              category="Tecnologia"
              duration="10 horas"
              level="Avançado"
            />
            <CourseCard
              title="Comunicação Eficaz"
              description="Desenvolva habilidades para se comunicar com clareza e assertividade."
              image="/placeholder.svg?height=200&width=350"
              category="Comunicação"
              duration="5 horas"
              level="Intermediário"
            />
            <CourseCard
              title="Finanças Pessoais"
              description="Aprenda a gerenciar seu dinheiro e planejar seu futuro financeiro."
              image="/placeholder.svg?height=200&width=350"
              category="Finanças"
              duration="6 horas"
              level="Básico"
            />
            <CourseCard
              title="Oratória e Apresentações"
              description="Técnicas para falar em público e criar apresentações impactantes."
              image="/placeholder.svg?height=200&width=350"
              category="Comunicação"
              duration="7 horas"
              level="Intermediário"
            />
            <CourseCard
              title="Design Thinking"
              description="Metodologia para solução criativa de problemas centrada no usuário."
              image="/placeholder.svg?height=200&width=350"
              category="Inovação"
              duration="8 horas"
              level="Intermediário"
            />
            <CourseCard
              title="Gestão de Equipes Remotas"
              description="Estratégias para liderar e motivar equipes em trabalho remoto."
              image="/placeholder.svg?height=200&width=350"
              category="Liderança"
              duration="5 horas"
              level="Intermediário"
            />
          </div>
        </TabsContent>
        <TabsContent value="in-progress" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CourseCard
              title="Liderança Estratégica"
              description="Desenvolva habilidades essenciais para liderar equipes e projetos com eficiência."
              image="/placeholder.svg?height=200&width=350"
              category="Liderança"
              duration="8 horas"
              level="Intermediário"
              progress={45}
            />
            <CourseCard
              title="Marketing Digital"
              description="Aprenda estratégias e ferramentas para impulsionar sua presença online."
              image="/placeholder.svg?height=200&width=350"
              category="Marketing"
              duration="10 horas"
              level="Intermediário"
              progress={60}
            />
            <CourseCard
              title="Excel Avançado"
              description="Domine fórmulas avançadas, tabelas dinâmicas e automação com macros."
              image="/placeholder.svg?height=200&width=350"
              category="Tecnologia"
              duration="6 horas"
              level="Avançado"
              progress={30}
            />
            <CourseCard
              title="Gestão de Projetos"
              description="Metodologias e ferramentas para gerenciar projetos com eficiência."
              image="/placeholder.svg?height=200&width=350"
              category="Gestão"
              duration="8 horas"
              level="Intermediário"
              progress={15}
            />
          </div>
        </TabsContent>
        <TabsContent value="completed" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CourseCard
              title="Fundamentos de Gestão"
              description="Princípios básicos de gestão para líderes iniciantes."
              image="/placeholder.svg?height=200&width=350"
              category="Gestão"
              duration="5 horas"
              level="Básico"
              completed
            />
            <CourseCard
              title="Comunicação Empresarial"
              description="Técnicas de comunicação eficaz no ambiente corporativo."
              image="/placeholder.svg?height=200&width=350"
              category="Comunicação"
              duration="4 horas"
              level="Básico"
              completed
            />
            <CourseCard
              title="Excel Básico"
              description="Introdução às funcionalidades essenciais do Excel."
              image="/placeholder.svg?height=200&width=350"
              category="Tecnologia"
              duration="3 horas"
              level="Básico"
              completed
            />
          </div>
        </TabsContent>
        <TabsContent value="recommended" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CourseCard
              title="Inteligência Emocional"
              description="Desenvolva habilidades para gerenciar emoções e melhorar relacionamentos interpessoais."
              image="/placeholder.svg?height=200&width=350"
              category="Desenvolvimento Pessoal"
              duration="6 horas"
              level="Intermediário"
            />
            <CourseCard
              title="Gestão de Tempo"
              description="Técnicas e ferramentas para otimizar seu tempo e aumentar a produtividade."
              image="/placeholder.svg?height=200&width=350"
              category="Produtividade"
              duration="4 horas"
              level="Básico"
            />
            <CourseCard
              title="Análise de Dados"
              description="Aprenda a interpretar dados e tomar decisões baseadas em evidências."
              image="/placeholder.svg?height=200&width=350"
              category="Tecnologia"
              duration="10 horas"
              level="Avançado"
            />
            <CourseCard
              title="Comunicação Eficaz"
              description="Desenvolva habilidades para se comunicar com clareza e assertividade."
              image="/placeholder.svg?height=200&width=350"
              category="Comunicação"
              duration="5 horas"
              level="Intermediário"
            />
          </div>
        </TabsContent>
        <TabsContent value="new" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CourseCard
              title="Design Thinking"
              description="Metodologia para solução criativa de problemas centrada no usuário."
              image="/placeholder.svg?height=200&width=350"
              category="Inovação"
              duration="8 horas"
              level="Intermediário"
              isNew
            />
            <CourseCard
              title="Gestão de Equipes Remotas"
              description="Estratégias para liderar e motivar equipes em trabalho remoto."
              image="/placeholder.svg?height=200&width=350"
              category="Liderança"
              duration="5 horas"
              level="Intermediário"
              isNew
            />
            <CourseCard
              title="Inteligência Artificial para Negócios"
              description="Como implementar IA para otimizar processos e resultados."
              image="/placeholder.svg?height=200&width=350"
              category="Tecnologia"
              duration="12 horas"
              level="Avançado"
              isNew
            />
            <CourseCard
              title="ESG e Sustentabilidade"
              description="Práticas ambientais, sociais e de governança para empresas."
              image="/placeholder.svg?height=200&width=350"
              category="Sustentabilidade"
              duration="6 horas"
              level="Intermediário"
              isNew
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
