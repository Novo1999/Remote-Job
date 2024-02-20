'use client'
import { auth } from '@/firebase/config'
import useRouting from '@/hooks/use-routing'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'

const excludedPaths = ['/login', '/signup']

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const [user, loading, error] = useAuthState(auth)

  const pathName = usePathname()

  const className =
    pathName === '/login' || pathName === '/signup' || pathName === '/profile'
      ? 'flex justify-center items-center'
      : ''

  const handleRouting = useRouting()

  useEffect(() => {
    if (!loading && !error && user?.email) return
    if (!loading && !error && !user?.email && pathName !== '/signup') {
      handleRouting('/login')
    }
  }, [user, handleRouting, pathName, loading, error])

  useEffect(() => {
    if (
      !loading &&
      !error &&
      !user?.email &&
      !excludedPaths.includes(pathName)
    ) {
      toast.error('Please Log in first')
    }
  }, [user, pathName, loading, error])

  return <main className={`min-h-screen ${className}`}>{children}</main>
}
export default PrivateRoute
