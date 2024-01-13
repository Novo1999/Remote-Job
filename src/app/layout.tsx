'use client'
import type { Metadata } from 'next'
import {
  Oswald,
  Poppins,
  Montserrat,
  Montserrat_Subrayada,
  Chewy,
} from 'next/font/google'
import './globals.css'
import Advertise from '@/components/Advertise'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import { ClerkProvider } from '@clerk/nextjs'

const oswald = Oswald({
  subsets: ['cyrillic'],
  variable: '--font-oswald',
  weight: ['400', '500', '700'],
})
const chewy = Chewy({
  subsets: ['latin'],
  variable: '--font-chewy',
  weight: ['400'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '700'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '700'],
})
const montserrat2 = Montserrat_Subrayada({
  subsets: ['latin'],
  variable: '--font-montserrat2',
  weight: ['400', '700'],
})

const metadata: Metadata = {
  title: 'Remote Job',
  description: 'Remote Job Listing Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={`${oswald.variable} ${poppins.variable} ${montserrat2.variable} ${montserrat.variable} ${chewy.variable}`}
        >
          <Advertise />
          <Navbar />
          {children}
          <Newsletter />
        </body>
      </html>
    </ClerkProvider>
  )
}
