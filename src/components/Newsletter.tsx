import { FaArrowCircleRight } from 'react-icons/fa'
import {
  FaInstagram,
  FaMessage,
  FaPinterest,
  FaReddit,
  FaSquareFacebook,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa6'
import Footer from './Footer'
import { ReactNode } from 'react'
import Link from 'next/link'

const Newsletter = () => {
  return (
    <div className='mt-16 mx-auto lg:w-full font-montserrat'>
      <div className='bg-gradient-to-l from-gray-700 xl:px-36 grid grid-cols-1 lg:grid-cols-2 via-gray-900 to-black py-10 px-6 sm:py-16 sm:px-12 lg:gap-10'>
        <div className='flex flex-col gap-6'>
          <div className='lg:flex-1'>
            <h2 className='text-xl font-bold tracking-tight text-white'>
              <p className='text-2xl mb-4 font-thin font-chewy'>RemoteJumbo</p>
              <span className='flex gap-2 items-center'>
                <FaMessage />
                Sign up for our newsletter
              </span>
            </h2>
            <p className='mt-4 max-w-3xl text-sm text-gray-100'>
              Get remote job alerts sent directly to your inbox by subscribing.
            </p>
          </div>
          <div className='mt-4 sm:w-full lg:mt-0 lg:flex-1'>
            <form method='post' className='sm:flex relative'>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                type='email'
                autoComplete='email'
                className='w-full rounded-md text-black bg-white border-white px-5 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700'
                placeholder='Your email'
              />
              <button className='bg-white text-black hover:text-white absolute right-2 text-2xl top-2'>
                <FaArrowCircleRight />
              </button>
              <input
                type='checkbox'
                defaultValue={1}
                className='hidden'
                tabIndex={-1}
                autoComplete='off'
              />
            </form>
            <div className='flex justify-start space-x-3 mt-4 lg:mt-8 text-2xl text-white'>
              <SocialLink icon={<FaSquareFacebook />} />
              <SocialLink icon={<FaInstagram />} />
              <SocialLink icon={<FaTwitter />} />
              <SocialLink icon={<FaYoutube />} />
              <SocialLink icon={<FaReddit />} />
              <SocialLink icon={<FaPinterest />} />
            </div>
          </div>
        </div>
        <Footer />
        <div className='py-6 text-sm text-center dark:text-gray-400 block lg:hidden '>
          © 2023 RemoteJumbo. All rights reserved.
        </div>
        <div className='py-6 text-sm text-center dark:text-gray-400 hidden lg:block col-span-3'>
          © 2023 RemoteJumbo. All rights reserved.
        </div>
      </div>
    </div>
  )
}
export default Newsletter

const SocialLink = ({ icon }: { icon: ReactNode }) => {
  return (
    <Link href='/' className='hover:-translate-y-1 transition-transform'>
      {icon}
    </Link>
  )
}
