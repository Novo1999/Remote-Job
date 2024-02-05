import { useAppSelector } from '@/lib/features/hooks'
import { useStarJobMutation } from '@/lib/features/jobsApi/jobsApi'
import { Job } from '@/utils/interfaces'
import React, { Dispatch, SetStateAction, useEffect } from 'react'

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

  useEffect(() => {
    console.log(2)
  }, [job])

  const [markAsStarred, { isLoading: isStarLoading, isError, error }] =
    useStarJobMutation()

  const checked = userId.includes(uid)

  console.log(checked)

  const handleCheck = () => {
    markAsStarred({ jobId: _id, userId: uid })
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
