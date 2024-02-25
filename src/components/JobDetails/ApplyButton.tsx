import { auth } from '@/firebase/config'
import { useApplyJobMutation } from '@/lib/features/jobsApi/jobsApi'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { Job } from '../../../interfaces'
import { TooltipForButton } from '../Tooltip'

const ApplyButton = ({ job }: { job: Job }) => {
  const {
    _id,
    posted,
    title,
    companyName,
    location,
    salary: { min, max },
    position,
    jobType,
    viewCount,
    createdBy,
    appliedBy,
  } = job

  const [user, loading] = useAuthState(auth)
  const userId = !loading && user ? user.uid : ''
  const [applyJob, { isLoading }] = useApplyJobMutation()
  const alreadyApplied = appliedBy.userId.includes(userId)

  const handleApply = async () => {
    if (!user || alreadyApplied || createdBy === userId) return
    applyJob({ jobId: _id, userId }).then((result: any) => {
      if (result.error) {
        toast.error(result.error.data.msg)
      } else toast.success(`Applied for ${title} at ${companyName}`)
    })
  }

  // tooltip content
  let content
  if (!user) {
    content = 'Please log in first'
  } else if (user && alreadyApplied) {
    content = 'You have applied'
  } else if (user && createdBy === userId) {
    content = 'Cannot apply to your own posted job'
  } else {
    content = 'Click to apply'
  }

  return (
    <TooltipForButton content={content}>
      <motion.button
        disabled={alreadyApplied || !user || createdBy === userId}
        onClick={handleApply}
        whileTap={{ scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        className={`button ${
          alreadyApplied || !user || createdBy === userId
            ? '!bg-gray-500 cursor-default'
            : ''
        } transition-all ease-in-out sm:self-end`}
      >
        {isLoading ? <Loader2 className='animate-spin' /> : 'Apply Now'}
        <FaArrowAltCircleRight />
      </motion.button>
    </TooltipForButton>
  )
}
export default ApplyButton
