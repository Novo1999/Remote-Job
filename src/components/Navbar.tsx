import Link from 'next/link'
import Dropdown from './Dropdown'
import TopMenu from './TopMenu'
import useInitAuth from '@/hooks/use-init-auth'
import { Player } from '@lottiefiles/react-lottie-player'
const Navbar = () => {
  return (
    <nav className='mt-4 flex justify-between px-4 items-center'>
      <Link href='/' className='text-2xl flex font-chewy items-center'>
        <Player
          className='h-12 w-12 top-0 right-0'
          autoplay
          loop
          src='https://lottie.host/2d6ee42c-040e-404a-aa53-25ea53fc95d6/BqgS1kD7XT.json'
        />
        RemoteJumbo
      </Link>
      <div className='block sm:hidden'>
        <Dropdown />
      </div>
      <div className='hidden sm:block'>
        <TopMenu />
      </div>
    </nav>
  )
}
export default Navbar
