'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`

const Dropdown = () => {
  const [dropdownIsOpen, setDropDownIsOpen] = useState(false)

  return (
    <DropdownMenu onOpenChange={() => setDropDownIsOpen(!dropdownIsOpen)}>
      <DropdownMenuTrigger className='text-3xl relative'>
        <div className='flex flex-col h-12 w-8 border-2 border-black rounded justify-center items-center group'>
          <span
            className={`${genericHamburgerLine} ${
              dropdownIsOpen
                ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
                : 'opacity-80 group-hover:opacity-100'
            }`}
          />
          <span
            className={`${genericHamburgerLine} ${
              dropdownIsOpen
                ? 'opacity-0'
                : 'opacity-80 group-hover:opacity-100'
            }`}
          />
          <span
            className={`${genericHamburgerLine} ${
              dropdownIsOpen
                ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
                : 'opacity-80 group-hover:opacity-100'
            }`}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-screen h-fit border-0 flex flex-col items-center lg:hidden relative top-2 font-poppins'>
        <DropdownMenuItem>Post a Job</DropdownMenuItem>
        <DropdownMenuItem>Advertise</DropdownMenuItem>
        <DropdownMenuItem>About Us</DropdownMenuItem>
        <DropdownMenuItem>Log in</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Dropdown
