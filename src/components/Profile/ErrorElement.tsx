import { ErrorMessage } from '@hookform/error-message'
import { FieldErrors } from 'react-hook-form'

const ErrorElement = ({
  name,
  errors,
}: {
  name: string
  errors: FieldErrors
}) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <p className='text-red-500 text-xs w-full'>{message}</p>
      )}
    />
  )
}
export default ErrorElement
