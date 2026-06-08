import type { Metadata } from 'next'
import { Bebas_Neue, Outfit, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BookingProvider } from './components/BookingContext'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fireshine Recond — Professionell Rekond för Alla Fordon',
  description:
    'Professionell rekond och polering för alla typer av fordon. Specialiserade på stora och tunga fordon — lastbilar, bussar och transportfordon.',
  keywords:
    'rekond, bilrekond, lastbilsrekond, polering, keramisk coating, stora fordon, maskinpolering',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${bebasNeue.variable} ${outfit.variable} ${cormorant.variable}`}>
      <body>
        <BookingProvider>
          <Navbar />
          {children}
          <Footer />
        </BookingProvider>
      </body>
    </html>
  )
}
