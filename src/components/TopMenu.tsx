'use client'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { useAppSelector } from '@/lib/features/hooks'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { FaBriefcase } from 'react-icons/fa6'
import { RiAdvertisementFill, RiLoginBoxFill } from 'react-icons/ri'
import ProfileDropdownMenu from './ProfileDropdownMenu'
import { Avatar } from './ui/avatar'
import { RxAvatar } from 'react-icons/rx'
const MenuBtn = ({
  menuText,
  icon,
  className,
  onClick,
  isLoggedIn,
}: {
  menuText: string
  icon: ReactNode
  className: string
  onClick: () => void
  isLoggedIn?: boolean
}) => {
  if (isLoggedIn) {
    return <ProfileDropdownMenu />
  }
  return (
    <Button
      onClick={onClick}
      className={`${navigationMenuTriggerStyle()} ${className} flex gap-2 text-white hover:text-white`}
    >
      {icon} {menuText}
    </Button>
  )
}

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
              icon={!user.email && <RiLoginBoxFill />}
              isLoggedIn={Boolean(user?.email)}
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
