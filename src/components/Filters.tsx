import Filter from './Filter'
import Sort from './Sort'

const Filters = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 font-montserrat *:font-semibold sm:mx-4'>
      <Filter category='location' />
      <Filter category='position' />
      <Filter category='benefits' />
      <Sort />
      <span className='w-full col-span-2 sm:col-span-4 lg:col-span-4 sm:p-4 text-white rounded-full'>
        <Filter category='salary' />
      </span>
    </div>
  )
}
export default Filters
