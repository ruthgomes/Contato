"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/components/cursos/auth-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

export function LoginForm() {
  return (
    <Tabs defaultValue="login" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Criar Conta</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginTab />
      </TabsContent>
      <TabsContent value="register">
        <RegisterTab />
      </TabsContent>
    </Tabs>
  )
}

function LoginTab() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simulação de login
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Credenciais de teste
      if (email === "usuario@empresa.com" && password === "senha123") {
        login({
          id: "1",
          name: "João Silva",
          email: "usuario@empresa.com",
          role: "user",
          department: "Marketing",
        })

        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vindo de volta, João Silva.",
        })

        router.push("/cursos/dashboard/cursos") // Redireciona usuários normais para a página de cursos
      } else if (email === "admin@empresa.com" && password === "admin123") {
        login({
          id: "2",
          name: "Admin",
          email: "admin@empresa.com",
          role: "admin",
          department: "TI",
        })

        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vindo de volta, Admin.",
        })

        router.push("/cursos/dashboard") // Redireciona admins para o dashboard
      } else {
        setError("Credenciais inválidas. Tente novamente.")
      }
    } catch (err) {
      setError("Ocorreu um erro ao fazer login. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="seu.email@empresa.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-white/20 text-white placeholder:text-white/60 focus:bg-white/30"
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="text-white">
            Senha
          </Label>
          <a href="#" className="text-xs text-white/80 hover:text-white hover:underline">
            Esqueceu a senha?
          </a>
        </div>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="bg-white/20 text-white placeholder:text-white/60 focus:bg-white/30"
          disabled={isLoading}
        />
      </div>
      {error && <p className="text-sm text-accent">{error}</p>}
      <Button type="submit" className="w-full bg-accent text-primary hover:bg-accent/90" disabled={isLoading}>
        {isLoading ? (
          <span className="flex items-center gap-2">
            <LoadingSpinner className="h-4 w-4" />
            Entrando...
          </span>
        ) : (
          "Entrar"
        )}
      </Button>
      <div className="text-center text-sm text-white/80">
        <p>Para teste, use:</p>
        <p>Usuário: usuario@empresa.com / Senha: senha123</p>
        <p>Admin: admin@empresa.com / Senha: admin123</p>
      </div>
    </form>
  )
}

function RegisterTab() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess(false)

    // Validação básica
    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem.")
      setIsLoading(false)
      return
    }

    try {
      // Simulação de registro
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulação de sucesso
      setSuccess(true)

      toast({
        title: "Conta criada com sucesso!",
        description: "Sua solicitação foi enviada e está em análise.",
      })

      // Limpar formulário
      setFormData({
        name: "",
        email: "",
        department: "",
        password: "",
        confirmPassword: "",
      })
    } catch (err) {
      setError("Ocorreu um erro ao criar a conta. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      {success ? (
        <div className="rounded-md bg-green-500/20 p-4 text-center text-white">
          <p className="font-medium">Conta criada com sucesso!</p>
          <p className="mt-2 text-sm">
            Sua solicitação foi enviada e está em análise. Você receberá um e-mail quando sua conta for aprovada.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-2">
            <Label htmlFor="register-name" className="text-white">
              Nome Completo
            </Label>
            <Input
              id="register-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome completo"
              required
              className="bg-white/20 text-white placeholder:text-white/60 focus:bg-white/30"
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-email" className="text-white">
              Email Corporativo
            </Label>
            <Input
              id="register-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu.email@empresa.com"
              required
              className="bg-white/20 text-white placeholder:text-white/60 focus:bg-white/30"
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-department" className="text-white">
              Departamento
            </Label>
            <select
              id="register-department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full rounded-md border-0 bg-white/20 px-3 py-2 text-white placeholder:text-white/60 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="" disabled>
                Selecione seu departamento
              </option>
              <option value="Marketing">Marketing</option>
              <option value="Vendas">Vendas</option>
              <option value="TI">TI</option>
              <option value="RH">RH</option>
              <option value="Financeiro">Financeiro</option>
              <option value="Operações">Operações</option>
              <option value="Administrativo">Administrativo</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-password" className="text-white">
              Senha
            </Label>
            <Input
              id="register-password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="bg-white/20 text-white placeholder:text-white/60 focus:bg-white/30"
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-confirm-password" className="text-white">
              Confirmar Senha
            </Label>
            <Input
              id="register-confirm-password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="bg-white/20 text-white placeholder:text-white/60 focus:bg-white/30"
              disabled={isLoading}
            />
          </div>
          {error && <p className="text-sm text-accent">{error}</p>}
          <Button type="submit" className="w-full bg-accent text-primary hover:bg-accent/90" disabled={isLoading}>
            {isLoading ? (
              <span className="flex items-center gap-2">
                <LoadingSpinner className="h-4 w-4" />
                Criando conta...
              </span>
            ) : (
              "Criar Conta"
            )}
          </Button>
          <p className="text-center text-xs text-white/80">
            Ao criar uma conta, você concorda com nossos Termos de Uso e Política de Privacidade.
          </p>
        </>
      )}
    </form>
  )
}
