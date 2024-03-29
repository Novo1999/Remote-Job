import { MdOutlineStar } from 'react-icons/md'

const Ping = () => {
  return (
    <span className='flex h-3 w-3 absolute -right-1 bottom-2 sm:top-0'>
      <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
      <span className='relative inline-flex rounded-full h-3 w-3 bg-green-500'>
        <MdOutlineStar />
      </span>
    </span>
  )
}
export default Ping
