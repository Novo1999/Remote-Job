import FilterPopover from '@/components/FilterPopover'
import Filters from '@/components/Filters'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import JobContainer from '@/components/JobContainer'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Search from '@/components/Search'
import Sort from '@/components/Sort'

export default function Home() {
  return (
    <>
      {/* <Advertising /> */}
      <main className='relative flex flex-col mx-4 xl:mx-48 2xl:mx-96'>
        <Navbar />
        <Hero />
        <div className='flex flex-col mx-4 sm:mx-20 lg:mx-40 xl:mx-60 2xl:mx-96'>
          <Search />
          <div className='flex justify-center font-poppins gap-2 font-semibold mt-2'>
            <FilterPopover />
            <Sort />
          </div>
        </div>
        <JobContainer />
        <Newsletter />
        <Footer />
      </main>
    </>
  )
}
