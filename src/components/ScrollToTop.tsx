import { motion } from 'framer-motion'
import { BiUpArrow } from 'react-icons/bi'
import { TooltipForButton } from './Tooltip'

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }

  return (
    <TooltipForButton content='Scroll To Top'>
      <motion.button
        onClick={handleScrollToTop}
        whileHover={{ y: -4, scale: 1.1 }}
        id='to-top-button'
        title='Go To Top'
        className='fixed z-50 bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-gradient-to-r from-sky-400 to-cyan-300 text-white text-lg font-semibold transition-colors duration-300 flex justify-center items-center'
      >
        <BiUpArrow className='text-red-400 text-2xl' />
        <span className='sr-only'>Go to top</span>
      </motion.button>
    </TooltipForButton>
  )
}
export default ScrollToTop
