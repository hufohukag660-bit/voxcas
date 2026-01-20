import { Gamepad2, LayoutGrid, Video, Trophy, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const gameCategories = [
  {
    icon: Gamepad2,
    title: "Automaty Online (Sloty)",
    description: "Sekcja automatów jest sercem platformy, oferując setki tytułów na każdy gust. Od klasycznych automatów owocowych po nowoczesne automaty wideo ze spektakularną grafiką 3D.",
    games: ["Book of Dead", "Starburst", "Gonzo's Quest", "Mega Moolah"],
    color: "primary"
  },
  {
    icon: LayoutGrid,
    title: "Gry Stołowe",
    description: "Dla fanów strategii i klasycznych gier, VoxCasino oferuje wyrafinowany wybór gier stołowych. Znajdziesz tu wiele wariantów blackjacka, ruletki i pokera.",
    games: ["Blackjack", "Ruletka", "Video Poker", "Bakarat"],
    color: "accent"
  },
  {
    icon: Video,
    title: "Kasyno na Żywo",
    description: "Profesjonalni krupierzy prowadzą gry w czasie rzeczywistym, transmitowane w jakości HD ze specjalistycznych studiów. Autentyczna atmosfera kasyna naziemnego.",
    games: ["Dream Catcher", "Monopoly Live", "Crazy Time", "Lightning Roulette"],
    color: "chart-3"
  },
  {
    icon: Trophy,
    title: "Jackpoty Progresywne",
    description: "Specjalna sekcja gier z progresywnymi jackpotami, które mogą odmienić życie zwycięzców. Pule nagród rosną z każdym zakładem graczy na całym świecie.",
    games: ["Mega Fortune", "Hall of Gods", "Divine Fortune", "Mega Moolah"],
    color: "chart-4"
  }
]

const providers = [
  "NetEnt", "Microgaming", "Evolution Gaming", "Pragmatic Play", 
  "Play'n GO", "Yggdrasil", "Red Tiger", "Quickspin"
]

export function Games() {
  return (
    <section id="gry" className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-[#171a29] to-[#1a1d2e]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Portfolio Gier</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            Zróżnicowane Portfolio Gier:{" "}
            <span className="text-gradient">Ponad 2000 Tytułów</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Vox Casino online udostępnia imponującą bibliotekę ponad 2000 gier, podzielonych 
            na przejrzyste kategorie. Każda kategoria jest wypełniona najlepszymi tytułami 
            od najbardziej prestiżowych dostawców w branży.
          </p>
        </div>

        {/* Game Categories Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {gameCategories.map((category) => {
            const Icon = category.icon
            const colorClasses = {
              primary: "bg-primary/10 text-primary border-primary/30",
              accent: "bg-accent/10 text-accent border-accent/30",
              "chart-3": "bg-chart-3/10 text-chart-3 border-chart-3/30",
              "chart-4": "bg-chart-4/10 text-chart-4 border-chart-4/30"
            }
            const iconBgClasses = {
              primary: "bg-primary/20",
              accent: "bg-accent/20",
              "chart-3": "bg-chart-3/20",
              "chart-4": "bg-chart-4/20"
            }
            
            return (
              <div 
                key={category.title}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 ${iconBgClasses[category.color as keyof typeof iconBgClasses]}`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${category.color === 'primary' ? 'text-primary' : category.color === 'accent' ? 'text-accent' : category.color === 'chart-3' ? 'text-chart-3' : 'text-chart-4'}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.games.map((game) => (
                    <span 
                      key={game}
                      className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium border ${colorClasses[category.color as keyof typeof colorClasses]}`}
                    >
                      {game}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Providers */}
        <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 text-center">
            Dostawcy Gier Premium
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground text-center mb-4 sm:mb-6 max-w-2xl mx-auto">
            Jakość gier gwarantuje współpraca z najbardziej szanowanymi dostawcami w branży.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {providers.map((provider) => (
              <div 
                key={provider}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/50 rounded-lg text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
              >
                {provider}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary w-full sm:w-auto">
            Przeglądaj Wszystkie Gry
          </Button>
        </div>
      </div>
    </section>
  )
}
