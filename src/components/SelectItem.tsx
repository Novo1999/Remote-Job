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

interface MultiSelectProps {
  options: string[]
  selected: string[]
  onChange: React.Dispatch<React.SetStateAction<string[]>>
  className?: string
  category: string
}

function MultiSelect({
  options,
  selected,
  onChange,
  className,
  category,
  ...props
}: MultiSelectProps) {
  const [open, setOpen] = useState(false)

  const handleUnselect = (item: string) => {
    onChange(selected.filter((i) => i !== item))
  }

  return (
    <div {...props} className=''>
      <div className='grid grid-cols-2 gap-1 lg:grid-cols-3 flex-wrap text-wrap'>
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
      </div>
      {/* <ChevronsUpDown className='h-4 w-4 shrink-0 opacity-50' /> */}
      <div className='w-72 p-0'>
        <Command className={className}>
          {/* <CommandInput placeholder='Search ...' /> */}
          <CommandEmpty>No item found.</CommandEmpty>
          <div className='grid grid-cols-2 lg:grid-cols-2'>
            {options.map((option) => (
              <CommandItem
                className='border'
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
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    selected.includes(option) ? 'opacity-100' : 'opacity-0'
                  )}
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
