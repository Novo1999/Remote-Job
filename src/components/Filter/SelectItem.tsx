'use client'
import { cn } from '@/lib/utils'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import { Check, X } from 'lucide-react'
import { useState } from 'react'

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

  const handleUnselect = (item: string) => {
    onChange(selected.filter((i) => i !== item))
  }

  return (
    <div {...props}>
      <div className='w-60 sm:w-72 p-0'>
        <Command className={className}>
          {/* items */}
          <div
            className={`grid grid-cols-1 ${setSelectItemColor(
              category
            )} text-white`}
          >
            {options.map((option) => (
              <CommandItem
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
                  className={`checkbox checkbox-accent shadow-sm absolute right-2 ${setSelectItemColor(
                    category
                  )} border-white`}
                />
                {option}
              </CommandItem>
            ))}
          </div>
        </Command>
      </div>
    </div>
  )
}

export { MultiSelect }

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
