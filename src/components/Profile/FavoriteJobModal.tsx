import { useGetUserStarredJobsQuery } from '@/lib/features/jobsApi/jobsApi'
import { User, getAuth } from 'firebase/auth'
import Error, { EmptyResponse } from '../Dummies'
import JobItem from '../Job/JobItem'
import Skeleton from '../Job/Skeleton'
import { DialogContent } from '../ui/dialog'
import { Dispatch, SetStateAction } from 'react'

const FavoriteJobModal = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const auth = getAuth()
  const { uid } = auth.currentUser as User

  const { data, isLoading, isError, error } = useGetUserStarredJobsQuery(uid)

  let content = null

  if (isError) {
    if ('status' in error!) {
      content = <Error error={error} />
    }
  }

  if (!isLoading && !isError && data?.length === 0) {
    content = <EmptyResponse text='No Jobs Marked As Favorite' />
  }

  // if not searching show regular jobs
  if (!isLoading && !isError && data?.length! > 0) {
    content = data?.map((job) => (
      <JobItem onClick={() => setOpen(false)} jobPost={job} key={job._id} />
    ))
  }

  return <DialogContent className='bg-black'>{content}</DialogContent>
}
export default FavoriteJobModal
