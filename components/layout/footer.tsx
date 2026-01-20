import Link from "next/link"
import { Shield, Clock, CreditCard, Headphones, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#12141f] border-t border-border">

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-foreground">VOX</span>
                <span className="text-xs text-muted-foreground -mt-1">CASINO</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              VOX Casino to licencjonowane kasyno online oferujące ponad 2000 gier od najlepszych dostawców.
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent shrink-0" />
              <span className="text-muted-foreground">Licencja Curacao</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Szybkie Linki</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#gry" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                  Gry Casino
                </a>
              </li>
              <li>
                <a href="#bonusy" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                  Bonusy
                </a>
              </li>
              <li>
                <a href="#platnosci" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                  Płatności
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <Link href="/polityka-prywatnosci" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                  Prywatność
                </Link>
              </li>
            </ul>
          </div>

          {/* Games */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Gry</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <span className="text-muted-foreground text-xs sm:text-sm">Automaty</span>
              </li>
              <li>
                <span className="text-muted-foreground text-xs sm:text-sm">Na Żywo</span>
              </li>
              <li>
                <span className="text-muted-foreground text-xs sm:text-sm">Stołowe</span>
              </li>
              <li>
                <span className="text-muted-foreground text-xs sm:text-sm">Jackpoty</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Kontakt</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                <span className="text-muted-foreground text-xs sm:text-sm truncate">support@voxcasino.com</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                <span className="text-muted-foreground text-xs sm:text-sm">Czat 24/7</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                <span className="text-muted-foreground text-xs sm:text-sm">Curacao</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
              &copy; {currentYear} VOX Casino
            </p>
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
              <span className="text-muted-foreground text-xs sm:text-sm font-bold">18+</span>
              <span className="text-muted-foreground text-xs sm:text-sm">Graj odpowiedzialnie</span>
              <Link 
                href="/polityka-prywatnosci" 
                className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
              >
                Prywatność
              </Link>
            </div>
          </div>
          <p className="text-[10px] sm:text-xs text-muted-foreground mt-3 sm:mt-4 text-center leading-relaxed">
            Gry hazardowe są przeznaczone wyłącznie dla osób pełnoletnich. Hazard może uzależniać.
          </p>
        </div>
      </div>
    </footer>
  )
}
