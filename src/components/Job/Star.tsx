import { auth } from '@/firebase/config'
import useRouting from '@/hooks/use-routing'
import { useAppDispatch } from '@/lib/features/hooks'
import { useStarJobMutation } from '@/lib/features/jobsApi/jobsApi'
import { setShowStarLoader } from '@/lib/features/loader/loaderSlice'
import { motion } from 'framer-motion'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'
import { Job } from '../../../interfaces'

type Star = {
  className?: string
  job: Job
}

const Star = ({ className, job }: Star) => {
  const {
    _id,
    isStarred: { userId },
  } = job
  const [user] = useAuthState(auth)
  const uid = user?.uid
  const handleRouting = useRouting()
  const dispatch = useAppDispatch()

  const [markAsStarred] = useStarJobMutation()

  const checked = userId.includes(uid!) ?? false

  const handleCheck = () => {
    // if user not logged in, take the user to login page
    if (!uid) {
      toast.warn('Please log in first!', { autoClose: 3000 })
      handleRouting('/login')
    } else {
      dispatch(setShowStarLoader(_id))
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
          dispatch(setShowStarLoader(''))
        })
    }
  }

  return (
    <motion.input
      whileTap={{
        scale: 1.2,
      }}
      whileHover={{
        scale: 1.1,
      }}
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
