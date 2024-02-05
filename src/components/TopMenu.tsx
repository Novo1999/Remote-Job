'use client'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { useAppSelector } from '@/lib/features/hooks'
import { useRouter } from 'next/navigation'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { FaBriefcase } from 'react-icons/fa6'
import { RiAdvertisementFill, RiLoginBoxFill } from 'react-icons/ri'
import MenuBtn from './MenuBtn'

const TopMenu = () => {
  const { user, isLoading } = useAppSelector((state) => state.user)
  const router = useRouter()
  const handleRouting = (href: string) => {
    router.push(href)
  }
  console.log(user)
  return (
    <NavigationMenu className='font-poppins'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <div className='flex gap-4'>
            <MenuBtn
              onClick={() => handleRouting('/post')}
              className='bg-red-500 hover:bg-red-600'
              menuText='Post a Job'
              icon={<FaBriefcase />}
            />
            <MenuBtn
              onClick={() => handleRouting('/advertise')}
              className='bg-orange-400 hover:bg-orange-500'
              menuText='Advertise'
              icon={<RiAdvertisementFill />}
            />
            <MenuBtn
              onClick={() => handleRouting('/about')}
              className='bg-purple-500 hover:bg-purple-600'
              menuText='About'
              icon={<BsFillInfoCircleFill />}
            />

            <MenuBtn
              onClick={() => handleRouting('/login')}
              className='bg-blue-500 hover:bg-blue-600'
              menuText={!user?.email ? 'Sign Up/Log in' : user.displayName!}
              icon={!user?.email && <RiLoginBoxFill />}
              isLoggedIn={Boolean(user?.email)} // if there is email , returns true
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
