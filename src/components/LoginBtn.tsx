import { auth } from '@/firebase/config'
import useRouting from '@/hooks/use-routing'
import { useAuthState } from 'react-firebase-hooks/auth'
import { RiLoginBoxFill } from 'react-icons/ri'
import ProfileDropdownMenu from './Profile/ProfileDropdownMenu'
import { Button } from './ui/button'
import { navigationMenuTriggerStyle } from './ui/navigation-menu'

const LoginBtn = ({ className }: { className?: string }) => {
  const [user, loading, error] = useAuthState(auth)
  const isLoggedIn = user?.hasOwnProperty('email')
  const handleRouting = useRouting()

  let content = (
    <Button
      disabled={loading && !isLoggedIn}
      onClick={() => handleRouting('/login')}
      className={`${navigationMenuTriggerStyle()} ${className} bg-blue-500 hover:bg-blue-600 flex gap-2 text-white hover:text-white`}
    >
      <RiLoginBoxFill /> {'Log in'}
    </Button>
  )

  if (isLoggedIn) {
    content = <ProfileDropdownMenu />
  }

  if (!loading && error) {
    content = (
      <Button
        disabled
        className={`${navigationMenuTriggerStyle()} ${className} bg-blue-500 hover:bg-blue-600 flex gap-2 text-white hover:text-white`}
      >
        <RiLoginBoxFill /> {'Error'}
      </Button>
    )
  }

  return content
}
export default LoginBtn
