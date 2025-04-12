"use client"

import { useAuth } from "@/components/cursos/auth-provider"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/components/theme-provider"
import { toast } from "@/components/ui/use-toast"

export default function ConfiguracoesPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const { theme, setTheme, mounted } = useTheme()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/cursos")
    }
  }, [user, isLoading, router])

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    toast({
      title: "Tema alterado",
      description: `O tema foi alterado para ${newTheme === "light" ? "claro" : newTheme === "dark" ? "escuro" : "sistema"}.`,
    })
  }

  // Não renderizar o conteúdo até que o tema esteja montado para evitar problemas de hidratação
  if (isLoading || !user || !mounted) {
    return <div className="container py-10">Carregando...</div>
  }

  return (
    <div className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
        <p className="text-muted-foreground">Personalize sua experiência na plataforma</p>
      </div>

      <Tabs defaultValue="aparencia" className="w-full">
        <TabsList className="mb-6 w-full justify-start">
          <TabsTrigger value="aparencia">Aparência</TabsTrigger>
          <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
        </TabsList>

        <TabsContent value="aparencia" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Aparência</CardTitle>
              <CardDescription>Personalize a aparência da plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Tema</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div
                      className={`cursor-pointer overflow-hidden rounded-lg ${
                        theme === "light" ? "border-2 border-primary" : "border-2 border-muted"
                      } p-1 transition-all hover:border-primary/70`}
                      onClick={() => handleThemeChange("light")}
                    >
                      <div className="h-20 rounded bg-white shadow-sm"></div>
                      <p className="mt-2 text-center text-sm font-medium">Claro</p>
                    </div>
                    <div
                      className={`cursor-pointer overflow-hidden rounded-lg ${
                        theme === "dark" ? "border-2 border-primary" : "border-2 border-muted"
                      } p-1 transition-all hover:border-primary/70`}
                      onClick={() => handleThemeChange("dark")}
                    >
                      <div className="h-20 rounded bg-slate-950 shadow-sm"></div>
                      <p className="mt-2 text-center text-sm font-medium">Escuro</p>
                    </div>
                    <div
                      className={`cursor-pointer overflow-hidden rounded-lg ${
                        theme === "system" ? "border-2 border-primary" : "border-2 border-muted"
                      } p-1 transition-all hover:border-primary/70`}
                      onClick={() => handleThemeChange("system")}
                    >
                      <div className="h-20 rounded bg-gradient-to-b from-white to-slate-950 shadow-sm"></div>
                      <p className="mt-2 text-center text-sm font-medium">Sistema</p>
                    </div>
                  </div>
                </div>

                <Button>Salvar Preferências</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notificacoes" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Notificações</CardTitle>
              <CardDescription>Escolha como deseja receber notificações</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Notificações por E-mail</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Novos cursos disponíveis</h4>
                        <p className="text-sm text-muted-foreground">
                          Receba e-mails quando novos cursos forem adicionados
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
                        <h4 className="font-medium">Avaliações pendentes</h4>
                        <p className="text-sm text-muted-foreground">
                          Receba alertas sobre avaliações que precisam ser realizadas
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Certificados emitidos</h4>
                        <p className="text-sm text-muted-foreground">
                          Receba notificações quando novos certificados forem emitidos
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-medium">Frequência de E-mails</h3>
                  <div className="space-y-2">
                    <Label htmlFor="email-frequency">Frequência de e-mails de resumo</Label>
                    <Select defaultValue="weekly">
                      <SelectTrigger id="email-frequency">
                        <SelectValue placeholder="Selecione a frequência" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Diariamente</SelectItem>
                        <SelectItem value="weekly">Semanalmente</SelectItem>
                        <SelectItem value="biweekly">Quinzenalmente</SelectItem>
                        <SelectItem value="monthly">Mensalmente</SelectItem>
                        <SelectItem value="never">Nunca</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button>Salvar Preferências</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
