'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import Filters from './Filters'

const FilterPopover = () => {
  return (
    <Popover>
      <PopoverTrigger
        className='w-full mt-2 rounded-full text-xs text-black'
        asChild
      >
        <Button variant='outline'>Filter</Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <Filters />
      </PopoverContent>
    </Popover>
  )
}
export default FilterPopover
