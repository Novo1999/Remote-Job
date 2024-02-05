import { auth } from '@/firebase/config'
import { useAppDispatch } from '@/lib/features/hooks'
import { setCurrentUser, setIsLoading } from '@/lib/features/user/userSlice'
import { useLogout } from '@/utils/logOut'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

const useInitAuth = () => {
  const dispatch = useAppDispatch()
  const logoutUser = useLogout()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.email) {
        dispatch(setIsLoading(false))
        dispatch(setCurrentUser(currentUser))
      } else {
        logoutUser()
      }
    })

    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe()
    }
  }, [dispatch, logoutUser])

  return null // You can return something else if needed
}

export default useInitAuth
