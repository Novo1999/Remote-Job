import Dropdown from './Dropdown'
import TopMenu from './TopMenu'
const Navbar = () => {
  return (
    <nav className='p-6 flex justify-between items-center'>
      <p className='text-2xl font-chewy'>RemoteJumbo</p>
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
