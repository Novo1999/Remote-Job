import Image from 'next/image'
import dummyLogo from '../../public/images/dummylogo.png'
import Ping from './ui/Ping'

type JobPost = {
  title: string
  companyName: string
  positions: string[]
  postedAgo: string
  location: string
  salaryRange: string
  isFeatured: boolean
  isNew: boolean
}

const JobItem = ({ jobPost }: { jobPost: JobPost }) => {
  const {
    title,
    companyName,
    positions,
    postedAgo,
    location,
    salaryRange,
    isFeatured,
    isNew,
  } = jobPost
  return (
    <div className='w-full bg-white py-4 px-4 rounded-lg text-black grid grid-cols-5 items-center text-xs gap-4 font-poppins'>
      <div className='col-span-1'>
        <Image src={dummyLogo} alt='logo' className='w-12 rounded-full' />
      </div>
      <div className='flex flex-col ml-2 flex-1 gap-1 col-span-3'>
        <p className='font-semibold'>{title}</p>
        <p className=''>{companyName}</p>
        <div className='flex flex-wrap gap-2'>
          {positions.map((pos: string) => (
            <p
              className='bg-teal-400 w-fit rounded-full px-2 flex justify-center items-center'
              key={crypto.randomUUID()}
            >
              {pos}
            </p>
          ))}
        </div>
      </div>
      <div className='flex gap-4 h-fit justify-end text-white'>
        {isFeatured && (
          <p className='bg-green-400 px-1 rounded-full '>Featured</p>
        )}
        {isNew && (
          <div className='relative'>
            <Ping />
            <p className='bg-orange-400 px-1 rounded-full '>New</p>
          </div>
        )}
      </div>
    </div>
  )
}
export default JobItem
