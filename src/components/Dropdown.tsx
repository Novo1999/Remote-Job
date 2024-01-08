'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ReactNode, useState } from 'react'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { FaBriefcase } from 'react-icons/fa6'
import { RiAdvertisementFill, RiLoginBoxFill } from 'react-icons/ri'

const Content = ({
  menuText,
  icon,
  className,
}: {
  menuText: string
  icon: ReactNode
  className: string
}) => {
  return (
    <DropdownMenuItem
      className={`${className} flex gap-2 w-full border-b border-black text-lg hover:text-white`}
    >
      {icon} {menuText}
    </DropdownMenuItem>
  )
}

const Dropdown = () => {
  const [dropdownIsOpen, setDropDownIsOpen] = useState(false)
  const genericHamburgerLine = `h-1 w-6 rounded-full ${
    dropdownIsOpen ? 'my-1' : 'my-[2px]'
  } bg-white transition ease transform duration-300`

  return (
    <DropdownMenu onOpenChange={() => setDropDownIsOpen(!dropdownIsOpen)}>
      <DropdownMenuTrigger className='text-3xl relative outline-none my-1'>
        <div className='flex flex-col h-12 w-8 border-0 border-black rounded justify-center items-center group'>
          <div
            className={`${genericHamburgerLine} ${
              dropdownIsOpen && 'rotate-45 translate-y-3'
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              dropdownIsOpen && 'opacity-0'
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              dropdownIsOpen && '-rotate-45 -translate-y-3'
            }`}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-screen h-fit flex flex-col items-center rounded-none lg:hidden relative top-2 font-poppins'>
        <Content
          className='text-red-500 hover:text-red-600'
          menuText='Post a Job'
          icon={<FaBriefcase />}
        />
        <Content
          className='text-orange-400 hover:text-orange-500'
          menuText='Advertise'
          icon={<RiAdvertisementFill />}
        />
        <Content
          className='text-purple-500 hover:text-purple-600'
          menuText='About'
          icon={<BsFillInfoCircleFill />}
        />
        <Content
          className='text-blue-500 hover:text-blue-600'
          menuText='Login'
          icon={<RiLoginBoxFill />}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Dropdown
