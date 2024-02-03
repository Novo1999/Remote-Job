import { auth } from '@/firebase/config'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { SubmitHandler, useForm } from 'react-hook-form'

export interface IFormInput {
  email: string
  password: string
}
export const useAuth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()
  const onSubmitRegisterUser: SubmitHandler<IFormInput> = (data) => {
    registerUser(data.email, data.password)
  }
  const onSubmitLoginUser: SubmitHandler<IFormInput> = (data) => {
    loginUser(data.email, data.password)
  }

  onAuthStateChanged(auth, (currentUser) => {
    console.log(currentUser)
  })

  console.log(auth.currentUser?.email)

  const registerUser = async (email: string, password: string) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      console.log(user)
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
    }
  }

  const handleReset = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email)
    } catch (error) {
      if (error instanceof Error)
        console.error('Error sending reset email:', error.message)
    }
  }

  const loginUser = async (email: string, password: string) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      console.log(user)
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
    }
  }

  const logoutUser = async () => {
    await signOut(auth)
  }

  const forgotPassword = async (email: string) => {
    await handleReset(email)
  }

  return {
    register,
    handleSubmit,
    errors,
    logoutUser,
    onSubmitRegisterUser,
    onSubmitLoginUser,
    forgotPassword,
  }
}
