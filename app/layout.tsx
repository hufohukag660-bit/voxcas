import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "latin-ext"],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin", "latin-ext"],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'VOX Casino Polska | Oficjalna Strona 2026 - Najlepsze Kasyno Online',
  description: 'VOX Casino - oficjalne kasyno online w Polsce. Ponad 2000 gier, bonus powitalny do 3000€ + 500 darmowych spinów. Bezpieczna gra, szybkie wypłaty, wsparcie 24/7.',
  keywords: 'vox casino, kasyno online, automaty online, bonus powitalny, darmowe spiny, gry kasynowe, ruletka, blackjack, polska',
  authors: [{ name: 'VOX Casino' }],
  robots: 'index, follow',
  openGraph: {
    title: 'VOX Casino Polska | Oficjalna Strona 2026',
    description: 'Najlepsze kasyno online w Polsce. Ponad 2000 gier, bonus do 3000€ + 500 FS!',
    type: 'website',
    locale: 'pl_PL',
    siteName: 'VOX Casino',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VOX Casino Polska | Oficjalna Strona 2026',
    description: 'Najlepsze kasyno online w Polsce. Ponad 2000 gier, bonus do 3000€ + 500 FS!',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#171a29',
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
    <html lang="pl">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
