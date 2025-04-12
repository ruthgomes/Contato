"use client"

import { useAuth } from "@/components/cursos/auth-provider"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export default function AdministracaoPage() {
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
        <h1 className="text-3xl font-bold tracking-tight text-primary">Administração</h1>
        <p className="text-muted-foreground">Gerencie usuários e controle de acesso à plataforma</p>
      </div>

      <Tabs defaultValue="usuarios" className="w-full">
        <TabsList className="mb-6 w-full justify-start">
          <TabsTrigger value="usuarios">Gerenciamento de Usuários</TabsTrigger>
          <TabsTrigger value="limitacoes">Limitação de Contas</TabsTrigger>
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Adicionar Usuário</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Adicionar Novo Usuário</DialogTitle>
                        <DialogDescription>
                          Preencha os dados para adicionar um novo usuário à plataforma.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Nome
                          </Label>
                          <Input id="name" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="email" className="text-right">
                            Email
                          </Label>
                          <Input id="email" type="email" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="department" className="text-right">
                            Departamento
                          </Label>
                          <Select>
                            <SelectTrigger id="department" className="col-span-3">
                              <SelectValue placeholder="Selecione um departamento" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="marketing">Marketing</SelectItem>
                              <SelectItem value="vendas">Vendas</SelectItem>
                              <SelectItem value="ti">TI</SelectItem>
                              <SelectItem value="rh">RH</SelectItem>
                              <SelectItem value="financeiro">Financeiro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="role" className="text-right">
                            Função
                          </Label>
                          <Select>
                            <SelectTrigger id="role" className="col-span-3">
                              <SelectValue placeholder="Selecione uma função" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="user">Usuário</SelectItem>
                              <SelectItem value="admin">Administrador</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Adicionar Usuário</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
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

        <TabsContent value="limitacoes" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Limitação de Contas</CardTitle>
              <CardDescription>Configure restrições e permissões para diferentes tipos de usuários</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Permissões por Departamento</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Departamento</TableHead>
                        <TableHead>Acesso a Cursos</TableHead>
                        <TableHead>Acesso a Trilhas</TableHead>
                        <TableHead>Limite de Cursos Simultâneos</TableHead>
                        <TableHead>Permissão para Certificados</TableHead>
                        <TableHead>Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Marketing</TableCell>
                        <TableCell>Todos</TableCell>
                        <TableCell>Todas</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>Sim</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Vendas</TableCell>
                        <TableCell>Todos</TableCell>
                        <TableCell>Todas</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>Sim</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">TI</TableCell>
                        <TableCell>Todos</TableCell>
                        <TableCell>Todas</TableCell>
                        <TableCell>8</TableCell>
                        <TableCell>Sim</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">RH</TableCell>
                        <TableCell>Todos</TableCell>
                        <TableCell>Todas</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>Sim</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Financeiro</TableCell>
                        <TableCell>Todos</TableCell>
                        <TableCell>Todas</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>Sim</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium">Configurações Gerais de Acesso</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Registro automático de novos usuários</h4>
                        <p className="text-sm text-muted-foreground">
                          Permitir que novos usuários se registrem automaticamente na plataforma
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Aprovação manual de contas</h4>
                        <p className="text-sm text-muted-foreground">
                          Exigir aprovação de administrador para novas contas
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Bloqueio após inatividade</h4>
                        <p className="text-sm text-muted-foreground">Bloquear contas após 30 dias de inatividade</p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Limite global de usuários</h4>
                        <p className="text-sm text-muted-foreground">
                          Definir um limite máximo de usuários na plataforma
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input type="number" className="w-20" defaultValue="2000" />
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>

                <Button>Salvar Configurações</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
