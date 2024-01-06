import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CiSearch } from 'react-icons/ci'

const Search = () => {
  return (
    <div className='flex w-full max-w-sm items-center space-x-2 mt-8 relative m-auto'>
      <div className='absolute text-black left-6'>
        <CiSearch />
      </div>
      <Input className='pl-9 text-black ' type='email' placeholder='Search' />
      <Button className='bg-white text-black hover:text-white' type='submit'>
        Search
      </Button>
    </div>
  )
}
export default Search
