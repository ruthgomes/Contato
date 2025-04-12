"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/components/cursos/auth-provider"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { LineChart, PieChart, BarChart } from "@/components/cursos/dashboard/charts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DashboardPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const isAdmin = user?.role === "admin"

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/cursos")
    }

    // Redirecionar usuários normais para a página de cursos
    if (!isLoading && user && user.role !== "admin") {
      router.push("/cursos/dashboard/cursos")
    }
  }, [user, isLoading, router])

  if (isLoading || !user) {
    return <div className="container py-10">Carregando...</div>
  }

  return <div className="container py-6">{isAdmin ? <AdminDashboard /> : <UserDashboard user={user} />}</div>
}

function UserDashboard({ user }) {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Dashboard</h1>
        <p className="text-muted-foreground">
          Bem-vindo(a) de volta, {user.name}! Confira seu progresso e cursos recomendados.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="card-hover border-border/40">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary">Cursos em Andamento</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-accent"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">4</div>
            <p className="text-xs text-muted-foreground">+2 cursos iniciados este mês</p>
          </CardContent>
        </Card>
        <Card className="card-hover border-border/40">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary">Cursos Concluídos</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-accent"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">12</div>
            <p className="text-xs text-muted-foreground">+3 cursos concluídos este mês</p>
          </CardContent>
        </Card>
        <Card className="card-hover border-border/40">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary">Certificados</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-accent"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">8</div>
            <p className="text-xs text-muted-foreground">+2 certificados obtidos este mês</p>
          </CardContent>
        </Card>
        <Card className="card-hover border-border/40">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary">Média de Notas</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-accent"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">8.7</div>
            <p className="text-xs text-muted-foreground">+0.5 pontos em relação ao mês anterior</p>
          </CardContent>
        </Card>
      </div>

      {/* Resto do dashboard do usuário... */}
    </>
  )
}

function AdminDashboard() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Dashboard Administrativo</h1>
        <p className="text-muted-foreground">
          Visão geral da plataforma, desempenho dos usuários e estatísticas de cursos.
        </p>
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

      <Tabs defaultValue="geral" className="mt-8">
        <TabsList className="mb-6 w-full justify-start">
          <TabsTrigger value="geral">Visão Geral</TabsTrigger>
          <TabsTrigger value="cursos">Cursos Populares</TabsTrigger>
          <TabsTrigger value="setores">Desempenho por Setor</TabsTrigger>
          <TabsTrigger value="individual">Desempenho Individual</TabsTrigger>
        </TabsList>

        <TabsContent value="geral" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
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

          <Card>
            <CardHeader>
              <CardTitle>Desempenho Geral dos Usuários</CardTitle>
              <CardDescription>Métricas de desempenho de todos os usuários na plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Departamento</TableHead>
                    <TableHead>Usuários</TableHead>
                    <TableHead>Cursos Concluídos</TableHead>
                    <TableHead>Taxa de Conclusão</TableHead>
                    <TableHead>Média de Notas</TableHead>
                    <TableHead>Tempo Médio</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Marketing</TableCell>
                    <TableCell>42</TableCell>
                    <TableCell>156</TableCell>
                    <TableCell>72%</TableCell>
                    <TableCell>8.2</TableCell>
                    <TableCell>4h 30min</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Vendas</TableCell>
                    <TableCell>68</TableCell>
                    <TableCell>245</TableCell>
                    <TableCell>65%</TableCell>
                    <TableCell>7.8</TableCell>
                    <TableCell>5h 15min</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">TI</TableCell>
                    <TableCell>35</TableCell>
                    <TableCell>189</TableCell>
                    <TableCell>85%</TableCell>
                    <TableCell>9.1</TableCell>
                    <TableCell>3h 45min</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">RH</TableCell>
                    <TableCell>28</TableCell>
                    <TableCell>132</TableCell>
                    <TableCell>78%</TableCell>
                    <TableCell>8.5</TableCell>
                    <TableCell>4h 10min</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Financeiro</TableCell>
                    <TableCell>22</TableCell>
                    <TableCell>98</TableCell>
                    <TableCell>70%</TableCell>
                    <TableCell>7.9</TableCell>
                    <TableCell>4h 50min</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cursos" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Top 3 Cursos Mais Realizados</CardTitle>
                <CardDescription>Cursos com maior número de inscrições</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">1. Liderança Estratégica</h3>
                      <Badge>245 inscritos</Badge>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">2. Excel Avançado</h3>
                      <Badge>212 inscritos</Badge>
                    </div>
                    <Progress value={86} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">3. Marketing Digital</h3>
                      <Badge>189 inscritos</Badge>
                    </div>
                    <Progress value={77} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cursos com Maior Taxa de Conclusão</CardTitle>
                <CardDescription>Cursos com maior percentual de conclusão</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">1. Excel Básico</h3>
                      <Badge>92% concluído</Badge>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">2. Comunicação Empresarial</h3>
                      <Badge>85% concluído</Badge>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">3. Fundamentos de Gestão</h3>
                      <Badge>78% concluído</Badge>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cursos com Melhor Avaliação</CardTitle>
                <CardDescription>Cursos com as melhores notas dos usuários</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">1. Excel Avançado</h3>
                      <Badge>4.9/5.0</Badge>
                    </div>
                    <Progress value={98} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">2. Liderança Estratégica</h3>
                      <Badge>4.8/5.0</Badge>
                    </div>
                    <Progress value={96} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">3. Gestão de Projetos</h3>
                      <Badge>4.7/5.0</Badge>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Estatísticas de Cursos</CardTitle>
              <CardDescription>Dados detalhados sobre os cursos na plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="setores" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Desempenho por Setor</CardTitle>
              <CardDescription>Análise comparativa entre os diferentes setores da empresa</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <BarChart />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Setor com Maior Participação</CardTitle>
                <CardDescription>Setor com maior número de cursos concluídos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">1. TI</h3>
                      <Badge>189 cursos</Badge>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">2. Vendas</h3>
                      <Badge>165 cursos</Badge>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">3. Marketing</h3>
                      <Badge>156 cursos</Badge>
                    </div>
                    <Progress value={82} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">4. RH</h3>
                      <Badge>132 cursos</Badge>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">5. Financeiro</h3>
                      <Badge>98 cursos</Badge>
                    </div>
                    <Progress value={52} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Setor com Melhor Desempenho</CardTitle>
                <CardDescription>Setor com as melhores notas médias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">1. TI</h3>
                      <Badge>9.1/10</Badge>
                    </div>
                    <Progress value={91} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">2. RH</h3>
                      <Badge>8.5/10</Badge>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">3. Marketing</h3>
                      <Badge>8.2/10</Badge>
                    </div>
                    <Progress value={82} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">4. Financeiro</h3>
                      <Badge>7.9/10</Badge>
                    </div>
                    <Progress value={79} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">5. Vendas</h3>
                      <Badge>7.8/10</Badge>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="individual" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Desempenho Individual</CardTitle>
                <CardDescription>Análise detalhada do desempenho de usuários específicos</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Select>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Selecione um departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os departamentos</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="vendas">Vendas</SelectItem>
                    <SelectItem value="ti">TI</SelectItem>
                    <SelectItem value="rh">RH</SelectItem>
                    <SelectItem value="financeiro">Financeiro</SelectItem>
                  </SelectContent>
                </Select>
                <Button>Filtrar</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Departamento</TableHead>
                    <TableHead>Cursos Concluídos</TableHead>
                    <TableHead>Em Andamento</TableHead>
                    <TableHead>Média de Notas</TableHead>
                    <TableHead>Último Acesso</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Ana Silva</TableCell>
                    <TableCell>Marketing</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>8.7</TableCell>
                    <TableCell>Hoje, 10:42</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Ver detalhes
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Carlos Mendes</TableCell>
                    <TableCell>Vendas</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>7.9</TableCell>
                    <TableCell>Ontem, 15:30</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Ver detalhes
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Juliana Costa</TableCell>
                    <TableCell>RH</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>9.2</TableCell>
                    <TableCell>Hoje, 09:15</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Ver detalhes
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Roberto Alves</TableCell>
                    <TableCell>TI</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>9.5</TableCell>
                    <TableCell>Há 3 dias</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Ver detalhes
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Fernanda Lima</TableCell>
                    <TableCell>Financeiro</TableCell>
                    <TableCell>7</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>8.3</TableCell>
                    <TableCell>Hoje, 14:20</TableCell>
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

          <Card>
            <CardHeader>
              <CardTitle>Desempenho em Cursos Individuais</CardTitle>
              <CardDescription>Análise de desempenho por curso específico</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-center gap-4">
                <Select>
                  <SelectTrigger className="w-[300px]">
                    <SelectValue placeholder="Selecione um curso" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lideranca">Liderança Estratégica</SelectItem>
                    <SelectItem value="excel">Excel Avançado</SelectItem>
                    <SelectItem value="marketing">Marketing Digital</SelectItem>
                    <SelectItem value="gestao">Gestão de Projetos</SelectItem>
                    <SelectItem value="comunicacao">Comunicação Empresarial</SelectItem>
                  </SelectContent>
                </Select>
                <Button>Analisar</Button>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Distribuição de Notas</h3>
                  <div className="h-64">
                    <BarChart />
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-medium">Tempo Médio de Conclusão</h3>
                  <div className="h-64">
                    <LineChart />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  )
}
