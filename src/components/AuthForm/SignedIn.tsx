import { useAppSelector } from '@/lib/features/hooks'
import { Button } from '../ui/button'

const SignedIn = () => {
  const { user } = useAppSelector((state) => state.user) || {}
  return (
    <div>
      <p>Already logged in as {user.displayName}</p>
      <Button variant='destructive'>Log Out</Button>
    </div>
  )
}
export default SignedIn
