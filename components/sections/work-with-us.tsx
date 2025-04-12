"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { FileUpload } from "@/components/file-upload"
import { toast } from "@/components/ui/use-toast"
import { submitJobApplication } from "@/lib/api"

export function WorkWithUs() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    message: "",
    resumeUrl: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, area: value }))
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
        title: "Candidatura enviada!",
        description: "Recebemos seu currículo e entraremos em contato em breve.",
      })

      // Reset do formulário após alguns segundos
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          area: "",
          message: "",
          resumeUrl: "",
        })
      }, 3000)
    } catch (error) {
      console.error("Erro ao enviar candidatura:", error)
      toast({
        title: "Erro ao enviar candidatura",
        description: "Ocorreu um erro ao enviar sua candidatura. Tente novamente mais tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section-padding bg-primary/10">
      <div className="container">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <Card className="border-none bg-primary/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Envie seu currículo</CardTitle>
              <CardDescription className="text-white/80">
                Preencha o formulário abaixo para se candidatar às nossas vagas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Nome completo
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome completo"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
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
                    className="border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area" className="text-white">
                    Área de interesse
                  </Label>
                  <Select required value={formData.area} onValueChange={handleSelectChange}>
                    <SelectTrigger id="area" className="border-white/20 bg-white/10 text-white focus:border-accent">
                      <SelectValue placeholder="Selecione uma área" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="administrative">Administrativo</SelectItem>
                      <SelectItem value="commercial">Comercial</SelectItem>
                      <SelectItem value="development">Desenvolvimento</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="hr">Recursos Humanos</SelectItem>
                      <SelectItem value="other">Outra área</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Mensagem (opcional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte-nos um pouco sobre você e suas experiências"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Currículo</Label>
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
                  disabled={isSubmitting || isSuccess}
                >
                  {isSubmitting ? "Enviando..." : isSuccess ? "Enviado com sucesso!" : "Enviar currículo"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="border-none bg-primary/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Currículo Online</CardTitle>
              <CardDescription className="text-white/80">
                Crie ou edite seu currículo online para facilitar sua candidatura
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center space-y-6 py-8">
              <div className="text-center">
                <p className="mb-6 text-white/90">
                  Com o Currículo Online, você pode criar, editar e atualizar seu currículo a qualquer momento,
                  facilitando sua participação em nossos processos seletivos.
                </p>
                <ul className="mb-6 space-y-2 text-left">
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">✓</span>
                    <span className="text-white/90">Fácil de criar e atualizar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">✓</span>
                    <span className="text-white/90">Formato padronizado e profissional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">✓</span>
                    <span className="text-white/90">Acesso a qualquer momento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-accent">✓</span>
                    <span className="text-white/90">Candidatura com um clique</span>
                  </li>
                </ul>
              </div>
              <Button size="lg" className="bg-accent text-primary hover:bg-accent/90">
                Acessar Currículo Online
              </Button>
            </CardContent>
            <CardFooter className="justify-center border-t border-white/20 px-6 py-4">
              <p className="text-center text-sm text-white/80">
                Já tem um currículo cadastrado? Faça login para atualizá-lo.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
