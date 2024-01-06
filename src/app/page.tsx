import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Search />
    </main>
  )
}
