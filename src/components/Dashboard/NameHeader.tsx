'use client'
import { auth } from '@/firebase/config'
import useRouting from '@/hooks/use-routing'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'

const NameHeader = () => {
  const [user, isLoading] = useAuthState(auth)
  const handleRouting = useRouting()

  // this checks if user is logged in or if they are logged in, check if they are admin or else,re-route to home or login page
  useEffect(() => {
    if (!isLoading && !user?.uid) {
      handleRouting('/login')
      toast.error('Please log in first')
    }
    if (user && user.uid! !== process.env.NEXT_PUBLIC_ADMIN_UID) {
      handleRouting('/')
      toast.error('This page is only for admin')
    }
  }, [user, handleRouting, isLoading])

  return (
    <div className='flex justify-between items-end'>
      <p className='large rise sm:text-4xl font-oswald'>
        Hi there, {user?.displayName}
      </p>
      <p className='text-md sm:text-4xl font-oswald'>Top Jobs Summary</p>
    </div>
  )
}
export default NameHeader
