'use client'
import { auth } from '@/firebase/config'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import { useAuthState } from 'react-firebase-hooks/auth'
import PrivateRoute from '../PrivateRoute'
import { ProfileModal } from './ProfileModal'

const Profile = () => {
  const [user, loading, error] = useAuthState(auth)

  const name = user?.displayName
  const email = user?.email

  return (
    <PrivateRoute>
      {loading ? (
        <div className='min-h-screen flex justify-center items-center'>
          <Loader2 height={100} width={100} className='animate-spin' />
        </div>
      ) : (
        <div className='bg-white overflow-hidden shadow rounded-lg border p-16 mx-6 flex flex-col mb-20'>
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
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              User Profile
            </h3>
            <p className='mt-1 max-w-2xl text-sm text-gray-500'>
              You are logged in as {name}
            </p>
          </div>
          <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
            <dl className='sm:divide-y sm:divide-gray-200'>
              <div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>Full name</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                  {name}
                </dd>
              </div>
              <div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-500'>
                  Email address
                </dt>
                <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                  {email}
                </dd>
              </div>
            </dl>
          </div>

          <ProfileModal name={name!} email={email!} />
        </div>
      )}
    </PrivateRoute>
  )
}
export default Profile
