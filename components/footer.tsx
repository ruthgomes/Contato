"use client"

import type React from "react"

import { useRouter, usePathname } from "next/navigation"
import { Building, Mail, MapPin, Phone } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/#about" },
  { name: "Contato", href: "/#contact" },
  { name: "Políticas de Privacidade", href: "/#privacy" },
]

export function Footer() {
  const router = useRouter()
  const pathname = usePathname()

  // Função para lidar com a navegação e scroll
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

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
    <footer className="bg-primary text-white">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent">
                <Building className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-bold">Empresa</span>
            </div>
            <p className="mt-4 text-sm text-white/80">
              Transformando ideias em soluções inovadoras para o seu negócio desde 2010.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                    onClick={(e) => handleNavigation(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/trabalhe-conosco"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                  onClick={(e) => handleNavigation(e, "/trabalhe-conosco")}
                >
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-white/80">Av. Exemplo, 1234, Bairro, Cidade - UF, CEP 00000-000</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-white/80">(00) 0000-0000</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-white/80">contato@empresa.com.br</span>
              </li>
              <li className="flex items-center">
                <Building className="mr-2 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-white/80">CNPJ: 00.000.000/0001-00</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-primary"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-primary"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-primary"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-primary"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-white/70">
              &copy; {new Date().getFullYear()} Empresa. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <a
                href="/#privacy"
                className="text-sm text-white/70 transition-colors hover:text-white"
                onClick={(e) => handleNavigation(e, "/#privacy")}
              >
                Políticas de Privacidade
              </a>
              <a
                href="/#terms"
                className="text-sm text-white/70 transition-colors hover:text-white"
                onClick={(e) => handleNavigation(e, "/#terms")}
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
