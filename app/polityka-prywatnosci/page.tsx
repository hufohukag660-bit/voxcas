import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, Bell, Mail, Scale, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Polityka Prywatności | VOX Casino Polska",
  description: "Polityka prywatności VOX Casino. Dowiedz się, jak chronimy Twoje dane osobowe i jakie masz prawa zgodnie z RODO.",
  robots: "index, follow",
}

const sections = [
  {
    id: "wprowadzenie",
    icon: Shield,
    title: "1. Wprowadzenie",
    content: `VOX Casino (dalej „Kasyno", „my", „nas" lub „nasz") zobowiązuje się do ochrony prywatności i danych osobowych naszych użytkowników. Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób gromadzimy, wykorzystujemy, przechowujemy i chronimy Twoje dane osobowe podczas korzystania z naszej platformy.

Korzystając z usług VOX Casino, wyrażasz zgodę na praktyki opisane w niniejszej Polityce Prywatności. Zachęcamy do uważnego zapoznania się z tym dokumentem, aby zrozumieć nasze zobowiązania dotyczące Twoich danych osobowych.

Niniejsza polityka jest zgodna z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO) oraz innymi obowiązującymi przepisami o ochronie danych osobowych.`
  },
  {
    id: "administrator",
    icon: UserCheck,
    title: "2. Administrator Danych",
    content: `Administratorem Twoich danych osobowych jest VOX Casino, działające na podstawie licencji Curacao eGaming (nr 8048/JAZ2023-044).

Kontakt z Administratorem:
• E-mail: privacy@voxcasino.com
• E-mail wsparcia: support@voxcasino.com
• Czat na żywo: dostępny 24/7 na stronie

Administrator wyznaczył Inspektora Ochrony Danych (IOD), z którym można się skontaktować we wszystkich sprawach dotyczących przetwarzania danych osobowych oraz korzystania z praw związanych z przetwarzaniem danych.`
  },
  {
    id: "zbieranie",
    icon: Database,
    title: "3. Jakie Dane Zbieramy",
    content: `W ramach świadczenia naszych usług możemy zbierać następujące kategorie danych osobowych:

**Dane identyfikacyjne:**
• Imię i nazwisko
• Data urodzenia
• Numer PESEL lub inny numer identyfikacyjny
• Kopia dokumentu tożsamości (w ramach procedury KYC)

**Dane kontaktowe:**
• Adres e-mail
• Numer telefonu
• Adres zamieszkania

**Dane finansowe:**
• Informacje o metodach płatności
• Historia transakcji (depozyty, wypłaty)
• Dane karty płatniczej (przetwarzane przez bezpiecznych dostawców płatności)

**Dane techniczne:**
• Adres IP
• Typ przeglądarki i urządzenia
• System operacyjny
• Pliki cookies i podobne technologie
• Logi serwera

**Dane o aktywności:**
• Historia gier i zakładów
• Preferencje dotyczące gier
• Interakcje z obsługą klienta
• Informacje o bonusach i promocjach`
  },
  {
    id: "cele",
    icon: Eye,
    title: "4. Cele Przetwarzania Danych",
    content: `Twoje dane osobowe przetwarzamy w następujących celach:

**Realizacja umowy (art. 6 ust. 1 lit. b RODO):**
• Utworzenie i zarządzanie kontem użytkownika
• Przetwarzanie depozytów i wypłat
• Świadczenie usług hazardowych online
• Obsługa bonusów i promocji

**Obowiązki prawne (art. 6 ust. 1 lit. c RODO):**
• Weryfikacja tożsamości (KYC - Know Your Customer)
• Przeciwdziałanie praniu pieniędzy (AML)
• Weryfikacja wieku (ukończone 18 lat)
• Raportowanie do organów regulacyjnych

**Uzasadniony interes (art. 6 ust. 1 lit. f RODO):**
• Zapobieganie oszustwom i nadużyciom
• Poprawa jakości usług i doświadczenia użytkownika
• Analiza statystyczna i badania rynku
• Ochrona praw i interesów Kasyna

**Zgoda (art. 6 ust. 1 lit. a RODO):**
• Marketing bezpośredni (newsletter, SMS)
• Personalizacja ofert i reklam
• Cookies marketingowe i analityczne`
  },
  {
    id: "udostepnianie",
    icon: Lock,
    title: "5. Udostępnianie Danych",
    content: `Możemy udostępniać Twoje dane osobowe następującym podmiotom:

**Dostawcy usług:**
• Operatorzy płatności (BLIK, Przelewy24, Skrill, Neteller)
• Dostawcy gier (NetEnt, Microgaming, Evolution Gaming)
• Dostawcy usług IT i hostingowych
• Dostawcy usług weryfikacji tożsamości

**Organy regulacyjne:**
• Curacao eGaming Authority
• Organy nadzoru finansowego
• Organy ścigania (na żądanie)

**Inne podmioty:**
• Firmy audytorskie i prawnicze
• Partnerzy biznesowi (za Twoją zgodą)

Wszystkie podmioty, którym udostępniamy dane, są zobowiązane do zapewnienia odpowiedniego poziomu ochrony danych osobowych zgodnie z obowiązującymi przepisami.`
  },
  {
    id: "bezpieczenstwo",
    icon: Shield,
    title: "6. Bezpieczeństwo Danych",
    content: `Stosujemy zaawansowane środki techniczne i organizacyjne w celu ochrony Twoich danych osobowych:

**Środki techniczne:**
• Szyfrowanie SSL 128-bit dla wszystkich transmisji danych
• Szyfrowanie danych w spoczynku (at rest)
• Firewalle i systemy wykrywania włamań
• Regularne testy penetracyjne i audyty bezpieczeństwa
• Dwuskładnikowe uwierzytelnianie (2FA)

**Środki organizacyjne:**
• Szkolenia pracowników z zakresu ochrony danych
• Ograniczony dostęp do danych (zasada need-to-know)
• Procedury reagowania na incydenty
• Umowy o zachowaniu poufności
• Regularne przeglądy i aktualizacje polityk bezpieczeństwa

W przypadku naruszenia bezpieczeństwa danych, które może powodować wysokie ryzyko dla Twoich praw i wolności, zostaniesz o tym poinformowany bez zbędnej zwłoki.`
  },
  {
    id: "prawa",
    icon: Scale,
    title: "7. Twoje Prawa",
    content: `Zgodnie z RODO przysługują Ci następujące prawa:

**Prawo dostępu (art. 15 RODO):**
Masz prawo uzyskać potwierdzenie, czy przetwarzamy Twoje dane, oraz dostęp do tych danych i informacji o przetwarzaniu.

**Prawo do sprostowania (art. 16 RODO):**
Masz prawo żądać sprostowania nieprawidłowych danych lub uzupełnienia niekompletnych danych.

**Prawo do usunięcia (art. 17 RODO):**
Masz prawo żądać usunięcia danych („prawo do bycia zapomnianym"), gdy dane nie są już niezbędne lub cofnąłeś zgodę.

**Prawo do ograniczenia przetwarzania (art. 18 RODO):**
Masz prawo żądać ograniczenia przetwarzania w określonych sytuacjach.

**Prawo do przenoszenia danych (art. 20 RODO):**
Masz prawo otrzymać swoje dane w formacie nadającym się do odczytu maszynowego.

**Prawo do sprzeciwu (art. 21 RODO):**
Masz prawo sprzeciwić się przetwarzaniu danych opartemu na uzasadnionym interesie lub na potrzeby marketingu.

**Prawo do cofnięcia zgody:**
Jeśli przetwarzanie opiera się na zgodzie, możesz ją cofnąć w dowolnym momencie.

**Prawo do skargi:**
Masz prawo wnieść skargę do organu nadzorczego (UODO w Polsce).

Aby skorzystać ze swoich praw, skontaktuj się z nami na adres: privacy@voxcasino.com`
  },
  {
    id: "cookies",
    icon: Database,
    title: "8. Pliki Cookies",
    content: `Nasza strona wykorzystuje pliki cookies i podobne technologie:

**Cookies niezbędne:**
Wymagane do prawidłowego funkcjonowania strony, np. utrzymanie sesji logowania, bezpieczeństwo, preferencje językowe.

**Cookies funkcjonalne:**
Umożliwiają zapamiętanie Twoich preferencji i personalizację doświadczenia.

**Cookies analityczne:**
Pomagają nam zrozumieć, jak użytkownicy korzystają ze strony (np. Google Analytics).

**Cookies marketingowe:**
Używane do wyświetlania spersonalizowanych reklam i pomiaru skuteczności kampanii.

**Zarządzanie cookies:**
Możesz zarządzać ustawieniami cookies w swojej przeglądarce. Wyłączenie niektórych cookies może wpłynąć na funkcjonalność strony.

Szczegółowe informacje o używanych cookies znajdziesz w naszym Regulaminie Cookies.`
  },
  {
    id: "przechowywanie",
    icon: Clock,
    title: "9. Okres Przechowywania Danych",
    content: `Przechowujemy Twoje dane osobowe przez okres niezbędny do realizacji celów przetwarzania:

**Dane konta:** Przez czas posiadania aktywnego konta + 5 lat od zamknięcia (wymogi regulacyjne).

**Dane transakcyjne:** 10 lat od wykonania transakcji (wymogi AML).

**Dane weryfikacyjne (KYC):** 5 lat od zakończenia relacji biznesowej.

**Dane marketingowe:** Do czasu cofnięcia zgody lub zgłoszenia sprzeciwu.

**Logi techniczne:** Maksymalnie 12 miesięcy.

**Dane o grach:** 5 lat od wykonania zakładu.

Po upływie okresów przechowywania dane są bezpiecznie usuwane lub anonimizowane.`
  },
  {
    id: "miedzynarodowe",
    icon: Globe,
    title: "10. Przekazywanie Danych Poza EOG",
    content: `W niektórych przypadkach Twoje dane mogą być przekazywane poza Europejski Obszar Gospodarczy (EOG).

Przekazywanie odbywa się wyłącznie do krajów zapewniających odpowiedni poziom ochrony (decyzja adekwatności Komisji Europejskiej) lub na podstawie standardowych klauzul umownych zatwierdzonych przez Komisję Europejską.

Zapewniamy, że każde przekazanie danych poza EOG jest zgodne z wymogami RODO i odbywa się z zastosowaniem odpowiednich zabezpieczeń.`
  },
  {
    id: "zmiany",
    icon: Bell,
    title: "11. Zmiany Polityki Prywatności",
    content: `Możemy okresowo aktualizować niniejszą Politykę Prywatności. O istotnych zmianach poinformujemy Cię poprzez:

• Powiadomienie na stronie internetowej
• Wiadomość e-mail (jeśli posiadasz konto)
• Powiadomienie przy logowaniu

Data ostatniej aktualizacji: Styczeń 2026

Zachęcamy do regularnego przeglądania Polityki Prywatności, aby być na bieżąco z naszymi praktykami dotyczącymi ochrony danych.`
  },
  {
    id: "kontakt",
    icon: Mail,
    title: "12. Kontakt",
    content: `Jeśli masz pytania dotyczące niniejszej Polityki Prywatności lub przetwarzania Twoich danych osobowych, skontaktuj się z nami:

**Inspektor Ochrony Danych:**
E-mail: privacy@voxcasino.com

**Obsługa Klienta:**
E-mail: support@voxcasino.com
Czat na żywo: dostępny 24/7

**Organ nadzorczy:**
Urząd Ochrony Danych Osobowych (UODO)
ul. Stawki 2, 00-193 Warszawa
www.uodo.gov.pl

Staramy się odpowiedzieć na wszystkie zapytania w ciągu 30 dni.`
  }
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#171a29] to-[#1a1d2e]">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Powrót do strony głównej</span>
          </Link>

          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Polityka Prywatności
            </h1>
            <p className="text-muted-foreground">
              Ostatnia aktualizacja: Styczeń 2026
            </p>
          </div>

          {/* Table of Contents */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Spis treści</h2>
              <nav className="grid md:grid-cols-2 gap-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Sections */}
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 scroll-mt-24"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground pt-2">
                      {section.title}
                    </h2>
                  </div>
                  <div className="prose prose-sm prose-invert max-w-none">
                    {section.content.split('\n\n').map((paragraph, index) => (
                      <p 
                        key={index} 
                        className="text-muted-foreground leading-relaxed mb-4 last:mb-0 whitespace-pre-line"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-6 md:p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Masz pytania dotyczące prywatności?
              </h3>
              <p className="text-muted-foreground mb-4">
                Nasz zespół jest gotowy pomóc Ci z wszelkimi pytaniami dotyczącymi Twoich danych osobowych.
              </p>
              <a 
                href="mailto:privacy@voxcasino.com"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Skontaktuj się z nami
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

// Import Globe for international section
import { Globe } from "lucide-react"
