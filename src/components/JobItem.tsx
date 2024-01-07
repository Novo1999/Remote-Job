import Image from 'next/image'
import dummyLogo from '../../public/images/dummylogo.png'
import Ping from './ui/Ping'
import { BsFillSignpostFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { FaRupeeSign } from 'react-icons/fa'

export type JobPost = {
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
    <div className='w-full bg-white py-4 px-4 sm:px-6 sm:py-6 rounded-lg text-black grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-7 items-center text-xs gap-4 font-poppins'>
      <div className='col-span-1'>
        <Image
          src={dummyLogo}
          alt='logo'
          className='w-12 sm:w-16 rounded-full m-auto'
        />
      </div>
      <div className='flex flex-col ml-2 flex-1 gap-1 col-span-3 sm:col-span-2'>
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
      <div className='hidden sm:flex flex-col col-span-2 justify-evenly lg:flex-row lg:col-span-3'>
        <p className='flex gap-2 items-center xl:gap-6'>
          <BsFillSignpostFill />
          {postedAgo}
        </p>
        <p className='flex gap-2 items-center'>
          <FaLocationDot />
          {location}
        </p>
        <p className='flex gap-2 items-center'>
          <FaRupeeSign />
          {salaryRange}
        </p>
      </div>
      <div className='flex gap-4 h-fit justify-end text-white'>
        {isFeatured && (
          <p className='bg-green-400 px-1 rounded-full sm:p-3'>Featured</p>
        )}
        {isNew && (
          <div className='relative'>
            <Ping />
            <p className='bg-orange-400 px-1 rounded-full sm:p-3'>New</p>
          </div>
        )}
      </div>
    </div>
  )
}
export default JobItem
