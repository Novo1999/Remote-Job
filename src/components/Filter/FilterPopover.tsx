'use client'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { IoFilterSharp } from 'react-icons/io5'
import Filter from './Filter'

const FilterPopover = () => {
  const [filterOpen, setFilterOpen] = useState<boolean>(false)
  return (
    <Sheet open={filterOpen} onOpenChange={() => setFilterOpen(!filterOpen)}>
      <SheetTrigger
        className='w-full hover:bg-slate-200 transition-colors rounded-full text-xs text-black'
        asChild
      >
        <Button
          onClick={() => setFilterOpen(true)}
          className='space-x-1 font-semibold w-full text-black rounded-full'
          variant='outline'
        >
          <IoFilterSharp />
          <span>Filter</span>
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
        <Button>Submit</Button>
      </SheetContent>
    </Sheet>
  )
}
export default FilterPopover
