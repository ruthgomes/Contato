import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Clock, BarChart } from "lucide-react"
import Link from "next/link"

interface CourseCardProps {
  title: string
  description: string
  image: string
  category: string
  duration: string
  level: string
  progress?: number
  completed?: boolean
  isNew?: boolean
}

export function CourseCard({
  title,
  description,
  image,
  category,
  duration,
  level,
  progress,
  completed,
  isNew,
}: CourseCardProps) {
  return (
    <Card className="card-hover overflow-hidden border border-border/40">
      <div className="relative">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="aspect-video w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {isNew && <Badge className="absolute right-2 top-2 bg-accent text-primary">Novo</Badge>}
      </div>
      <CardHeader className="p-4">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="bg-primary/5 text-primary">
              {category}
            </Badge>
            {completed && <Badge className="bg-green-500 text-white">Concluído</Badge>}
          </div>
          <h3 className="line-clamp-1 font-semibold text-primary">{title}</h3>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-primary" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart className="h-4 w-4 text-primary" />
            <span>{level}</span>
          </div>
        </div>
        {typeof progress === "number" && (
          <div className="mt-4 space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span>Progresso</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-1.5 bg-primary/20" indicatorClassName="bg-accent" />
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full bg-primary text-white hover:bg-primary/90">
          <Link href={`/cursos/dashboard/curso/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"))}`}>
            {progress ? "Continuar" : completed ? "Ver novamente" : "Iniciar curso"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
