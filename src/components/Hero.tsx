import Image from 'next/image'
import nomadImage from '../../public/images/hero.jpg'

const Hero = () => {
  return (
    <section className='flex justify-center'>
      <div className='h-full flex-col items-center relative justify-center py-4'>
        <Image
          src={nomadImage}
          alt='nomad image'
          className='object-cover sm:h-60 lg:h-96'
          placeholder='blur'
        />
        <p className='text-center text-xl drop-shadow-md xl:text-5xl font-semibold font-montserrat animate-in fade-in transition-all duration-500 zoom-in sm:mx-20 absolute top-20 lg:top-32 sm:text-4xl inset-0'>
          Discover remote jobs and work from anywhere
        </p>
      </div>
    </section>
  )
}
export default Hero
