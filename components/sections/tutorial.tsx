import { UserPlus, Shield, Wallet, Gift, Gamepad2, CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Proces Rejestracji",
    description: "Wejdź na oficjalną stronę i kliknij przycisk \"Zarejestruj się\". Wypełnij formularz, podając swoje dane osobowe: imię, nazwisko, datę urodzenia, ważny adres e-mail i numer telefonu.",
    details: [
      "Wybierz unikalną nazwę użytkownika",
      "Utwórz silne hasło",
      "Zaakceptuj regulamin",
      "Potwierdź ukończenie 18 lat"
    ]
  },
  {
    number: "02",
    icon: Shield,
    title: "Weryfikacja Konta (KYC)",
    description: "Aby zapewnić bezpieczeństwo i zgodność z przepisami, Twoje konto musi zostać zweryfikowane. Otrzymasz e-mail potwierdzający – postępuj zgodnie z linkiem.",
    details: [
      "Potwierdź adres e-mail",
      "Prześlij dokumenty tożsamości",
      "Weryfikacja trwa do 24h",
      "Proces chroni wszystkich graczy"
    ]
  },
  {
    number: "03",
    icon: Wallet,
    title: "Pierwszy Depozyt",
    description: "Przejdź do sekcji \"Depozyt\" na swoim koncie. Wybierz preferowaną metodę płatności spośród opcji dostępnych dla polskich graczy.",
    details: [
      "BLIK, karty, e-portfele",
      "Minimalny depozyt od 50 PLN",
      "Natychmiastowe uznanie",
      "Bezpieczne transakcje"
    ]
  },
  {
    number: "04",
    icon: Gift,
    title: "Odbierz Bonus Powitalny",
    description: "Bonus powitalny jest często aktywowany automatycznie przy pierwszym depozycie. Sprawdź jednak, czy nie jest wymagany specjalny kod promocyjny.",
    details: [
      "Bonus do 3000€",
      "500 darmowych spinów",
      "Przeczytaj warunki bonusu",
      "Sprawdź wymogi obrotu"
    ]
  },
  {
    number: "05",
    icon: Gamepad2,
    title: "Zacznij Grać!",
    description: "Przeglądaj bibliotekę gier. Wiele gier oferuje tryb demo, aby zapoznać się z zasadami przed postawieniem prawdziwych pieniędzy.",
    details: [
      "Ponad 2000 gier",
      "Tryb demo dostępny",
      "Graj odpowiedzialnie",
      "Wsparcie 24/7"
    ]
  }
]

export function Tutorial() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#1a1d2e] to-[#171a29]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Jak zacząć w VOX Casino:{" "}
            <span className="text-gradient">Pierwsze Kroki</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proces rejestracji w VOX Casino online jest prosty i szybki, zaprojektowany tak, 
            abyś mógł rozpocząć grę w zaledwie kilka minut.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div 
                  key={step.number}
                  className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all group"
                >
                  {/* Number Badge */}
                  <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mt-2 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Arrow - Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center z-10">
                      <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
