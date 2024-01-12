import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
const FormRow = ({
  label,
  placeholder,
  field,
}: {
  label: string
  placeholder?: string
  field: Record<string, any>
}) => {
  if (label === 'Job Description *' || label === 'Company Description *') {
    const textForPlaceHolder =
      label === 'Job Description *'
        ? 'Tell us a little bit about your job'
        : 'Tell us a little bit about your company'
    return (
      <FormItem>
        <FormLabel className='text-white'>{label}</FormLabel>
        <FormControl>
          <Textarea
            placeholder={textForPlaceHolder}
            className='resize-y text-black'
            {...field}
          />
        </FormControl>
        <FormMessage className='text-xs' />
      </FormItem>
    )
  }
  if (label === 'Company Logo') {
    return (
      <FormItem>
        <FormLabel className='text-white'>{label}</FormLabel>
        <FormControl>
          <Input className='text-black' id='picture' type='file' {...field} />
        </FormControl>
        <FormMessage className='text-xs' />
      </FormItem>
    )
  }
  return (
    <FormItem className='text-black'>
      <FormLabel className='text-white'>{label}</FormLabel>
      <FormControl>
        <Input placeholder={placeholder} {...field} />
      </FormControl>
      <FormMessage className='text-xs' />
    </FormItem>
  )
}

export default FormRow
