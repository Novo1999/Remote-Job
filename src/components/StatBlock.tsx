const StatBlock = ({
  statName,
  stat,
  className,
}: {
  className?: string
  statName: string
  stat: number | string
}) => {
  return (
    <div
      className={`flex flex-col items-center ${className} bg-slate-700 rounded-md w-full pb-8`}
    >
      <h3 className='my-3 text-sm font-semibold'>{statName}</h3>
      <p>{stat}</p>
    </div>
  )
}
export default StatBlock
