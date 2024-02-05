'use client'
import { changeSearchInput } from '@/lib/features/search/searchSlice'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useSearch } from '@/hooks/use-search'
import { CiSearch } from 'react-icons/ci'
import { RxCross2 } from 'react-icons/rx'
import TypeEffect from './TypeAnimation'
import { useChangeSearchParams } from '@/hooks/use-change-search-params'

const Search = () => {
  const {
    searchIsFocused,
    handleClick,
    handleSubmit,
    searchValue,
    setSearchValue,
    inputRef,
    dispatch,
    isSearching,
  } = useSearch()

  const { handleResetSearch, hasSearchParam } = useChangeSearchParams()

  return (
    <div className='flex items-center mt-8 w-full lg:w-[26rem] xl:w-[30rem] 2xl:w-[32rem] mx-auto relative'>
      <div className='absolute text-black left-6'>
        <CiSearch />
      </div>
      {!searchIsFocused && !searchValue && (
        <div
          onClick={handleClick}
          className='absolute left-12 bottom-[6px] *:text-lg font-semibold font-poppins text-black search-type-effect w-32 sm:w-96'
        >
          <TypeEffect />
        </div>
      )}
      <Input
        onKeyDown={handleSubmit} // so that pressing enter works for search
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        ref={inputRef}
        className='pl-12 text-black rounded-full font-montserrat font-semibold'
        type='text'
      />
      {/* CROSS BUTTON */}
      {hasSearchParam && (
        <Button
          onClick={() => {
            setSearchValue('')
            dispatch(changeSearchInput({ isSearching: false, query: '' }))
            handleResetSearch()
          }}
          className='bg-white text-black hover:text-white absolute right-20 rounded-full search-btn'
          type='submit'
        >
          <RxCross2 />
        </Button>
      )}
      <Button
        disabled={!searchValue}
        onClick={handleSubmit}
        className='bg-white text-black hover:text-white absolute right-0 rounded-full search-btn'
        type='submit'
      >
        Search
      </Button>
    </div>
  )
}
export default Search
