"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/components/cursos/auth-provider"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { LineChart, PieChart } from "@/components/cursos/dashboard/charts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/cursos")
    }

    // Verificar se o usuário é administrador
    if (!isLoading && user && user.role !== "admin") {
      router.push("/cursos/dashboard")
    }
  }, [user, isLoading, router])

  if (isLoading || !user) {
    return <div className="container py-10">Carregando...</div>
  }

  if (user.role !== "admin") {
    return <div className="container py-10">Acesso não autorizado</div>
  }

  return (
    <div className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Painel Administrativo</h1>
        <p className="text-muted-foreground">Gerencie cursos, usuários e acompanhe métricas da plataforma.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
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
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">+42 usuários no último mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cursos Ativos</CardTitle>
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
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">+4 cursos adicionados este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Conclusão</CardTitle>
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
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">+5% em relação ao mês anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Média de Notas</CardTitle>
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
            <div className="text-2xl font-bold">7.8</div>
            <p className="text-xs text-muted-foreground">+0.3 pontos em relação ao mês anterior</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Engajamento dos Usuários</CardTitle>
            <CardDescription>Número de usuários ativos nos últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <LineChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Distribuição por Departamento</CardTitle>
            <CardDescription>Usuários por departamento</CardDescription>
          </CardHeader>
          <CardContent>
            <PieChart />
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="usuarios" className="w-full">
          <TabsList className="mb-6 w-full justify-start">
            <TabsTrigger value="usuarios">Usuários</TabsTrigger>
            <TabsTrigger value="cursos">Cursos</TabsTrigger>
            <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
          </TabsList>
          <TabsContent value="usuarios" className="mt-0">
            <Card>
              <CardHeader>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle>Gerenciamento de Usuários</CardTitle>
                    <CardDescription>Visualize e gerencie todos os usuários da plataforma</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex w-full max-w-sm items-center space-x-2">
                      <Input type="search" placeholder="Buscar usuários..." />
                      <Button type="submit">Buscar</Button>
                    </div>
                    <Button>Adicionar Usuário</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Departamento</TableHead>
                      <TableHead>Cursos Concluídos</TableHead>
                      <TableHead>Último Acesso</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Ana Silva</TableCell>
                      <TableCell>ana.silva@empresa.com</TableCell>
                      <TableCell>Marketing</TableCell>
                      <TableCell>8</TableCell>
                      <TableCell>Hoje, 10:42</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Ativo</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                          <Button variant="outline" size="sm">
                            Detalhes
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Carlos Mendes</TableCell>
                      <TableCell>carlos.mendes@empresa.com</TableCell>
                      <TableCell>Vendas</TableCell>
                      <TableCell>5</TableCell>
                      <TableCell>Ontem, 15:30</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Ativo</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                          <Button variant="outline" size="sm">
                            Detalhes
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Juliana Costa</TableCell>
                      <TableCell>juliana.costa@empresa.com</TableCell>
                      <TableCell>RH</TableCell>
                      <TableCell>12</TableCell>
                      <TableCell>Hoje, 09:15</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Ativo</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                          <Button variant="outline" size="sm">
                            Detalhes
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Roberto Alves</TableCell>
                      <TableCell>roberto.alves@empresa.com</TableCell>
                      <TableCell>TI</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell>Há 3 dias</TableCell>
                      <TableCell>
                        <Badge variant="outline">Inativo</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                          <Button variant="outline" size="sm">
                            Detalhes
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Fernanda Lima</TableCell>
                      <TableCell>fernanda.lima@empresa.com</TableCell>
                      <TableCell>Financeiro</TableCell>
                      <TableCell>7</TableCell>
                      <TableCell>Hoje, 14:20</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Ativo</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                          <Button variant="outline" size="sm">
                            Detalhes
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="cursos" className="mt-0">
            <Card>
              <CardHeader>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle>Gerenciamento de Cursos</CardTitle>
                    <CardDescription>Visualize e gerencie todos os cursos da plataforma</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex w-full max-w-sm items-center space-x-2">
                      <Input type="search" placeholder="Buscar cursos..." />
                      <Button type="submit">Buscar</Button>
                    </div>
                    <Button>Adicionar Curso</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Curso</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Instrutor</TableHead>
                      <TableHead>Alunos</TableHead>
                      <TableHead>Taxa de Conclusão</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Liderança Estratégica</TableCell>
                      <TableCell>Liderança</TableCell>
                      <TableCell>Ricardo Santos</TableCell>
                      <TableCell>245</TableCell>
                      <TableCell>68%</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Ativo</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                          <Button variant="outline" size="sm">
                            Detalhes
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Marketing Digital</TableCell>
                      <TableCell>Marketing</TableCell>
                      <TableCell>Camila Oliveira</TableCell>
                      <TableCell>189</TableCell>
                      <TableCell>72%</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Ativo</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                          <Button variant="outline" size="sm">
                            Detalhes
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Excel Avançado</TableCell>
                      <TableCell>Tecnologia</TableCell>
                      <TableCell>Marcos Pereira</TableCell>
                      <TableCell>312</TableCell>
                      <TableCell>85%</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Ativo</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                          <Button variant="outline" size="sm">
                            Detalhes
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Gestão de Projetos</TableCell>
                      <TableCell>Gestão</TableCell>
                      <TableCell>Luciana Martins</TableCell>
                      <TableCell>178</TableCell>
                      <TableCell>62%</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">Ativo</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                          <Button variant="outline" size="sm">
                            Detalhes
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Inteligência Artificial para Negócios</TableCell>
                      <TableCell>Tecnologia</TableCell>
                      <TableCell>Felipe Costa</TableCell>
                      <TableCell>98</TableCell>
                      <TableCell>45%</TableCell>
                      <TableCell>
                        <Badge>Rascunho</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                          <Button variant="outline" size="sm">
                            Detalhes
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="relatorios" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Relatórios Disponíveis</CardTitle>
                  <CardDescription>Gere relatórios detalhados sobre a plataforma</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Desempenho dos Usuários</h3>
                        <p className="text-sm text-muted-foreground">
                          Relatório detalhado sobre o desempenho dos usuários em cursos e avaliações.
                        </p>
                      </div>
                      <Button>Gerar</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Engajamento por Curso</h3>
                        <p className="text-sm text-muted-foreground">
                          Análise do engajamento dos usuários em cada curso da plataforma.
                        </p>
                      </div>
                      <Button>Gerar</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Conclusão de Trilhas</h3>
                        <p className="text-sm text-muted-foreground">
                          Estatísticas sobre a conclusão de trilhas de aprendizado.
                        </p>
                      </div>
                      <Button>Gerar</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Análise de Avaliações</h3>
                        <p className="text-sm text-muted-foreground">Desempenho dos usuários em avaliações e provas.</p>
                      </div>
                      <Button>Gerar</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Uso da Plataforma</h3>
                        <p className="text-sm text-muted-foreground">
                          Métricas de uso da plataforma, incluindo tempo de sessão e acessos.
                        </p>
                      </div>
                      <Button>Gerar</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Relatório Personalizado</CardTitle>
                  <CardDescription>Crie um relatório personalizado com os dados que você precisa</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Tipo de Relatório</label>
                      <Select defaultValue="users">
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo de relatório" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="users">Usuários</SelectItem>
                          <SelectItem value="courses">Cursos</SelectItem>
                          <SelectItem value="assessments">Avaliações</SelectItem>
                          <SelectItem value="tracks">Trilhas</SelectItem>
                          <SelectItem value="certificates">Certificados</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Período</label>
                      <div className="grid grid-cols-2 gap-4">
                        <Input type="date" placeholder="Data inicial" />
                        <Input type="date" placeholder="Data final" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Filtros</label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="department" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="department" className="text-sm">
                            Filtrar por departamento
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="course" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="course" className="text-sm">
                            Filtrar por curso
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="status" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="status" className="text-sm">
                            Filtrar por status
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Formato de Saída</label>
                      <Select defaultValue="excel">
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o formato" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excel">Excel</SelectItem>
                          <SelectItem value="pdf">PDF</SelectItem>
                          <SelectItem value="csv">CSV</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">Gerar Relatório Personalizado</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
