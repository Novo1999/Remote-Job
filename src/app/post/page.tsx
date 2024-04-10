import PostForm from '@/components/PostJob/PostForm'
import PrivateRoute from '@/components/PrivateRoute'

const page = () => {
  return (
    <PrivateRoute>
      <PostForm />
    </PrivateRoute>
  )
}
export default page
