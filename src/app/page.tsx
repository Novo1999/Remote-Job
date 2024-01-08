import FilterPopover from '@/components/FilterPopover'
import Filters from '@/components/Filters'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import JobContainer from '@/components/JobContainer'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Search from '@/components/Search'

export default function Home() {
  return (
    <>
      {/* <Advertising /> */}
      <main className='relative flex flex-col mx-4 xl:mx-32 2xl:mx-64'>
        <Navbar />
        <Hero />
        <div className='flex flex-col'>
          <Search />
          <FilterPopover />
        </div>
        <JobContainer />
        <Newsletter />
        <Footer />
      </main>
    </>
  )
}
