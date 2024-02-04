import { ReactNode } from 'react'

const FormError = ({ children }: { children: ReactNode }) => {
  return <p className='text-red-500 text-xs absolute'>{children}</p>
}
export default FormError
