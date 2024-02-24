import { auth } from '@/firebase/config'
import { useApplyJobMutation } from '@/lib/features/jobsApi/jobsApi'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { TooltipForButton } from '../Tooltip'

type ApplyButtonProp = {
  id: string
  title: string
  company: string
  appliedBy: {
    userId: Array<string>
  }
}

const ApplyButton = ({ id, title, company, appliedBy }: ApplyButtonProp) => {
  const [user, loading] = useAuthState(auth)
  const userId = !loading && user ? user.uid : ''
  const [applyJob, { isLoading }] = useApplyJobMutation()
  const alreadyApplied = appliedBy.userId.includes(userId)

  const handleApply = async () => {
    applyJob({ jobId: id, userId }).then((result: any) => {
      if (result.error) {
        toast.error(result.error.data.msg)
      } else toast.success(`Applied for ${title} at ${company}`)
    })
  }

  // tooltip content
  let content
  if (!user) {
    content = 'Please log in first'
  } else if (user && alreadyApplied) {
    content = 'You have applied'
  } else {
    content = 'Tap to apply'
  }

  return (
    <TooltipForButton content={content}>
      <motion.button
        disabled={alreadyApplied || !user}
        onClick={handleApply}
        whileTap={{ scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        className={`button ${
          alreadyApplied || !user ? '!bg-gray-500' : ''
        } transition-all ease-in-out sm:self-end`}
      >
        {isLoading ? <Loader2 className='animate-spin' /> : 'Apply Now'}
        <FaArrowAltCircleRight />
      </motion.button>
    </TooltipForButton>
  )
}
export default ApplyButton
