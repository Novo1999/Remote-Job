import { useAppDispatch } from '@/lib/features/hooks'
import { setCurrentUser } from '@/lib/features/user/userSlice'
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import { ZodEffects, ZodObject, ZodString, z } from 'zod'
1
export type FormSchemaType = ZodObject<{
  displayName?: ZodEffects<ZodEffects<ZodString, string, string>>
  email: ZodEffects<ZodString, string, string>
  password: ZodEffects<ZodString, string, string>
}>

export const useAuth = (formSchema: FormSchemaType) => {
  const dispatch = useAppDispatch()
  const auth = getAuth()

  // REGISTER SUBMIT
  const onSubmitRegisterUser: SubmitHandler<z.infer<typeof formSchema>> = (
    data
  ) => {
    registerUser(data.email, data.password, data.displayName as string)
  }
  // LOGIN SUBMIT
  const onSubmitLoginUser: SubmitHandler<z.infer<typeof formSchema>> = (
    data
  ) => {
    loginUser(data.email, data.password)
  }

  // REGISTER FN
  const registerUser = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)

      await updateProfile(user.user, {
        displayName: displayName,
      }).then(() => {
        dispatch(
          setCurrentUser({ ...user, name: auth.currentUser?.displayName })
        )
      })
      toast.success(`Welcome, ${user.user.displayName}`, {
        position: 'bottom-right',
      })
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message.split(': ')[1]) // omitting the 'firebase: ' text
      }
    }
  }

  // RESET FN
  const handleReset = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message.split(': ')[1])
      }
    }
  }

  // LOGIN FN
  const loginUser = async (email: string, password: string) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      toast.success(`Welcome, ${user.user.displayName}`, {
        position: 'bottom-right',
      })
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message.split(': ')[1])
      }
    }
  }

  // FORGOT PASSWORD
  const forgotPassword = async (email: string) => {
    await handleReset(email)
  }

  return {
    onSubmitRegisterUser,
    onSubmitLoginUser,
    forgotPassword,
  }
}
