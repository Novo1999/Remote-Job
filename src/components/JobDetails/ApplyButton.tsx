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

  return (
    <TooltipForButton
      content={alreadyApplied ? 'You Have Applied' : 'Tap to apply'}
    >
      <motion.button
        disabled={alreadyApplied}
        onClick={handleApply}
        whileTap={{ scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        className={`button ${
          alreadyApplied ? '!bg-gray-500' : ''
        } transition-all ease-in-out sm:self-end`}
      >
        {isLoading ? <Loader2 className='animate-spin' /> : 'Apply Now'}
        <FaArrowAltCircleRight />
      </motion.button>
    </TooltipForButton>
  )
}
export default ApplyButton
