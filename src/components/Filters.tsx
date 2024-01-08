import Filter from './Filter'
import Sort from './Sort'

const Filters = () => {
  return (
    <div className='grid mt-6 justify-center lg:grid-cols-4 sm:grid-cols-3 gap-8 ml-4 font-montserrat *:font-semibold sm:mx-4'>
      <Filter category='location' />
      <Filter category='position' />
      <Filter category='benefits' />
      <Filter category='types' />
      <Sort />
      <div className='w-full sm:col-span-1 text-white lg:col-span-3 rounded-full'>
        <Filter category='salary' />
      </div>
    </div>
  )
}

// TODO: ADD ICONS FOR FILTER
export default Filters
