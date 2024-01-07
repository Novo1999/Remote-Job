import { JobPost } from './JobItem'

const JobPositions = ({ title, companyName, positions }: JobPost) => {
  return (
    <div className='flex flex-col ml-4 flex-1 gap-1 col-span-3 sm:col-span-2'>
      <p className='font-semibold lg:text-lg'>{title}</p>
      <p className='sm:text-[0.9rem]'>{companyName}</p>
      <div className='flex gap-2'>
        {positions!.map((pos: string) => (
          <button
            className='bg-teal-400 w-fit text-xs rounded-full px-2 flex justify-center items-center hover:bg-teal-300 transition-all shadow-md sm:p-2'
            key={crypto.randomUUID()}
          >
            {pos}
          </button>
        ))}
      </div>
    </div>
  )
}
export default JobPositions
