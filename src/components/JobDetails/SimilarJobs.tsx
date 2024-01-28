import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import JobItem from '../Job/JobItem'
import { useGetRandomJobsQuery } from '@/app/features/jobsApi/jobsApi'
import Error, { EmptyResponse } from '../Dummies'
const SimilarJobs = ({ id, position }: { id: string; position: string }) => {
  const { isLoading, isError, error, data } = useGetRandomJobsQuery({
    id,
    relevant: position,
  })
  let content = null

  if (isLoading) {
    content = <span className='loading loading-dots loading-lg h-48'></span>
  }

  if (isError) {
    if ('status' in error) {
      content = <Error error={error} />
    }
  }

  if (!isLoading && !isError && data?.length === 0) {
    content = <EmptyResponse text='No Similar Jobs 😟' />
  }

  if (!isLoading && !isError && data?.length! > 0) {
    content = data?.map((job, index) => (
      <JobItem jobPost={job} index={index} key={job._id} />
    ))
  }
  return (
    <div className='font-poppins col-span-2'>
      <CardHeader>
        <CardTitle className='text-base lg:text-2xl'>Similar Jobs</CardTitle>
      </CardHeader>
      <div className='text-xs flex flex-col gap-4'>{content}</div>
      <CardContent></CardContent>
      <CardFooter className='flex justify-between'></CardFooter>
    </div>
  )
}
export default SimilarJobs
