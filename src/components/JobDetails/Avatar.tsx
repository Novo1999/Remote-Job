import { Avatar } from '@/components/ui/avatar'
import Image from 'next/image'
import dummyLogo from '../../../public/images/dummylogo.png'

const ProfileImage = ({ companyLogo }: { companyLogo: string }) => {
  return (
    <Avatar>
      <Image
        width={200}
        height={200}
        src={companyLogo ?? dummyLogo}
        alt='logo'
        className='w-12 sm:w-16 rounded-full m-auto shadow-lg lg:w-[90px] xl:w-20'
      />
    </Avatar>
  )
}
export default ProfileImage
