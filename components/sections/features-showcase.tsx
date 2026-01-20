"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Sparkles, Gift, Shield, Smartphone, Zap } from "lucide-react"
import Link from "next/link"

const showcaseItems = [
  {
    title: "Ogromna Biblioteka Gier",
    subtitle: "Ponad 2000 tytułów do wyboru",
    description: "VOX Casino oferuje jedną z największych bibliotek gier na rynku. Od klasycznych automatów po nowoczesne gry wideo z progresywnymi jackpotami. Znajdziesz tu produkcje od najlepszych dostawców: NetEnt, Microgaming, Evolution Gaming, Pragmatic Play i wielu innych.",
    features: [
      "Automaty online z wysokim RTP",
      "Kasyno na żywo z profesjonalnymi krupierami",
      "Gry stołowe: ruletka, blackjack, poker",
      "Jackpoty progresywne z milionowymi pulami"
    ],
    image: "/images/slots.jpeg",
    icon: Sparkles,
    color: "primary"
  },
  {
    title: "Hojne Bonusy i Promocje",
    subtitle: "Pakiet powitalny do 3000 EUR",
    description: "Nowi gracze mogą liczyć na jeden z najbardziej atrakcyjnych pakietów powitalnych na rynku. Bonus powitalny rozłożony na pierwsze depozyty plus setki darmowych spinów. Regularni gracze mogą korzystać z cotygodniowych promocji, turniejów i programu VIP.",
    features: [
      "100% bonus od pierwszego depozytu",
      "500 darmowych spinów na popularne sloty",
      "Cotygodniowe promocje i reload bonusy",
      "Ekskluzywny program VIP z cashbackiem"
    ],
    image: "/images/bonus.webp",
    icon: Gift,
    color: "accent"
  },
  {
    title: "Bezpieczeństwo na Najwyższym Poziomie",
    subtitle: "Licencja Curacao i SSL 128-bit",
    description: "Twoje bezpieczeństwo jest naszym priorytetem. VOX Casino działa na podstawie oficjalnej licencji wydanej przez Curacao Gaming Authority. Wszystkie transakcje są chronione 128-bitowym szyfrowaniem SSL, takim samym jak w bankach.",
    features: [
      "Oficjalna licencja Curacao Gaming",
      "Szyfrowanie SSL dla wszystkich transakcji",
      "Certyfikowane gry z generatorem RNG",
      "Zgodność z RODO i ochrona danych"
    ],
    image: "/images/curacao.jpg",
    icon: Shield,
    color: "chart-3"
  },
  {
    title: "Graj Wszędzie i O Każdej Porze",
    subtitle: "Wersja mobilna zoptymalizowana",
    description: "Nasza platforma jest w pełni responsywna i działa doskonale na wszystkich urządzeniach mobilnych. Nie musisz pobierać żadnej aplikacji - wystarczy przeglądarka. Wszystkie funkcje dostępne na komputerze działają również na smartfonie i tablecie.",
    features: [
      "Brak konieczności pobierania aplikacji",
      "Pełna funkcjonalność na iOS i Android",
      "Płynna rozgrywka w jakości HD",
      "Szybkie depozyty przez BLIK mobilny"
    ],
    image: "/images/mobbile.png",
    icon: Smartphone,
    color: "chart-4"
  },
  {
    title: "Błyskawiczne Płatności",
    subtitle: "BLIK, Przelewy24, e-portfele",
    description: "Oferujemy najwygodniejsze metody płatności dla polskich graczy. Depozyty przez BLIK i Przelewy24 są natychmiastowe. Wypłaty na e-portfele realizowane w ciągu 24 godzin. Wszystkie transakcje bez ukrytych opłat.",
    features: [
      "Depozyty BLIK w kilka sekund",
      "Wypłaty na Skrill/Neteller do 24h",
      "Transakcje w PLN bez przewalutowania",
      "Zerowe opłaty za depozyty"
    ],
    image: "/images/fast.jfif",
    icon: Zap,
    color: "primary"
  }
]

export function FeaturesShowcase() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-[#1a1d2e] to-[#171a29]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Poznaj VOX Casino{" "}
            <span className="text-gradient">Bliżej</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
            Odkryj, dlaczego tysiące polskich graczy wybierają VOX Casino. 
            Poznaj nasze główne atuty i przekonaj się, że jesteśmy najlepszym wyborem.
          </p>
        </div>

        {/* Showcase Items */}
        <div className="space-y-12 md:space-y-20 lg:space-y-24">
          {showcaseItems.map((item, index) => {
            const Icon = item.icon
            const isReversed = index % 2 === 1
            
            const colorClasses = {
              primary: {
                iconBg: "bg-primary/20",
                iconColor: "text-primary",
                checkColor: "text-primary",
                borderColor: "border-primary/30",
                glowClass: "glow-primary"
              },
              accent: {
                iconBg: "bg-accent/20",
                iconColor: "text-accent",
                checkColor: "text-accent",
                borderColor: "border-accent/30",
                glowClass: "glow-accent"
              },
              "chart-3": {
                iconBg: "bg-chart-3/20",
                iconColor: "text-chart-3",
                checkColor: "text-chart-3",
                borderColor: "border-chart-3/30",
                glowClass: ""
              },
              "chart-4": {
                iconBg: "bg-chart-4/20",
                iconColor: "text-chart-4",
                checkColor: "text-chart-4",
                borderColor: "border-chart-4/30",
                glowClass: ""
              }
            }
            
            const colors = colorClasses[item.color as keyof typeof colorClasses]
            
            return (
              <div 
                key={item.title}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 md:gap-8 lg:gap-12 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className={`relative aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden border ${colors.borderColor} bg-card/50`}>
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className={`flex items-center gap-3 mb-3 md:mb-4`}>
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center ${colors.iconBg}`}>
                      <Icon className={`w-5 h-5 md:w-6 md:h-6 ${colors.iconColor}`} />
                    </div>
                    <span className={`text-xs sm:text-sm font-medium uppercase tracking-wider ${colors.iconColor}`}>
                      {item.subtitle}
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4 text-balance">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                    {item.description}
                  </p>
                  
                  <ul className="space-y-2 sm:space-y-3 mb-5 md:mb-6">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 shrink-0 ${colors.checkColor}`} />
                        <span className="text-sm sm:text-base text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/play" passHref>
  <Button 
    size="lg" 
    className={`bg-primary text-primary-foreground hover:bg-primary/90 ${colors.glowClass} w-full sm:w-auto text-sm sm:text-base`}
  >
    Dowiedz się więcej
  </Button>
</Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
