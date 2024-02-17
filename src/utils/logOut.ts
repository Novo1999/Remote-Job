import { auth } from '@/firebase/config'
import api from '@/lib/features/api/apiSlice'
import { useAppDispatch } from '@/lib/features/hooks'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'

export const useLogout = () => {
  const router = useRouter()

  const logOutUser = () => {
    logout().then(() => router.push('/login'))
    api.util.invalidateTags(['all-jobs'])
  }
  return logOutUser
}

export const logout = async () => {
  await signOut(auth)
}
