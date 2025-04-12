"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileUpload } from "@/components/file-upload"
import { toast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

interface JobApplicationModalProps {
  jobTitle: string
  jobId: number
}

export function JobApplicationModal({ jobTitle, jobId }: JobApplicationModalProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
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
      // Simulação de envio de candidatura
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Candidatura enviada com sucesso!",
        description: `Sua candidatura para a vaga de ${jobTitle} foi recebida. Entraremos em contato em breve.`,
      })

      // Fechar o modal após o envio bem-sucedido
      setOpen(false)

      // Reset do formulário
      setFormData({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        message: "",
        resumeUrl: "",
      })
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

  // Não renderizar nada durante a montagem do componente no servidor
  if (!mounted) {
    return (
      <Button className="bg-accent text-primary hover:bg-accent/90 transition-all duration-300 hover:scale-105 active:scale-95">
        Candidatar-se
      </Button>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-accent text-primary hover:bg-accent/90 transition-all duration-300 hover:scale-105 active:scale-95">
          Candidatar-se
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Candidatura para {jobTitle}</DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo para se candidatar a esta vaga. Todos os campos são obrigatórios, exceto quando
            indicado.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-right">
                Nome completo
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Seu nome completo"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-right">
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
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-right">
                Telefone
              </Label>
              <Input
                id="phone"
                name="phone"
                placeholder="(00) 00000-0000"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin" className="text-right">
                LinkedIn (opcional)
              </Label>
              <Input
                id="linkedin"
                name="linkedin"
                placeholder="https://linkedin.com/in/seu-perfil"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Por que você é ideal para esta vaga?</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Descreva brevemente suas qualificações e experiências relevantes para esta posição..."
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label>Currículo</Label>
            <FileUpload
              accept=".pdf,.doc,.docx"
              maxSize={5}
              label="Arraste seu currículo aqui ou clique para selecionar"
              helperText="Formatos aceitos: PDF, DOC, DOCX (máx. 5MB)"
              onChange={handleFileChange}
            />
          </div>
          <DialogFooter className="pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="transition-all duration-300 hover:bg-muted active:scale-95"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || !formData.resumeUrl}
              className="bg-accent text-primary hover:bg-accent/90 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Enviar candidatura"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
