import { SignIn } from '@clerk/nextjs'

const page = () => {
  return (
    <section className='flex justify-center'>
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: 'bg-black hover:bg-slate-800',
          },
        }}
      />
    </section>
  )
}
export default page
