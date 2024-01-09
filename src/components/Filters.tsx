import Filter from './Filter'

const Filters = () => {
  return (
    <div className='grid sm:grid-cols-2 mt-6 justify-center gap-8 mx-4 font-poppins *:font-semibold sm:mx-4'>
      <Filter category='location' />
      <Filter category='position' />
      <Filter category='benefits' />
      <Filter category='types' />
    </div>
  )
}

// TODO: ADD ICONS FOR FILTER
// TODO: ADD ICONS FOR NAV MOBILE
export default Filters
