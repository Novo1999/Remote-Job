const Hero = () => {
  return (
    <section className='flex justify-center'>
      <div className='h-full flex-col items-center relative justify-center py-20'>
        {/* <Image
          src={nomadImage}
          alt='nomad image'
          className='lg:h-[32rem] xl:h-[48rem] object-cover'
          placeholder='blur'
        /> */}
        <p className='text-center text-xl drop-shadow-xl xl:text-5xl sm:text-3xl font-semibold font-montserrat animate-in fade-in transition-all duration-500 zoom-in sm:mx-20 '>
          Discover remote jobs and work from anywhere
        </p>
      </div>
    </section>
  )
}
export default Hero
