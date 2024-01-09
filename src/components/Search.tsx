'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CiSearch } from 'react-icons/ci'
import TypeEffect from './TypeAnimation'
import { useEffect, useRef, useState } from 'react'

const Search = () => {
  const [searchIsFocused, setSearchIsFocused] = useState(false)
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

  return (
    <div className='flex items-center mt-8 w-full lg:w-[26rem] xl:w-[30rem] 2xl:w-[32rem] mx-auto relative'>
      <div className='absolute text-black left-6'>
        <CiSearch />
      </div>
      {!searchIsFocused && (
        <div
          onClick={handleClick}
          className='absolute left-12 bottom-[6px] *:text-lg font-semibold font-poppins text-black search-type-effect w-32 sm:w-96'
        >
          <TypeEffect />
        </div>
      )}
      <Input
        ref={inputRef}
        className='pl-12 text-black rounded-full font-montserrat font-semibold'
        type='email'
      />

      <Button
        className='bg-white text-black hover:text-white absolute right-0 rounded-full'
        type='submit'
      >
        Search
      </Button>
    </div>
  )
}
export default Search
