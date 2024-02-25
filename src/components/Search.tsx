'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useChangeSearchParams } from '@/hooks/use-change-search-params'
import { useSearch } from '@/hooks/use-search'
import { changeSearchInput } from '@/lib/features/search/searchSlice'
import { useEffect } from 'react'
import { CiSearch } from 'react-icons/ci'
import { RxCross2 } from 'react-icons/rx'
import TypeEffect from './TypeAnimation'

const Search = () => {
  const {
    searchIsFocused,
    handleClick,
    handleSubmit,
    searchValue,
    setSearchValue,
    inputRef,
    dispatch,
  } = useSearch()

  const { handleResetSearch, hasSearchParam, searchQuery } =
    useChangeSearchParams()

  useEffect(() => {
    if (hasSearchParam) {
      setSearchValue(searchQuery ?? '')
      dispatch(changeSearchInput({ query: searchValue }))
    }
  }, [searchQuery, hasSearchParam, setSearchValue, dispatch]) // value stays in field if searchValue added as dependency

  return (
    <div className='flex items-center mt-8 w-full lg:w-[26rem] xl:w-[30rem] 2xl:w-[32rem] mx-auto relative'>
      <div className='absolute text-black left-6'>
        <CiSearch />
      </div>
      {!searchIsFocused && !searchValue && (
        <div
          onClick={handleClick}
          className='absolute left-12 bottom-[6px] *:text-lg font-semibold font-poppins text-black search-type-effect w-32 sm:w-[33rem] lg:w-[23rem] xl:w-[27rem]'
        >
          <TypeEffect />
        </div>
      )}
      <Input
        onKeyDown={handleSubmit} // so that pressing enter works for search
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        ref={inputRef}
        className='pl-12 font-montserrat font-semibold bg-zinc-200 text-zinc-600 ring-1 ring-zinc-400 focus:ring-2 focus:ring-red-500 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full shadow-md focus:shadow-lg focus:shadow-red-500'
        type='text'
      />
      {/* CROSS BUTTON */}
      {hasSearchParam && (
        <Button
          onClick={() => {
            setSearchValue('')
            dispatch(changeSearchInput({ query: '' }))
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
