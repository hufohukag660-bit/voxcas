import { TrendingUp, Users, Gamepad2, Trophy, Clock, CreditCard } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "500 000+",
    label: "Aktywnych Graczy",
    description: "Zaufało VOX Casino",
    color: "primary"
  },
  {
    icon: Gamepad2,
    value: "2 000+",
    label: "Gier Casino",
    description: "Od najlepszych dostawców",
    color: "accent"
  },
  {
    icon: Trophy,
    value: "€50M+",
    label: "Wypłaconych Wygranych",
    description: "Rocznie",
    color: "chart-3"
  },
  {
    icon: Clock,
    value: "< 24h",
    label: "Czas Wypłaty",
    description: "Na e-portfele",
    color: "chart-4"
  },
  {
    icon: TrendingUp,
    value: "97.5%",
    label: "Średnie RTP",
    description: "Wskaźnik zwrotu",
    color: "primary"
  },
  {
    icon: CreditCard,
    value: "10+",
    label: "Metod Płatności",
    description: "Dla polskich graczy",
    color: "accent"
  }
]

const gameStats = [
  { category: "Automaty Online", count: "1500+", percentage: 75 },
  { category: "Kasyno na Żywo", count: "200+", percentage: 10 },
  { category: "Gry Stołowe", count: "150+", percentage: 7.5 },
  { category: "Jackpoty", count: "100+", percentage: 5 },
  { category: "Inne Gry", count: "50+", percentage: 2.5 }
]

export function Statistics() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#1a1d2e] to-[#171a29]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            VOX Casino{" "}
            <span className="text-gradient">w liczbach</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Poznaj statystyki, które pokazują, dlaczego VOX Casino jest jednym z 
            najpopularniejszych kasyn online dla polskich graczy.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon
            const colorClasses = {
              primary: "text-primary bg-primary/10",
              accent: "text-accent bg-accent/10",
              "chart-3": "text-chart-3 bg-chart-3/10",
              "chart-4": "text-chart-4 bg-chart-4/10"
            }
            const iconColors = colorClasses[stat.color as keyof typeof colorClasses]
            
            return (
              <div 
                key={stat.label}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 text-center hover:border-primary/50 transition-colors"
              >
                <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 ${iconColors}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm font-medium text-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
            )
          })}
        </div>

        {/* Game Distribution */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Chart */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Rozkład Gier</h3>
            <div className="space-y-4">
              {gameStats.map((stat, index) => {
                const colors = ["bg-primary", "bg-accent", "bg-chart-3", "bg-chart-4", "bg-chart-5"]
                return (
                  <div key={stat.category}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-muted-foreground">{stat.category}</span>
                      <span className="text-sm font-medium text-foreground">{stat.count}</span>
                    </div>
                    <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${colors[index]} rounded-full transition-all duration-500`}
                        style={{ width: `${stat.percentage}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Info Table */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Kluczowe Informacje</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Rok założenia</span>
                <span className="font-medium text-foreground">2023</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Licencja</span>
                <span className="font-medium text-primary">Curacao eGaming</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Minimalna wpłata</span>
                <span className="font-medium text-foreground">50 PLN</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Minimalna wypłata</span>
                <span className="font-medium text-foreground">100 PLN</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Wsparcie</span>
                <span className="font-medium text-accent">24/7 po polsku</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-muted-foreground">Wersja mobilna</span>
                <span className="font-medium text-accent">Tak (Web-App)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
