import Dropdown from './Dropdown'
import TopMenu from './TopMenu'
const Navbar = () => {
  return (
    <nav className='py-2 flex justify-between px-4 items-center'>
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

// TODO: Add advertise on top 5 second close button
