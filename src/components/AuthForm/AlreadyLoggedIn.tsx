import { auth } from '@/firebase/config'
import { useLogout } from '@/utils/logOut'
import { motion } from 'framer-motion'
import { Info, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth'
import { TooltipForButton } from '../Tooltip'

const AlreadyLoggedIn = () => {
  const [user, loading] = useAuthState(auth)

  const logOutUser = useLogout()

  return (
    <div className='flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md bg-white text-black m-auto *:font-poppins'>
      <div className='flex items-center gap-2'>
        <p>
          <Info className='w-4' />
        </p>
        <h2 className='text-lg font-semibold leading tracking'>
          It seems like you are already logged in
        </h2>
      </div>
      <div className='flex-1 dark:text-gray-400'>
        You are logged in as{' '}
        {loading ? (
          <Loader2 className='animate-spin' />
        ) : (
          <TooltipForButton content='Go To Profile'>
            <motion.span
              whileHover={{
                textUnderlineOffset: '4px',
                transition: { ease: 'easeIn', stiffness: 1000 },
              }}
              className='underline text-blue-500 underline-offset-8 cursor-pointer'
            >
              <Link href='/profile'>{user?.displayName}</Link>
            </motion.span>
          </TooltipForButton>
        )}
      </div>
      <div className='flex flex-col justify-center gap-3 mt-6 sm:flex-row'>
        <Link href='/' className='px-6 py-2 rounded-sm text-blue-500'>
          Back to Home
        </Link>
        <motion.button
          onClick={() => logOutUser()}
          whileHover={{
            scale: 0.9,
          }}
          whileTap={{
            scale: 0.7,
          }}
          className='px-6 py-2 bg-slate-700 text-white shadow-sm dark:bg-violet-400 rounded-md dark:text-gray-900'
        >
          Log Out
        </motion.button>
      </div>
    </div>
  )
}
export default AlreadyLoggedIn
