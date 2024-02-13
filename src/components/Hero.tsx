import { Player } from '@lottiefiles/react-lottie-player'
import Image from 'next/image'
import nomadImage from '../assets/hero.jpg'

const Hero = () => {
  return (
    <section className='flex justify-center'>
      <div className='h-full w-full flex-col items-center relative justify-center py-4'>
        <Image
          src={nomadImage}
          alt='nomad image'
          className='object-cover sm:h-60 lg:h-96'
          placeholder='blur'
        />
        <div className='absolute top-10 min-[375px]:top-16 gap-10 left-0 right-0 bottom-0'>
          <p className='text-center text-xl drop-shadow-md relative lg:text-5xl sm:text-3xl font-semibold font-montserrat animate-in fade-in transition-all duration-500 zoom-in'>
            Discover remote jobs and work from anywhere
          </p>
          <Player
            className='size-36 sm:size-48 min-[375px]:size-40 lg:size-60 xl:size-72 relative drop-shadow-md bottom-4 sm:bottom-6'
            autoplay
            loop
            src='https://lottie.host/ef86da06-1299-4ed2-90c7-cc1ea48f9121/cOIsymf0CD.json'
          />
        </div>
      </div>
    </section>
  )
}
export default Hero
