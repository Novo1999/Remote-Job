import { auth } from '@/firebase/config'
import { ReactNode } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Job } from '../../../interfaces'
import { TooltipForButton } from '../Tooltip'

const ApplyButton = ({ job, children }: { job: Job; children: ReactNode }) => {
  const { createdBy, appliedBy } = job

  const [user, loading] = useAuthState(auth)
  const userId = !loading && user ? user.uid : ''
  const alreadyApplied = appliedBy?.userId.includes(userId)
  const userIsAdmin = userId === process.env.NEXT_PUBLIC_ADMIN_UID

  // tooltip content
  let content
  if (!user) {
    content = 'Please log in first'
  } else if (user && alreadyApplied) {
    content = 'You have applied'
  } else if (user && createdBy === userId) {
    content = 'Cannot apply to your own posted job'
  } else if (userIsAdmin) {
    content = "Admin's cannot apply"
  } else {
    content = 'Click to apply'
  }

  return <TooltipForButton content={content}>{children}</TooltipForButton>
}
export default ApplyButton
