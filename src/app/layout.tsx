import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['cyrillic'],
  variable: '--font-oswald',
  weight: ['400', '500', '700'],
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
      <body className={oswald.variable}>{children}</body>
    </html>
  )
}
