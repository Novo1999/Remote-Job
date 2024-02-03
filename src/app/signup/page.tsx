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

const Page = () => {
  const { register, handleSubmit, onSubmitRegisterUser } = useAuth()
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
