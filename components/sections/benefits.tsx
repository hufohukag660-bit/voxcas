import { 
  Shield, 
  Smartphone, 
  Zap, 
  Clock, 
  Users, 
  Gift,
  Lock,
  BadgeCheck,
  Headphones,
  Wallet,
  Gamepad2,
  Star
} from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Bezpieczeństwo",
    description: "128-bitowe szyfrowanie SSL dla wszystkich transakcji",
    color: "primary"
  },
  {
    icon: BadgeCheck,
    title: "Licencja Curacao",
    description: "Oficjalna licencja gwarantująca uczciwe zasady gry",
    color: "accent"
  },
  {
    icon: Gamepad2,
    title: "2000+ Gier",
    description: "Ogromna biblioteka od najlepszych dostawców",
    color: "chart-3"
  },
  {
    icon: Zap,
    title: "Szybkie Wypłaty",
    description: "E-portfele w ciągu 0-24 godzin",
    color: "chart-4"
  },
  {
    icon: Smartphone,
    title: "Wersja Mobilna",
    description: "Pełna funkcjonalność na wszystkich urządzeniach",
    color: "primary"
  },
  {
    icon: Headphones,
    title: "Wsparcie 24/7",
    description: "Profesjonalna pomoc w języku polskim",
    color: "accent"
  },
  {
    icon: Gift,
    title: "Hojne Bonusy",
    description: "Pakiet powitalny do 3000€ + 500 FS",
    color: "chart-3"
  },
  {
    icon: Lock,
    title: "Ochrona Danych",
    description: "Zgodność z RODO i rygorystyczna polityka prywatności",
    color: "chart-4"
  },
  {
    icon: Users,
    title: "Kasyno na Żywo",
    description: "Profesjonalni krupierzy transmitowani w HD",
    color: "primary"
  },
  {
    icon: Wallet,
    title: "Polskie Płatności",
    description: "BLIK, Przelewy24, karty i e-portfele",
    color: "accent"
  },
  {
    icon: Clock,
    title: "Ciągłe Aktualizacje",
    description: "Nowe gry i funkcje dodawane regularnie",
    color: "chart-3"
  },
  {
    icon: Star,
    title: "Program VIP",
    description: "Ekskluzywne korzyści dla lojalnych graczy",
    color: "chart-4"
  }
]

export function Benefits() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-[#1a1d2e] to-[#171a29]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            Dlaczego{" "}
            <span className="text-gradient">VOX Casino?</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Odkryj wszystkie zalety gry w VOX Casino. Oferujemy najwyższą jakość 
            usług, bezpieczeństwo i niezapomniane wrażenia z rozgrywki.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            const colorClasses = {
              primary: "bg-primary/10 text-primary group-hover:bg-primary/20",
              accent: "bg-accent/10 text-accent group-hover:bg-accent/20",
              "chart-3": "bg-chart-3/10 text-chart-3 group-hover:bg-chart-3/20",
              "chart-4": "bg-chart-4/10 text-chart-4 group-hover:bg-chart-4/20"
            }
            
            return (
              <div 
                key={benefit.title}
                className="bg-card/30 backdrop-blur-sm border border-border rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:border-primary/50 transition-all group text-center"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 transition-colors ${colorClasses[benefit.color as keyof typeof colorClasses]}`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="font-semibold text-foreground mb-0.5 sm:mb-1 text-xs sm:text-sm md:text-base leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-tight">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
