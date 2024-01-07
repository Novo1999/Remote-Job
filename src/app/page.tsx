import Advertising from '@/components/Advertising'
import Filter from '@/components/Filter'
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
      <main className='relative top-20 xl:mx-32 2xl:mx-60'>
        <Navbar />
        <Hero />
        <div className='flex flex-col items-center gap-3'>
          <Search />
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 font-montserrat *:font-semibold'>
            <Filter category='location' />
            <Filter category='position' />
            <Sort />
            <span className='w-full sm:col-span-3  sm:p-4 text-white rounded-full'>
              <Filter category='salary' />
            </span>
          </div>
        </div>
        <JobContainer />
        <Footer />
      </main>
    </>
  )
}
