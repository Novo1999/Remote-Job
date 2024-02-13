import useRouting from '@/hooks/use-routing'
import { useAppSelector } from '@/lib/features/hooks'
import { RiLoginBoxFill } from 'react-icons/ri'
import ProfileDropdownMenu from './Profile/ProfileDropdownMenu'
import { Button } from './ui/button'
import { navigationMenuTriggerStyle } from './ui/navigation-menu'

const LoginBtn = ({ className }: { className: string }) => {
  const { isLoading, user } = useAppSelector((state) => state.user)
  const isLoggedIn = user?.hasOwnProperty('email')
  const handleRouting = useRouting()

  let content = (
    <Button
      disabled={!isLoading && !isLoggedIn}
      onClick={() => handleRouting('/login')}
      className={`${navigationMenuTriggerStyle()} ${className} bg-blue-500 hover:bg-blue-600 flex gap-2 text-white hover:text-white`}
    >
      <RiLoginBoxFill /> {'Log in'}
    </Button>
  )

  if (isLoggedIn) {
    content = <ProfileDropdownMenu />
  }

  return content
}
export default LoginBtn
