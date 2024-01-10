'use client'
import Image from 'next/image'
import dummyLogo from '../../../public/images/dummylogo.png'

import { motion } from 'framer-motion'
import { Ref, useRef, useState } from 'react'
import JobPositions from './JobPositions'
import SpecialJobs from './SpecialJobs'
import { useRouter } from 'next/navigation'

export type JobPost = {
  title?: string
  companyName?: string
  positions?: string[]
  benefits?: string[]
  postedAgo?: string
  location?: string
  salaryRange?: string
  isFeatured?: boolean
  isNew?: boolean
  index?: number
  currentHovered?: number
  isAd?: boolean
  type?: string
}

const JobItem = ({ jobPost, index }: { jobPost: JobPost; index: number }) => {
  const [currentHovered, setCurrentHovered] = useState<number | undefined>(
    undefined
  )
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)
  const handleClick = (e: React.SyntheticEvent) => {
    e.stopPropagation()
    router.push('/job/123', { scroll: true })
  }

  return (
    <motion.div
      ref={ref}
      onClickCapture={handleClick}
      onHoverStart={() => setCurrentHovered(index)}
      onHoverEnd={() => setCurrentHovered(undefined)}
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      className='w-full relative py-2 px-2 sm:py-3 rounded-lg bg-gradient-to-r from-rose-100 to-teal-100 text-black grid grid-cols-9 sm:grid-cols-7 lg:grid-cols-8 sm:items-start lg:items-center text-xs font-poppins z-10'
    >
      {index === currentHovered && (
        <div className='absolute left-0 h-full border-r-4 rounded-l-full border-orange-500'></div>
      )}
      {/* main items */}
      <div className='flex col-span-1 m-auto'>
        <Image
          src={dummyLogo}
          alt='logo'
          className='w-12 sm:w-16 rounded-full m-auto shadow-lg lg:w-[90px] xl:w-20'
        />
      </div>
      <JobPositions jobPost={jobPost} />
      <SpecialJobs jobPost={jobPost} />
    </motion.div>
  )
}
export default JobItem
