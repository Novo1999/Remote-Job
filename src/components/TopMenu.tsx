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

const TopMenu = () => {
  return (
    <NavigationMenu className='font-poppins'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <div className='flex gap-4 *:text-black'>
            <Button
              className={`${navigationMenuTriggerStyle()} hover:bg-slate-200`}
            >
              Post a Job
            </Button>
            <Button
              className={`${navigationMenuTriggerStyle()} hover:bg-slate-200`}
            >
              Advertising
            </Button>
            <Button
              className={`${navigationMenuTriggerStyle()}hover:bg-slate-200`}
            >
              About Us
            </Button>
            <Button
              className={`${navigationMenuTriggerStyle()} hover:bg-slate-200`}
            >
              Login
            </Button>
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
