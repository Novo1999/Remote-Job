import Advertise from '@/components/Advertise'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import ScrollToTop from '@/components/ScrollToTop'
import StoreProvider from '@/components/StoreProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { chewy, montserrat, montserrat2, oswald, poppins } from './fonts'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='bg-zinc-800'>
      <body
        className={`${oswald.variable} ${poppins.variable} ${montserrat2.variable} ${montserrat.variable} ${chewy.variable} bg-zinc-800`}
      >
        <StoreProvider>
          <Advertise />
          <Navbar />
          {children}
        </StoreProvider>
        <ScrollToTop />
        <Newsletter />
        <ToastContainer />
      </body>
    </html>
  )
}
