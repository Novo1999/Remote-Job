'use client'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { Button } from '@/components/ui/button'
import { useChangeSearchParams } from '@/hooks/use-change-search-params'
import { useExtractFilter } from '@/hooks/use-extract-filter'
import {
  setFilterOpen,
  setFilterQuery,
} from '@/lib/features/filter/filterSlice'
import { useAppDispatch, useAppSelector } from '@/lib/features/hooks'
import { useGetAllJobsQuery } from '@/lib/features/jobsApi/jobsApi'
import { constructFilterQuery } from '@/utils/constructFilterQuery'
import { IoFilterSharp } from 'react-icons/io5'
import Filter from './Filter'

// will show when data is loading so user cannot go to filter when data has not arrived yet, as it will break the application
const spinner = <span className='loading loading-infinity loading-sm'></span>

const FilterPopover = () => {
  const dispatch = useAppDispatch()
  const { filterBy, filterOpen } = useAppSelector((state) => state.filter)
  const { data, isLoading, isError } = useGetAllJobsQuery({
    sortBy: '',
    limit: 0,
    filterBy: '',
    q: '',
  })

  useExtractFilter()

  const { handleFilter } = useChangeSearchParams()

  const handleSubmit = () => {
    const query = constructFilterQuery(filterBy)
    dispatch(setFilterQuery({ query, isFiltering: true }))
    dispatch(setFilterOpen(false))
    handleFilter(query)
  }
  // check if there is any filter option selected
  const hasFilter = Object.values(filterBy).some(
    (item) => typeof item !== 'number' && item.length > 0
  )
  return (
    <Sheet
      open={filterOpen}
      onOpenChange={() => dispatch(setFilterOpen(!filterOpen))}
    >
      <SheetTrigger
        disabled={isLoading || isError || data?.length === 0}
        className='hover:bg-slate-200 transition-colors rounded-full text-xs text-black'
        asChild
      >
        <Button
          onClick={() => dispatch(setFilterOpen(true))}
          className='special-btn w-32 flex justify-center items-center'
        >
          <IoFilterSharp />
          <span className='m-auto'>{isLoading ? spinner : 'Filter'}</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side='left'
        className='flex flex-col gap-4 px-2 max-w-md w-full mx-auto overflow-auto p-4 rounded-t-[10px] scrollbar-hide'
      >
        <Filter category='locations' />
        <Filter category='positions' />
        <Filter category='types' />
        <Filter category='benefits' />
        <Filter category='salary' />
        <Button disabled={!hasFilter} onClick={handleSubmit}>
          Submit
        </Button>
      </SheetContent>
    </Sheet>
  )
}
export default FilterPopover
