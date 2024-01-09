import { RxCross2 } from 'react-icons/rx'
import Filter from './Filter'
import { Dispatch, SetStateAction } from 'react'

const Filters = ({
  setFilterOpen,
}: {
  setFilterOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div className='grid grid-cols-1 w-full sm:grid-cols-2 mt-6 justify- mx-4 gap-y-2 lg:px-2 xl:px-10 pb-4 h-screen font-poppins relative *:font-semibold'>
      <button
        onClick={() => setFilterOpen(false)}
        className='absolute -right-4 z-50 -top-5 text-xl outline-none hover:scale-105 transition-transform'
      >
        <RxCross2 />
      </button>
      <Filter category='location' />
      <Filter category='position' />
      <Filter category='types' />
      <Filter category='benefits' />
      <Filter category='salary' />
    </div>
  )
}

export default Filters
