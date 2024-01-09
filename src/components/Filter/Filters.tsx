import { RxCross2 } from 'react-icons/rx'
import Filter from './Filter'
import { Dispatch, SetStateAction } from 'react'

const Filters = ({
  setFilterOpen,
}: {
  setFilterOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div className='grid sm:grid-cols-2 mt-6 justify-center gap-8 mx-4 lg:px-2 xl:px-10 h-full pb-4 font-poppins relative *:font-semibold sm:mx-4'>
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

// TODO: ADD ICONS FOR FILTER
// TODO: ADD ICONS FOR NAV MOBILE
export default Filters
