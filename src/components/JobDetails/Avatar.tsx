import { Avatar } from '@/components/ui/avatar'
import dummyLogo from '../../../public/images/dummylogo.png'
import Image from 'next/image'

const ProfileImage = () => {
  return (
    <Avatar>
      <Image
        src={dummyLogo}
        alt='logo'
        className='w-12 sm:w-16 rounded-full m-auto shadow-lg lg:w-[90px] xl:w-20'
      />
    </Avatar>
  )
}
export default ProfileImage
