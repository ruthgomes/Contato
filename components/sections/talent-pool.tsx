"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { FileUpload } from "@/components/file-upload"
import { toast } from "@/components/ui/use-toast"
import { submitJobApplication } from "@/lib/api"
import { CheckCircle } from "lucide-react"

export function TalentPool() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    experience: "",
    message: "",
    resumeUrl: "",
  })

  // Usar useEffect para garantir que o componente só seja renderizado no cliente
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (file: File | null) => {
    if (file) {
      // Em um cenário real, aqui você faria upload do arquivo para um serviço de armazenamento
      // e obteria a URL. Para este exemplo, vamos simular uma URL
      const fakeUrl = `uploads/${file.name}`
      setFormData((prev) => ({ ...prev, resumeUrl: fakeUrl }))
    } else {
      setFormData((prev) => ({ ...prev, resumeUrl: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await submitJobApplication(formData)

      setIsSuccess(true)
      toast({
        title: "Currículo enviado com sucesso!",
        description: "Seu currículo foi adicionado ao nosso banco de talentos.",
      })

      // Reset do formulário após alguns segundos
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          area: "",
          experience: "",
          message: "",
          resumeUrl: "",
        })
      }, 3000)
    } catch (error) {
      console.error("Erro ao enviar currículo:", error)
      toast({
        title: "Erro ao enviar currículo",
        description: "Ocorreu um erro ao enviar seu currículo. Tente novamente mais tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Não renderizar nada durante a montagem do componente no servidor
  if (!mounted) {
    return null
  }

  return (
    <section className="py-8 bg-white">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold text-primary md:text-3xl">Banco de Talentos</h2>
            <p className="text-muted-foreground">
              Não encontrou uma vaga que corresponda ao seu perfil? Cadastre seu currículo em nosso banco de talentos e
              seja considerado para futuras oportunidades.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-card border border-border/40">
              <CardHeader>
                <CardTitle className="text-primary">Cadastre seu currículo</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Preencha o formulário abaixo para entrar em nosso banco de talentos
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="mb-4 rounded-full bg-accent/20 p-3">
                      <CheckCircle className="h-12 w-12 text-accent" />
                    </div>
                    <h3 className="mb-2 text-xl font-medium text-primary">Currículo enviado com sucesso!</h3>
                    <p className="text-muted-foreground">
                      Seu currículo foi adicionado ao nosso banco de talentos. Entraremos em contato quando surgir uma
                      oportunidade compatível com seu perfil.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-primary">
                        Nome completo
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome completo"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-primary">
                        E-mail
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu.email@exemplo.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-primary">
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="(00) 00000-0000"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-accent"
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="area" className="text-primary">
                          Área de interesse
                        </Label>
                        <Select
                          required
                          value={formData.area}
                          onValueChange={(value) => handleSelectChange("area", value)}
                        >
                          <SelectTrigger
                            id="area"
                            className="border-border bg-background text-foreground focus:border-accent"
                          >
                            <SelectValue placeholder="Selecione uma área" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="development">Desenvolvimento</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="management">Gestão</SelectItem>
                            <SelectItem value="administrative">Administrativo</SelectItem>
                            <SelectItem value="hr">Recursos Humanos</SelectItem>
                            <SelectItem value="other">Outra área</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience" className="text-primary">
                          Experiência
                        </Label>
                        <Select
                          required
                          value={formData.experience}
                          onValueChange={(value) => handleSelectChange("experience", value)}
                        >
                          <SelectTrigger
                            id="experience"
                            className="border-border bg-background text-foreground focus:border-accent"
                          >
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="trainee">Trainee/Estágio</SelectItem>
                            <SelectItem value="junior">Júnior (0-2 anos)</SelectItem>
                            <SelectItem value="mid">Pleno (2-5 anos)</SelectItem>
                            <SelectItem value="senior">Sênior (5+ anos)</SelectItem>
                            <SelectItem value="management">Gestão/Liderança</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-primary">
                        Mensagem (opcional)
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Conte-nos sobre suas habilidades, experiências e objetivos profissionais"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-primary">Currículo</Label>
                      <FileUpload
                        accept=".pdf,.doc,.docx"
                        maxSize={5}
                        label="Arraste seu currículo aqui ou clique para selecionar"
                        helperText="Formatos aceitos: PDF, DOC, DOCX (máx. 5MB)"
                        onChange={handleFileChange}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-accent text-primary hover:bg-accent/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Cadastrar currículo"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            <Card className="bg-card border border-border/40">
              <CardHeader>
                <CardTitle className="text-primary">Por que entrar para o nosso banco de talentos?</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Vantagens de cadastrar seu currículo em nosso banco de talentos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-accent/20 p-1">
                    <CheckCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary">Prioridade em novas vagas</h3>
                    <p className="text-muted-foreground">
                      Candidatos do banco de talentos são considerados prioritariamente quando surgem novas
                      oportunidades.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-accent/20 p-1">
                    <CheckCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary">Vagas exclusivas</h3>
                    <p className="text-muted-foreground">
                      Algumas vagas são preenchidas diretamente pelo banco de talentos, sem divulgação externa.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-accent/20 p-1">
                    <CheckCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary">Processo seletivo simplificado</h3>
                    <p className="text-muted-foreground">
                      Candidatos do banco de talentos passam por um processo seletivo mais ágil e simplificado.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-accent/20 p-1">
                    <CheckCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary">Atualização facilitada</h3>
                    <p className="text-muted-foreground">
                      Você pode atualizar seu currículo a qualquer momento, mantendo suas informações sempre
                      atualizadas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-accent/20 p-1">
                    <CheckCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary">Oportunidades personalizadas</h3>
                    <p className="text-muted-foreground">
                      Receba alertas sobre vagas que correspondam ao seu perfil e interesses profissionais.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center border-t border-border/40 px-6 py-4">
                <p className="text-center text-sm text-muted-foreground">
                  Seu currículo permanecerá em nosso banco de talentos por 6 meses, podendo ser renovado após esse
                  período.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
