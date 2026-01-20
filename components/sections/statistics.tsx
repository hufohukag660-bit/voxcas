const gameStats = [
  { category: "Automaty Online", count: "1500+", percentage: 75 },
  { category: "Kasyno na Żywo", count: "200+", percentage: 10 },
  { category: "Gry Stołowe", count: "150+", percentage: 7.5 },
  { category: "Jackpoty", count: "100+", percentage: 5 },
  { category: "Inne Gry", count: "50+", percentage: 2.5 }
]

export function Statistics() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#1a1d2e] to-[#171a29]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            VOX Casino{" "}
            <span className="text-gradient">w liczbach</span>
          </h2>
        </div>

        {/* Game Distribution */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Chart */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Rozkład Gier</h3>
            <div className="space-y-4">
              {gameStats.map((stat, index) => {
                const colors = ["bg-primary", "bg-accent", "bg-chart-3", "bg-chart-4", "bg-chart-5"]
                return (
                  <div key={stat.category}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-muted-foreground">{stat.category}</span>
                      <span className="text-sm font-medium text-foreground">{stat.count}</span>
                    </div>
                    <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${colors[index]} rounded-full transition-all duration-500`}
                        style={{ width: `${stat.percentage}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Info Table */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Kluczowe Informacje</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Rok założenia</span>
                <span className="font-medium text-foreground">2023</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Licencja</span>
                <span className="font-medium text-primary">Curacao eGaming</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Minimalna wpłata</span>
                <span className="font-medium text-foreground">50 PLN</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Minimalna wypłata</span>
                <span className="font-medium text-foreground">100 PLN</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Wsparcie</span>
                <span className="font-medium text-accent">24/7 po polsku</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-muted-foreground">Wersja mobilna</span>
                <span className="font-medium text-accent">Tak (Web-App)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
