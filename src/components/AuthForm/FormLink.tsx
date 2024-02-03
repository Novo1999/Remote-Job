import { ReactNode } from 'react'

const FormLink = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex items-center justify-between mt-4'>
      <span className='w-1/5 border-b dark:border-gray-600 md:w-1/4' />
      {children}
      <span className='w-1/5 border-b dark:border-gray-600 md:w-1/4' />
    </div>
  )
}
export default FormLink
