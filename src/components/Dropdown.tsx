'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

const Dropdown = () => {
  const [dropdownIsOpen, setDropDownIsOpen] = useState(false)

  return (
    <DropdownMenu onOpenChange={() => setDropDownIsOpen(!dropdownIsOpen)}>
      <DropdownMenuTrigger className='text-3xl relative'>
        {
          <div className='flex'>
            <ImCross
              className={`transition-transform ${
                dropdownIsOpen
                  ? 'rotate-0 opacity-100 absolute ease'
                  : 'rotate-90 opacity-0'
              }`}
            />
            <GiHamburgerMenu
              className={`transition-transform ${
                dropdownIsOpen
                  ? '-rotate-90 opacity-0 ease'
                  : 'rotate-0 opacity-100'
              }`}
            />
          </div>
        }
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-[100vw] flex flex-col items-center m-auto *:font-thin *:text-xl *:font-poppins rounded-none'>
        <DropdownMenuItem>Post a Job</DropdownMenuItem>
        <DropdownMenuItem>Advertise</DropdownMenuItem>
        <DropdownMenuItem>About Us</DropdownMenuItem>
        <DropdownMenuItem>Log in</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default Dropdown
