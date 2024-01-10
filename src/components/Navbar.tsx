import Link from 'next/link'
import Dropdown from './Dropdown'
import TopMenu from './TopMenu'
const Navbar = () => {
  return (
    <nav className='py-2 flex justify-between px-4 items-center'>
      <Link href='/' className='text-2xl font-chewy'>
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
