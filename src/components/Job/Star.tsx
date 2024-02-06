import { useAppSelector } from '@/lib/features/hooks'
import { useStarJobMutation } from '@/lib/features/jobsApi/jobsApi'
import { Job } from '@/utils/interfaces'
import { toast } from 'react-toastify'

type Star = {
  className?: string
  job: Job
}

const Star = ({ className, job }: Star) => {
  const {
    _id,
    isStarred: { userId },
  } = job
  const {
    user: { uid },
    isLoading,
  } = useAppSelector((state) => state.user) || {}

  const [
    markAsStarred,
    { isLoading: isStarLoading, isError, error, isSuccess },
  ] = useStarJobMutation()

  const checked = userId.includes(uid)

  const handleCheck = () => {
    markAsStarred({ jobId: _id, userId: uid })
      .unwrap()
      .then((job) => {
        console.log(job)
        if (job.isStarred.userId.includes(uid)) {
          toast.success(`${job.title} added to favorites!`, { autoClose: 1000 })
        } else {
          toast.success(`${job.title} removed from favorites!`, {
            autoClose: 1000,
          })
        }
      })
  }

  return (
    <input
      disabled={isLoading}
      onClick={(e) => {
        e.stopPropagation() // so the user does not go to the job page when clicking the star
      }}
      onChange={handleCheck}
      type='checkbox'
      name='rating-8'
      className={`mask mask-star-2 ${className} ${
        checked ? 'bg-orange-400' : 'bg-gray-400'
      }`}
    />
  )
}
export default Star
