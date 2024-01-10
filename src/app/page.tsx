import FilterPopover from '@/components/Filter/FilterPopover'
import Hero from '@/components/Hero'
import JobContainer from '@/components/JobContainer'
import Search from '@/components/Search'
import Sort from '@/components/Sort'

export default function Home() {
  return (
    <main className='relative flex flex-col mx-4 xl:mx-48 2xl:mx-96'>
      <Hero />
      <div className='flex flex-col mx-4 sm:mx-20 lg:mx-40'>
        <Search />
        <div className='flex justify-center item mx-12 xl:mx-60 font-poppins gap-2 font-semibold mt-6 sm:mx-32 lg:mx-48 mb-4'>
          <FilterPopover />
          <Sort />
        </div>
      </div>
      <JobContainer />
    </main>
  )
}
