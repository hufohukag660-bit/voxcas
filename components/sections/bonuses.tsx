import { Gift, Repeat, Crown, Trophy, Sparkles, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const bonuses = [
  {
    icon: Gift,
    title: "Bonus Powitalny",
    highlight: "do 3 000€ + 500 FS",
    description: "Nowi gracze są witani imponującym pakietem powitalnym. Pakiet obejmuje kilka pierwszych depozytów, zapewniając nowym graczom fantastyczny start.",
    features: ["Bonus na pierwsze depozyty", "500 darmowych spinów", "Łatwe wymagania obrotu"],
    color: "primary",
    badge: "Najpopularniejszy"
  },
  {
    icon: Repeat,
    title: "Bonus od Doładowania",
    highlight: "50% do 500€",
    description: "Kalendarz promocyjny jest wypełniony cotygodniowymi ofertami. Bonusy reload utrzymują świeżość i satysfakcję z gry dla stałych graczy.",
    features: ["Cotygodniowe promocje", "Cashback do 15%", "Darmowe spiny w weekendy"],
    color: "accent",
    badge: null
  },
  {
    icon: Crown,
    title: "Program VIP",
    highlight: "Ekskluzywne korzyści",
    description: "Każdy postawiony zakład przybliża Cię do nagród dzięki systemowi punktów lojalnościowych. Gracze VIP odblokowują najlepsze korzyści.",
    features: ["Osobisty opiekun", "Wyższe limity wypłat", "Ekskluzywne promocje"],
    color: "chart-4",
    badge: "Elite"
  },
  {
    icon: Trophy,
    title: "Turnieje",
    highlight: "Pule do 50 000€",
    description: "Kasyno regularnie organizuje turnieje slotowe i gier stołowych, w których gracze mogą rywalizować o hojne pule nagród.",
    features: ["Cotygodniowe turnieje", "Rankingi na żywo", "Nagrody pieniężne"],
    color: "chart-3",
    badge: null
  }
]

export function Bonuses() {
  return (
    <section id="bonusy" className="py-16 md:py-24 bg-gradient-to-b from-[#171a29] to-[#1a1d2e]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            VOX Casino{" "}
            <span className="text-gradient">Bonus i Promocje</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vox Casino online nagradza swoich graczy hojnym programem bonusów i promocji, 
            zaprojektowanych w celu maksymalizacji wartości każdej sesji gry.
          </p>
        </div>

        {/* Bonus Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {bonuses.map((bonus) => {
            const Icon = bonus.icon
            const colorClasses = {
              primary: {
                bg: "bg-primary/10",
                text: "text-primary",
                border: "border-primary/30",
                highlight: "text-primary"
              },
              accent: {
                bg: "bg-accent/10",
                text: "text-accent",
                border: "border-accent/30",
                highlight: "text-accent"
              },
              "chart-3": {
                bg: "bg-chart-3/10",
                text: "text-chart-3",
                border: "border-chart-3/30",
                highlight: "text-chart-3"
              },
              "chart-4": {
                bg: "bg-chart-4/10",
                text: "text-chart-4",
                border: "border-chart-4/30",
                highlight: "text-chart-4"
              }
            }
            const colors = colorClasses[bonus.color as keyof typeof colorClasses]
            
            return (
              <div 
                key={bonus.title}
                className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all group overflow-hidden"
              >
                {/* Badge */}
                {bonus.badge && (
                  <div className={`absolute top-4 right-4 ${colors.bg} ${colors.text} text-xs font-bold px-3 py-1 rounded-full border ${colors.border}`}>
                    {bonus.badge}
                  </div>
                )}
                
                {/* Icon */}
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {bonus.title}
                </h3>
                
                <p className={`text-2xl font-bold ${colors.highlight} mb-3`}>
                  {bonus.highlight}
                </p>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {bonus.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {bonus.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className={`w-4 h-4 ${colors.text} shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Important Notice */}
        {/* <div className="bg-secondary/30 border border-border rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Ważne informacje o bonusach
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm font-medium text-primary mb-2">Wymagania obrotu</p>
              <p className="text-sm text-muted-foreground">
                Każdy bonus ma określone wymagania dotyczące obrotu (np. 35x). 
                Przeczytaj regulamin przed aktywacją.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-accent mb-2">Czas ważności</p>
              <p className="text-sm text-muted-foreground">
                Bonusy mają określony czas ważności. Zwykle wynosi on 7-30 dni 
                od momentu aktywacji.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-chart-3 mb-2">Minimalne depozyty</p>
              <p className="text-sm text-muted-foreground">
                Minimalny depozyt kwalifikujący do bonusu wynosi zazwyczaj 
                50-100 PLN.
              </p>
            </div>
          </div>
        </div> */}

        {/* CTA */}
<div className="text-center mt-12">
  <Link href="/play" passHref>
    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
      <Gift className="w-5 h-5 mr-2" />
      Odbierz Bonus Powitalny
    </Button>
  </Link>
</div>
      </div>
    </section>
  )
}
