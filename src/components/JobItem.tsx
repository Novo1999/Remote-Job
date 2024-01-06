import Image from 'next/image'
import dummyLogo from '../../public/images/dummylogo.png'

const JobItem = ({ jobPost }) => {
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
    <div className='w-full bg-white py-4 px-4 rounded-lg text-black flex text-xs items-center gap-4'>
      <div>
        <Image src={dummyLogo} alt='logo' className='w-12 rounded-full' />
      </div>
      <div className='flex flex-col ml-2'>
        <p>{title}</p>
        <p>{companyName}</p>
        <div className='flex gap-4'>
          {positions.map((pos: string) => (
            <p key={crypto.randomUUID()}>{pos}</p>
          ))}
        </div>
      </div>
      <div className='flex gap-4'>
        {isFeatured && <p>Featured</p>}
        {isNew && <p>New</p>}
      </div>
    </div>
  )
}
export default JobItem
