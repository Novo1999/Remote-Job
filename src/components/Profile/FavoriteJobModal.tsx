import { auth } from '@/firebase/config'
import { useGetUserStarredJobsQuery } from '@/lib/features/jobsApi/jobsApi'
import { User } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import Error, { EmptyResponse } from '../Dummies'
import JobItem from '../Job/JobItem'
import { DialogContent } from '../ui/dialog'

const FavoriteJobModal = () => {
  const [user] = useAuthState(auth)
  const { uid } = user as User

  const {
    data,
    isLoading,
    isError,
    error: starError,
  } = useGetUserStarredJobsQuery(uid)

  let content = null

  if (isError) {
    if ('status' in starError!) {
      content = <Error error={starError} />
    }
  }

  if (!isLoading && !isError && data?.length === 0) {
    content = <EmptyResponse text='No Jobs Marked As Favorite' />
  }

  // if not searching show regular jobs
  if (!isLoading && !isError && data?.length! > 0) {
    content = (
      <>
        <h4 className='font-semibold'>My Favorite Jobs</h4>
        {data?.map((job) => (
          <JobItem jobPost={job} key={job._id} />
        ))}
      </>
    )
  }

  return (
    <DialogContent className='bg-gray-800 max-h-96 overflow-y-auto'>
      {content}
    </DialogContent>
  )
}
export default FavoriteJobModal
