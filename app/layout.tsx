// import React from "react"
// import type { Metadata, Viewport } from 'next'
// import { Inter, Poppins } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
// import './globals.css'

// const inter = Inter({ 
//   subsets: ["latin", "latin-ext"],
//   variable: '--font-inter',
//   display: 'swap'
// })

// const poppins = Poppins({ 
//   weight: ['400', '500', '600', '700', '800'],
//   subsets: ["latin", "latin-ext"],
//   variable: '--font-poppins',
//   display: 'swap'
// })

// // Структурированные данные для сайта
// const structuredData = {
//   "@context": "https://schema.org",
//   "@graph": [
//     {
//       "@type": "WebSite",
//       "@id": "https://casinovox-online.pl/",
//       "url": "https://casinovox-online.pl/",
//       "name": "VOX Casino Polska | Oficjalna Strona 2026",
//       "description": "VOX Casino - oficjalne kasyno online w Polsce. Ponad 2000 gier, bonus powitalny do 3000€ + 500 darmowych spinów.",
//       "publisher": {
//         "@type": "Organization",
//         "name": "VOX Casino",
//         "logo": {
//           "@type": "ImageObject",
//           "url": "https://casinovox-online.pl/vox2.png"
//         }
//       },
//       "inLanguage": "pl-PL",
//       "potentialAction": {
//         "@type": "SearchAction",
//         "target": {
//           "@type": "EntryPoint",
//           "urlTemplate": "https://casinovox-online.pl/search?q={search_term_string}"
//         },
//         "query-input": "required name=search_term_string"
//       }
//     },
//     {
//       "@type": "Organization",
//       "@id": "https://casinovox-online.pl/#gry",
//       "name": "VOX Casino",
//       "url": "https://casinovox-online.pl/",
//       "logo": {
//         "@type": "ImageObject",
//         "@id": "https://casinovox-online.pl/",
//         "url": "https://casinovox-online.pl/vox2.png",
//         "width": 180,
//         "height": 60,
//         "caption": "VOX Casino Logo"
//       },
//       "contactPoint": {
//         "@type": "ContactPoint",
//         "telephone": "+48-301-229-903",
//         "contactType": "customer service",
//         "availableLanguage": ["Polish", "English"],
//         "areaServed": "PL"
//       }
//     }
//   ]
// }

// // FAQ структурированные данные
// const faqStructuredData = {
//   "@context": "https://schema.org",
//   "@type": "FAQPage",
//   "mainEntity": [
//     {
//       "@type": "Question",
//       "name": "Jak założyć konto w VOX Casino?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Kliknij \"Zarejestruj się\", wypełnij formularz swoimi danymi (imię, nazwisko, data urodzenia, e-mail, telefon), potwierdź adres e-mail i zakończ proces weryfikacji. Następnie wykonaj pierwsze logowanie, aby aktywować profil. Cały proces zajmuje zaledwie kilka minut."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Jakie bonusy mogę otrzymać jako nowy gracz?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Nowi gracze otrzymują bardzo hojny pakiet powitalny. Aktualna oferta obejmuje bonus do 3 000€ oraz dodatkowo 500 darmowych spinów (FS). Pakiet jest rozłożony na kilka pierwszych depozytów, co zapewnia fantastyczny start w kasynie."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Ile trwa przetwarzanie wypłaty w VOX Casino?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Wypłaty na e-portfele (Skrill/Neteller) są często przetwarzane w ciągu 0-24 godzin. Przelewy bankowe i wypłaty na karty mogą zająć 3-5 dni roboczych. Czas wypłaty zależy również od weryfikacji konta i wybranej metody płatności."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Czy mogę grać w VOX Casino na telefonie komórkowym?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Tak, strona jest w pełni zoptymalizowana dla wszystkich urządzeń mobilnych (iOS i Android). Możesz grać bezpośrednio przez przeglądarkę (Chrome, Safari), która działa płynnie jak dedykowana aplikacja. Nie musisz pobierać żadnego oprogramowania."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Czy gra w VOX Casino jest bezpieczna i wiarygodna?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Tak. Kasyno używa nowoczesnego szyfrowania SSL (128-bit), posiada ważną licencję Curacao eGaming (nr 8048/JAZ2023-044) i jest regularnie sprawdzane pod kątem uczciwości. Wszystkie gry wykorzystują certyfikowane generatory liczb losowych (RNG)."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Jakie metody płatności są dostępne dla graczy z Polski?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Polscy gracze mogą korzystać z BLIK, Przelewy24, Visa, Mastercard, Skrill, Neteller, Paysafecard oraz przelewu bankowego. Transakcje można przeprowadzać w PLN bez opłat za przewalutowanie."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Co zrobić, gdy zapomnę hasła do logowania?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "W panelu logowania wybierz opcję \"Nie pamiętam hasła\". Otrzymasz instrukcje resetowania na swój adres e-mail, co pozwoli Ci szybko odzyskać dostęp do konta. Upewnij się, że sprawdzasz również folder spam."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Jak mogę skontaktować się z obsługą klienta?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Obsługa klienta jest dostępna 24/7 poprzez czat na żywo bezpośrednio na stronie (odpowiedź poniżej minuty) oraz przez e-mail dla bardziej złożonych problemów. Wsparcie jest dostępne w języku polskim."
//       }
//     }
//   ]
// }

// export const metadata: Metadata = {
//   metadataBase: new URL('https://casinovox-online.pl'),
//   title: {
//     default: 'VOX Casino Polska | Oficjalna Strona 2026 - Najlepsze Kasyno Online',
//     template: '%s | VOX Casino Polska'
//   },
//   description: 'VOX Casino - oficjalne kasyno online w Polsce. Ponad 2000 gier, bonus powitalny do 3000€ + 500 darmowych spinów. Bezpieczna gra, szybkie wypłaty, wsparcie 24/7.',
//   keywords: 'vox casino, kasyno online, automaty online, bonus powitalny, darmowe spiny, gry kasynowe, ruletka, blackjack, polska, legalne kasyno, vulkan vegas, total casino',
//   authors: [{ name: 'VOX Casino' }],
//   creator: 'VOX Casino',
//   publisher: 'VOX Casino',
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   alternates: {
//     canonical: 'https://casinovox-online.pl',
//     languages: {
//       'pl-PL': 'https://casinovox-online.pl',
//     },
//   },
//   openGraph: {
//     title: 'VOX Casino Polska | Oficjalna Strona 2026',
//     description: 'Najlepsze kasyno online w Polsce. Ponad 2000 gier, bonus do 3000€ + 500 FS!',
//     url: 'https://casinovox-online.pl',
//     siteName: 'VOX Casino',
//     locale: 'pl_PL',
//     type: 'website',
//     images: [
//       {
//         url: '/og-image.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'VOX Casino - Najlepsze Kasyno Online w Polsce',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'VOX Casino Polska | Oficjalna Strona 2026',
//     description: 'Najlepsze kasyno online w Polsce. Ponad 2000 gier, bonus do 3000€ + 500 FS!',
//     images: ['/twitter-image.jpg'],
//     creator: '@voxcasino',
//   },
//   category: 'gambling',
// }

// export const viewport: Viewport = {
//   themeColor: '#171a29',
//   colorScheme: 'dark',
//   width: 'device-width',
//   initialScale: 1,
//   maximumScale: 5,
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="pl-PL" className={`${inter.variable} ${poppins.variable}`}>
//       <head>

//         <script
//           async
//           src="https://www.googletagmanager.com/gtag/js?id=G-W68EGP7DJL"
//         />
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-W68EGP7DJL');
//             `,
//           }}
//         />
        
//         {/* Стандартные метатеги */}
//         <meta name="geo.region" content="PL" />
//         <meta name="geo.placename" content="Poland" />
//         <meta name="geo.position" content="52.2297;21.0122" />
//         <meta name="ICBM" content="52.2297, 21.0122" />
        
//         {/* Дополнительные SEO теги */}
//         <link rel="manifest" href="/site.webmanifest" />
//         <link rel="shortcut icon" href="/favicon.ico" />
//         <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//         <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
//         {/* Структурированные данные */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//         />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
//         />
        
//         {/* Предзагрузка критических ресурсов */}
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
//       </head>
//       <body className="font-sans antialiased min-h-screen bg-gray-900 text-white">
//         <div itemScope itemType="https://schema.org/OnlineStore">
//           <main itemScope itemType="https://schema.org/Casino">
//             {children}
//           </main>
//         </div>
//         <Analytics />
        
//         {/* Базовый скрипт для Web Vitals */}
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
              
//               // Отслеживание Web Vitals
//               if ('webVitals' in window) {
//                 webVitals.getCLS(console.log);
//                 webVitals.getFID(console.log);
//                 webVitals.getFCP(console.log);
//                 webVitals.getLCP(console.log);
//                 webVitals.getTTFB(console.log);
//               }
//             `,
//           }}
//         />
//       </body>
//     </html>
//   )
// }




import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "latin-ext"],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin", "latin-ext"],
  variable: '--font-poppins',
  display: 'swap'
})

// Структурированные данные для сайта - ОСНОВНЫЕ
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://casinovox-online.pl/",
      "url": "https://casinovox-online.pl/",
      "name": "VOX Casino Polska | Oficjalna Strona 2026",
      "description": "VOX Casino - oficjalne kasyno online w Polsce. Ponad 2000 gier, bonus powitalny do 3000€ + 500 darmowych spinów.",
      "publisher": {
        "@type": "Organization",
        "name": "VOX Casino",
        "logo": {
          "@type": "ImageObject",
          "url": "https://casinovox-online.pl/vox2.png"
        }
      },
      "inLanguage": "pl-PL",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://casinovox-online.pl/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://casinovox-online.pl/#organization",
      "name": "VOX Casino",
      "url": "https://casinovox-online.pl/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://casinovox-online.pl/vox2.png",
        "width": 180,
        "height": 60,
        "caption": "VOX Casino Logo"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+48-301-229-903",
        "contactType": "customer service",
        "availableLanguage": ["Polish", "English"],
        "areaServed": "PL"
      }
    },
    // ДОБАВЛЕН: Структурированные данные для Casino
    {
      "@type": "Casino",
      "@id": "https://casinovox-online.pl/",
      "name": "VOX Casino Polska",
      "description": "VOX Casino - oficjalne kasyno online w Polsce. Ponad 2000 gier, bonus powitalny do 3000€ + 500 darmowych spinów.",
      "url": "https://casinovox-online.pl/",
      "image": [
        "https://casinovox-online.pl/vox2.png",
        "https://casinovox-online.pl/og-image.jpg",
        "https://casinovox-online.pl/twitter-image.jpg"
      ],
      "telephone": "+48-301-229-903",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "PL",
        "addressLocality": "Warsaw",
        "postalCode": "00-001",
        "streetAddress": "ul. Werner 111"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "52.2297",
        "longitude": "21.0122"
      },
      "currenciesAccepted": "PLN, EUR",
      "paymentAccepted": "Credit Card, PayPal, Bank Transfer",
      "openingHours": "Mo-Su 00:00-23:59",
      "hasMap": "https://maps.google.com/?q=52.2297,21.0122"
    }
  ]
}

// FAQ структурированные данные
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Jak założyć konto w VOX Casino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kliknij \"Zarejestruj się\", wypełnij formularz swoimi danymi (imię, nazwisko, data urodzenia, e-mail, telefon), potwierdź adres e-mail i zakończ proces weryfikacji. Następnie wykonaj pierwsze logowanie, aby aktywować profil. Cały proces zajmuje zaledwie kilka minut."
      }
    },
    {
      "@type": "Question",
      "name": "Jakie bonusy mogę otrzymać jako nowy gracz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nowi gracze otrzymują bardzo hojny pakiet powitalny. Aktualna oferta obejmuje bonus do 3 000€ oraz dodatkowo 500 darmowych spinów (FS). Pakiet jest rozłożony na kilka pierwszych depozytów, co zapewnia fantastyczny start w kasynie."
      }
    },
    {
      "@type": "Question",
      "name": "Ile trwa przetwarzanie wypłaty w VOX Casino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wypłaty na e-portfele (Skrill/Neteller) są często przetwarzane w ciągu 0-24 godzin. Przelewy bankowe i wypłaty na karty mogą zająć 3-5 dni roboczych. Czas wypłaty zależy również od weryfikacji konta i wybranej metody płatności."
      }
    },
    {
      "@type": "Question",
      "name": "Czy mogę grać w VOX Casino na telefonie komórkowym?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak, strona jest w pełni zoptymalizowana dla wszystkich urządzeń mobilnych (iOS i Android). Możesz grać bezpośrednio przez przeglądarkę (Chrome, Safari), która działa płynnie jak dedykowana aplikacja. Nie musisz pobierać żadnego oprogramowania."
      }
    },
    {
      "@type": "Question",
      "name": "Czy gra w VOX Casino jest bezpieczna i wiarygodna?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak. Kasyno używa nowoczesnego szyfrowania SSL (128-bit), posiada ważną licencję Curacao eGaming (nr 8048/JAZ2023-044) i jest regularnie sprawdzane pod kątem uczciwości. Wszystkie gry wykorzystują certyfikowane generatory liczb losowych (RNG)."
      }
    },
    {
      "@type": "Question",
      "name": "Jakie metody płatności są dostępne dla graczy z Polski?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Polscy gracze mogą korzystać z BLIK, Przelewy24, Visa, Mastercard, Skrill, Neteller, Paysafecard oraz przelewu bankowego. Transakcje można przeprowadzać w PLN bez opłat za przewalutowanie."
      }
    },
    {
      "@type": "Question",
      "name": "Co zrobić, gdy zapomnę hasła do logowania?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "W panelu logowania wybierz opcję \"Nie pamiętam hasła\". Otrzymasz instrukcje resetowania na swój adres e-mail, co pozwoli Ci szybko odzyskać dostęp do konta. Upewnij się, że sprawdzasz również folder spam."
      }
    },
    {
      "@type": "Question",
      "name": "Jak mogę skontaktować się z obsługą klienta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Obsługa klienta jest dostępna 24/7 poprzez czat na żywo bezpośrednio na stronie (odpowiedź poniżej minuty) oraz przez e-mail dla bardziej złożonych problemów. Wsparcie jest dostępne w języku polskim."
      }
    }
  ]
}

export const metadata: Metadata = {
  metadataBase: new URL('https://casinovox-online.pl'),
  title: {
    default: 'VOX Casino Polska | Oficjalna Strona 2026 - Najlepsze Kasyno Online',
    template: '%s | VOX Casino Polska'
  },
  description: 'VOX Casino - oficjalne kasyno online w Polsce. Ponad 2000 gier, bonus powitalny do 3000€ + 500 darmowych spinów. Bezpieczna gra, szybkie wypłaty, wsparcie 24/7.',
  keywords: 'vox casino, kasyno online, automaty online, bonus powitalny, darmowe spiny, gry kasynowe, ruletka, blackjack, polska, legalne kasyno, vulkan vegas, total casino',
  authors: [{ name: 'VOX Casino' }],
  creator: 'VOX Casino',
  publisher: 'VOX Casino',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://casinovox-online.pl',
    languages: {
      'pl-PL': 'https://casinovox-online.pl',
    },
  },
  openGraph: {
    title: 'VOX Casino Polska | Oficjalna Strona 2026',
    description: 'Najlepsze kasyno online w Polsce. Ponad 2000 gier, bonus do 3000€ + 500 FS!',
    url: 'https://casinovox-online.pl',
    siteName: 'VOX Casino',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VOX Casino - Najlepsze Kasyno Online w Polsce',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VOX Casino Polska | Oficjalna Strona 2026',
    description: 'Najlepsze kasyno online w Polsce. Ponad 2000 gier, bonus do 3000€ + 500 FS!',
    images: ['/twitter-image.jpg'],
    creator: '@voxcasino',
  },
  category: 'gambling',
}

export const viewport: Viewport = {
  themeColor: '#171a29',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl-PL" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W68EGP7DJL"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W68EGP7DJL');
            `,
          }}
        />
        
        {/* Стандартные метатеги */}
        <meta name="geo.region" content="PL" />
        <meta name="geo.placename" content="Poland" />
        <meta name="geo.position" content="52.2297;21.0122" />
        <meta name="ICBM" content="52.2297, 21.0122" />
        
        {/* Дополнительные SEO теги */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Структурированные данные */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
        
        {/* Предзагрузка критических ресурсов */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
      </head>
      <body className="font-sans antialiased min-h-screen bg-gray-900 text-white">
        <div itemScope itemType="https://schema.org/OnlineStore">
          <main 
            itemScope 
            itemType="https://schema.org/Casino"
            itemID="https://casinovox-online.pl/#casino"
          >
            <meta itemProp="name" content="VOX Casino Polska" />
            <meta itemProp="description" content="VOX Casino - oficjalne kasyno online w Polsce. Ponad 2000 gier, bonus powitalny do 3000€ + 500 darmowych spinów." />
            <meta itemProp="url" content="https://casinovox-online.pl/" />
            <link itemProp="image" href="https://casinovox-online.pl/vox2.png" />
            <link itemProp="image" href="https://casinovox-online.pl/og-image.jpg" />
            <link itemProp="image" href="https://casinovox-online.pl/twitter-image.jpg" />
            <meta itemProp="telephone" content="+48-301-229-903" />
            <meta itemProp="priceRange" content="$$$" />
            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <meta itemProp="addressCountry" content="PL" />
              <meta itemProp="addressLocality" content="Warsaw" />
              <meta itemProp="postalCode" content="00-001" />
              <meta itemProp="streetAddress" content="ul. Example 123" />
            </div>
            {children}
          </main>
        </div>
        <Analytics />
        
        {/* Базовый скрипт для Web Vitals */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // Отслеживание Web Vitals
              if ('webVitals' in window) {
                webVitals.getCLS(console.log);
                webVitals.getFID(console.log);
                webVitals.getFCP(console.log);
                webVitals.getLCP(console.log);
                webVitals.getTTFB(console.log);
              }
            `,
          }}
        />
      </body>
    </html>
  )
}