import Link from "next/link"
import { GraduationCap } from "lucide-react"

export function Logo() {
  return (
    <Link href="/cursos" className="flex items-center space-x-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent">
        <GraduationCap className="h-5 w-5 text-primary" />
      </div>
      <span className="font-bold text-white">Empresa | Cursos</span>
    </Link>
  )
}
