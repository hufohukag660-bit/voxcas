import { Shield, Lock, FileCheck, Scale, AlertTriangle, Heart, CheckCircle2 } from "lucide-react"

const securityFeatures = [
  {
    icon: Lock,
    title: "Szyfrowanie SSL",
    description: "Platforma wykorzystuje 128-bitowe szyfrowanie SSL dla wszystkich transakcji. Ten sam standard, który stosują banki na całym świecie."
  },
  {
    icon: FileCheck,
    title: "Licencja Curacao",
    description: "Vox Casino działa na podstawie ważnej licencji wydanej przez Curacao eGaming (nr 8048/JAZ2023-044). Licencja gwarantuje uczciwe zasady gry."
  },
  {
    icon: Scale,
    title: "Certyfikowane RNG",
    description: "Wszystkie gry wykorzystują certyfikowane Generatory Liczb Losowych (RNG) od niezależnych laboratoriów, takich jak eCOGRA lub iTech Labs."
  },
  {
    icon: Shield,
    title: "Ochrona Danych (RODO)",
    description: "Zgodnie z RODO, Vox Casino wdraża rygorystyczne polityki prywatności. Twoje dane osobowe i finansowe są w pełni chronione."
  }
]

const responsibleGamingFeatures = [
  "Dzienne, tygodniowe lub miesięczne limity depozytów",
  "Limity zakładów i strat",
  "Możliwość samowykluczenia",
  "Narzędzia do monitorowania czasu gry",
  "Linki do organizacji pomocowych"
]

export function Security() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#1a1d2e] to-[#171a29]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Czy VOX Casino jest{" "}
            <span className="text-gradient">bezpieczne i wiarygodne?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bezpieczeństwo graczy jest w Vox Casino najwyższym priorytetem, 
            co odzwierciedlają wielopoziomowe środki bezpieczeństwa i przejrzyste zasady.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {securityFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <div 
                key={feature.title}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Responsible Gaming */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Odpowiedzialna Gra</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Kasyno aktywnie promuje odpowiedzialną grę. Oferujemy szereg narzędzi, 
              które pomagają kontrolować nawyki związane z grą.
            </p>
            <ul className="space-y-3">
              {responsibleGamingFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {/* Warning Box */}
            <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Ważne ostrzeżenie</h4>
                  <p className="text-sm text-muted-foreground">
                    Gry hazardowe są przeznaczone wyłącznie dla osób pełnoletnich (18+). 
                    Hazard może uzależniać. Graj odpowiedzialnie i nigdy nie graj za pieniądze, 
                    których nie możesz stracić.
                  </p>
                </div>
              </div>
            </div>

            {/* Help Resources */}
            <div className="bg-card/50 border border-border rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-4">Potrzebujesz pomocy?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Jeśli masz problem z hazardem lub obawiasz się, że możesz go mieć, 
                skontaktuj się z organizacjami pomocowymi:
              </p>
              <div className="space-y-2">
                <a 
                  href="https://www.gamblingtherapy.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-primary hover:underline"
                >
                  gamblingtherapy.org
                </a>
                <a 
                  href="https://www.begambleaware.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-primary hover:underline"
                >
                  begambleaware.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
