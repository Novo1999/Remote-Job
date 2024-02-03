'use client'
import AuthForm from '@/components/AuthForm/AuthForm'
import FormButton from '@/components/AuthForm/FormButton'
import FormHeader from '@/components/AuthForm/FormHeader'
import FormImage from '@/components/AuthForm/FormImage'
import FormInput from '@/components/AuthForm/FormInput'
import FormLink from '@/components/AuthForm/FormLink'
import { useAuth } from '@/hooks/useAuth'
import Image from 'next/image'
import Link from 'next/link'
import loginImg from '../../assets/loginImg.jpg'
import ForgotPassword from '@/components/AuthForm/ForgotPassword'

const Page = () => {
  const { register, handleSubmit, onSubmitLoginUser } = useAuth()

  return (
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
        <FormHeader text='login with email' />
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
  )
}
export default Page
