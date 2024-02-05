import { auth } from '@/firebase/config'
import { signOut } from 'firebase/auth'

export const logoutUser = async () => {
  await signOut(auth)
}
