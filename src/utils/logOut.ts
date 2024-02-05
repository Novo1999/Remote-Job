import { auth } from '@/firebase/config'
import { useAppDispatch } from '@/lib/features/hooks'
import { setIsLoading } from '@/lib/features/user/userSlice'
import { signOut } from 'firebase/auth'

export const useLogout = () => {
  const dispatch = useAppDispatch()

  const logOutUser = () => {
    logoutUser()
    dispatch(setIsLoading(true))
  }
  return logOutUser
}

export const logoutUser = async () => {
  await signOut(auth)
}
