'use client'
import { auth } from '@/firebase/config'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const [user] = useAuthState(auth)

  const router = useRouter()

  useEffect(() => {
    if (!user?.email) {
      router.push('/login')
      toast.error('Please Log in first')
    }
  }, [user, router])

  return <main>{children}</main>
}
export default PrivateRoute
