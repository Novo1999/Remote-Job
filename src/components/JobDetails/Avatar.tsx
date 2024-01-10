import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { StaticImageData } from 'next/image'

const ProfileImage = () => {
  return (
    <Avatar>
      <AvatarImage src='https://github.com/shadcn.png' />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
export default ProfileImage
