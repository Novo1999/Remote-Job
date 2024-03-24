import { Button } from '@/components/ui/button'
import { auth } from '@/firebase/config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import ProfileDropdownMenu from './Profile/ProfileDropdownMenu'
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
  const buttonDisabled = !user?.hasOwnProperty('uid') && href === '/post'
  const isNotAdmin = user && user.uid !== process.env.NEXT_PUBLIC_ADMIN_UID // check if user is admin

  if (isLoggedIn) {
    return <ProfileDropdownMenu />
  }

  // post button tooltip
  if (href === '/post' && buttonDisabled) {
    return (
      <TooltipForButton content='Please log in first'>
        <Link href={!buttonDisabled ? href : '/login'}>
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

  if (href === '/post' && !buttonDisabled) {
    return (
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
    )
  }
  if (href === '/admin-dashboard' && isNotAdmin) {
    return (
      <TooltipForButton content='You are not an admin'>
        <Link href='/'>
          <Button
            disabled={isNotAdmin}
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
  if (href === '/admin-dashboard' && !user?.uid) {
    return (
      <TooltipForButton content='Please log in first'>
        <Link href={user?.uid ? href : '/login'}>
          <Button
            disabled={!user?.uid}
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
