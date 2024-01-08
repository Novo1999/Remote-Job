'use client'
import { FaSquareFacebook, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

const FooterLink = ({ text }: { text: string }) => {
  return (
    <Link
      href='/'
      className='hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase'
    >
      {text}
    </Link>
  )
}

const Footer = () => {
  return (
    <>
      <div className='w-full px-10 xl:px-36 mt-20 h-full flex items-center justify-center bg-black'>
        <div className='w-full text-white flex flex-col'>
          <div className='flex mt-8 flex-col items-center md:flex-row md:justify-between'>
            <p className='w-full text-gray-400 font-semibold font-poppins text-center md:text-xl xl:text-2xl'>
              Unlock Your Remote Career. Where Talent Meets Opportunity.
            </p>
          </div>
          <div className='flex flex-col'>
            <div className='flex mt-24 mb-12 gap-2 flex-row justify-evenly sm:justify-between *:transition-all'>
              <p className='text-2xl font-chewy'>RemoteJumbo</p>
              <FooterLink text='about' />
              <FooterLink text='services' />
              <FooterLink text='Why us' />
              <FooterLink text='contact' />
              <div className='flex flex-row space-x-8 items-center justify-between'>
                <FaSquareFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaYoutube />
              </div>
            </div>
            <hr className='border-gray-600' />
            <p className='w-full text-center my-12 text-gray-600'>
              Copyright © 2024 Remote Jumbo
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer
