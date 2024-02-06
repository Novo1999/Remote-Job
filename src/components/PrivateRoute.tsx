import { useAppSelector } from '@/lib/features/hooks'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { toast } from 'react-toastify'

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAppSelector((state) => state.user)
  const router = useRouter()
  useEffect(() => {
    if (user?.email) {
      router.push('/')
      toast.error('ALREADY LOGGED IN!', { autoClose: 2000 })
    }
  }, [user, router])

  if (!user?.email) {
    return <>{children}</>
  }
}
export default PrivateRoute
