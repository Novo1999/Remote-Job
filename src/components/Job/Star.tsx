import { useAppSelector } from '@/lib/features/hooks'
import { useStarJobMutation } from '@/lib/features/jobsApi/jobsApi'
import { Job } from '@/utils/interfaces'
import { useRouter } from 'next/navigation'
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
  const { user } = useAppSelector((state) => state.user) || {}
  const uid = user?.uid
  const router = useRouter()

  const [markAsStarred] = useStarJobMutation()

  const checked = userId.includes(uid)

  const handleCheck = () => {
    if (!uid) {
      toast.warn('Please log in first!', { autoClose: 3000 })
      router.push('/login')
    } else
      markAsStarred({ jobId: _id, userId: uid })
        .unwrap()
        .then(({ isStarred, title }) => {
          // TOAST
          if (isStarred.userId.includes(uid)) {
            toast.success(`${title} added to favorites!`, { autoClose: 1000 })
          } else {
            toast.success(`${title} removed from favorites!`, {
              autoClose: 1000,
            })
          }
        })
  }

  return (
    <input
      onClick={
        (e) => e.stopPropagation() // so the user does not go to the job page when clicking the star
      }
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
