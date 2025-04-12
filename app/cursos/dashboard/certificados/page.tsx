"use client"

import { useAuth } from "@/components/cursos/auth-provider"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CertificadosPage() {
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
        <h1 className="text-3xl font-bold tracking-tight text-primary">Certificados</h1>
        <p className="text-muted-foreground">Visualize e baixe seus certificados de conclusão de cursos e trilhas</p>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar certificados..." className="w-full pl-8" />
          </div>
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
          <Select defaultValue="recent">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Mais recentes</SelectItem>
              <SelectItem value="oldest">Mais antigos</SelectItem>
              <SelectItem value="az">A-Z</SelectItem>
              <SelectItem value="za">Z-A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="cursos" className="w-full">
        <TabsList className="mb-6 w-full justify-start">
          <TabsTrigger value="cursos">Certificados de Cursos</TabsTrigger>
          <TabsTrigger value="trilhas">Certificados de Trilhas</TabsTrigger>
          <TabsTrigger value="todos">Todos os Certificados</TabsTrigger>
        </TabsList>

        <TabsContent value="cursos" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CertificadoCard
              title="Fundamentos de Gestão"
              category="Gestão"
              date="10/03/2023"
              image="/placeholder.svg?height=300&width=400"
            />
            <CertificadoCard
              title="Comunicação Empresarial"
              category="Comunicação"
              date="18/02/2023"
              image="/placeholder.svg?height=300&width=400"
            />
            <CertificadoCard
              title="Excel Básico"
              category="Tecnologia"
              date="05/01/2023"
              image="/placeholder.svg?height=300&width=400"
            />
            <CertificadoCard
              title="Gestão de Tempo"
              category="Produtividade"
              date="15/12/2022"
              image="/placeholder.svg?height=300&width=400"
            />
            <CertificadoCard
              title="Liderança para Iniciantes"
              category="Liderança"
              date="20/11/2022"
              image="/placeholder.svg?height=300&width=400"
            />
            <CertificadoCard
              title="Comunicação Assertiva"
              category="Comunicação"
              date="10/10/2022"
              image="/placeholder.svg?height=300&width=400"
            />
          </div>
        </TabsContent>

        <TabsContent value="trilhas" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CertificadoCard
              title="Trilha de Produtividade Office"
              category="Tecnologia"
              date="05/01/2023"
              image="/placeholder.svg?height=300&width=400"
              isTrilha
            />
            <CertificadoCard
              title="Trilha de Comunicação"
              category="Comunicação"
              date="10/10/2022"
              image="/placeholder.svg?height=300&width=400"
              isTrilha
            />
          </div>
        </TabsContent>

        <TabsContent value="todos" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CertificadoCard
              title="Fundamentos de Gestão"
              category="Gestão"
              date="10/03/2023"
              image="/placeholder.svg?height=300&width=400"
            />
            <CertificadoCard
              title="Comunicação Empresarial"
              category="Comunicação"
              date="18/02/2023"
              image="/placeholder.svg?height=300&width=400"
            />
            <CertificadoCard
              title="Excel Básico"
              category="Tecnologia"
              date="05/01/2023"
              image="/placeholder.svg?height=300&width=400"
            />
            <CertificadoCard
              title="Trilha de Produtividade Office"
              category="Tecnologia"
              date="05/01/2023"
              image="/placeholder.svg?height=300&width=400"
              isTrilha
            />
            <CertificadoCard
              title="Gestão de Tempo"
              category="Produtividade"
              date="15/12/2022"
              image="/placeholder.svg?height=300&width=400"
            />
            <CertificadoCard
              title="Liderança para Iniciantes"
              category="Liderança"
              date="20/11/2022"
              image="/placeholder.svg?height=300&width=400"
            />
            <CertificadoCard
              title="Comunicação Assertiva"
              category="Comunicação"
              date="10/10/2022"
              image="/placeholder.svg?height=300&width=400"
            />
            <CertificadoCard
              title="Trilha de Comunicação"
              category="Comunicação"
              date="10/10/2022"
              image="/placeholder.svg?height=300&width=400"
              isTrilha
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface CertificadoCardProps {
  title: string
  category: string
  date: string
  image: string
  isTrilha?: boolean
}

function CertificadoCard({ title, category, date, image, isTrilha = false }: CertificadoCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          {isTrilha && <Badge className="bg-accent text-primary">Trilha</Badge>}
        </div>
        <CardDescription>Concluído em {date}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-muted">
          <img
            src={image || "/placeholder.svg"}
            alt={`Certificado de ${title}`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-2">
          <Badge variant="outline">{category}</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          <Eye className="mr-2 h-4 w-4" />
          Visualizar
        </Button>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </CardFooter>
    </Card>
  )
}
