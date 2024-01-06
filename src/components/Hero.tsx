import Image from 'next/image'
import nomadImage from '../../public/images/nomad.jpg'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className='flex justify-center'>
      <div className='h-full flex-col items-center relative justify-center'>
        {/* <Image
          src={nomadImage}
          alt='nomad image'
          className='lg:h-[32rem] xl:h-[48rem] object-cover'
          placeholder='blur'
        /> */}
        <p className='text-center drop-shadow-xl xl:text-5xl sm:text-3xl font-semibold font-oswald sm:mx-20 lg:mx-40 xl:mx-80'>
          Discover Remote Opportunities Tailored to Your Expertise – Where
          Distance is No Barrier to Success.
        </p>
      </div>
    </section>
  )
}
export default Hero

//"Empower Your Career Journey: Discover Remote Opportunities Tailored to Your Expertise. Join the Future of Work with Our Curated Remote Job Listings – Where Distance is No Barrier to Success.
