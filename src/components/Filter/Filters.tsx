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
      <Filter category='locations' />
      <Filter category='positions' />
      <Filter category='types' />
      <Filter category='benefits' />
      <Filter category='salary' />
    </div>
  )
}

export default Filters
