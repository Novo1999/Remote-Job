import useDebounce from '@/hooks/use-debounce'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BiUpArrow } from 'react-icons/bi'
import { TooltipForButton } from './Tooltip'

const ScrollToTop = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0)

  const handleScroll = () => {
    const position: number = window.scrollY
    setScrollPosition(position)
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const debouncedHandleScroll = useDebounce(handleScroll, 100)

  useEffect(() => {
    // Debounce the scroll event handler
    window.addEventListener('scroll', () => debouncedHandleScroll())
    return () => {
      window.removeEventListener('scroll', () => debouncedHandleScroll())
    }
  }, [debouncedHandleScroll])

  return (
    <TooltipForButton content='Back To Top'>
      <motion.button
        onClick={handleScrollToTop}
        whileHover={{ y: -4, scale: 1.1 }}
        id='to-top-button'
        title='Go To Top'
        className={`fixed z-50 bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-gradient-to-r from-sky-400 to-cyan-300 text-white text-lg font-semibold transition-colors duration-300 flex justify-center items-center ${
          scrollPosition > 2000 ? 'visible' : 'invisible'
        }`}
      >
        <BiUpArrow className='text-red-400 text-2xl' />
      </motion.button>
    </TooltipForButton>
  )
}

export default ScrollToTop
