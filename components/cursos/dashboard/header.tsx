"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Logo } from "@/components/cursos/logo"
import { useAuth } from "@/components/cursos/auth-provider"
import { useRouter } from "next/navigation"
import { Bell, Search, User } from "lucide-react"
import Link from "next/link"

export function DashboardHeader() {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/cursos")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary shadow-md">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-4 lg:gap-6">
          <Logo />
          <div className="hidden w-full max-w-sm md:flex">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white/60" />
              <Input
                type="search"
                placeholder="Buscar..."
                className="w-full rounded-lg border-white/20 bg-white/10 pl-8 text-white placeholder:text-white/60 focus:bg-white/20 md:w-[300px] lg:w-[400px]"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10 hover:text-white">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-primary">
              3
            </span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-9 w-9 rounded-full text-white hover:bg-white/10 hover:text-white"
              >
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/cursos/dashboard/perfil">
                  <User className="mr-2 h-4 w-4" />
                  <span>Perfil</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/cursos/dashboard/configuracoes">Configurações</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-500">
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
