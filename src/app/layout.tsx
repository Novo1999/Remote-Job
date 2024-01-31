'use client'
import Advertise from '@/components/Advertise'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'

import { Provider } from 'react-redux'
import './globals.css'
import store from './store'
import { chewy, montserrat, montserrat2, oswald, poppins } from './fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Provider store={store}>
        <body
          className={`${oswald.variable} ${poppins.variable} ${montserrat2.variable} ${montserrat.variable} ${chewy.variable}`}
        >
          <Advertise />
          <Navbar />
          {children}
          <Newsletter />
        </body>
      </Provider>
    </html>
  )
}
