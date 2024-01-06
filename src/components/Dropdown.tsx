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
      <DropdownMenuTrigger className='text-3xl'>
        {dropdownIsOpen ? <ImCross /> : <GiHamburgerMenu />}
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-[100vw] flex flex-col items-center *:font-thin *:text-2xl *:font-poppins p-8 rounded-none'>
        <DropdownMenuItem>Post a Job</DropdownMenuItem>
        <DropdownMenuItem>About Us</DropdownMenuItem>
        <DropdownMenuItem>Log in</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default Dropdown
