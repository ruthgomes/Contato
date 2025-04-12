"use client"

import type React from "react"
import { DashboardHeader } from "@/components/cursos/dashboard/header"
import { DashboardSidebar } from "@/components/cursos/dashboard/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { useEffect, useState } from "react"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Verificar se estamos no cliente para evitar erros de hidratação
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Renderizar um esqueleto até que o componente esteja montado
  if (!mounted) {
    return (
      <div className="flex min-h-screen flex-col">
        <div className="h-16 bg-primary"></div>
        <div className="flex flex-1">
          <div className="w-64 bg-secondary"></div>
          <main className="flex-1 overflow-y-auto"></main>
        </div>
      </div>
    )
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="flex min-h-screen flex-col">
        <DashboardHeader />
        <div className="flex flex-1">
          <DashboardSidebar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  )
}
