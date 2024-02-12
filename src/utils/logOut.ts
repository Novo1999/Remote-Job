import { auth } from '@/firebase/config'
import api from '@/lib/features/api/apiSlice'
import { useAppDispatch } from '@/lib/features/hooks'
import { setCurrentUser, setIsLoading } from '@/lib/features/user/userSlice'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'

export const useLogout = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const logOutUser = () => {
    logout().then(() => router.push('/login'))
    dispatch(setIsLoading(true))
    api.util.invalidateTags(['all-jobs'])
    dispatch(setCurrentUser({}))
  }
  return logOutUser
}

export const logout = async () => {
  await signOut(auth)
}
