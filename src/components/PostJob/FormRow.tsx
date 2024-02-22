import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dispatch, FormEvent, SetStateAction } from 'react'

const FormRow = ({
  label,
  placeholder,
  field,
  setImage,
}: {
  label: string
  placeholder?: string
  field: Record<string, any>
  setImage?: Dispatch<SetStateAction<ArrayBuffer | string | null>>
}) => {
  // image handler
  const handleImage = (e: FormEvent<HTMLInputElement>) => {
    const file = (e.target as HTMLInputElement).files![0]
    setFile(file)
  }
  // reading the file from input
  const setFile = (file: Blob) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setImage?.(reader.result)
    }
  }

  // For description
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
  // For logo upload
  if (label === 'Company Logo') {
    return (
      <FormItem className='text-black'>
        <FormLabel className='text-white'>{label}</FormLabel>
        <FormControl>
          <Input
            accept='image/png, image/gif, image/jpeg'
            onChange={handleImage}
            className='text-white bg-black cursor-pointer'
            id='companyImage'
            type='file'
            {...field}
          />
        </FormControl>
        <FormMessage className='text-xs' />
      </FormItem>
    )
  }

  // otherwise...
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
