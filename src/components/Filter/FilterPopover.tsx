'use client'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useState } from 'react'
import { IoFilterSharp } from 'react-icons/io5'
import Filters from './Filters'
import Filter from './Filter'

const FilterPopover = () => {
  const [filterOpen, setFilterOpen] = useState<boolean>(false)
  return (
    <Drawer>
      <DrawerTrigger className='w-full hover:bg-slate-200 transition-colors rounded-full text-xs text-black'>
        <Button
          className='space-x-1 font-semibold w-full text-black rounded-full'
          variant='outline'
        >
          <IoFilterSharp />
          <span>Filter</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className='flex flex-col gap-4 h-full px-2'>
        <Filter category='location' />
        <Filter category='position' />
        <Filter category='types' />
        <Filter category='benefits' />
        <Filter category='salary' />
        <Button>Submit</Button>
        <DrawerClose>
          <Button variant='outline' className='text-black'>
            Cancel
          </Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  )
}
export default FilterPopover

{
  /* <Drawer onOpenChange={() => setFilterOpen(!filterOpen)} open={filterOpen}>
      <DrawerTrigger className='rounded-full w-20 text-xs text-black' asChild>
        <Button className='space-x-1 font-semibold w-full' variant='outline'>
          <IoFilterSharp />
          <span>Filter</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className='w-full sm:w-[42rem] lg:w-[44rem] xl:w-[50rem] shadow-lg flex p-2 relative min-[375px]:left-7 min-[425px]:left-12 lg:left-24'>
        <Filters setFilterOpen={setFilterOpen} />
      </DrawerContent>
    </Drawer> */
}
