'use client'
import AuthForm from '@/components/AuthForm/AuthForm'
import FormButton from '@/components/AuthForm/FormButton'
import FormHeader from '@/components/AuthForm/FormHeader'
import FormImage from '@/components/AuthForm/FormImage'
import FormInput from '@/components/AuthForm/FormInput'
import FormLink from '@/components/AuthForm/FormLink'
import { useAuth } from '@/hooks/use-auth'
import Image from 'next/image'
import Link from 'next/link'
import { RiLoginCircleFill } from 'react-icons/ri'
import loginImg from '../../assets/loginImg.jpg'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { validateEmail } from '@/utils/validateEmail'
import FormError from '@/components/AuthForm/FormError'
import PrivateRoute from '@/components/PrivateRoute'

// login form schema
const formSchema = z.object({
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
  const { onSubmitLoginUser } = useAuth(formSchema)

  return (
    <PrivateRoute>
      <AuthForm>
        <FormImage>
          <Image
            src={loginImg}
            alt='nomad'
            className='object-cover w-full h-full'
          />
        </FormImage>
        <form
          onSubmit={handleSubmit(onSubmitLoginUser)}
          className='w-full px-6 py-8 md:px-8 lg:w-1/2'
        >
          <FormHeader icon={<RiLoginCircleFill />} text='login with email' />
          <FormInput
            label='Email Address'
            register={register}
            registerName='email'
          />
          <FormError>
            {errors.hasOwnProperty('email') && errors?.email?.message}
          </FormError>
          <FormInput
            label='Password'
            register={register}
            registerName='password'
          />
          <FormError>
            {errors.hasOwnProperty('password') && errors?.password?.message}
          </FormError>
          <FormButton>Log In</FormButton>
          <FormLink>
            <Link
              href='/signup'
              className='text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline'
            >
              or sign up
            </Link>
          </FormLink>
        </form>
      </AuthForm>
    </PrivateRoute>
  )
}
export default Page
