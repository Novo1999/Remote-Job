'use client'
import Stats from '@/components/Stats'
import { LampContainer } from '@/components/ui/lamp'
import { Player } from '@lottiefiles/react-lottie-player'
import { motion } from 'framer-motion'
import { RiRemoteControlFill } from 'react-icons/ri'

export default function Page() {
  const playerClassName = 'size-36 sm:size-48'
  return (
    <main className='font-poppins flex gap-4 flex-col items-center sm:mx-8 mt-6 mx-4 lg:mx-20 xl:mx-60 2xl:mx-96 '>
      <header className='text-white py-4 text-center'>
        <div className='text-xl md:text-3xl font-bold flex gap-2 items-center'>
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: 'easeInOut',
              }}
              className='bg-white py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'
            >
              Advertise with{' '}
              <p className='text-xl md:text-3xl font-chewy'>RemoteJumbo</p>
              <RiRemoteControlFill />
            </motion.h1>
            <Player
              className={playerClassName}
              autoplay
              loop
              src='https://lottie.host/2cce4e16-209a-4460-b96c-a93a125e33f6/SjRgrWSbB4.json'
            />
          </LampContainer>
        </div>
      </header>

      <div className='text-center font-semibold rounded-md p-10'>
        <p className='sm:text-xl'>
          Unlock Boundless Opportunities with Our Remote Job Platform!
        </p>
      </div>

      <section className='max-w-screen-md mx-auto rounded p-6 shadow-md'>
        <h2 className='font-bold text-2xl mb-4'>Why Advertise With Us?</h2>
        <p>
          RemoteJumbo is a leading platform for remote job listings, connecting
          employers with talented professionals worldwide. By advertising with
          us, you can reach a diverse and global audience interested in remote
          opportunities.
        </p>

        <h2 className='font-bold text-2xl mt-6 mb-4'>Advertising Options</h2>
        <p>
          We offer various advertising options, including banner ads, sponsored
          content, and featured job listings. Contact us to discuss how we can
          tailor a package that meets your marketing goals.
        </p>
        <div className='mt-10'>
          <Player
            className={playerClassName}
            autoplay
            loop
            src='https://lottie.host/66999a0e-0e7d-4723-8867-f3d89a843342/7dYHXrENhT.json'
          />
          <Stats />
        </div>
        <h2 className='font-bold text-2xl mt-6 mb-4'>Contact Us</h2>
        <p>
          Ready to promote your brand to our engaged audience? Contact our
          advertising team at{' '}
          <a href='mailto:advertise@remotejumbo.com'>
            advertise@remotejumbo.com
          </a>{' '}
          for more information.
        </p>
      </section>
    </main>
  )
}
