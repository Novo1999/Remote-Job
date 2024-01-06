import { jobPosts } from '@/utils/dummyData'
import JobItem from './JobItem'

const JobContainer = () => {
  return (
    <section className='flex flex-col gap-4 justify-center mt-12 mx-7'>
      {jobPosts.map((job) => (
        <JobItem jobPost={job} key={crypto.randomUUID()} />
      ))}
    </section>
  )
}
export default JobContainer
