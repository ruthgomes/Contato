"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Building, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/#about" },
  { name: "Contato", href: "/#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Função para lidar com a navegação e scroll
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)

    // Se for um link para a página inicial sem âncora
    if (href === "/") {
      router.push(href)
      return
    }

    // Se for um link com âncora
    if (href.includes("#")) {
      const [path, hash] = href.split("#")

      // Se estamos na página inicial e o link é para uma âncora na mesma página
      if (pathname === "/" || pathname === "") {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
        return
      }

      // Se estamos em outra página e precisamos navegar para a página inicial com âncora
      router.push("/")

      // Aguarde a navegação e depois role para a seção
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 300)

      return
    }

    // Para outros links, use a navegação normal
    router.push(href)
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-primary">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <a href="/" className="flex items-center space-x-2" onClick={(e) => handleNavigation(e, "/")}>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent">
              <Building className="h-5 w-5 text-primary" />
            </div>
            <span className="font-bold text-white">Empresa</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-sm font-medium"
                onClick={(e) => handleNavigation(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden text-white hover:bg-white/10 md:flex" asChild>
            <Link href="/cursos">Login</Link>
          </Button>
          <Button className="hidden bg-accent text-primary hover:bg-accent/90 md:flex" asChild>
            <Link href="/trabalhe-conosco">Trabalhe Conosco</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-white">
              <div className="flex flex-col space-y-4 py-4">
                {navLinks.map((link) => (
                  <SheetClose key={link.name} asChild>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                      onClick={(e) => handleNavigation(e, link.href)}
                    >
                      {link.name}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link href="/cursos" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                    Login
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/trabalhe-conosco"
                    className="w-full bg-accent py-2 text-center font-medium text-primary hover:bg-accent/90"
                  >
                    Trabalhe Conosco
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
