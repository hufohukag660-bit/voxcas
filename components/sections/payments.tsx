import { CreditCard, Wallet, Building, Shield, CheckCircle2 } from "lucide-react"

const paymentMethods = [
  {
    name: "BLIK / Przelewy24",
    minDeposit: "50 PLN",
    depositTime: "Natychmiast",
    withdrawTime: "—",
    icon: Wallet
  },
  {
    name: "Visa / Mastercard",
    minDeposit: "50 PLN",
    depositTime: "Natychmiast",
    withdrawTime: "3-5 dni roboczych",
    icon: CreditCard
  },
  {
    name: "Skrill / Neteller",
    minDeposit: "50 PLN",
    depositTime: "Natychmiast",
    withdrawTime: "0-24 godziny",
    icon: Wallet
  },
  {
    name: "Paysafecard",
    minDeposit: "50 PLN",
    depositTime: "Natychmiast",
    withdrawTime: "—",
    icon: CreditCard
  },
  {
    name: "Przelew bankowy",
    minDeposit: "100 PLN",
    depositTime: "1-3 dni",
    withdrawTime: "3-5 dni roboczych",
    icon: Building
  }
]

export function Payments() {
  return (
    <section id="platnosci" className="py-16 md:py-24 bg-gradient-to-b from-[#171a29] to-[#1a1d2e]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Metody Płatności dla{" "}
            <span className="text-gradient">Polskich Graczy</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vox Casino oferuje polskim graczom zróżnicowany wybór bezpiecznych 
            i wygodnych metod płatności. Transakcje w PLN bez opłat za przewalutowanie.
          </p>
        </div>

        {/* Payment Table */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden mb-8">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Metoda</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Depozyt Min</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Czas Depozytu</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Czas Wypłaty</th>
                </tr>
              </thead>
              <tbody>
                {paymentMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <tr 
                      key={method.name}
                      className={`border-b border-border last:border-b-0 hover:bg-secondary/20 transition-colors ${
                        index % 2 === 0 ? 'bg-transparent' : 'bg-secondary/10'
                      }`}
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-medium text-foreground">{method.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-muted-foreground">{method.minDeposit}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm ${
                          method.depositTime === 'Natychmiast' 
                            ? 'bg-accent/10 text-accent' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {method.depositTime}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-muted-foreground">{method.withdrawTime}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-border">
            {paymentMethods.map((method) => {
              const Icon = method.icon
              return (
                <div key={method.name} className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{method.name}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Min depozyt</p>
                      <p className="text-foreground font-medium">{method.minDeposit}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Czas depozytu</p>
                      <p className="text-accent font-medium">{method.depositTime}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-muted-foreground">Czas wypłaty</p>
                      <p className="text-foreground">{method.withdrawTime}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
