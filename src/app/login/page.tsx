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
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { RiLoginCircleFill } from 'react-icons/ri'
import { z } from 'zod'
import loginImg from '../../assets/loginImg.jpg'

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
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const { onSubmitLoginUser, loginLoading, loginError } = useAuth(formSchema)

  useEffect(() => {
    if (loginError?.message) {
      setError('root.serverError', {
        type: 'random',
        message: loginError.message.split(':')[1],
      })
    }
  }, [loginError, setError])

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
              src={loginImg}
              width={600}
              height={600}
              alt='nomad'
              className='object-cover w-full h-full'
            />
          </FormImage>
          <form
            onSubmit={handleSubmit(onSubmitLoginUser)}
            className='w-full px-6 py-8 md:px-8 lg:w-1/2'
          >
            <FormHeader icon={<RiLoginCircleFill />} text='login with email' />
            <p className='text-blue-500 italic'>
              Admin Email & password: admin11@gmail.com
            </p>

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

            <FormButton disabled={Boolean(loginLoading)}>
              {loginLoading ? (
                <Loader2 className='animate-spin m-auto' />
              ) : (
                'Log in'
              )}
            </FormButton>
            <FormLink>
              <Link
                href='/signup'
                className='text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline'
              >
                or sign up
              </Link>
            </FormLink>
            <p className='text-red-500'>
              {errors?.root?.serverError?.type === 'random' &&
                errors?.root?.serverError?.message}
            </p>
          </form>
        </AuthForm>
      )
  }

  return <PrivateRoute>{content}</PrivateRoute>
}
export default Page
