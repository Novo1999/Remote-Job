'use client'
import Advertise from '@/components/Advertise'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import StoreProvider from '@/components/StoreProvider'
import { chewy, montserrat, montserrat2, oswald, poppins } from './fonts'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <StoreProvider>
        <body
          className={`${oswald.variable} ${poppins.variable} ${montserrat2.variable} ${montserrat.variable} ${chewy.variable} bg-stone-800`}
        >
          <Advertise />
          <Navbar />
          {children}
          <Newsletter />
          <ToastContainer />
        </body>
      </StoreProvider>
    </html>
  )
}
