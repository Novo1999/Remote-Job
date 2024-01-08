import { jobPosts } from '@/utils/dummyData'
import JobItem from './Job/JobItem'

const JobContainer = () => {
  return (
    <section
      className='flex flex-col gap-4 justify-center items-center mt-12
 min-[425px]:mx-2 sm:mx-7'
    >
      {jobPosts.map((job, index) => (
        <JobItem jobPost={job} index={index} key={crypto.randomUUID()} />
      ))}
    </section>
  )
}
export default JobContainer
