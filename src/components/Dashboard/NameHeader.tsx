'use client'
import { auth } from '@/firebase/config'
import useRouting from '@/hooks/use-routing'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import ClientOnly from '../PostJob/ClientOnly'

const NameHeader = () => {
  const [user] = useAuthState(auth)
  const handleRouting = useRouting()
  console.log(user)
  useEffect(() => {
    if (!user || user.uid! !== process.env.NEXT_PUBLIC_ADMIN_UID) {
      handleRouting('/login')
    }
  }, [user, handleRouting])

  return (
    <ClientOnly>
      <div className='flex justify-between items-end'>
        <p className='large rise sm:text-4xl font-oswald'>
          Hi there, {user?.displayName}
        </p>
        <p className='text-md sm:text-4xl font-oswald'>Top Jobs Summary</p>
      </div>
    </ClientOnly>
  )
}
export default NameHeader
