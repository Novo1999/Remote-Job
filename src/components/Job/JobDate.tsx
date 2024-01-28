import { Job } from '@/app/features/jobsApi/jobsApi'
import { usePostedDate } from '@/hooks/usePostedDate'
import { BsFillSignpostFill } from 'react-icons/bs'

const JobDate = ({ jobPost }: { jobPost: Job }) => {
  const { posted } = jobPost
  const { formattedDate, mobilePostedAgo } = usePostedDate(posted)

  return (
    <p className='flex gap-1 items-center bg-stone-300 px-2 rounded-md flex-wrap'>
      <span className='hidden lg:block'>
        <BsFillSignpostFill />
      </span>
      <span className='block lg:hidden'>{mobilePostedAgo}</span>
      <span className='hidden lg:block'>{formattedDate}</span>
    </p>
  )
}
export default JobDate
