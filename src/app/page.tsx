import Hero from '@/components/Hero'
import JobContainer from '@/components/JobContainer'
import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Search />
      <JobContainer />
    </main>
  )
}
