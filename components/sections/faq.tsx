"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Jak założyć konto w VOX Casino?",
    answer: "Kliknij \"Zarejestruj się\", wypełnij formularz swoimi danymi (imię, nazwisko, data urodzenia, e-mail, telefon), potwierdź adres e-mail i zakończ proces weryfikacji. Następnie wykonaj pierwsze logowanie, aby aktywować profil. Cały proces zajmuje zaledwie kilka minut."
  },
  {
    question: "Jakie bonusy mogę otrzymać jako nowy gracz?",
    answer: "Nowi gracze otrzymują bardzo hojny pakiet powitalny. Aktualna oferta obejmuje bonus do 3 000€ oraz dodatkowo 500 darmowych spinów (FS). Pakiet jest rozłożony na kilka pierwszych depozytów, co zapewnia fantastyczny start w kasynie."
  },
  {
    question: "Ile trwa przetwarzanie wypłaty w VOX Casino?",
    answer: "Wypłaty na e-portfele (Skrill/Neteller) są często przetwarzane w ciągu 0-24 godzin. Przelewy bankowe i wypłaty na karty mogą zająć 3-5 dni roboczych. Czas wypłaty zależy również od weryfikacji konta i wybranej metody płatności."
  },
  {
    question: "Czy mogę grać w VOX Casino na telefonie komórkowym?",
    answer: "Tak, strona jest w pełni zoptymalizowana dla wszystkich urządzeń mobilnych (iOS i Android). Możesz grać bezpośrednio przez przeglądarkę (Chrome, Safari), która działa płynnie jak dedykowana aplikacja. Nie musisz pobierać żadnego oprogramowania."
  },
  {
    question: "Czy gra w VOX Casino jest bezpieczna i wiarygodna?",
    answer: "Tak. Kasyno używa nowoczesnego szyfrowania SSL (128-bit), posiada ważną licencję Curacao eGaming (nr 8048/JAZ2023-044) i jest regularnie sprawdzane pod kątem uczciwości. Wszystkie gry wykorzystują certyfikowane generatory liczb losowych (RNG)."
  },
  {
    question: "Jakie metody płatności są dostępne dla graczy z Polski?",
    answer: "Polscy gracze mogą korzystać z BLIK, Przelewy24, Visa, Mastercard, Skrill, Neteller, Paysafecard oraz przelewu bankowego. Transakcje można przeprowadzać w PLN bez opłat za przewalutowanie."
  },
  {
    question: "Co zrobić, gdy zapomnę hasła do logowania?",
    answer: "W panelu logowania wybierz opcję \"Nie pamiętam hasła\". Otrzymasz instrukcje resetowania na swój adres e-mail, co pozwoli Ci szybko odzyskać dostęp do konta. Upewnij się, że sprawdzasz również folder spam."
  },
  {
    question: "Jak mogę skontaktować się z obsługą klienta?",
    answer: "Obsługa klienta jest dostępna 24/7 poprzez czat na żywo bezpośrednio na stronie (odpowiedź poniżej minuty) oraz przez e-mail dla bardziej złożonych problemów. Wsparcie jest dostępne w języku polskim."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-[#1a1d2e] to-[#171a29]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Najczęściej Zadawane{" "}
            <span className="text-gradient">Pytania</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące VOX Casino. 
            Jeśli nie znajdziesz odpowiedzi, skontaktuj się z naszym wsparciem 24/7.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/20 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 text-primary shrink-0 transition-transform duration-200",
                      openIndex === index && "rotate-180"
                    )} 
                  />
                </button>
                <div 
                  className={cn(
                    "grid transition-all duration-200",
                    openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
