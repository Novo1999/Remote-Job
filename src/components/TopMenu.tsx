'use client'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { FaBriefcase } from 'react-icons/fa6'
import { RiAdvertisementFill } from 'react-icons/ri'
import LoginBtn from './LoginBtn'
import MenuBtn from './MenuBtn'

const TopMenu = () => {
  return (
    <NavigationMenu className='font-poppins'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <div className='flex gap-4 *:text-xs lg:*:text-sm'>
            <MenuBtn
              href='/post'
              className='bg-red-500 hover:bg-red-600'
              menuText='Post a Job'
              icon={<FaBriefcase />}
            />
            <MenuBtn
              href='/advertise'
              className='bg-orange-400 hover:bg-orange-500'
              menuText='Advertise'
              icon={<RiAdvertisementFill />}
            />
            <MenuBtn
              href='/about'
              className='bg-purple-500 hover:bg-purple-600'
              menuText='About'
              icon={<BsFillInfoCircleFill />}
            />
            <LoginBtn />
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default TopMenu
