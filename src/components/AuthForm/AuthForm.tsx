import { ReactNode } from 'react'

const AuthForm = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex w-full flex-col lg:flex-row mt-10 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl'>
      {children}
    </div>
  )
}
export default AuthForm
