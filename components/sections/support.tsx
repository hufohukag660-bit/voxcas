import { MessageCircle, Mail, Clock, Globe, CheckCircle2, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

const supportFeatures = [
  {
    icon: MessageCircle,
    title: "Czat na Żywo",
    description: "Natychmiastowa pomoc bezpośrednio na stronie. Średni czas odpowiedzi poniżej 1 minuty.",
    availability: "24/7",
    color: "primary"
  },
  {
    icon: Mail,
    title: "Wsparcie Email",
    description: "Idealne dla bardziej złożonych problemów wymagających szczegółowej analizy.",
    availability: "Odpowiedź w 24h",
    color: "accent"
  },
  {
    icon: Globe,
    title: "Wsparcie po Polsku",
    description: "Pełna obsługa w języku polskim. Nasz zespół rozumie potrzeby lokalnych graczy.",
    availability: "Cały czas",
    color: "chart-3"
  }
]

const supportStats = [
  { label: "Średni czas odpowiedzi", value: "< 1 min", icon: Clock },
  { label: "Dostępność", value: "24/7/365", icon: Headphones },
  { label: "Języki wsparcia", value: "PL, EN, DE", icon: Globe },
  { label: "Satysfakcja klientów", value: "98%", icon: CheckCircle2 }
]

export function Support() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#171a29] to-[#1a1d2e]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Doskonała{" "}
            <span className="text-gradient">Obsługa Klienta</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Zespół wsparcia VOX Casino jest zaangażowany w oferowanie szybkiej 
            i profesjonalnej pomocy. Jesteśmy dostępni 24/7, 365 dni w roku.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {supportStats.map((stat) => {
            const Icon = stat.icon
            return (
              <div 
                key={stat.label}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 text-center"
              >
                <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {supportFeatures.map((feature) => {
            const Icon = feature.icon
            const colorClasses = {
              primary: "bg-primary/10 text-primary",
              accent: "bg-accent/10 text-accent",
              "chart-3": "bg-chart-3/10 text-chart-3"
            }
            
            return (
              <div 
                key={feature.title}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/50 rounded-full">
                  <Clock className="w-3 h-3 text-accent" />
                  <span className="text-xs font-medium text-accent">{feature.availability}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact Card */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-6 md:p-8 text-center">
          <Headphones className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Potrzebujesz pomocy?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Nasz przyjazny zespół wsparcia jest gotowy pomóc Ci z każdym pytaniem 
            dotyczącym konta, płatności, bonusów czy gier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <MessageCircle className="w-4 h-4 mr-2" />
              Rozpocznij Czat
            </Button>
            <Button variant="outline" className="border-border text-foreground hover:bg-secondary bg-transparent">
              <Mail className="w-4 h-4 mr-2" />
              Wyślij Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
