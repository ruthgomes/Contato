"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/components/cursos/auth-provider"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function TrilhasPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

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
        <h1 className="text-3xl font-bold tracking-tight">Trilhas de Aprendizado</h1>
        <p className="text-muted-foreground">
          Percursos estruturados para desenvolver competências específicas de forma progressiva.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6 w-full justify-start">
          <TabsTrigger value="all">Todas as Trilhas</TabsTrigger>
          <TabsTrigger value="in-progress">Em Andamento</TabsTrigger>
          <TabsTrigger value="recommended">Recomendadas</TabsTrigger>
          <TabsTrigger value="completed">Concluídas</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Liderança e Gestão</CardTitle>
                  <Badge>Em andamento</Badge>
                </div>
                <CardDescription>
                  Desenvolva habilidades essenciais para liderar equipes e gerenciar projetos.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span>Progresso: 2 de 5 cursos</span>
                  <span className="font-medium">40%</span>
                </div>
                <Progress value={40} className="h-2" />
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm">Fundamentos de Liderança</span>
                    </div>
                    <Badge variant="outline" className="text-green-500">
                      Concluído
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm">Comunicação para Líderes</span>
                    </div>
                    <Badge variant="outline" className="text-green-500">
                      Concluído
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm">Gestão de Equipes</span>
                    </div>
                    <Badge variant="outline" className="text-blue-500">
                      Em andamento
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Gestão de Conflitos</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Liderança Estratégica</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Continuar Trilha</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Marketing Digital</CardTitle>
                  <Badge>Em andamento</Badge>
                </div>
                <CardDescription>
                  Aprenda estratégias e ferramentas para impulsionar sua presença online.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span>Progresso: 1 de 4 cursos</span>
                  <span className="font-medium">25%</span>
                </div>
                <Progress value={25} className="h-2" />
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm">Fundamentos de Marketing Digital</span>
                    </div>
                    <Badge variant="outline" className="text-green-500">
                      Concluído
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm">Redes Sociais para Negócios</span>
                    </div>
                    <Badge variant="outline" className="text-blue-500">
                      Em andamento
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">SEO e Otimização</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Análise de Métricas</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Continuar Trilha</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Análise de Dados</CardTitle>
                  <Badge variant="outline">Não iniciada</Badge>
                </div>
                <CardDescription>
                  Aprenda a coletar, processar e interpretar dados para tomada de decisões.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span>Progresso: 0 de 5 cursos</span>
                  <span className="font-medium">0%</span>
                </div>
                <Progress value={0} className="h-2" />
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Fundamentos de Análise de Dados</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Excel para Análise de Dados</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Visualização de Dados</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Estatística Básica</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Business Intelligence</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Iniciar Trilha</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Desenvolvimento Pessoal</CardTitle>
                  <Badge variant="outline">Não iniciada</Badge>
                </div>
                <CardDescription>
                  Desenvolva habilidades comportamentais essenciais para o sucesso profissional.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span>Progresso: 0 de 4 cursos</span>
                  <span className="font-medium">0%</span>
                </div>
                <Progress value={0} className="h-2" />
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Inteligência Emocional</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Comunicação Eficaz</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Gestão de Tempo</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Resiliência e Adaptabilidade</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Iniciar Trilha</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Produtividade Office</CardTitle>
                  <Badge className="bg-green-500">Concluída</Badge>
                </div>
                <CardDescription>
                  Domine as ferramentas do pacote Office para aumentar sua produtividade.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span>Progresso: 3 de 3 cursos</span>
                  <span className="font-medium">100%</span>
                </div>
                <Progress value={100} className="h-2" />
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm">Excel Básico</span>
                    </div>
                    <Badge variant="outline" className="text-green-500">
                      Concluído
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm">Word Avançado</span>
                    </div>
                    <Badge variant="outline" className="text-green-500">
                      Concluído
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm">PowerPoint Profissional</span>
                    </div>
                    <Badge variant="outline" className="text-green-500">
                      Concluído
                    </Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Ver Certificado
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Gestão Financeira</CardTitle>
                  <Badge variant="outline">Não iniciada</Badge>
                </div>
                <CardDescription>
                  Aprenda a gerenciar recursos financeiros e tomar decisões estratégicas.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span>Progresso: 0 de 4 cursos</span>
                  <span className="font-medium">0%</span>
                </div>
                <Progress value={0} className="h-2" />
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Fundamentos de Finanças</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Análise de Investimentos</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Gestão de Custos</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Planejamento Financeiro</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Iniciar Trilha</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="in-progress" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Liderança e Gestão</CardTitle>
                  <Badge>Em andamento</Badge>
                </div>
                <CardDescription>
                  Desenvolva habilidades essenciais para liderar equipes e gerenciar projetos.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span>Progresso: 2 de 5 cursos</span>
                  <span className="font-medium">40%</span>
                </div>
                <Progress value={40} className="h-2" />
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm">Fundamentos de Liderança</span>
                    </div>
                    <Badge variant="outline" className="text-green-500">
                      Concluído
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm">Comunicação para Líderes</span>
                    </div>
                    <Badge variant="outline" className="text-green-500">
                      Concluído
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm">Gestão de Equipes</span>
                    </div>
                    <Badge variant="outline" className="text-blue-500">
                      Em andamento
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Gestão de Conflitos</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Liderança Estratégica</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Continuar Trilha</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Marketing Digital</CardTitle>
                  <Badge>Em andamento</Badge>
                </div>
                <CardDescription>
                  Aprenda estratégias e ferramentas para impulsionar sua presença online.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span>Progresso: 1 de 4 cursos</span>
                  <span className="font-medium">25%</span>
                </div>
                <Progress value={25} className="h-2" />
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm">Fundamentos de Marketing Digital</span>
                    </div>
                    <Badge variant="outline" className="text-green-500">
                      Concluído
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm">Redes Sociais para Negócios</span>
                    </div>
                    <Badge variant="outline" className="text-blue-500">
                      Em andamento
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">SEO e Otimização</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Análise de Métricas</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Continuar Trilha</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="recommended" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Análise de Dados</CardTitle>
                  <Badge variant="outline">Não iniciada</Badge>
                </div>
                <CardDescription>
                  Aprenda a coletar, processar e interpretar dados para tomada de decisões.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span>Progresso: 0 de 5 cursos</span>
                  <span className="font-medium">0%</span>
                </div>
                <Progress value={0} className="h-2" />
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Fundamentos de Análise de Dados</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Excel para Análise de Dados</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Visualização de Dados</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Estatística Básica</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Business Intelligence</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Iniciar Trilha</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Desenvolvimento Pessoal</CardTitle>
                  <Badge variant="outline">Não iniciada</Badge>
                </div>
                <CardDescription>
                  Desenvolva habilidades comportamentais essenciais para o sucesso profissional.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span>Progresso: 0 de 4 cursos</span>
                  <span className="font-medium">0%</span>
                </div>
                <Progress value={0} className="h-2" />
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Inteligência Emocional</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Comunicação Eficaz</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Gestão de Tempo</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span className="text-sm">Resiliência e Adaptabilidade</span>
                    </div>
                    <Badge variant="outline">Não iniciado</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Iniciar Trilha</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="completed" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Produtividade Office</CardTitle>
                  <Badge className="bg-green-500">Concluída</Badge>
                </div>
                <CardDescription>
                  Domine as ferramentas do pacote Office para aumentar sua produtividade.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span>Progresso: 3 de 3 cursos</span>
                  <span className="font-medium">100%</span>
                </div>
                <Progress value={100} className="h-2" />
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm">Excel Básico</span>
                    </div>
                    <Badge variant="outline" className="text-green-500">
                      Concluído
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm">Word Avançado</span>
                    </div>
                    <Badge variant="outline" className="text-green-500">
                      Concluído
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm">PowerPoint Profissional</span>
                    </div>
                    <Badge variant="outline" className="text-green-500">
                      Concluído
                    </Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Ver Certificado
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
