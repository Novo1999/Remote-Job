'use client'
import FilterPopover from '@/components/Filter/FilterPopover'
import Hero from '@/components/Hero'
import JobContainer from '@/components/JobContainer'
import Search from '@/components/Search'
import Sort from '@/components/Sort'
import { useChangeSearchParams } from '@/hooks/use-change-search-params'
import { useExtractFilter } from '@/hooks/use-extract-filter'

export default function Page() {
  const { handleResetFilter, hasFilterValue } = useChangeSearchParams()
  useExtractFilter()

  return (
    <>
      <Hero />
      <main className='relative flex flex-col mx-4 xl:mx-48 2xl:mx-96'>
        <div className='flex flex-col mx-4 sm:mx-20 lg:mx-40'>
          <Search />
          <div className='flex justify-center m-auto item font-poppins gap-2 font-semibold mt-6 mb-4'>
            <FilterPopover />
            {hasFilterValue && (
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
