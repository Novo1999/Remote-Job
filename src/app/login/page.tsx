import { RedirectToSignIn } from '@clerk/nextjs'
const page = () => {
  return (
    <div>
      <RedirectToSignIn afterSignInUrl='/' />
    </div>
  )
}
export default page
