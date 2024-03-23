'use client'
import { useChangeSearchParams } from '@/hooks/use-change-search-params'
import FilterPopover from './Filter/FilterPopover'
import Sort from './Sort'

const FilterButtons = () => {
  const { handleResetFilter, hasFilterValue } = useChangeSearchParams()

  return (
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
  )
}
export default FilterButtons
