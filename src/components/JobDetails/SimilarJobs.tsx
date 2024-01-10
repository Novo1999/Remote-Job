import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { jobPosts } from '@/utils/dummyData'
import JobItem from '../Job/JobItem'
const SimilarJobs = () => {
  return (
    <div className='font-poppins col-span-2'>
      <CardHeader>
        <CardTitle className='text-base lg:text-2xl'>Similar Jobs</CardTitle>
      </CardHeader>
      <div className='text-xs flex flex-col gap-4'>
        {jobPosts.slice(1, 4).map((job, index) => (
          <JobItem index={index} key={crypto.randomUUID()} jobPost={job} />
        ))}
      </div>
      <CardContent></CardContent>
      <CardFooter className='flex justify-between'></CardFooter>
    </div>
  )
}
export default SimilarJobs
