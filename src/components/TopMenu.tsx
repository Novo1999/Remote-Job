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

const MenuBtn = ({ menuText, icon }: { menuText: string; icon: ReactNode }) => {
  return (
    <Button className={`${navigationMenuTriggerStyle()} flex gap-2`}>
      {icon} {menuText}
    </Button>
  )
}

const TopMenu = () => {
  return (
    <NavigationMenu className='font-poppins'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <div className='flex gap-4 *:text-black *:hover:bg-slate-200'>
            <MenuBtn menuText='Post a Job' icon={<FaBriefcase />} />
            <MenuBtn menuText='Advertise' icon={<RiAdvertisementFill />} />
            <MenuBtn menuText='About' icon={<BsFillInfoCircleFill />} />
            <MenuBtn menuText='Login' icon={<RiLoginBoxFill />} />
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
