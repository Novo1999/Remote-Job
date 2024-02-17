'use client'
import { auth } from '@/firebase/config'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'

const excludedPaths = ['/login', '/signup']

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const [user] = useAuthState(auth)
  const pathName = usePathname()

  const router = useRouter()

  useEffect(() => {
    if (!user?.email) {
      router.push('/login')
    }
  }, [user, router])

  useEffect(() => {
    if (!user?.hasOwnProperty('email') && !excludedPaths.includes(pathName)) {
      toast.error('Please Log in first')
    }
  }, [user, pathName])

  return <main>{children}</main>
}
export default PrivateRoute
