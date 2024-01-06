'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { jobPosts } from '@/utils/dummyData'

const Advertising = () => {
  const newAndFeatured = jobPosts.filter((job) => job.isFeatured || job.isNew)
  const textVariants = {
    initial: {
      x: '100%', // Start off-screen to the right
    },
    animate: {
      x: '-100%', // Move to the left
      transition: {
        repeat: Infinity, // Repeat the animation infinitely
        duration: 10, // Adjust the duration of each animation cycle
        ease: 'linear', // Linear easing for a continuous motion
      },
    },
  }

  return (
    <div className='bg-orange-500 fixed z-20 w-full'>
      <motion.div
        variants={textVariants}
        initial='initial'
        animate='animate'
        className='text-2xl font-bold overflow-hidden'
      >
        <span className='flex gap-10 text-sm p-1'>
          {newAndFeatured.map((job, index) => {
            if (job.isFeatured) {
              return (
                <div key={index}>
                  <div className='bg-white rounded-lg text-black px-1 text-center'>
                    FEATURED
                  </div>
                  <p key={index}>
                    {index + 1}.{job.companyName}
                  </p>
                </div>
              )
            }
            if (job.isNew) {
              return (
                <div key={index}>
                  <div className='bg-white rounded-lg text-black px-1 text-center'>
                    NEW
                  </div>
                  <p key={index}>
                    {index + 1}.{job.companyName}
                  </p>
                </div>
              )
            }
          })}
        </span>
      </motion.div>
    </div>
  )
}

export default Advertising
