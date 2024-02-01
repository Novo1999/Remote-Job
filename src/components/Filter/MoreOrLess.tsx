const MoreOrLessButton = ({
  category,
  handler,
  text,
}: {
  category: string
  handler: () => void
  text: string
}) => {
  return (
    <button
      onClick={handler}
      className={`text-start btn btn-xs flex !rounded-none ml-2 w-fit h-fit ${
        category === 'types' && 'hidden'
      } self-center my-2`}
    >
      {text}
    </button>
  )
}

export default MoreOrLessButton
