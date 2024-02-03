import { ReactNode } from 'react'

const FormImage = ({ children }: { children: ReactNode }) => {
  return <div className=' bg-cover lg:block lg:w-1/2 '>{children}</div>
}
export default FormImage
