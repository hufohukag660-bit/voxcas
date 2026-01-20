// import { Smartphone, Monitor, Tablet, Wifi, Zap, Gift, CheckCircle2 } from "lucide-react"


// const compatibilityList = [
//   "iOS (iPhone, iPad)",
//   "Android (smartfony, tablety)",
//   "Windows Phone",
//   "Chrome, Safari, Firefox",
//   "Opera, Edge",
//   "Każda nowoczesna przeglądarka"
// ]

// export function Mobile() {
//   return (
//     <section className="py-16 md:py-24 bg-gradient-to-b from-[#171a29] to-[#1a1d2e]">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Content */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//               Doświadczenie Mobilne:{" "}
//               <span className="text-gradient">VOX Casino App</span>
//             </h2>
//             <p className="text-muted-foreground leading-relaxed mb-8">
//               Vox Casino oferuje nienaganne wrażenia mobilne. Dla wielu graczy dostępna 
//               strona działa tak sprawnie, że jest traktowana jako dedykowana aplikacja, 
//               chociaż jest to przede wszystkim zaawansowana wersja przeglądarkowa.
//             </p>

//             {/* Compatibility */}
//             <div className="bg-secondary/30 rounded-xl p-6">
//               <h3 className="font-semibold text-foreground mb-4">Kompatybilność</h3>
//               <div className="grid grid-cols-2 gap-2">
//                 {compatibilityList.map((item) => (
//                   <div key={item} className="flex items-center gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
//                     <span className="text-sm text-muted-foreground">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Visual */}
//           <div className="relative">
//             <div className="relative mx-auto max-w-sm">
//               {/* Phone Frame */}
//               <div className="bg-card border-4 border-secondary rounded-[3rem] p-3 shadow-2xl">
//                 <div className="bg-gradient-to-b from-[#171a29] to-[#1a1d2e] rounded-[2.5rem] overflow-hidden aspect-[9/19]">
//                   {/* Status Bar */}
//                   <div className="bg-[#12141f] px-6 py-2 flex items-center justify-between">
//                     <span className="text-xs text-muted-foreground">9:41</span>
//                     <div className="w-20 h-6 bg-secondary rounded-full" />
//                     <div className="flex items-center gap-1">
//                       <Wifi className="w-3 h-3 text-muted-foreground" />
//                       <div className="w-4 h-2 border border-muted-foreground rounded-sm">
//                         <div className="w-2/3 h-full bg-accent rounded-sm" />
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* App Content */}
//                   <div className="p-4 space-y-4">
//                     {/* Header */}
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
//                           <span className="text-primary-foreground font-bold text-sm">V</span>
//                         </div>
//                         <span className="text-sm font-bold text-foreground">VOX Casino</span>
//                       </div>
//                       <div className="w-6 h-6 bg-secondary rounded" />
//                     </div>
                    
//                     {/* Balance Card */}
//                     <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-3 border border-primary/30">
//                       <p className="text-xs text-muted-foreground mb-1">Twoje saldo</p>
//                       <p className="text-xl font-bold text-foreground">3 500 PLN</p>
//                     </div>
                    
//                     {/* Quick Actions */}
//                     <div className="grid grid-cols-4 gap-2">
//                       {[Gamepad2, Gift, Wallet, Headphones].map((Icon, i) => (
//                         <div key={i} className="bg-secondary/50 rounded-lg p-2 flex flex-col items-center gap-1">
//                           <Icon className="w-4 h-4 text-primary" />
//                           <span className="text-[8px] text-muted-foreground">
//                             {["Gry", "Bonus", "Portfel", "Pomoc"][i]}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
                    
//                     {/* Games */}
//                     <div>
//                       <p className="text-xs font-medium text-foreground mb-2">Popularne gry</p>
//                       <div className="grid grid-cols-3 gap-2">
//                         {[1, 2, 3].map((i) => (
//                           <div key={i} className="aspect-square bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg" />
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Decorative Elements */}
//               <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
//               <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// // Import for the visual
// import { Gamepad2, Wallet, Headphones } from "lucide-react"




import { CheckCircle2, Download, Apple, Smartphone } from "lucide-react"

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

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="/play" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 border border-gray-700 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 group"
              >
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-2 rounded-lg">
                  <Apple className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Download for</div>
                  <div className="text-lg">iOS App Store</div>
                </div>
                <Download className="w-5 h-5 ml-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
              
              <a 
                href="/play" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 border border-gray-700 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/20 group"
              >
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-2 rounded-lg">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Download for</div>
                  <div className="text-lg">Google Play</div>
                </div>
                <Download className="w-5 h-5 ml-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
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

          {/* Visual with your photo */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              {/* Phone Frame */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-gray-700 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] overflow-hidden aspect-[9/19] relative">
                  
                  {/* Your Photo as Background */}
                  <div className="w-full h-full relative">
                    <img 
                      src="/images/mobile.jpg" // Замените на путь к вашей фотографии
                      alt="VOX Casino Mobile App"
                      className="w-full h-full object-cover"
                    />
                    
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-[#d67413]/30 to-[#b3590d]/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl" />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
