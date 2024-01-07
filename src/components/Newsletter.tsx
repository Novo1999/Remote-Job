const Newsletter = () => {
  return (
    <>
      <div className='p-6 container md:w-2/3 xl:w-auto mx-auto mt-20 flex flex-col xl:items-stretch justify-between xl:flex-row font-montserrat'>
        <div className='md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center'>
          <div className='w-full xl:w-2/3 xl:py-28 '>
            <h1 className='text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-white mb-4 text-center xl:text-center md:mt-0 mt-4 '>
              Remote work, limitless possibilities!
            </h1>
            <p className='text-base leading-normal text-gray-200 text-center '>
              Stay ahead of the curve with our newsletter featuring handpicked
              remote job listings, expert tips for successful virtual
              collaboration, and more. Subscribe for a career without
              boundaries.
            </p>
            <div className='flex items-stretch mt-12'>
              <input
                className='bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500'
                type='email'
                placeholder='Your Email'
              />
              <button className='w-32 rounded-l-none hover:bg-blue-600 bg-blue-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700'>
                subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Newsletter
