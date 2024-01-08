'use client'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { FaBriefcase } from 'react-icons/fa6'
import { RiAdvertisementFill, RiLoginBoxFill } from 'react-icons/ri'
import { ReactNode } from 'react'
import { BsFillInfoCircleFill } from 'react-icons/bs'

const MenuBtn = ({
  menuText,
  icon,
  className,
}: {
  menuText: string
  icon: ReactNode
  className: string
}) => {
  return (
    <Button
      className={`${navigationMenuTriggerStyle()} ${className} flex gap-2 text-white hover:text-white`}
    >
      {icon} {menuText}
    </Button>
  )
}

const TopMenu = () => {
  return (
    <NavigationMenu className='font-poppins'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <div className='flex gap-4'>
            <MenuBtn
              className='bg-red-500 hover:bg-red-600'
              menuText='Post a Job'
              icon={<FaBriefcase />}
            />
            <MenuBtn
              className='bg-orange-400 hover:bg-orange-500'
              menuText='Advertise'
              icon={<RiAdvertisementFill />}
            />
            <MenuBtn
              className='bg-purple-500 hover:bg-purple-600'
              menuText='About'
              icon={<BsFillInfoCircleFill />}
            />
            <MenuBtn
              className='bg-blue-500 hover:bg-blue-600'
              menuText='Login'
              icon={<RiLoginBoxFill />}
            />
          </div>
          <NavigationMenuContent>
            <NavigationMenuLink className='w-full px-10'>
              Link
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default TopMenu
