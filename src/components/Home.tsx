import Search from '../components/Search'
import FilterButtons from './FilterButtons'
import Hero from './Hero'
import JobContainer from './JobContainer'

const Home = () => {
  return (
    <>
      <Hero />
      <main className='relative flex flex-col mx-4 xl:mx-48 2xl:mx-96'>
        <div className='flex flex-col mx-4 sm:mx-20 lg:mx-40'>
          <Search />
          <FilterButtons />
        </div>
        <JobContainer />
      </main>
    </>
  )
}
export default Home
