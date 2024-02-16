import ClientOnly from '@/components/PostJob/ClientOnly'
import PostForm from '@/components/PostJob/PostForm'
import PrivateRoute from '@/components/PrivateRoute'

const page = () => {
  return (
    <ClientOnly>
      <PrivateRoute>
        <PostForm />
      </PrivateRoute>
    </ClientOnly>
  )
}
export default page
