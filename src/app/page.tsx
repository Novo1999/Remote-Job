'use client'
import Advertise from '@/components/Advertise'
import FilterPopover from '@/components/Filter/FilterPopover'
import Hero from '@/components/Hero'
import JobContainer from '@/components/JobContainer'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Search from '@/components/Search'
import Sort from '@/components/Sort'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  return (
    <>
      <Advertise />
      <main className='relative flex flex-col mx-4 xl:mx-48 2xl:mx-96'>
        <Navbar />
        <Hero />
        <div className='flex flex-col mx-4 sm:mx-20 lg:mx-40'>
          <Search />
          <div className='flex justify-center font-poppins gap-2 font-semibold mt-6 sm:mx-32 lg:mx-48'>
            <FilterPopover />
            <Sort />
          </div>
        </div>
        <JobContainer />
      </main>
      <Newsletter />
    </>
  )
}
