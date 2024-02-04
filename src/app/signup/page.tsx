'use client'
import AuthForm from '@/components/AuthForm/AuthForm'
import FormImage from '@/components/AuthForm/FormImage'
import { useAuth } from '@/hooks/useAuth'
import Image from 'next/image'
import Link from 'next/link'
import signUpImg from '../../assets/signupImg.jpg'
import FormHeader from '@/components/AuthForm/FormHeader'
import FormInput from '@/components/AuthForm/FormInput'
import FormButton from '@/components/AuthForm/FormButton'
import FormLink from '@/components/AuthForm/FormLink'
import { FaHandshakeSimple } from 'react-icons/fa6'
import { z } from 'zod'
import { validateEmail } from '@/utils/validateEmail'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

// sign up form schema
const formSchema = z.object({
  displayName: z
    .string()
    .refine((name) => name !== '', {
      message: 'Please provide a name',
    })
    .refine((name) => name.length > 6, {
      message: 'Name must be at least 6 characters',
    }),
  email: z.string().refine((email) => validateEmail(email), {
    message: 'Invalid Email',
  }),
  password: z
    .string()
    .refine((name) => name !== '', { message: 'Please provide password' }),
})

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })
  console.log(errors)
  const { onSubmitRegisterUser } = useAuth(formSchema)
  return (
    <AuthForm>
      <FormImage>
        <Image
          src={signUpImg}
          alt='nomad'
          className='object-cover w-full h-full'
        />
      </FormImage>
      <form
        onSubmit={handleSubmit(onSubmitRegisterUser)}
        className='w-full px-6 py-8 md:px-8 lg:w-1/2'
      >
        <FormHeader icon={<FaHandshakeSimple />} text='Create an account' />
        <FormInput
          label='Name'
          register={register}
          registerName='displayName'
        />
        <FormInput
          label='Email Address'
          register={register}
          registerName='email'
        />
        <FormInput
          label='Password'
          register={register}
          registerName='password'
        />
        <FormButton>Sign Up</FormButton>
        <FormLink>
          <Link
            href='/login'
            className='text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline'
          >
            or log in
          </Link>
        </FormLink>
      </form>
    </AuthForm>
  )
}
export default Page
