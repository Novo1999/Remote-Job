import { Job, useGetAllJobsQuery } from '@/app/features/jobsApi/jobsApi'
import { useEffect, useRef, useState } from 'react'
import { FaCircleInfo } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'

const Advertise = () => {
  const [timer, setTimer] = useState<number>(5)
  const [showAd, setShowAd] = useState<boolean>(true)
  const { data, isLoading, isError } = useGetAllJobsQuery(undefined)
  const ref = useRef<Job>()

  let content = null

  if (isLoading) {
    content = <p>Loading...</p>
  }

  if (!isLoading && !isError) {
    content = (
      <p className='font-semibold text-xs animate-in slide-in-from-top-24'>
        {ref.current?.company} is Hiring {ref.current?.position}!!!
      </p>
    )
  }

  if (isError) {
    content = <p>Error Loading Ad</p>
  }

  // decrementing timer
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTime: number) => {
        if (prevTime > 0) {
          return prevTime - 1
        }
        clearInterval(intervalId)
        return prevTime
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  // for random jobs, as the timer makes the info of ad re render and fetch new, using a ref here shows only one ad and prevents re loading another
  useEffect(() => {
    if (!isLoading && !isError) {
      ref.current = data![Math.floor(Math.random() * data!.length)]
    }
  }, [data, isError, isLoading])

  return (
    showAd && (
      <div
        className='bg-orange-400 w-full text-white font-montserrat px-4 xl:px-12 py-3 h-12 shadow-md'
        role='alert'
      >
        <div className='flex gap-2 justify-between'>
          <div className='flex gap-2 items-center'>
            <div className=''>
              <FaCircleInfo />
            </div>
            {content}
          </div>
          <span className='text-2xl text-end'>
            {timer > 0 ? (
              <div className='relative flex items-center justify-center'>
                <span className='loading loading-spinner loading-sm'></span>
                <p className='absolute text-black text-xs'>{timer}</p>
              </div>
            ) : (
              <div className='cursor-pointer' onClick={() => setShowAd(false)}>
                <RxCross2 />
              </div>
            )}
          </span>
        </div>
      </div>
    )
  )
}
export default Advertise
