import { auth } from '@/firebase/config'
import api from '@/lib/features/api/apiSlice'
import { useAppDispatch } from '@/lib/features/hooks'
import { setCurrentUser, setIsLoading } from '@/lib/features/user/userSlice'
import { signOut } from 'firebase/auth'

export const useLogout = () => {
  const dispatch = useAppDispatch()

  const logOutUser = () => {
    logout()
    dispatch(setIsLoading(true))
    api.util.invalidateTags(['all-jobs'])
  }
  return logOutUser
}

export const logout = async () => {
  await signOut(auth)
}
