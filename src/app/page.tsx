import Advertising from '@/components/Advertising'
import Hero from '@/components/Hero'
import JobContainer from '@/components/JobContainer'
import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Advertising />
      <main className='relative top-20 xl:mx-32 2xl:mx-60'>
        <Navbar />
        <Hero />
        <Search />
        <JobContainer />
      </main>
    </>
  )
}
