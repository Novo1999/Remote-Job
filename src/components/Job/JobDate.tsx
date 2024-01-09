import { BsFillSignpostFill } from 'react-icons/bs'
import { JobPost } from './JobItem'

const JobDate = ({ jobPost }: { jobPost: JobPost }) => {
  const { postedAgo } = jobPost
  const brokenPostedAgo = postedAgo?.split(' ') as string[]
  return (
    <p className='flex gap-1 items-center bg-stone-300 px-2 rounded-md flex-wrap'>
      <span className='hidden lg:block'>
        <BsFillSignpostFill />
      </span>
      <span className='block lg:hidden'>{`${brokenPostedAgo[0]}${brokenPostedAgo[1][0]}`}</span>
      <span className='hidden lg:block'>{`${brokenPostedAgo[0]}${brokenPostedAgo[1][0]} ago`}</span>
    </p>
  )
}
export default JobDate
