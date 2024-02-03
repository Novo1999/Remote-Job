const FormButton = ({ children }: { children: string }) => {
  return (
    <div className='mt-6'>
      <button className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'>
        {children}
      </button>
    </div>
  )
}
export default FormButton
