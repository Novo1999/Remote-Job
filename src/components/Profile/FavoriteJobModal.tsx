import { useGetUserStarredJobsQuery } from '@/lib/features/jobsApi/jobsApi'
import { User, getAuth } from 'firebase/auth'
import Error, { EmptyResponse } from '../Dummies'
import JobItem from '../Job/JobItem'
import Skeleton from '../Job/Skeleton'
import { DialogContent } from '../ui/dialog'

const FavoriteJobModal = () => {
  const auth = getAuth()
  const { uid } = auth.currentUser as User

  const { data, isLoading, isError, error } = useGetUserStarredJobsQuery(uid)

  let content = null
  if (isLoading) {
    // making skeletons for 10 jobs hard coded
    content = Array.from({ length: 5 }).map((_, index) => (
      <Skeleton key={index} />
    ))
  }

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
    content = data?.map((job, index) => (
      <JobItem jobPost={job} index={index} key={job._id} />
    ))
  }

  return <DialogContent className='bg-black'>{content}</DialogContent>
}
export default FavoriteJobModal
