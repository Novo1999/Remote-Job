import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import ProfileDropdownMenu from './Profile/ProfileDropdownMenu'
import { auth } from '@/firebase/config'
import { Button } from '@/components/ui/button'
import { TooltipForButton } from './Tooltip'

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
  const [user] = useAuthState(auth)
  const buttonDisabled = !user?.hasOwnProperty('email') && href === '/post'

  if (isLoggedIn) {
    return <ProfileDropdownMenu />
  }

  if (href === '/post') {
    return (
      <TooltipForButton buttonDisabled={buttonDisabled}>
        <Link href={!buttonDisabled ? href : ''}>
          <Button
            disabled={buttonDisabled}
            className={`${className} ${
              isActive ? 'active' : ''
            } flex gap-2 text-white hover:text-white`}
          >
            <span>{icon}</span>
            <span>{menuText}</span>
          </Button>
        </Link>
      </TooltipForButton>
    )
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
