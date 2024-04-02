import { EyeIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { FaRegEyeSlash } from 'react-icons/fa'
import { FaRegEye } from 'react-icons/fa6'
import { MdPassword } from 'react-icons/md'
import ForgotPassword from './ForgotPassword'

type RegisterName = 'email' | 'password' | 'displayName'

const inputClass =
  'block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'

const FormInput = ({
  label,
  register,
  registerName,
}: {
  label: string
  register: UseFormRegister<any>
  registerName: RegisterName
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const pathname = usePathname()
  return (
    <div className='mt-4'>
      <div className='flex justify-between'>
        <label
          className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'
          htmlFor='LoggingEmailAddress'
        >
          {label}
        </label>
        {/* shows only when on log in page and beside label password */}
        {pathname !== '/signup' && registerName === 'password' && (
          <ForgotPassword />
        )}
      </div>
      <div className='relative'>
        <input
          {...register(registerName, { required: true })}
          className={inputClass}
          type={
            registerName === 'password' && !showPassword ? 'password' : 'text'
          }
        />
        {label === 'Password' && (
          <button
            onClick={() => {
              setShowPassword(!showPassword)
            }}
            type='button'
            className='absolute text-black right-2 bottom-3'
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        )}
      </div>
    </div>
  )
}
export default FormInput
