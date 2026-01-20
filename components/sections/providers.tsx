const providers = [
  { name: "NetEnt", games: "200+", rtp: "96.5%", popular: "Starburst, Gonzo's Quest" },
  { name: "Microgaming", games: "150+", rtp: "96.0%", popular: "Mega Moolah, Immortal Romance" },
  { name: "Evolution Gaming", games: "100+", rtp: "97.3%", popular: "Lightning Roulette, Crazy Time" },
  { name: "Pragmatic Play", games: "250+", rtp: "96.5%", popular: "Sweet Bonanza, Wolf Gold" },
  { name: "Play'n GO", games: "180+", rtp: "96.2%", popular: "Book of Dead, Reactoonz" },
  { name: "Yggdrasil", games: "120+", rtp: "96.4%", popular: "Vikings Go Berzerk, Valley of the Gods" },
  { name: "Red Tiger", games: "100+", rtp: "95.7%", popular: "Dragon's Fire, Gonzo's Quest Megaways" },
  { name: "Quickspin", games: "80+", rtp: "96.5%", popular: "Big Bad Wolf, Sakura Fortune" }
]

export function Providers() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#1a1d2e] to-[#171a29]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dostawcy Gier{" "}
            <span className="text-gradient">Premium</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Współpracujemy z najbardziej renomowanymi dostawcami gier na świecie, 
            gwarantując najwyższą jakość grafiki, innowacyjną rozgrywkę i uczciwe RTP.
          </p>
        </div>

        {/* Providers Table */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Dostawca</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Liczba Gier</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Średnie RTP</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Popularne Gry</th>
                </tr>
              </thead>
              <tbody>
                {providers.map((provider, index) => (
                  <tr 
                    key={provider.name}
                    className={`border-b border-border last:border-b-0 hover:bg-secondary/20 transition-colors ${
                      index % 2 === 0 ? 'bg-transparent' : 'bg-secondary/10'
                    }`}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">{provider.name.charAt(0)}</span>
                        </div>
                        <span className="font-medium text-foreground">{provider.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-accent font-medium">{provider.games}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                        {provider.rtp}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground text-sm">{provider.popular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-border">
            {providers.map((provider) => (
              <div key={provider.name} className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{provider.name.charAt(0)}</span>
                  </div>
                  <span className="font-medium text-foreground">{provider.name}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                  <div>
                    <p className="text-muted-foreground">Gry</p>
                    <p className="text-accent font-medium">{provider.games}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">RTP</p>
                    <p className="text-accent font-medium">{provider.rtp}</p>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Popularne gry</p>
                  <p className="text-foreground text-sm">{provider.popular}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RTP Explanation */}
        <div className="mt-8 bg-secondary/30 border border-border rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-2">Co to jest RTP?</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">RTP (Return to Player)</strong> to teoretyczny 
            procent wszystkich postawionych pieniędzy, który automat zwróci graczom w czasie. 
            Na przykład, slot z RTP 96% teoretycznie zwróci 96 PLN na każde 100 PLN postawionych 
            w długim okresie. Wyższe RTP oznacza lepsze szanse dla gracza. W VOX Casino średnie 
            RTP wynosi imponujące 97.5%.
          </p>
        </div>
      </div>
    </section>
  )
}
