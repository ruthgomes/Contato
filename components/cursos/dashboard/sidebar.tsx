"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useAuth } from "@/components/cursos/auth-provider"
import { BookOpen, GraduationCap, LineChart, Settings, Award, LayoutDashboard, Users } from "lucide-react"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon: React.ReactNode
    adminOnly?: boolean
    userOnly?: boolean
  }[]
}

export function DashboardSidebar() {
  const { user } = useAuth()
  const isAdmin = user?.role === "admin"

  // Modifique o array de items para adicionar adminOnly: true ao item Dashboard
  const items = [
    {
      href: "/cursos/dashboard",
      title: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      adminOnly: true, // Apenas admins verão este item
    },
    {
      href: "/cursos/dashboard/cursos",
      title: "Cursos",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      href: "/cursos/dashboard/certificados",
      title: "Certificados",
      icon: <Award className="h-5 w-5" />,
      userOnly: true, // Apenas usuários normais verão este item
    },
    {
      href: "/cursos/dashboard/trilhas",
      title: "Trilhas",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      href: "/cursos/dashboard/desempenho",
      title: "Desempenho",
      icon: <LineChart className="h-5 w-5" />,
      userOnly: true, // Apenas usuários normais verão este item
    },
    {
      href: "/cursos/dashboard/admin/administracao",
      title: "Administração",
      icon: <Users className="h-5 w-5" />,
      adminOnly: true, // Apenas admins verão este item
    },
    {
      href: "/cursos/dashboard/configuracoes",
      title: "Configurações",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <nav className="hidden w-64 flex-col bg-secondary md:flex">
      <div className="flex flex-col gap-2 p-4">
        <div className="py-2">
          <h2 className="px-4 text-lg font-semibold tracking-tight text-white">Menu</h2>
          <SidebarNav items={items.filter((item) => (!item.adminOnly || isAdmin) && (!item.userOnly || !isAdmin))} />
        </div>
      </div>
    </nav>
  )
}

function SidebarNav({ items, className, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex flex-col gap-1 py-2", className)} {...props}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
            pathname === item.href ? "bg-primary text-white" : "text-white/70 hover:bg-primary/50 hover:text-white",
          )}
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
