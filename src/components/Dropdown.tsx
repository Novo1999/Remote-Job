'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
      <DropdownMenuContent className='w-[100vw] flex flex-col items-center *:font-semibold *:text-2xl *:font-oswald p-8'>
        <DropdownMenuLabel className='text-center'>
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default Dropdown
