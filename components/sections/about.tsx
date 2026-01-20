import { Shield, Award, Clock, Globe } from "lucide-react"

export function About() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-[#1a1d2e] to-[#171a29]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            Witaj w VOX Casino – Twoim miejscu docelowym dla{" "}
            <span className="text-gradient">gier Premium</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            VoxCasino otwiera swoje podwoje dla polskich graczy za pośrednictwem nowoczesnej, 
            intuicyjnej i łatwej w nawigacji platformy. Elegancki interfejs i wyrafinowany 
            design tworzą atmosferę premium od pierwszej chwili wejścia na stronę.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Dlaczego VOX Casino?</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Polscy gracze wybierają Vox Casino ze względu na idealne połączenie jakości, 
              bezpieczeństwa i różnorodności. Posiadając oficjalną i regulowaną licencję, 
              kasyno gwarantuje uczciwe i przejrzyste środowisko gry.
            </p>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-muted-foreground">Licencjonowany operator z certyfikatem Curacao</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-muted-foreground">Ponad 2000 gier od najlepszych dostawców</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-chart-3 mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-muted-foreground">Obsługa klienta dostępna 24/7</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-chart-4 mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-muted-foreground">Pełne wsparcie dla polskich graczy</span>
              </li>
            </ul>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Co nas wyróżnia?</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Tym, co naprawdę wyróżnia VOX Casino na tle konkurencji, jest ciągłe dążenie 
              do doskonałości. Od ogromnej kolekcji gier dostarczanych przez najbardziej 
              renomowanych deweloperów w branży, po obsługę klienta dostępną non-stop.
            </p>
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div className="bg-secondary/50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary">SSL</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Szyfrowanie 128-bit</p>
              </div>
              <div className="bg-secondary/50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                <p className="text-xl sm:text-2xl font-bold text-accent">RNG</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Certyfikowane gry</p>
              </div>
              <div className="bg-secondary/50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                <p className="text-xl sm:text-2xl font-bold text-chart-3">RODO</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Ochrona danych</p>
              </div>
              <div className="bg-secondary/50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                <p className="text-xl sm:text-2xl font-bold text-chart-4">KYC</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Weryfikacja</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
              <span className="text-xl sm:text-2xl font-bold text-primary">!</span>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">Nowości w styczniu 2026</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                VOX Casino wprowadza nowe funkcje i aktualizacje, które zwiększają wygodę graczy. 
                Usprawniono system płatności i dodano kolejne popularne sloty, dzięki czemu oferta 
                stała się jeszcze bardziej konkurencyjna na rynku kasyn online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
