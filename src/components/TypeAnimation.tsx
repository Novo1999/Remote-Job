'use client'
import { jobPosts } from '@/utils/dummyData'
import { TypeAnimation } from 'react-type-animation'

const TypeEffect = () => {
  // creating sequence by putting the time after each element of array
  const sequence = jobPosts
    .map((job, index) =>
      index === jobPosts.length - 1 ? [job.title, 500] : [job.title, 500]
    )
    .flat() as [string | number]

  return (
    <TypeAnimation
      sequence={sequence}
      wrapper='span'
      speed={10}
      style={{ fontSize: '12px', display: 'inline-block' }}
      repeat={Infinity}
      preRenderFirstString={true}
      cursor={true}
    />
  )
}

export default TypeEffect
