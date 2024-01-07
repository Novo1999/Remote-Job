import Filter from './Filter'
import Sort from './Sort'

const Filters = () => {
  return (
    <div className='grid mt-6 justify-center sm:grid-cols-2 gap-8 ml-4 font-montserrat *:font-semibold sm:mx-4'>
      <Filter category='location' />
      <Filter category='position' />
      <Filter category='benefits' />
      <Filter category='types' />
      <Sort />
      <div className='w-full text-white rounded-full'>
        <Filter category='salary' />
      </div>
    </div>
  )
}
export default Filters
