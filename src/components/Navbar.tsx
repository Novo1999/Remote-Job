import Dropdown from './Dropdown'
const Navbar = () => {
  return (
    <nav className='p-6 flex justify-between'>
      <div className='text-2xl font-bold'>Remote Jumbo</div>
      <div>
        <Dropdown />
      </div>
    </nav>
  )
}
export default Navbar
