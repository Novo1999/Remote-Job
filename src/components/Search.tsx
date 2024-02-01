'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CiSearch } from 'react-icons/ci'
import TypeEffect from './TypeAnimation'
import { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { changeSearchInput } from '@/app/features/search/searchSlice'
import { RxCross2 } from 'react-icons/rx'

type InputEvent =
  | React.KeyboardEvent
  | React.MouseEvent<HTMLButtonElement, MouseEvent>

const Search = () => {
  const [searchIsFocused, setSearchIsFocused] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const { isSearching } = useAppSelector((state) => state.search)

  useEffect(() => {
    if (!isSearching) {
      setSearchValue('')
    }
  }, [isSearching])

  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  // when clicking the input, the user can type
  const handleClick = () => {
    setSearchIsFocused(true)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }
  // show the typing animation again after clicking outside
  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as Element
    if (
      inputRef.current &&
      !inputRef.current.contains(target as Node) &&
      !target.classList.contains('search-type-effect')
    ) {
      setSearchIsFocused(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const handleSubmit = (e: InputEvent) => {
    if ((e as React.KeyboardEvent).key === 'Enter' || e.type === 'click') {
      dispatch(changeSearchInput({ isSearching: true, query: searchValue }))
    }
  }

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

      {isSearching && (
        <Button
          onClick={() => {
            setSearchValue('')
            dispatch(changeSearchInput({ isSearching: false, query: '' }))
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
