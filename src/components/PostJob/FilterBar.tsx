'use client'

import { Check, ChevronsUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export function FilterBar({
  field,
  filterFor,
  options,
  form,
}: {
  field: string
  filterFor: string
  options: string[]
  form: any
}) {
  // setting label dynamically
  let label = ''
  if (filterFor === 'location') {
    label = 'Job Location'
  }
  if (filterFor === 'position') {
    label = 'Job Position'
  }

  const [open, setOpen] = useState(false)
  return (
    <FormItem className='flex flex-col'>
      <FormLabel>{`${label} *`}</FormLabel>
      <Popover open={open} onOpenChange={() => setOpen(!open)}>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant='ghost'
              className='bg-white text-black'
              role='combobox'
            >
              {field
                ? options.find((option) => option === field)
                : `Select ${label}`}
              <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className='w-[400px] p-0 font-poppins'>
          <Command>
            <CommandInput placeholder='Search locations...' />
            <CommandEmpty>
              No <span className='lowercase'>{label}</span> found.
            </CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  value={option}
                  key={option}
                  onSelect={() => {
                    form.setValue(filterFor, option)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      option === field ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {option}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  )
}
