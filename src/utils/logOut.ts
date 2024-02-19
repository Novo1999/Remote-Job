import { auth } from '@/firebase/config'
import useRouting from '@/hooks/use-routing'
import api from '@/lib/features/api/apiSlice'
import { signOut } from 'firebase/auth'

export const useLogout = () => {
  const handleRouting = useRouting()

  const logOutUser = () => {
    logout().then(() => handleRouting('/login'))
    api.util.invalidateTags(['all-jobs'])
  }
  return logOutUser
}

export const logout = async () => {
  await signOut(auth)
}
