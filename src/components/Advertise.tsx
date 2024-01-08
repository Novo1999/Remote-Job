import { useEffect, useState } from 'react'
import { FaCircleInfo } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'

const Advertise = () => {
  const [timer, setTimer] = useState<number>(5)
  const [showAd, setShowAd] = useState<boolean>(true)

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

  return (
    showAd && (
      <div
        className='bg-orange-400 w-screen text-white font-montserrat px-4 py-3 h-12 shadow-md'
        role='alert'
      >
        <div className='flex gap-2 justify-between'>
          <div className='flex gap-2 items-center'>
            <div className=''>
              <FaCircleInfo />
            </div>
            <p className='font-semibold text-xs animate-in slide-in-from-top-24'>
              Tech Co is Hiring Senior Frontend Developer!!!
            </p>
          </div>
          <span className='text-2xl text-end'>
            {timer > 0 ? (
              <div className='relative flex items-center justify-center'>
                <span className='loading loading-spinner loading-sm'></span>
                <p className='absolute text-black text-xs'>{timer}</p>
              </div>
            ) : (
              <div onClick={() => setShowAd(false)}>
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
