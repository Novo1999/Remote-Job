import Link from 'next/link'
import { ReactNode } from 'react'
import ProfileDropdownMenu from './Profile/ProfileDropdownMenu'
import { Button } from './ui/button'
import { navigationMenuTriggerStyle } from './ui/navigation-menu'
import { usePathname } from 'next/navigation'

type MenuBtnProp = {
  menuText: string
  icon: ReactNode
  className: string
  isLoggedIn?: boolean
  href: string
}

const MenuBtn = ({
  menuText,
  icon,
  className,
  isLoggedIn,
  href,
}: MenuBtnProp) => {
  const pathname = usePathname()
  const isActive = pathname === href

  if (isLoggedIn) {
    return <ProfileDropdownMenu />
  }

  return (
    <Link href={href}>
      <Button
        className={`${className} ${
          isActive ? 'active' : ''
        } flex gap-2 text-white hover:text-white`}
      >
        <span>{icon}</span>
        <span>{menuText}</span>
      </Button>
    </Link>
  )
}

export default MenuBtn
