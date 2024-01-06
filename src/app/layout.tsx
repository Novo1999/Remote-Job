import type { Metadata } from 'next'
import {
  Inter,
  Oswald,
  Poppins,
  Montserrat,
  Montserrat_Subrayada,
} from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['cyrillic'],
  variable: '--font-oswald',
  weight: ['400', '500', '700'],
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

export const metadata: Metadata = {
  title: 'Remote Job',
  description: 'Remote Job Listing Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${oswald.variable} ${poppins.variable} ${montserrat2.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
