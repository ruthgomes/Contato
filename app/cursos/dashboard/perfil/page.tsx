"use client"

import { Switch } from "@/components/ui/switch"

import { useAuth } from "@/components/cursos/auth-provider"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PieChart } from "@/components/cursos/dashboard/charts"

export default function PerfilPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const isAdmin = user?.role === "admin"

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
        <h1 className="text-3xl font-bold tracking-tight">Meu Perfil</h1>
        <p className="text-muted-foreground">Gerencie suas informações pessoais e acompanhe seu progresso</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt={user.name} />
                <AvatarFallback className="text-2xl">{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
            <CardTitle>{user.name}</CardTitle>
            <CardDescription>{user.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-sm font-medium text-muted-foreground">Departamento</h3>
                <p>{user.department}</p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-medium text-muted-foreground">Cargo</h3>
                <p>{user.role === "admin" ? "Administrador" : "Colaborador"}</p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-medium text-muted-foreground">Status</h3>
                <Badge className="bg-green-500">Ativo</Badge>
              </div>
              <div className="pt-4">
                <Button className="w-full">Editar Perfil</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          {isAdmin ? (
            <AdminDashboard />
          ) : (
            <Tabs defaultValue="historico" className="w-full">
              <TabsList className="mb-6 w-full justify-start">
                <TabsTrigger value="historico">Histórico de Cursos</TabsTrigger>
                <TabsTrigger value="dados">Dados Pessoais</TabsTrigger>
                <TabsTrigger value="preferencias">Preferências</TabsTrigger>
              </TabsList>

              <TabsContent value="historico" className="mt-0 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Cursos Concluídos</CardTitle>
                    <CardDescription>Cursos que você completou com sucesso</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Curso</TableHead>
                          <TableHead>Categoria</TableHead>
                          <TableHead>Data de Conclusão</TableHead>
                          <TableHead>Nota</TableHead>
                          <TableHead>Certificado</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Fundamentos de Gestão</TableCell>
                          <TableCell>Gestão</TableCell>
                          <TableCell>10/03/2023</TableCell>
                          <TableCell>9.5</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              Ver Certificado
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Comunicação Empresarial</TableCell>
                          <TableCell>Comunicação</TableCell>
                          <TableCell>18/02/2023</TableCell>
                          <TableCell>8.0</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              Ver Certificado
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Excel Básico</TableCell>
                          <TableCell>Tecnologia</TableCell>
                          <TableCell>05/01/2023</TableCell>
                          <TableCell>10.0</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              Ver Certificado
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cursos em Andamento</CardTitle>
                    <CardDescription>Cursos que você está realizando atualmente</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="mb-2 flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Liderança Estratégica</h4>
                            <p className="text-sm text-muted-foreground">Categoria: Liderança</p>
                          </div>
                          <Badge>45% concluído</Badge>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>
                      <div>
                        <div className="mb-2 flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Marketing Digital</h4>
                            <p className="text-sm text-muted-foreground">Categoria: Marketing</p>
                          </div>
                          <Badge>60% concluído</Badge>
                        </div>
                        <Progress value={60} className="h-2" />
                      </div>
                      <div>
                        <div className="mb-2 flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Excel Avançado</h4>
                            <p className="text-sm text-muted-foreground">Categoria: Tecnologia</p>
                          </div>
                          <Badge>30% concluído</Badge>
                        </div>
                        <Progress value={30} className="h-2" />
                      </div>
                      <div>
                        <div className="mb-2 flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Gestão de Projetos</h4>
                            <p className="text-sm text-muted-foreground">Categoria: Gestão</p>
                          </div>
                          <Badge>15% concluído</Badge>
                        </div>
                        <Progress value={15} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cursos Pendentes</CardTitle>
                    <CardDescription>Cursos recomendados que você ainda não iniciou</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Curso</TableHead>
                          <TableHead>Categoria</TableHead>
                          <TableHead>Duração</TableHead>
                          <TableHead>Ação</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Inteligência Emocional</TableCell>
                          <TableCell>Desenvolvimento Pessoal</TableCell>
                          <TableCell>6 horas</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              Iniciar
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Gestão de Tempo</TableCell>
                          <TableCell>Produtividade</TableCell>
                          <TableCell>4 horas</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              Iniciar
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Análise de Dados</TableCell>
                          <TableCell>Tecnologia</TableCell>
                          <TableCell>10 horas</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              Iniciar
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="dados" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Dados Pessoais</CardTitle>
                    <CardDescription>Informações detalhadas do seu perfil</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h3 className="mb-2 text-sm font-medium text-muted-foreground">Nome Completo</h3>
                          <p>{user.name}</p>
                        </div>
                        <div>
                          <h3 className="mb-2 text-sm font-medium text-muted-foreground">E-mail</h3>
                          <p>{user.email}</p>
                        </div>
                        <div>
                          <h3 className="mb-2 text-sm font-medium text-muted-foreground">Departamento</h3>
                          <p>{user.department}</p>
                        </div>
                        <div>
                          <h3 className="mb-2 text-sm font-medium text-muted-foreground">Cargo</h3>
                          <p>Analista Sênior</p>
                        </div>
                        <div>
                          <h3 className="mb-2 text-sm font-medium text-muted-foreground">Data de Admissão</h3>
                          <p>15/01/2020</p>
                        </div>
                        <div>
                          <h3 className="mb-2 text-sm font-medium text-muted-foreground">Telefone</h3>
                          <p>(11) 98765-4321</p>
                        </div>
                        <div>
                          <h3 className="mb-2 text-sm font-medium text-muted-foreground">Localização</h3>
                          <p>São Paulo, SP</p>
                        </div>
                        <div>
                          <h3 className="mb-2 text-sm font-medium text-muted-foreground">Gestor</h3>
                          <p>Carlos Mendes</p>
                        </div>
                      </div>
                      <div className="pt-4">
                        <Button>Atualizar Dados</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferencias" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Preferências</CardTitle>
                    <CardDescription>Personalize sua experiência na plataforma</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="mb-4 text-lg font-medium">Notificações</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">E-mail de novos cursos</h4>
                              <p className="text-sm text-muted-foreground">
                                Receba notificações quando novos cursos forem adicionados
                              </p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">Lembretes de cursos</h4>
                              <p className="text-sm text-muted-foreground">
                                Receba lembretes para continuar cursos em andamento
                              </p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">Notificações de avaliações</h4>
                              <p className="text-sm text-muted-foreground">Receba alertas sobre avaliações pendentes</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button>Salvar Preferências</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
    </div>
  )
}

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Dashboard de Cursos</CardTitle>
          <CardDescription>Visão geral do desempenho dos cursos na plataforma</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-primary/5 p-4">
              <h3 className="text-lg font-medium text-primary">Total de Usuários</h3>
              <div className="mt-2 flex items-end justify-between">
                <p className="text-3xl font-bold">1,248</p>
                <Badge className="bg-green-500">+42 este mês</Badge>
              </div>
            </div>
            <div className="rounded-lg bg-primary/5 p-4">
              <h3 className="text-lg font-medium text-primary">Cursos Concluídos</h3>
              <div className="mt-2 flex items-end justify-between">
                <p className="text-3xl font-bold">3,567</p>
                <Badge className="bg-green-500">+156 este mês</Badge>
              </div>
            </div>
            <div className="rounded-lg bg-primary/5 p-4">
              <h3 className="text-lg font-medium text-primary">Cursos Pendentes</h3>
              <div className="mt-2 flex items-end justify-between">
                <p className="text-3xl font-bold">2,189</p>
                <Badge variant="outline">-23 este mês</Badge>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-4 text-lg font-medium">Distribuição de Conclusão</h3>
            <div className="h-64">
              <PieChart />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Cursos Mais Populares</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Curso</TableHead>
                  <TableHead>Inscritos</TableHead>
                  <TableHead>Concluídos</TableHead>
                  <TableHead>Taxa de Conclusão</TableHead>
                  <TableHead>Avaliação Média</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Liderança Estratégica</TableCell>
                  <TableCell>245</TableCell>
                  <TableCell>167</TableCell>
                  <TableCell>68%</TableCell>
                  <TableCell>4.8/5.0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Marketing Digital</TableCell>
                  <TableCell>189</TableCell>
                  <TableCell>136</TableCell>
                  <TableCell>72%</TableCell>
                  <TableCell>4.6/5.0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Excel Avançado</TableCell>
                  <TableCell>312</TableCell>
                  <TableCell>265</TableCell>
                  <TableCell>85%</TableCell>
                  <TableCell>4.9/5.0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Gestão de Projetos</TableCell>
                  <TableCell>178</TableCell>
                  <TableCell>110</TableCell>
                  <TableCell>62%</TableCell>
                  <TableCell>4.5/5.0</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dados Pessoais</CardTitle>
          <CardDescription>Informações detalhadas do seu perfil</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-sm font-medium text-muted-foreground">Nome Completo</h3>
                <p>Admin</p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-medium text-muted-foreground">E-mail</h3>
                <p>admin@empresa.com</p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-medium text-muted-foreground">Departamento</h3>
                <p>TI</p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-medium text-muted-foreground">Cargo</h3>
                <p>Administrador da Plataforma</p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-medium text-muted-foreground">Data de Admissão</h3>
                <p>01/01/2020</p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-medium text-muted-foreground">Telefone</h3>
                <p>(11) 99999-9999</p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-medium text-muted-foreground">Localização</h3>
                <p>São Paulo, SP</p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-medium text-muted-foreground">Função</h3>
                <p>Administrador do Sistema</p>
              </div>
            </div>
            <div className="pt-4">
              <Button>Atualizar Dados</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
