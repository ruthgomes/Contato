"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/components/cursos/auth-provider"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Clock, FileText, type LucideIcon, Play, PlayCircle, Video } from "lucide-react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CursoPage({ params }: { params: { id: string } }) {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [activeModule, setActiveModule] = useState("module1")

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/cursos")
    }
  }, [user, isLoading, router])

  if (isLoading || !user) {
    return <div className="container py-10">Carregando...</div>
  }

  // Dados simulados do curso
  const course = {
    id: params.id,
    title: "Liderança Estratégica",
    description: "Desenvolva habilidades essenciais para liderar equipes e projetos com eficiência.",
    instructor: "Ricardo Santos",
    category: "Liderança",
    duration: "8 horas",
    level: "Intermediário",
    progress: 45,
    rating: 4.8,
    totalStudents: 245,
    completionRate: "68%",
    lastUpdated: "15/03/2023",
    modules: [
      {
        id: "module1",
        title: "Fundamentos de Liderança",
        description: "Conceitos básicos e teorias de liderança",
        duration: "1h 30min",
        completed: true,
        lessons: [
          {
            id: "lesson1",
            title: "Introdução à Liderança",
            type: "video",
            duration: "15min",
            completed: true,
          },
          {
            id: "lesson2",
            title: "Teorias de Liderança",
            type: "video",
            duration: "25min",
            completed: true,
          },
          {
            id: "lesson3",
            title: "Estilos de Liderança",
            type: "video",
            duration: "20min",
            completed: true,
          },
          {
            id: "lesson4",
            title: "Avaliação do Módulo 1",
            type: "quiz",
            duration: "30min",
            completed: true,
          },
        ],
      },
      {
        id: "module2",
        title: "Comunicação para Líderes",
        description: "Técnicas de comunicação eficaz para líderes",
        duration: "2h",
        completed: true,
        lessons: [
          {
            id: "lesson5",
            title: "Princípios de Comunicação Eficaz",
            type: "video",
            duration: "20min",
            completed: true,
          },
          {
            id: "lesson6",
            title: "Comunicação Verbal e Não-verbal",
            type: "video",
            duration: "25min",
            completed: true,
          },
          {
            id: "lesson7",
            title: "Feedback Construtivo",
            type: "video",
            duration: "30min",
            completed: true,
          },
          {
            id: "lesson8",
            title: "Comunicação em Situações Difíceis",
            type: "video",
            duration: "15min",
            completed: true,
          },
          {
            id: "lesson9",
            title: "Avaliação do Módulo 2",
            type: "quiz",
            duration: "30min",
            completed: true,
          },
        ],
      },
      {
        id: "module3",
        title: "Gestão de Equipes",
        description: "Estratégias para gerenciar e motivar equipes",
        duration: "1h 45min",
        completed: false,
        lessons: [
          {
            id: "lesson10",
            title: "Formação de Equipes de Alto Desempenho",
            type: "video",
            duration: "25min",
            completed: true,
          },
          {
            id: "lesson11",
            title: "Motivação e Engajamento",
            type: "video",
            duration: "20min",
            completed: true,
          },
          {
            id: "lesson12",
            title: "Delegação Eficaz",
            type: "video",
            duration: "15min",
            completed: false,
          },
          {
            id: "lesson13",
            title: "Gestão de Conflitos",
            type: "video",
            duration: "20min",
            completed: false,
          },
          {
            id: "lesson14",
            title: "Avaliação do Módulo 3",
            type: "quiz",
            duration: "25min",
            completed: false,
          },
        ],
      },
      {
        id: "module4",
        title: "Tomada de Decisão",
        description: "Métodos e ferramentas para tomada de decisão estratégica",
        duration: "1h 30min",
        completed: false,
        lessons: [
          {
            id: "lesson15",
            title: "Processo de Tomada de Decisão",
            type: "video",
            duration: "20min",
            completed: false,
          },
          {
            id: "lesson16",
            title: "Análise de Problemas",
            type: "video",
            duration: "25min",
            completed: false,
          },
          {
            id: "lesson17",
            title: "Ferramentas para Tomada de Decisão",
            type: "video",
            duration: "20min",
            completed: false,
          },
          {
            id: "lesson18",
            title: "Avaliação do Módulo 4",
            type: "quiz",
            duration: "25min",
            completed: false,
          },
        ],
      },
      {
        id: "module5",
        title: "Liderança Estratégica",
        description: "Aplicação de conceitos estratégicos na liderança",
        duration: "1h 15min",
        completed: false,
        lessons: [
          {
            id: "lesson19",
            title: "Visão e Planejamento Estratégico",
            type: "video",
            duration: "20min",
            completed: false,
          },
          {
            id: "lesson20",
            title: "Implementação de Mudanças",
            type: "video",
            duration: "25min",
            completed: false,
          },
          {
            id: "lesson21",
            title: "Avaliação de Desempenho",
            type: "video",
            duration: "15min",
            completed: false,
          },
          {
            id: "lesson22",
            title: "Avaliação Final do Curso",
            type: "quiz",
            duration: "15min",
            completed: false,
          },
        ],
      },
    ],
  }

  const getLessonIcon = (type: string): LucideIcon => {
    switch (type) {
      case "video":
        return Video
      case "quiz":
        return FileText
      default:
        return FileText
    }
  }

  return (
    <div className="container py-6">
      <div className="mb-8 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Link href="/cursos/dashboard/cursos" className="text-sm text-muted-foreground hover:underline">
            Cursos
          </Link>
          <span className="text-sm text-muted-foreground">/</span>
          <span className="text-sm font-medium">{course.title}</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
        <p className="text-muted-foreground">{course.description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Conteúdo do Curso</CardTitle>
              <CardDescription>
                {course.modules.length} módulos • {course.duration} de conteúdo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full" defaultValue={activeModule}>
                {course.modules.map((module) => (
                  <AccordionItem key={module.id} value={module.id}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex w-full items-center justify-between pr-4 text-left">
                        <div className="flex items-center gap-2">
                          {module.completed ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : (
                            <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                          )}
                          <span>{module.title}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{module.duration}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-7">
                        {module.lessons.map((lesson) => {
                          const LessonIcon = getLessonIcon(lesson.type)
                          return (
                            <div
                              key={lesson.id}
                              className="flex items-center justify-between rounded-md p-2 hover:bg-muted"
                            >
                              <div className="flex items-center gap-2">
                                {lesson.completed ? (
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                ) : (
                                  <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                                )}
                                <LessonIcon className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{lesson.title}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Play className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Avaliações</CardTitle>
              <CardDescription>Avaliações e provas do curso</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Avaliação</TableHead>
                    <TableHead>Módulo</TableHead>
                    <TableHead>Duração</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Nota</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Avaliação do Módulo 1</TableCell>
                    <TableCell>Fundamentos de Liderança</TableCell>
                    <TableCell>30min</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Concluída</Badge>
                    </TableCell>
                    <TableCell>9.0</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Ver resultados
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Avaliação do Módulo 2</TableCell>
                    <TableCell>Comunicação para Líderes</TableCell>
                    <TableCell>30min</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Concluída</Badge>
                    </TableCell>
                    <TableCell>8.5</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Ver resultados
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Avaliação do Módulo 3</TableCell>
                    <TableCell>Gestão de Equipes</TableCell>
                    <TableCell>25min</TableCell>
                    <TableCell>
                      <Badge variant="outline">Pendente</Badge>
                    </TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Realizar
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Avaliação do Módulo 4</TableCell>
                    <TableCell>Tomada de Decisão</TableCell>
                    <TableCell>25min</TableCell>
                    <TableCell>
                      <Badge variant="outline">Bloqueada</Badge>
                    </TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" disabled>
                        Realizar
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Avaliação Final</TableCell>
                    <TableCell>Liderança Estratégica</TableCell>
                    <TableCell>15min</TableCell>
                    <TableCell>
                      <Badge variant="outline">Bloqueada</Badge>
                    </TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" disabled>
                        Realizar
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Seu Progresso</CardTitle>
              <CardDescription>Acompanhe seu avanço no curso</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progresso geral</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>2 de 5 módulos concluídos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>9 de 22 aulas concluídas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>2 de 5 avaliações realizadas</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="font-medium">Próxima aula</h3>
                <div className="rounded-md border p-3">
                  <div className="flex items-center gap-2">
                    <PlayCircle className="h-10 w-10 text-primary" />
                    <div>
                      <h4 className="font-medium">Delegação Eficaz</h4>
                      <p className="text-sm text-muted-foreground">Módulo 3 • 15min</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full">Continuar Curso</Button>
            </CardContent>
            <CardFooter className="flex flex-col items-start border-t px-6 py-4">
              <h3 className="mb-2 font-medium">Informações do Curso</h3>
              <dl className="grid w-full grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <dt className="text-muted-foreground">Instrutor:</dt>
                <dd>{course.instructor}</dd>
                <dt className="text-muted-foreground">Categoria:</dt>
                <dd>{course.category}</dd>
                <dt className="text-muted-foreground">Nível:</dt>
                <dd>{course.level}</dd>
                <dt className="text-muted-foreground">Duração:</dt>
                <dd>{course.duration}</dd>
                <dt className="text-muted-foreground">Avaliação:</dt>
                <dd className="flex items-center">
                  {course.rating}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1 h-4 w-4 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </dd>
                <dt className="text-muted-foreground">Alunos:</dt>
                <dd>{course.totalStudents}</dd>
                <dt className="text-muted-foreground">Atualizado:</dt>
                <dd>{course.lastUpdated}</dd>
              </dl>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
