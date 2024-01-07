import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
const SelectComponent = ({
  contents,
  placeholder,
}: {
  contents: string[]
  placeholder: string
}) => {
  return (
    <Select>
      <SelectTrigger className='w-[180px] rounded-full text-black '>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {contents.map((c: string, index: number) => (
          <SelectItem key={index} value={c.toLowerCase()}>
            {c}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
export default SelectComponent
