'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { IoFilterSharp } from 'react-icons/io5'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
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
      <PopoverContent className='w-80'>
        <Filters />
      </PopoverContent>
    </Popover>
  )
}
export default FilterPopover
