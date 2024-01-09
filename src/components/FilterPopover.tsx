'use client'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { IoFilterSharp } from 'react-icons/io5'
import Filters from './Filters'

const FilterPopover = () => {
  return (
    <Popover>
      <PopoverTrigger className='rounded-full w-20 text-xs text-black' asChild>
        <Button className='space-x-1' variant='outline'>
          <IoFilterSharp />
          <span>Filter</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full sm:w-[42rem] lg:w-[44rem] xl:w-[60rem] relative min-[375px]:left-7 min-[425px]:left-12 lg:left-24'>
        <Filters />
      </PopoverContent>
    </Popover>
  )
}
export default FilterPopover
