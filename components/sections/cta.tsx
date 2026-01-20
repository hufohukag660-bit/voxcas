import { Button } from "@/components/ui/button"
import { Gift, Star, Zap, Users } from "lucide-react"

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#171a29] to-[#1a1d2e] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 border border-primary/30 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-6">
            <Gift className="w-10 h-10 text-primary" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Połącz Zabawę z Wygranymi w{" "}
            <span className="text-gradient">VOX Casino!</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Teraz, gdy odkryłeś wszystko, co VOX Casino ma do zaoferowania, nadszedł czas, 
            aby zamienić czytanie w działanie! Zarejestruj się już dziś i skorzystaj z naszego 
            hojnego bonusu powitalnego.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border">
              <Star className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">2000+</p>
              <p className="text-xs text-muted-foreground">Gier Casino</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border">
              <Gift className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">3000€</p>
              <p className="text-xs text-muted-foreground">Bonus Powitalny</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border">
              <Zap className="w-6 h-6 text-chart-3 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">500</p>
              <p className="text-xs text-muted-foreground">Darmowych Spinów</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border">
              <Users className="w-6 h-6 text-chart-4 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">24/7</p>
              <p className="text-xs text-muted-foreground">Wsparcie</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary text-lg px-8 py-6">
              <Gift className="w-5 h-5 mr-2" />
              Zarejestruj się i odbierz bonus
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary text-lg px-8 py-6 bg-transparent">
              Dowiedz się więcej
            </Button>
          </div>

          {/* Trust Note */}
          <p className="text-sm text-muted-foreground mt-6">
            Wybierz sprawdzone kasyno VOX i ciesz się grą na najwyższym poziomie. 18+
          </p>
        </div>
      </div>
    </section>
  )
}
