// import { Gamepad2, LayoutGrid, Video, Trophy, Sparkles } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const gameCategories = [
//   {
//     icon: Gamepad2,
//     title: "Automaty Online (Sloty)",
//     description: "Sekcja automatów jest sercem platformy, oferując setki tytułów na każdy gust. Od klasycznych automatów owocowych po nowoczesne automaty wideo ze spektakularną grafiką 3D.",
//     games: ["Book of Dead", "Starburst", "Gonzo's Quest", "Mega Moolah"],
//     color: "primary"
//   },
//   {
//     icon: LayoutGrid,
//     title: "Gry Stołowe",
//     description: "Dla fanów strategii i klasycznych gier, VoxCasino oferuje wyrafinowany wybór gier stołowych. Znajdziesz tu wiele wariantów blackjacka, ruletki i pokera.",
//     games: ["Blackjack", "Ruletka", "Video Poker", "Bakarat"],
//     color: "accent"
//   },
//   {
//     icon: Video,
//     title: "Kasyno na Żywo",
//     description: "Profesjonalni krupierzy prowadzą gry w czasie rzeczywistym, transmitowane w jakości HD ze specjalistycznych studiów. Autentyczna atmosfera kasyna naziemnego.",
//     games: ["Dream Catcher", "Monopoly Live", "Crazy Time", "Lightning Roulette"],
//     color: "chart-3"
//   },
//   {
//     icon: Trophy,
//     title: "Jackpoty Progresywne",
//     description: "Specjalna sekcja gier z progresywnymi jackpotami, które mogą odmienić życie zwycięzców. Pule nagród rosną z każdym zakładem graczy na całym świecie.",
//     games: ["Mega Fortune", "Hall of Gods", "Divine Fortune", "Mega Moolah"],
//     color: "chart-4"
//   }
// ]

// const providers = [
//   "NetEnt", "Microgaming", "Evolution Gaming", "Pragmatic Play", 
//   "Play'n GO", "Yggdrasil", "Red Tiger", "Quickspin"
// ]

// export function Games() {
//   return (
//     <section id="gry" className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-[#171a29] to-[#1a1d2e]">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-8 sm:mb-12">
//           <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
//             <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
//             <span className="text-xs sm:text-sm font-medium text-primary">Portfolio Gier</span>
//           </div>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
//             Zróżnicowane Portfolio Gier:{" "}
//             <span className="text-gradient">Ponad 2000 Tytułów</span>
//           </h2>
//           <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
//             Vox Casino online udostępnia imponującą bibliotekę ponad 2000 gier, podzielonych 
//             na przejrzyste kategorie. Każda kategoria jest wypełniona najlepszymi tytułami 
//             od najbardziej prestiżowych dostawców w branży.
//           </p>
//         </div>

//         {/* Game Categories Grid */}
//         <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
//           {gameCategories.map((category) => {
//             const Icon = category.icon
//             const colorClasses = {
//               primary: "bg-primary/10 text-primary border-primary/30",
//               accent: "bg-accent/10 text-accent border-accent/30",
//               "chart-3": "bg-chart-3/10 text-chart-3 border-chart-3/30",
//               "chart-4": "bg-chart-4/10 text-chart-4 border-chart-4/30"
//             }
//             const iconBgClasses = {
//               primary: "bg-primary/20",
//               accent: "bg-accent/20",
//               "chart-3": "bg-chart-3/20",
//               "chart-4": "bg-chart-4/20"
//             }
            
//             return (
//               <div 
//                 key={category.title}
//                 className="bg-card/50 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary/50 transition-colors group"
//               >
//                 <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
//                   <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 ${iconBgClasses[category.color as keyof typeof iconBgClasses]}`}>
//                     <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${category.color === 'primary' ? 'text-primary' : category.color === 'accent' ? 'text-accent' : category.color === 'chart-3' ? 'text-chart-3' : 'text-chart-4'}`} />
//                   </div>
//                   <div className="min-w-0">
//                     <h3 className="text-base sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
//                       {category.title}
//                     </h3>
//                   </div>
//                 </div>
//                 <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
//                   {category.description}
//                 </p>
//                 <div className="flex flex-wrap gap-1.5 sm:gap-2">
//                   {category.games.map((game) => (
//                     <span 
//                       key={game}
//                       className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium border ${colorClasses[category.color as keyof typeof colorClasses]}`}
//                     >
//                       {game}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )
//           })}
//         </div>

//         {/* Providers */}
//         <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
//           <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 text-center">
//             Dostawcy Gier Premium
//           </h3>
//           <p className="text-xs sm:text-sm text-muted-foreground text-center mb-4 sm:mb-6 max-w-2xl mx-auto">
//             Jakość gier gwarantuje współpraca z najbardziej szanowanymi dostawcami w branży.
//           </p>
//           <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
//             {providers.map((provider) => (
//               <div 
//                 key={provider}
//                 className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/50 rounded-lg text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
//               >
//                 {provider}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-8 sm:mt-12">
//           <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary w-full sm:w-auto">
//             Przeglądaj Wszystkie Gry
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }


import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Zap, Crown } from "lucide-react"
import Link from "next/link"

const featuredSlots = [
  {
    id: 1,
    title: "Mega Wild Fruits & Chillies",
    provider: "Spinomenal",
    description: "Klasyczna przygoda w stylu egipskim z mechanicą Expanding Symbols",
    rtp: "96.50%",
    volatility: "Wysoka",
    maxWin: "5000x",
    image: "https://spinomenal.com/wp-content/uploads/2025/07/500R_MegaWildFruitsChillies.png",
    features: ["Free Spins", "Expanding Wilds", "Gamble Feature"],
    rating: 4.8,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 2,
    title: "Coin Win 2: Hold The Spin",
    provider: "Spinomenal",
    description: "Egipska przygoda z rozszerzającymi się symbolami i darmowymi spinami",
    rtp: "96.20%",
    volatility: "Średnia",
    maxWin: "3000x",
    image: "https://images.sigma.world/Coin-Win-Hold-the-Spin-Logo.png",
    features: ["Book Scatter", "Expanding Symbols", "Free Spins"],
    rating: 4.6,
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Aviator",
    provider: "Spribe",
    description: "Popularna gra crash z rosnącym mnożnikiem i prostą mechaniką",
    rtp: "97.00%",
    volatility: "Zmienna",
    maxWin: "10000x",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-9YRUexAI8IfabOWTbTDQhJLRCmlPObaYVg&s",
    features: ["Crash Game", "Instant Cashout", "Multiplayer"],
    rating: 4.9,
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 4,
    title: "Chicken Road 2",
    provider: "EvoPlay",
    description: "RPG-style slot z unikalnymi bonusami i mroczną atmosferą",
    rtp: "95.80%",
    volatility: "Niska",
    maxWin: "1000x",
    image: "https://cultmtl.com/wp-content/uploads/2025/06/IMG_8547.jpeg",
    features: ["Bonus Rounds", "Multipliers", "Wild Symbols"],
    rating: 4.5,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 5,
    title: "Buffalo Power",
    provider: "Spinomenal",
    description: "Slot w stylu amerykańskiej prerii z potężnymi symbolami zwierząt",
    rtp: "96.30%",
    volatility: "Wysoka",
    maxWin: "7500x",
    image: "https://igamingbusiness.com/img-srv/TOk-RP0jQLb6AlguttQJjQ4WT0e9nioENE1jGxthCJc/resizing_type:auto/width:0/height:0/gravity:sm/enlarge:1/ext:webp/strip_metadata:1/quality:90/cachebuster:filesize-418731/bG9jYWw6Ly8vaWdhbWluZ2J1c2luZXNzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMy8wNS9pbWFnZTAwNC5wbmc.webp",
    features: ["Mega Symbols", "Free Spins", "Bonus Buy"],
    rating: 4.7,
    color: "from-[#d67413] to-[#b3590d]",
  },
  {
    id: 6,
    title: "Lucky Streak 3",
    provider: "EvoPlay",
    description: "Nowoczesny slot z 3D grafiką i unikalnymi rundami bonusowymi",
    rtp: "96.10%",
    volatility: "Średnia",
    maxWin: "2500x",
    image: "https://battlebrotherhood.ru/wp-content/uploads/2025/04/lucky-streak-3.webp",
    features: ["3D Graphics", "Interactive Bonus", "Cascading Reels"],
    rating: 4.4,
    color: "from-red-500 to-pink-600",
  },
]

export function FeaturedSlots() {
  return (
    <section id="gry" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#171a29] to-[#1a1d2e]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Заголовок секции */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Najpopularniejsze Gry
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Odkryj 6 najlepszych slotów dostępnych w VOX Casino z najlepszymi dostawcami
            </p>
          </div>

          {/* Контейнер с карточками - горизонтальный скролл на мобильных */}
          <div className="relative mb-8">
            {/* Desktop Grid */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredSlots.map((slot) => (
                <Link 
                  key={slot.id}
                  href="/play"
                  className="block"
                >
                  <Card className="border border-white/10 bg-gradient-to-b from-[#1d2036]/60 to-[#1a1d2e]/60 backdrop-blur-sm overflow-hidden group hover:border-[#d67413]/40 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(214,116,19,0.2)] h-full cursor-pointer">
                    {/* Изображение слота */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${slot.color} opacity-20`} />
                      
                      <div className="relative w-full h-full">
                        <img 
                          src={slot.image} 
                          alt={slot.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <CardContent className="p-5">
                      {/* Заголовок и описание */}
                      <div className="mb-4">
                        <h3 className="font-bold text-xl text-white mb-2 group-hover:text-[#d67413] transition-colors">
                          {slot.title}
                        </h3>
                        <p className="text-sm text-gray-300 mb-4">
                          {slot.description}
                        </p>
                      </div>

                      {/* Статистика */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="text-center p-2 rounded-lg bg-white/5">
                          <div className="text-xs text-gray-400 mb-1">RTP</div>
                          <div className="font-bold text-green-500">{slot.rtp}</div>
                        </div>
                        <div className="text-center p-2 rounded-lg bg-white/5">
                          <div className="text-xs text-gray-400 mb-1">Volatility</div>
                          <div className="font-bold text-amber-500">{slot.volatility}</div>
                        </div>
                        <div className="text-center p-2 rounded-lg bg-white/5">
                          <div className="text-xs text-gray-400 mb-1">Max Win</div>
                          <div className="font-bold text-[#d67413]">{slot.maxWin}</div>
                        </div>
                      </div>

                      {/* Особенности */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {slot.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-white/10 to-white/5 rounded-full text-xs text-gray-300 border border-white/10"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Кнопка играть */}
                      <div className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#d67413] to-[#b3590d] text-white font-semibold rounded-lg hover:from-[#e6801a] hover:to-[#c46a1a] transition-all duration-300 group/btn">
                        <Zap className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        <span>Graj Teraz</span>
                        <ExternalLink className="h-3 w-3 ml-auto opacity-70" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="sm:hidden overflow-x-auto pb-4 -mx-4 px-4">
              <div className="flex gap-4" style={{ minWidth: "max-content" }}>
                {featuredSlots.map((slot) => (
                  <div key={slot.id} className="w-80 flex-shrink-0">
                    <Link href="/play" className="block">
                      <Card className="border border-white/10 bg-gradient-to-b from-[#1d2036]/60 to-[#1a1d2e]/60 backdrop-blur-sm overflow-hidden group hover:border-[#d67413]/40 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(214,116,19,0.2)] h-full cursor-pointer">
                        {/* Изображение слота */}
                        <div className="relative h-40 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                          <div className={`absolute inset-0 bg-gradient-to-br ${slot.color} opacity-20`} />
                          
                          <div className="relative w-full h-full">
                            <img 
                              src={slot.image} 
                              alt={slot.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        <CardContent className="p-4">
                          {/* Заголовок и описание */}
                          <div className="mb-3">
                            <h3 className="font-bold text-lg text-white mb-1 group-hover:text-[#d67413] transition-colors line-clamp-1">
                              {slot.title}
                            </h3>
                            <p className="text-xs text-gray-300 mb-3 line-clamp-2">
                              {slot.description}
                            </p>
                          </div>

                          {/* Статистика */}
                          <div className="grid grid-cols-3 gap-2 mb-3">
                            <div className="text-center p-1.5 rounded-lg bg-white/5">
                              <div className="text-xs text-gray-400 mb-0.5">RTP</div>
                              <div className="font-bold text-green-500 text-sm">{slot.rtp}</div>
                            </div>
                            <div className="text-center p-1.5 rounded-lg bg-white/5">
                              <div className="text-xs text-gray-400 mb-0.5">Volatility</div>
                              <div className="font-bold text-amber-500 text-sm">{slot.volatility}</div>
                            </div>
                            <div className="text-center p-1.5 rounded-lg bg-white/5">
                              <div className="text-xs text-gray-400 mb-0.5">Max Win</div>
                              <div className="font-bold text-[#d67413] text-sm">{slot.maxWin}</div>
                            </div>
                          </div>

                          {/* Особенности */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {slot.features.slice(0, 3).map((feature, index) => (
                              <span
                                key={index}
                                className="px-2 py-0.5 bg-gradient-to-r from-white/10 to-white/5 rounded-full text-xs text-gray-300 border border-white/10"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>

                          {/* Кнопка играть */}
                          <div className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-[#d67413] to-[#b3590d] text-white font-semibold rounded-lg hover:from-[#e6801a] hover:to-[#c46a1a] transition-all duration-300 group/btn text-sm">
                            <Zap className="h-3.5 w-3.5 group-hover/btn:scale-110 transition-transform" />
                            <span>Graj Teraz</span>
                            <ExternalLink className="h-2.5 w-2.5 ml-auto opacity-70" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}