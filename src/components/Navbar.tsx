import Dropdown from './Dropdown'
import HeroLottie from './HeroLottie'
import ScrollProgress from './ScrollProgress'
import TopMenu from './TopMenu'
const Navbar = () => {
  return (
    <>
      <nav className='mt-4 flex justify-between items-center bg-zinc-800 sticky z-50 top-0 py-3 px-4 navbar'>
        <HeroLottie />
        <div className='block sm:hidden'>
          <Dropdown />
        </div>
        <div className='hidden sm:block'>
          <TopMenu />
        </div>
      </nav>
      <ScrollProgress />
    </>
  )
}
export default Navbar
