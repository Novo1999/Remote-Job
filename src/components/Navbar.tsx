import Dropdown from './Dropdown'
import TopMenu from './TopMenu'
const Navbar = () => {
  return (
    <nav className='p-6 flex justify-between'>
      <div className='text-2xl font-bold font-montserrat2'>Remote Jumbo</div>
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
