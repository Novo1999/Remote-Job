import { useAppSelector } from '@/lib/features/hooks'
import ProfileDropdownMenu from './ProfileDropdownMenu'
import { Button } from './ui/button'
import { navigationMenuTriggerStyle } from './ui/navigation-menu'
import { useRouter } from 'next/navigation'
import { RiLoginBoxFill } from 'react-icons/ri'

const LoginBtn = () => {
  const { isLoading, user } = useAppSelector((state) => state.user)
  const isLoggedIn = user?.hasOwnProperty('email')
  const router = useRouter()
  const handleRouting = (href: string) => {
    router.push(href)
  }

  let content = (
    <Button
      disabled={!isLoading && !isLoggedIn}
      onClick={() => handleRouting('/login')}
      className={`${navigationMenuTriggerStyle()} bg-blue-500 hover:bg-blue-600 flex gap-2 text-white hover:text-white`}
    >
      <RiLoginBoxFill /> {'Log in'}
    </Button>
  )

  if (!isLoading && isLoggedIn) {
    content = <ProfileDropdownMenu />
  }

  return content
}
export default LoginBtn
