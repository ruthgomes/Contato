"use client"

import { CardFooter } from "@/components/ui/card"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/components/cursos/auth-provider"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { LineChart, PieChart } from "@/components/cursos/dashboard/charts"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function DesempenhoPage() {
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
        <h1 className="text-3xl font-bold tracking-tight">Meu Desempenho</h1>
        <p className="text-muted-foreground">Acompanhe seu progresso e resultados em todos os cursos e avaliações.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Média Geral</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.7</div>
            <p className="text-xs text-muted-foreground">+0.5 pontos em relação ao mês anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cursos Concluídos</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 cursos concluídos este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avaliações Realizadas</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+5 avaliações realizadas este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Horas de Estudo</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42h</div>
            <p className="text-xs text-muted-foreground">+8h em relação ao mês anterior</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Progresso de Aprendizado</CardTitle>
            <CardDescription>Seu progresso nos últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <LineChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Distribuição de Estudos</CardTitle>
            <CardDescription>Tempo dedicado por categoria</CardDescription>
          </CardHeader>
          <CardContent>
            <PieChart />
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="cursos" className="w-full">
          <TabsList className="mb-6 w-full justify-start">
            <TabsTrigger value="cursos">Desempenho por Curso</TabsTrigger>
            <TabsTrigger value="avaliacoes">Histórico de Avaliações</TabsTrigger>
            <TabsTrigger value="certificados">Certificados</TabsTrigger>
          </TabsList>
          <TabsContent value="cursos" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Desempenho por Curso</CardTitle>
                <CardDescription>Seu progresso e notas em cada curso</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Curso</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Progresso</TableHead>
                      <TableHead>Nota Média</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Liderança Estratégica</TableCell>
                      <TableCell>Liderança</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={45} className="h-2 w-[100px]" />
                          <span className="text-xs">45%</span>
                        </div>
                      </TableCell>
                      <TableCell>8.5</TableCell>
                      <TableCell>
                        <Badge>Em andamento</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Marketing Digital</TableCell>
                      <TableCell>Marketing</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={60} className="h-2 w-[100px]" />
                          <span className="text-xs">60%</span>
                        </div>
                      </TableCell>
                      <TableCell>9.0</TableCell>
                      <TableCell>
                        <Badge>Em andamento</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Excel Avançado</TableCell>
                      <TableCell>Tecnologia</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={30} className="h-2 w-[100px]" />
                          <span className="text-xs">30%</span>
                        </div>
                      </TableCell>
                      <TableCell>7.5</TableCell>
                      <TableCell>
                        <Badge>Em andamento</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Gestão de Projetos</TableCell>
                      <TableCell>Gestão</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={15} className="h-2 w-[100px]" />
                          <span className="text-xs">15%</span>
                        </div>
                      </TableCell>
                      <TableCell>8.0</TableCell>
                      <TableCell>
                        <Badge>Em andamento</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Fundamentos de Gestão</TableCell>
                      <TableCell>Gestão</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={100} className="h-2 w-[100px]" />
                          <span className="text-xs">100%</span>
                        </div>
                      </TableCell>
                      <TableCell>9.5</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Concluído</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Comunicação Empresarial</TableCell>
                      <TableCell>Comunicação</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={100} className="h-2 w-[100px]" />
                          <span className="text-xs">100%</span>
                        </div>
                      </TableCell>
                      <TableCell>8.0</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Concluído</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Excel Básico</TableCell>
                      <TableCell>Tecnologia</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={100} className="h-2 w-[100px]" />
                          <span className="text-xs">100%</span>
                        </div>
                      </TableCell>
                      <TableCell>10.0</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Concluído</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="avaliacoes" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Histórico de Avaliações</CardTitle>
                <CardDescription>Todas as avaliações realizadas</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Avaliação</TableHead>
                      <TableHead>Curso</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Nota</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Avaliação do Módulo 2</TableCell>
                      <TableCell>Liderança Estratégica</TableCell>
                      <TableCell>15/04/2023</TableCell>
                      <TableCell>8.5</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Aprovado</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Ver detalhes
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Avaliação do Módulo 4</TableCell>
                      <TableCell>Marketing Digital</TableCell>
                      <TableCell>22/04/2023</TableCell>
                      <TableCell>9.0</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Aprovado</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Ver detalhes
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Avaliação do Módulo 1</TableCell>
                      <TableCell>Excel Avançado</TableCell>
                      <TableCell>05/05/2023</TableCell>
                      <TableCell>7.5</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Aprovado</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Ver detalhes
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Avaliação Final</TableCell>
                      <TableCell>Fundamentos de Gestão</TableCell>
                      <TableCell>10/03/2023</TableCell>
                      <TableCell>9.5</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Aprovado</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Ver detalhes
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Avaliação Final</TableCell>
                      <TableCell>Comunicação Empresarial</TableCell>
                      <TableCell>18/02/2023</TableCell>
                      <TableCell>8.0</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Aprovado</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Ver detalhes
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Avaliação Final</TableCell>
                      <TableCell>Excel Básico</TableCell>
                      <TableCell>05/01/2023</TableCell>
                      <TableCell>10.0</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Aprovado</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Ver detalhes
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="certificados" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Certificados</CardTitle>
                <CardDescription>Certificados obtidos ao concluir cursos e trilhas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Fundamentos de Gestão</CardTitle>
                      <CardDescription>Concluído em 10/03/2023</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-muted">
                        <img
                          src="/placeholder.svg?height=300&width=400"
                          alt="Certificado de Fundamentos de Gestão"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        Visualizar
                      </Button>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Comunicação Empresarial</CardTitle>
                      <CardDescription>Concluído em 18/02/2023</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-muted">
                        <img
                          src="/placeholder.svg?height=300&width=400"
                          alt="Certificado de Comunicação Empresarial"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        Visualizar
                      </Button>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Excel Básico</CardTitle>
                      <CardDescription>Concluído em 05/01/2023</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-muted">
                        <img
                          src="/placeholder.svg?height=300&width=400"
                          alt="Certificado de Excel Básico"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        Visualizar
                      </Button>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Produtividade Office</CardTitle>
                      <CardDescription>Trilha concluída em 05/01/2023</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-muted">
                        <img
                          src="/placeholder.svg?height=300&width=400"
                          alt="Certificado da Trilha de Produtividade Office"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        Visualizar
                      </Button>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
