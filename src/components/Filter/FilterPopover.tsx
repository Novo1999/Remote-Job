'use client'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import {
  useFilterJobsQuery,
  useGetAllJobsQuery,
} from '@/app/features/jobsApi/jobsApi'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { Button } from '@/components/ui/button'
import { constructFilterQuery } from '@/utils/constructFilterQuery'
import { useEffect, useState } from 'react'
import { IoFilterSharp } from 'react-icons/io5'
import Filter from './Filter'
import { setFilteredJobs } from '@/app/features/filter/filterSlice'

// will show when data is loading so user cannot go to filter when data has not arrived yet, as it will break the application
const spinner = <span className='loading loading-infinity loading-sm'></span>

const FilterPopover = () => {
  const [filterOpen, setFilterOpen] = useState<boolean>(false)
  const [filterQuery, setFilterQuery] = useState('')
  const dispatch = useAppDispatch()
  const { data, isLoading, isError } = useGetAllJobsQuery({
    sortBy: '',
    limit: 0,
  })
  const { filterBy } = useAppSelector((state) => state.filter)
  const {
    data: filterData,
    isLoading: filterLoading,
    isError: filterError,
  } = useFilterJobsQuery(filterQuery)
  console.log(filterData)
  const handleSubmit = () => {
    const query = constructFilterQuery(filterBy)
    setFilterQuery(query)
  }

  useEffect(() => {
    if (!filterLoading && !filterError) {
      dispatch(setFilteredJobs(filterData))
    }
  }, [filterLoading, filterError, dispatch, filterData])

  return (
    <Sheet open={filterOpen} onOpenChange={() => setFilterOpen(!filterOpen)}>
      <SheetTrigger
        disabled={isLoading || isError || data?.length === 0}
        className='w-full hover:bg-slate-200 transition-colors rounded-full text-xs text-black'
        asChild
      >
        <Button
          onClick={() => setFilterOpen(true)}
          className='space-x-1 font-semibold w-full text-black rounded-full'
          variant='outline'
        >
          <IoFilterSharp />
          <span>{isLoading ? spinner : 'Filter'}</span>
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
        <Button onClick={handleSubmit}>Submit</Button>
      </SheetContent>
    </Sheet>
  )
}
export default FilterPopover
