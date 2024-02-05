import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setCurrentUser, setIsLoading } from '@/lib/features/user/userSlice'
import { auth } from '@/firebase/config'

const useInitAuth = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch(setIsLoading(true))
      if (currentUser?.email) {
        dispatch(setIsLoading(false))
        dispatch(setCurrentUser(currentUser))
      }
    })

    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe()
    }
  }, [dispatch])

  return null // You can return something else if needed
}

export default useInitAuth
