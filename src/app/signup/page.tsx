'use client'
import AlreadyLoggedIn from '@/components/AuthForm/AlreadyLoggedIn'
import AuthForm from '@/components/AuthForm/AuthForm'
import FormButton from '@/components/AuthForm/FormButton'
import FormError from '@/components/AuthForm/FormError'
import FormHeader from '@/components/AuthForm/FormHeader'
import FormImage from '@/components/AuthForm/FormImage'
import FormInput from '@/components/AuthForm/FormInput'
import FormLink from '@/components/AuthForm/FormLink'
import Loading from '@/components/Loading'
import PrivateRoute from '@/components/PrivateRoute'
import { auth } from '@/firebase/config'
import { useAuth } from '@/hooks/use-auth'
import { validateEmail } from '@/utils/validateEmail'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { FaHandshakeSimple } from 'react-icons/fa6'
import { z } from 'zod'
import signUpImg from '../../assets/signupImg.jpg'

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
    message: 'Invalid email',
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
  const { onSubmitRegisterUser, loading, updating } = useAuth(formSchema)

  const [user, authLoading, error] = useAuthState(auth)

  let content = null

  if (authLoading && !error) {
    content = <Loading /> // loading
  } else if (!authLoading && !error && user?.email) {
    content = <AlreadyLoggedIn /> // already logged in
  } else {
    content = // if not logged in
      (
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
            <FormError>
              {errors.hasOwnProperty('displayName') &&
                errors?.displayName?.message}
            </FormError>
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

            <FormButton disabled={Boolean(loading) || Boolean(updating)}>
              {loading || updating ? (
                <Loader2 className='animate-spin m-auto' />
              ) : (
                'Sign up'
              )}
            </FormButton>

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

  return <PrivateRoute>{content}</PrivateRoute>
}
export default Page
