'use client'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { IoFilterSharp } from 'react-icons/io5'
import Filters from './Filters'
import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react'

const FilterPopover = () => {
  const [filterOpen, setFilterOpen] = useState<boolean>(false)
  return (
    <Popover onOpenChange={() => setFilterOpen(!filterOpen)} open={filterOpen}>
      <PopoverTrigger className='rounded-full w-20 text-xs text-black' asChild>
        <Button className='space-x-1 ' variant='outline'>
          <IoFilterSharp />
          <span>Filter</span>
        </Button>
      </PopoverTrigger>
      {/* filter positioning */}
      <PopoverContent className='w-full sm:w-[42rem] lg:w-[44rem] xl:w-[50rem] shadow-lg flex p-2 relative min-[375px]:left-7 min-[425px]:left-12 lg:left-24'>
        <Filters setFilterOpen={setFilterOpen} />
      </PopoverContent>
    </Popover>
  )
}
export default FilterPopover
