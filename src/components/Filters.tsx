import Filter from './Filter'
import Sort from './Sort'

const Filters = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 font-montserrat *:font-semibold sm:mx-4'>
      <Filter category='location' />
      <Filter category='position' />
      <Filter category='benefits' />
      <Filter category='types' />
      <Sort />
      <span className='w-full sm:col-span-3 text-white rounded-full'>
        <Filter category='salary' />
      </span>
    </div>
  )
}
export default Filters
