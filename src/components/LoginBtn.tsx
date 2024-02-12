import useRouting from '@/hooks/use-routing'
import { useAppSelector } from '@/lib/features/hooks'
import { useRouter } from 'next/navigation'
import { RiLoginBoxFill } from 'react-icons/ri'
import ProfileDropdownMenu from './Profile/ProfileDropdownMenu'
import { Button } from './ui/button'
import { navigationMenuTriggerStyle } from './ui/navigation-menu'

const LoginBtn = () => {
  const { isLoading, user } = useAppSelector((state) => state.user)
  const isLoggedIn = user?.hasOwnProperty('email')
  const handleRouting = useRouting()

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
