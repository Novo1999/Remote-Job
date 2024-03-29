import { usePathname } from 'next/navigation'
import { UseFormRegister } from 'react-hook-form'
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
      <input
        {...register(registerName, { required: true })}
        className={inputClass}
        type={registerName === 'password' ? 'password' : 'text'}
      />
    </div>
  )
}
export default FormInput
