import { Button } from "@/components/ui/button"
import { Gift } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#171a29] to-[#1a1d2e]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 sm:mb-6 text-balance">
              VOX Casino Polska 2026:{" "}
              <span className="text-gradient">Oficjalna Strona</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              Sprawdź najnowsze promocje i bonusy w VOX Casino! Co tydzień wprowadzamy nowe automaty i wyjątkowe wydarzenia, aby każda sesja gry była jeszcze bardziej ekscytująca.
            </p>
          </div>

          {/* Hero Card */}
          <div className="relative mt-4 lg:mt-0">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
              {/* Bonus Card */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-primary/30">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">Pakiet Powitalny</span>
                </div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 sm:mb-2">
                  do <span className="text-gradient">3 000€</span>
                </p>
                <p className="text-lg sm:text-xl text-accent font-semibold">+ 500 Darmowych Spinów</p>
              </div>

              {/* CTA */}
              <Link href="/play" passHref>
                <Button className="w-full mt-4 sm:mt-6 bg-primary text-primary-foreground hover:bg-primary/90 glow-primary py-5 sm:py-6 text-base sm:text-lg">
                  Odbierz Bonus Teraz
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
