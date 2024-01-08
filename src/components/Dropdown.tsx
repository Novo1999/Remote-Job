'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'
const Dropdown = () => {
  const [dropdownIsOpen, setDropDownIsOpen] = useState(false)

  return (
    <DropdownMenu onOpenChange={() => setDropDownIsOpen(!dropdownIsOpen)}>
      <DropdownMenuTrigger className='text-3xl relative'>
        {
          <div className='flex'>
            <RxCross1
              className={`transition-transform ${
                dropdownIsOpen
                  ? 'rotate-0 opacity-100 absolute ease'
                  : 'rotate-90 opacity-0'
              }`}
            />
            <RxHamburgerMenu
              className={`transition-transform ${
                dropdownIsOpen
                  ? '-rotate-90 opacity-0 ease'
                  : 'rotate-0 opacity-100'
              }`}
            />
          </div>
        }
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-full flex flex-col items-center m-auto *:font-thin *:text-xl *:font-poppins rounded-none'>
        <DropdownMenuItem>Post a Job</DropdownMenuItem>
        <DropdownMenuItem>Advertise</DropdownMenuItem>
        <DropdownMenuItem>About Us</DropdownMenuItem>
        <DropdownMenuItem>Log in</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default Dropdown
