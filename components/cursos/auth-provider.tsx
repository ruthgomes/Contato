"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Tipo de usuário - pode ser expandido conforme necessário para integração com backend
export type User = {
  id: string
  name: string
  email: string
  role: string
  department: string
  // Adicione mais campos conforme necessário para integração com backend
}

// Contexto de autenticação - pode ser expandido para incluir mais funcionalidades
type AuthContextType = {
  user: User | null
  isLoading: boolean
  error: string | null
  login: (user: User) => void
  logout: () => void
  // Adicione mais funções conforme necessário para integração com backend
  // Por exemplo: register, updateProfile, resetPassword, etc.
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Verificar se há um usuário no localStorage
    // Esta lógica será substituída pela integração com backend
    try {
      const storedUser = typeof window !== "undefined" ? localStorage.getItem("cursosUser") : null
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    } catch (error) {
      console.error("Erro ao recuperar usuário do localStorage:", error)
      setError("Erro ao recuperar dados de autenticação. Por favor, faça login novamente.")
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Função de login - será substituída pela integração com backend
  const login = (userData: User) => {
    setUser(userData)
    setError(null)
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("cursosUser", JSON.stringify(userData))
      }
    } catch (error) {
      console.error("Erro ao salvar usuário no localStorage:", error)
      setError("Erro ao salvar dados de autenticação. Algumas funcionalidades podem não funcionar corretamente.")
    }
  }

  // Função de logout - será substituída pela integração com backend
  const logout = () => {
    setUser(null)
    setError(null)
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem("cursosUser")
      }
    } catch (error) {
      console.error("Erro ao remover usuário do localStorage:", error)
    }
  }

  // Valor do contexto - pode ser expandido conforme necessário
  const contextValue: AuthContextType = {
    user,
    isLoading,
    error,
    login,
    logout,
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
