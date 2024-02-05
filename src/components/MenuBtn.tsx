import { ReactNode } from 'react'
import ProfileDropdownMenu from './ProfileDropdownMenu'
import { Button } from './ui/button'
import { navigationMenuTriggerStyle } from './ui/navigation-menu'

type MenuBtnProp = {
  menuText: string
  icon: ReactNode
  className: string
  onClick: () => void
  isLoggedIn?: boolean
}

const MenuBtn = ({
  menuText,
  icon,
  className,
  onClick,
  isLoggedIn,
}: MenuBtnProp) => {
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

export default MenuBtn
