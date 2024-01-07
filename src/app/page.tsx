import Advertising from '@/components/Advertising'
import Filter from '@/components/Filter'
import Filters from '@/components/Filters'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import JobContainer from '@/components/JobContainer'
import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import Sort from '@/components/Sort'
import { jobPosts } from '@/utils/dummyData'

export default function Home() {
  return (
    <>
      <Advertising />
      <main className='relative top-20 xl:mx-32 2xl:mx-64'>
        <Navbar />
        <Hero />
        <div className='flex flex-col items-center gap-3'>
          <Search />
          <Filters />
        </div>
        <JobContainer />
        <Footer />
      </main>
    </>
  )
}
