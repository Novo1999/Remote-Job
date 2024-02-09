const Skeleton = () => {
  return (
    <div className='flex flex-col gap-4 w-full relative'>
      <div className='flex gap-4 items-center'>
        {/* avatar */}
        <div className='skeleton bg-white w-16 h-16 rounded-full shrink-0'></div>
        {/* details */}
        <div className='flex flex-col gap-4 w-full'>
          <div className='skeleton h-4 bg-white'></div>
          <div className='skeleton h-4 bg-white'></div>
          <div className='skeleton h-4 bg-white'></div>
        </div>
      </div>
    </div>
  )
}
export default Skeleton
