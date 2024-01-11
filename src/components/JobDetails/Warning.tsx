import { IoMdWarning } from 'react-icons/io'
const Warning = () => {
  return (
    <div role='alert' className='alert alert-error w-fit self-end text-xs'>
      <span className='text-lg'>
        <IoMdWarning />
      </span>
      <span>Authentic jobs won&apos;t demand payments or purchases.</span>
    </div>
  )
}
export default Warning
