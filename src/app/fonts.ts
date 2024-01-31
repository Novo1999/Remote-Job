import {
  Chewy,
  Montserrat,
  Montserrat_Subrayada,
  Oswald,
  Poppins,
} from 'next/font/google'
export const oswald = Oswald({
  subsets: ['cyrillic'],
  variable: '--font-oswald',
  weight: ['400', '500', '700'],
})
export const chewy = Chewy({
  subsets: ['latin'],
  variable: '--font-chewy',
  weight: ['400'],
})

export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '700'],
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '700'],
})
export const montserrat2 = Montserrat_Subrayada({
  subsets: ['latin'],
  variable: '--font-montserrat2',
  weight: ['400', '700'],
})
