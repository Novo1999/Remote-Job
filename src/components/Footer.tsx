'use client'
import { FaSquareFacebook } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
const Footer = () => {
  return (
    <>
      <div className='w-full mt-20 h-full flex items-center justify-center bg-black'>
        <div className='mx-5 w-full px-4 text-white flex flex-col'>
          <div className='w-full text-7xl font-bold'>
            <h1 className='w-full text-2xl font-montserrat'>
              Let&apos;s get in Touch
            </h1>
          </div>
          <div className='flex mt-8 flex-col md:flex-row md:justify-between'>
            <p className='w-full md:w-2/3 text-gray-400 font-semibold font-montserrat'>
              Connecting talent with opportunities, bridging distances. Your
              dream remote job is just a click away.
            </p>
            <div className='w-44 pt-6 md:pt-0'>
              <Link
                href='/'
                className='bg-red-500 transition-colors hover:bg-red-400 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center font-poppins'
              >
                Contact US
              </Link>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex mt-24 mb-12 flex-row justify-between *:transition-all'>
              <p className='text-2xl font-chewy'>RemoteJumbo</p>
              <a className='hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase'>
                About
              </a>
              <a className='hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase'>
                Services
              </a>
              <a className='hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase'>
                Why us
              </a>
              <a className='hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase'>
                Contact
              </a>
              <div className='flex flex-row space-x-8 items-center justify-between'>
                <FaSquareFacebook />
                <FaInstagram />
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
