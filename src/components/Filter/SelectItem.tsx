'use client'
import { cn } from '@/lib/utils'

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

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import { useState } from 'react'
import { Button } from '../ui/button'

const setSelectItemColor = (category: string) => {
  if (category === 'location') {
    return 'bg-red-400'
  }
  if (category === 'types') {
    return 'bg-blue-400'
  }
  if (category === 'benefits') {
    return 'bg-purple-400'
  }
  if (category === 'position') {
    return 'bg-teal-400'
  }
}

export interface MultiSelectProps {
  options: string[]
  selected: string[]
  onChange: React.Dispatch<React.SetStateAction<string[]>>
  className?: string
  category: string
}

const MultiSelect = ({
  options,
  selected,
  onChange,
  className,
  category,
  ...props
}: MultiSelectProps) => {
  const [open, setOpen] = useState(false)
  const [showMore, setShowMore] = useState<string>()
  const handleUnselect = (item: string) => {
    onChange(selected.filter((i) => i !== item))
  }

  let gridSize = ''
  if (category === 'benefits') {
    gridSize = 'grid-cols-1'
  } else {
    gridSize = 'grid-cols-2'
  }

  const handleShowMore = (newShowMore: string) => {
    setShowMore(newShowMore)
  }

  console.log(showMore)
  console.log(showMore)
  return (
    <div {...props}>
      <div
        className={`grid ${gridSize} ${setSelectItemColor(
          category
        )} text-white text-xs`}
      >
        {options
          .map((option) => (
            <div
              className='text-xs font-light h-6'
              key={option}
              onSelect={() => {
                onChange(
                  selected.includes(option)
                    ? selected.filter((item) => item !== option)
                    : [...selected, option]
                )
                setOpen(true)
              }}
            >
              <input
                type='checkbox'
                checked={selected.includes(option)}
                onChange={() =>
                  onChange(
                    selected.includes(option)
                      ? selected.filter((item) => item !== option)
                      : [...selected, option]
                  )
                }
                className={`checkbox checkbox-accent hidden sm:block shadow-sm absolute right-2 ${setSelectItemColor(
                  category
                )} border-white`}
              />
              {option}
            </div>
          ))
          .slice(0, showMore === category ? undefined : 4)}
        <button
          onClick={() => handleShowMore(category)}
          className='text-start ml-2'
        >
          Show More
        </button>
      </div>
    </div>
  )
}

export { MultiSelect }

// <div>
//   <Command className={`${className}`}>{/* items */}</Command>
// </div>
{
  /* <div className='grid grid-cols-2 gap-1 lg:grid-cols-3 flex-wrap text-wrap'>
        {selected.map((item) => (
          <div
            key={item}
            className='mr-1 mb-1 text-white bg-black p-2 rounded-md border w-fit text-xs flex items-center'
            onClick={() => handleUnselect(item)}
          >
            {item}
            <button
              className='ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleUnselect(item)
                }
              }}
              onMouseDown={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
              onClick={() => handleUnselect(item)}
            >
              <X className='h-3 w-3 hover:text-foreground' />
            </button>
          </div>
        ))}
      </div> */
}
{
  /* <ChevronsUpDown className='h-4 w-4 shrink-0 opacity-50' /> */
}
