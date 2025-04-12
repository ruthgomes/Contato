import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "course_progress",
      title: "Liderança Estratégica",
      description: "Você completou o módulo 'Comunicação para Líderes'",
      time: "Hoje, 10:42",
      icon: "LS",
    },
    {
      id: 2,
      type: "assessment",
      title: "Marketing Digital",
      description: "Você obteve nota 9.0 na avaliação do módulo 4",
      time: "Hoje, 09:15",
      icon: "MD",
    },
    {
      id: 3,
      type: "certificate",
      title: "Excel Básico",
      description: "Você recebeu um certificado de conclusão",
      time: "Ontem, 15:30",
      icon: "EB",
    },
    {
      id: 4,
      type: "course_started",
      title: "Gestão de Projetos",
      description: "Você iniciou um novo curso",
      time: "Ontem, 11:20",
      icon: "GP",
    },
    {
      id: 5,
      type: "assessment_scheduled",
      title: "Liderança Estratégica",
      description: "Avaliação do módulo 3 agendada para amanhã às 14:00",
      time: "Ontem, 09:45",
      icon: "LS",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4">
          <Avatar className="h-9 w-9">
            <AvatarImage src="" alt={activity.title} />
            <AvatarFallback>{activity.icon}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.title}</p>
            <p className="text-sm text-muted-foreground">{activity.description}</p>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <Clock className="mr-1 h-3 w-3" />
              <span>{activity.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
