'use client'
import { auth } from '@/firebase/config'
import { useAppDispatch, useAppSelector } from '@/lib/features/hooks'
import { setEmail, setUserName } from '@/lib/features/useName/userSlice'
import { useLogout } from '@/utils/logOut'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import PrivateRoute from '../PrivateRoute'
import { Button } from '../ui/button'
import { Meteors } from '../ui/meteors'
import { ProfileModal } from './ProfileModal'

const Profile = () => {
  const [user, loading] = useAuthState(auth)
  const logout = useLogout()
  const { userName, email } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (user) {
      dispatch(setUserName(user.displayName))
      dispatch(setEmail(user.email))
    }
  }, [user, dispatch])

  return (
    <PrivateRoute>
      {loading ? (
        <div className='min-h-screen flex justify-center items-center'>
          <Loader2 height={100} width={100} className='animate-spin' />
        </div>
      ) : (
        <>
          <div className='bg-gray-800 text-white overflow-hidden shadow rounded-lg border p-16 mx-6 flex flex-col mb-20 relative'>
            <Meteors number={20} />
            <div className='avatar flex justify-center'>
              <div className='w-48 rounded-xl'>
                <Image
                  width={300}
                  height={300}
                  src='/images/av.jpg'
                  alt='avatar'
                />
              </div>
            </div>
            <div className='px-4 py-5 sm:px-6 flex flex-col'>
              <h3 className='text-lg leading-6 font-medium'>User Profile</h3>
              <p className='mt-1 max-w-2xl text-sm'>
                You are logged in as {userName}
              </p>
            </div>
            <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
              <dl className='sm:divide-y sm:divide-gray-200'>
                <div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium'>Full name</dt>
                  <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>
                    {userName}
                  </dd>
                </div>
                <div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium'>Email address</dt>
                  <dd className='mt-1 text-sm sm:mt-0 sm:col-span-2'>
                    {email}
                  </dd>
                </div>
              </dl>
            </div>
            <div className='gap-4 flex flex-col'>
              <ProfileModal name={userName!} email={email!} />
              <Button onClick={logout}>Log Out</Button>
            </div>
          </div>
        </>
      )}
    </PrivateRoute>
  )
}
export default Profile
