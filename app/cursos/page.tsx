"use client"

import { LoginForm } from "@/components/cursos/login-form"
import { Logo } from "@/components/cursos/logo"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, GraduationCap, BarChart, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useAuth } from "@/components/cursos/auth-provider"
import { useRouter } from "next/navigation"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { toast } from "@/components/ui/use-toast"

export default function CursosPage() {
  const { user, isLoading, error } = useAuth()
  const router = useRouter()
  const [isRedirecting, setIsRedirecting] = useState(false)

  // Mostrar mensagem de erro se houver algum problema com a autenticação
  useEffect(() => {
    if (error) {
      toast({
        title: "Erro de autenticação",
        description: error,
        variant: "destructive",
      })
    }
  }, [error])

  // Redirecionar usuários já logados para o dashboard apropriado
  useEffect(() => {
    if (!isLoading && user) {
      setIsRedirecting(true)

      // Pequeno atraso para garantir que o estado seja atualizado
      setTimeout(() => {
        if (user.role === "admin") {
          router.push("/cursos/dashboard")
        } else {
          router.push("/cursos/dashboard/cursos")
        }
      }, 100)
    }
  }, [user, isLoading, router])

  // Mostrar indicador de carregamento enquanto verifica autenticação ou redireciona
  if (isLoading || isRedirecting) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-primary">
        <Logo />
        <div className="mt-8 flex flex-col items-center">
          <LoadingSpinner className="mb-4" />
          <p className="text-white">{isRedirecting ? "Redirecionando..." : "Carregando..."}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-primary shadow-md">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar ao site principal</span>
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="hero-gradient py-16 text-white md:py-24">
          <div className="container grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                Plataforma de Cursos <br className="hidden sm:inline" />
                Corporativos
              </h1>
              <p className="max-w-[700px] text-lg text-white/80">
                Desenvolva suas habilidades e avance na carreira com nossos cursos especializados. Acesse conteúdos
                exclusivos, trilhas de aprendizado e certificações.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="#features"
                  className="rounded-full bg-accent px-6 py-3 font-semibold text-primary transition-colors hover:bg-accent/90"
                >
                  Conheça os recursos
                </a>
                <a
                  href="#"
                  className="rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  Saiba mais
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 rounded-xl bg-white/10 p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white">Acesse sua conta</h2>
              <LoginForm />
            </div>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Por que escolher nossa plataforma?</h2>
              <p className="text-lg text-muted-foreground">
                Uma experiência de aprendizado completa e personalizada para o seu desenvolvimento profissional
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="card-hover flex flex-col items-center rounded-xl border bg-card p-8 text-center shadow">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-primary">Conteúdo Especializado</h3>
                <p className="text-muted-foreground">
                  Cursos desenvolvidos por especialistas da indústria, focados nas necessidades da sua empresa.
                </p>
              </div>

              <div className="card-hover flex flex-col items-center rounded-xl border bg-card p-8 text-center shadow">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-primary">Trilhas Personalizadas</h3>
                <p className="text-muted-foreground">
                  Trilhas de aprendizado adaptadas ao seu perfil e objetivos profissionais.
                </p>
              </div>

              <div className="card-hover flex flex-col items-center rounded-xl border bg-card p-8 text-center shadow">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-primary">Certificações Reconhecidas</h3>
                <p className="text-muted-foreground">
                  Obtenha certificados que valorizam seu currículo e comprovam suas habilidades.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16 text-white md:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4">Desenvolva-se com os melhores cursos</h2>
              <p className="text-lg text-white/80">
                Mais de 100 cursos em diversas áreas para impulsionar sua carreira
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="card-hover overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="relative aspect-video">
                  <Image src="/placeholder.svg?height=200&width=350" alt="Liderança" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Liderança</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-white/80">12 cursos disponíveis</p>
                </div>
              </div>

              <div className="card-hover overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="relative aspect-video">
                  <Image src="/placeholder.svg?height=200&width=350" alt="Marketing" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Marketing</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-white/80">15 cursos disponíveis</p>
                </div>
              </div>

              <div className="card-hover overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="relative aspect-video">
                  <Image src="/placeholder.svg?height=200&width=350" alt="Tecnologia" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Tecnologia</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-white/80">20 cursos disponíveis</p>
                </div>
              </div>

              <div className="card-hover overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="relative aspect-video">
                  <Image src="/placeholder.svg?height=200&width=350" alt="Gestão" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Gestão</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-white/80">18 cursos disponíveis</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary py-8 text-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-white/70">
            &copy; {new Date().getFullYear()} Empresa. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/70 hover:text-white">
              Termos de Uso
            </a>
            <a href="#" className="text-sm text-white/70 hover:text-white">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-white/70 hover:text-white">
              Suporte
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
