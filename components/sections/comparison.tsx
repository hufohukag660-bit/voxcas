import { CheckCircle2, XCircle, Minus } from "lucide-react"

const comparisonData = [
  {
    feature: "Licencja hazardowa",
    vox: true,
    others: "varies"
  },
  {
    feature: "Gry w PLN",
    vox: true,
    others: "varies"
  },
  {
    feature: "BLIK / Przelewy24",
    vox: true,
    others: "varies"
  },
  {
    feature: "Wsparcie po polsku",
    vox: true,
    others: "varies"
  },
  {
    feature: "Wsparcie 24/7",
    vox: true,
    others: "varies"
  },
  {
    feature: "2000+ gier",
    vox: true,
    others: false
  },
  {
    feature: "Bonus do 3000€",
    vox: true,
    others: false
  },
  {
    feature: "500 Darmowych Spinów",
    vox: true,
    others: false
  },
  {
    feature: "Wypłaty < 24h",
    vox: true,
    others: "varies"
  }
]

function StatusIcon({ status }: { status: boolean | string }) {
  if (status === true) {
    return <CheckCircle2 className="w-5 h-5 text-accent" />
  }
  if (status === false) {
    return <XCircle className="w-5 h-5 text-destructive" />
  }
  return <Minus className="w-5 h-5 text-muted-foreground" />
}

export function Comparison() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#171a29] to-[#1a1d2e]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            VOX Casino vs{" "}
            <span className="text-gradient">Konkurencja</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Zobacz, jak VOX Casino wypada na tle innych kasyn online. 
            Porównaj kluczowe funkcje i przekonaj się o naszych zaletach.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl overflow-hidden max-w-3xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-3 bg-secondary/30 border-b border-border">
            <div className="p-3 sm:p-4 md:p-6">
              <span className="text-xs sm:text-sm font-semibold text-muted-foreground">Funkcja</span>
            </div>
            <div className="p-3 sm:p-4 md:p-6 text-center border-l border-border bg-primary/5">
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <span className="text-xs sm:text-sm font-bold text-primary hidden sm:inline">VOX Casino</span>
                <span className="text-xs font-bold text-primary sm:hidden">VOX</span>
              </div>
            </div>
            <div className="p-3 sm:p-4 md:p-6 text-center border-l border-border">
              <span className="text-xs sm:text-sm font-semibold text-muted-foreground">Inne</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-border">
            {comparisonData.map((row, index) => (
              <div 
                key={row.feature}
                className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-transparent' : 'bg-secondary/10'}`}
              >
                <div className="p-3 sm:p-4 md:p-6 flex items-center">
                  <span className="text-xs sm:text-sm text-foreground">{row.feature}</span>
                </div>
                <div className="p-3 sm:p-4 md:p-6 flex items-center justify-center border-l border-border bg-primary/5">
                  <StatusIcon status={row.vox} />
                </div>
                <div className="p-3 sm:p-4 md:p-6 flex items-center justify-center border-l border-border">
                  <StatusIcon status={row.others} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Dostępne</span>
          </div>
          <div className="flex items-center gap-2">
            <XCircle className="w-4 h-4 text-destructive" />
            <span className="text-sm text-muted-foreground">Niedostępne</span>
          </div>
          <div className="flex items-center gap-2">
            <Minus className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Zależy od kasyna</span>
          </div>
        </div>
      </div>
    </section>
  )
}
