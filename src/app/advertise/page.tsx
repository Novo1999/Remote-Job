import { RiRemoteControlFill } from 'react-icons/ri'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className='font-poppins flex gap-4 flex-col items-center sm:mx-8 mt-6 mx-4 lg:mx-20 xl:mx-60 2xl:mx-96 '>
      <header className='text-white py-4 text-center'>
        <h1 className='text-xl md:text-3xl font-bold flex gap-2 items-center'>
          Advertise with{' '}
          <p className='text-xl md:text-3xl font-chewy'>RemoteJumbo</p>
          <RiRemoteControlFill />
        </h1>
      </header>

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
