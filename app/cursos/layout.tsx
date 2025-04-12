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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
