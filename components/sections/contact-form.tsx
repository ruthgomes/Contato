"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { submitContactForm } from "@/lib/api"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [documentType, setDocumentType] = useState("cpf")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    document: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await submitContactForm({
        ...formData,
        documentType,
      })

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      })

      // Reset do formulário
      setFormData({
        name: "",
        email: "",
        document: "",
        phone: "",
        subject: "",
        message: "",
      })
      setDocumentType("cpf")
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      toast({
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section-padding bg-white" id="contact">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[58rem] text-center">
          <h2 className="mb-4 text-primary">Entre em Contato</h2>
          <p className="text-muted-foreground md:text-xl">Estamos prontos para atender você e responder suas dúvidas</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center">
          {/* Formulário à esquerda */}
          <Card className="overflow-hidden border border-border/40 shadow-md">
            <CardHeader>
              <CardTitle className="text-primary">Formulário de Contato</CardTitle>
              <CardDescription className="text-muted-foreground">
                Preencha o formulário abaixo para entrar em contato conosco
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-primary">
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome completo"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border-border bg-background text-primary placeholder:text-muted-foreground focus:border-accent"
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
                    className="border-border bg-background text-primary placeholder:text-muted-foreground focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-primary">Tipo de Documento</Label>
                  <RadioGroup
                    defaultValue="cpf"
                    value={documentType}
                    onValueChange={setDocumentType}
                    className="flex flex-col space-y-1 sm:flex-row sm:space-x-4 sm:space-y-0"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cpf" id="cpf" className="border-border text-accent" />
                      <Label htmlFor="cpf" className="text-primary">
                        CPF
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cnpj" id="cnpj" className="border-border text-accent" />
                      <Label htmlFor="cnpj" className="text-primary">
                        CNPJ
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="document" className="text-primary">
                    {documentType === "cpf" ? "CPF" : "CNPJ"}
                  </Label>
                  <Input
                    id="document"
                    name="document"
                    placeholder={documentType === "cpf" ? "000.000.000-00" : "00.000.000/0000-00"}
                    required
                    value={formData.document}
                    onChange={handleChange}
                    className="border-border bg-background text-primary placeholder:text-muted-foreground focus:border-accent"
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
                    className="border-border bg-background text-primary placeholder:text-muted-foreground focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-primary">
                    Assunto
                  </Label>
                  <Select required value={formData.subject} onValueChange={handleSelectChange}>
                    <SelectTrigger
                      id="subject"
                      className="border-border bg-background text-primary focus:border-accent"
                    >
                      <SelectValue placeholder="Selecione um assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="information">Informações</SelectItem>
                      <SelectItem value="support">Suporte</SelectItem>
                      <SelectItem value="partnership">Parcerias</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Digite sua mensagem aqui..."
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="border-border bg-background text-primary placeholder:text-muted-foreground focus:border-accent"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent text-primary hover:bg-accent/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Imagem à direita */}
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] overflow-hidden rounded-lg border-4 border-primary/20 shadow-xl md:h-[450px] md:w-[450px]">
              <Image
                src="/placeholder.svg?height=450&width=450"
                alt="Atendimento ao cliente"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
