'use client'
import FilterPopover from '@/components/Filter/FilterPopover'
import Hero from '@/components/Hero'
import JobContainer from '@/components/JobContainer'
import Search from '@/components/Search'
import Sort from '@/components/Sort'
import { useAppSelector } from './hooks'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const pathname = usePathname()
  const { isFiltering } = useAppSelector((state) => state.filter)
  const searchParams = useSearchParams()
  const handleResetFilter = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('filter', '')
    router.push(pathname + '?' + params.toString(), { scroll: false })
  }

  return (
    <>
      <Hero />
      <main className='relative flex flex-col mx-4 xl:mx-48 2xl:mx-96'>
        <div className='flex flex-col mx-4 sm:mx-20 lg:mx-40'>
          <Search />
          <div className='flex justify-center item mx-12 xl:mx-60 font-poppins gap-2 font-semibold mt-6 sm:mx-32 lg:mx-48 mb-4'>
            <FilterPopover />
            {isFiltering && (
              <button
                onClick={handleResetFilter}
                className='text-xs text-red-500 hover:-translate-y-1 transition-all'
              >
                Reset Filter
              </button>
            )}
            <Sort />
          </div>
        </div>
        <JobContainer />
      </main>
    </>
  )
}
