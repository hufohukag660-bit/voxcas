"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#gry", label: "Gry" },
    { href: "#bonusy", label: "Bonusy" },
    { href: "#platnosci", label: "Płatności" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#171a29]/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center glow-primary">
                <span className="text-primary-foreground font-bold text-lg md:text-xl">V</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-foreground">VOX</span>
              <span className="text-xs text-muted-foreground -mt-1">CASINO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-accent" />
              <span>Licencja Curacao</span>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
              Zaloguj się
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
              <Star className="w-4 h-4 mr-2" />
              Zarejestruj się
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
                  Zaloguj się
                </Button>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Zarejestruj się
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
