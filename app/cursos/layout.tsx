import type React from "react"
import type { Metadata } from "next"
import "../globals.css"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/components/cursos/auth-provider"

export const metadata: Metadata = {
  title: "Plataforma de Cursos | Empresa",
  description: "Plataforma de cursos e treinamentos corporativos",
}

export default function CursosLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthProvider>
      <main className="min-h-screen bg-background antialiased">
        {children}
        <Toaster />
      </main>
    </AuthProvider>
  )
}