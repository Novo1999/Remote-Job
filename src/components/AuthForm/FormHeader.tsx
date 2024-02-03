import { RiLoginCircleFill } from 'react-icons/ri'

const FormHeader = ({ text }: { text: string }) => {
  return (
    <>
      <div className='flex justify-center mx-auto text-black text-4xl'>
        <RiLoginCircleFill />
      </div>
      <p className='mt-3 text-xl text-center text-gray-600 dark:text-gray-200'>
        Welcome back!
      </p>

      <div className='flex items-center justify-between mt-4'>
        <span className='w-1/5 border-b dark:border-gray-600 lg:w-1/4' />
        <p className='text-xs text-center text-gray-500 uppercase dark:text-gray-400'>
          {text}
        </p>
        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4' />
      </div>
    </>
  )
}
export default FormHeader
