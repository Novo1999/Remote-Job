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
    <div className='flex w-full max-w-xs items-center space-x-2 mt-8 relative m-auto'>
      <div className='absolute text-black left-6'>
        <CiSearch />
      </div>
      {!searchIsFocused && (
        <div
          onClick={handleClick}
          className='absolute left-9 bottom-[6px] w-full *:text-lg font-semibold font-poppins text-black search-type-effect'
        >
          <TypeEffect />
        </div>
      )}
      <Input
        ref={inputRef}
        className='pl-9 text-black rounded-full'
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
