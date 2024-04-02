'use client'
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
      <footer className='divide-y dark:bg-gray-800 dark:text-gray-100 font-montserrat text-gray-400'>
        <div className='flex flex-col py-10 mx-auto space-y-8 lg:flex-row justify-start lg:space-y-0'>
          <div className='grid grid-cols-1 min-[375px]:grid-cols-2 text-sm gap-y-8 sm:grid-cols-3 gap-20'>
            <div className='space-y-3'>
              <h3 className='tracking uppercase dark:text-gray-50'>Product</h3>
              <ul className='space-y-1 '>
                <li>
                  <a
                    className='hover:text-white'
                    rel='noopener noreferrer'
                    href='#'
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-white'
                    rel='noopener noreferrer'
                    href='#'
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-white'
                    rel='noopener noreferrer'
                    href='#'
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-white'
                    rel='noopener noreferrer'
                    href='#'
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className='space-y-3  '>
              <h3 className='uppercase dark:text-gray-50'>Job Opportunities</h3>
              <ul className='space-y-1'>
                <li>
                  <a
                    className='hover:text-white'
                    rel='noopener noreferrer'
                    href='#'
                  >
                    Explore Remote Positions
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-white'
                    rel='noopener noreferrer'
                    href='#'
                  >
                    Job Guidelines
                  </a>
                </li>
              </ul>
            </div>
            <div className='space-y-3 '>
              <h3 className='tracking uppercase dark:text-gray-50'>Company</h3>
              <ul className='space-y-1'>
                <li>
                  <a
                    className='hover:text-white'
                    rel='noopener noreferrer'
                    href='#'
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-white'
                    rel='noopener noreferrer'
                    href='#'
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
