import { Smartphone, Monitor, Tablet, Wifi, Zap, Gift, CheckCircle2 } from "lucide-react"

const mobileFeatures = [
  {
    icon: Zap,
    title: "Pełna Responsywność",
    description: "Witryna jest w pełni responsywna i działa jak lekka aplikacja mobilna, idealnie dopasowując się do ekranów smartfonów i tabletów."
  },
  {
    icon: Wifi,
    title: "Bez Pobierania",
    description: "Nie jest wymagane pobieranie ciężkiego oprogramowania. Dostęp do pełnej platformy uzyskujesz bezpośrednio przez przeglądarkę mobilną."
  },
  {
    icon: Monitor,
    title: "HTML5",
    description: "Zdecydowana większość z ponad 2000 gier jest zoptymalizowana pod kątem urządzeń mobilnych dzięki technologii HTML5."
  },
  {
    icon: Gift,
    title: "Bonusy Mobilne",
    description: "Czasami kasyno nagradza użytkowników mobilnych ekskluzywnymi promocjami, dostępnymi tylko przez telefon."
  }
]

const compatibilityList = [
  "iOS (iPhone, iPad)",
  "Android (smartfony, tablety)",
  "Windows Phone",
  "Chrome, Safari, Firefox",
  "Opera, Edge",
  "Każda nowoczesna przeglądarka"
]

export function Mobile() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#171a29] to-[#1a1d2e]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Doświadczenie Mobilne:{" "}
              <span className="text-gradient">VOX Casino App</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Vox Casino oferuje nienaganne wrażenia mobilne. Dla wielu graczy dostępna 
              strona działa tak sprawnie, że jest traktowana jako dedykowana aplikacja, 
              chociaż jest to przede wszystkim zaawansowana wersja przeglądarkowa.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {mobileFeatures.map((feature) => {
                const Icon = feature.icon
                return (
                  <div 
                    key={feature.title}
                    className="bg-card/30 border border-border rounded-xl p-4"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Compatibility */}
            <div className="bg-secondary/30 rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Kompatybilność</h3>
              <div className="grid grid-cols-2 gap-2">
                {compatibilityList.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              {/* Phone Frame */}
              <div className="bg-card border-4 border-secondary rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-gradient-to-b from-[#171a29] to-[#1a1d2e] rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Status Bar */}
                  <div className="bg-[#12141f] px-6 py-2 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">9:41</span>
                    <div className="w-20 h-6 bg-secondary rounded-full" />
                    <div className="flex items-center gap-1">
                      <Wifi className="w-3 h-3 text-muted-foreground" />
                      <div className="w-4 h-2 border border-muted-foreground rounded-sm">
                        <div className="w-2/3 h-full bg-accent rounded-sm" />
                      </div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-sm">V</span>
                        </div>
                        <span className="text-sm font-bold text-foreground">VOX Casino</span>
                      </div>
                      <div className="w-6 h-6 bg-secondary rounded" />
                    </div>
                    
                    {/* Balance Card */}
                    <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-3 border border-primary/30">
                      <p className="text-xs text-muted-foreground mb-1">Twoje saldo</p>
                      <p className="text-xl font-bold text-foreground">3 500 PLN</p>
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="grid grid-cols-4 gap-2">
                      {[Gamepad2, Gift, Wallet, Headphones].map((Icon, i) => (
                        <div key={i} className="bg-secondary/50 rounded-lg p-2 flex flex-col items-center gap-1">
                          <Icon className="w-4 h-4 text-primary" />
                          <span className="text-[8px] text-muted-foreground">
                            {["Gry", "Bonus", "Portfel", "Pomoc"][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Games */}
                    <div>
                      <p className="text-xs font-medium text-foreground mb-2">Popularne gry</p>
                      <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="aspect-square bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            </div>
            
            {/* Device Icons */}
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="flex flex-col items-center gap-2">
                <Smartphone className="w-8 h-8 text-primary" />
                <span className="text-xs text-muted-foreground">Smartfon</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Tablet className="w-8 h-8 text-accent" />
                <span className="text-xs text-muted-foreground">Tablet</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Monitor className="w-8 h-8 text-chart-3" />
                <span className="text-xs text-muted-foreground">Desktop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Import for the visual
import { Gamepad2, Wallet, Headphones } from "lucide-react"
