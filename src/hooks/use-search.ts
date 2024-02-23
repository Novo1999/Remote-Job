import { useAppDispatch, useAppSelector } from '@/lib/features/hooks'
import { changeSearchInput } from '@/lib/features/search/searchSlice'
import { useEffect, useRef, useState } from 'react'
import { useChangeSearchParams } from './use-change-search-params'

type InputEvent =
  | React.KeyboardEvent
  | React.MouseEvent<HTMLButtonElement, MouseEvent>

export const useSearch = () => {
  const [searchIsFocused, setSearchIsFocused] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const { handleQuery } = useChangeSearchParams()

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
      dispatch(changeSearchInput({ query: searchValue }))
      handleQuery(searchValue)
    }
  }

  return {
    searchIsFocused,
    handleClick,
    handleSubmit,
    searchValue,
    setSearchValue,
    inputRef,
    dispatch,
  }
}
