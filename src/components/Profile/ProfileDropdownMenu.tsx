import { auth } from '@/firebase/config'
import { useMenuAnimation } from '@/hooks/use-menu-animation'
import useRouting from '@/hooks/use-routing'
import { useAppDispatch, useAppSelector } from '@/lib/features/hooks'
import { openModal } from '@/lib/features/modal/modalSlice'
import { useLogout } from '@/utils/logOut'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { RxAvatar } from 'react-icons/rx'
import { Dialog } from '../ui/dialog'
import FavoriteJobModal from './FavoriteJobModal'

const MenuListItem = ({
  children,
  onClick,
}: {
  children: string
  onClick: () => void
}) => {
  return (
    <li
      onClick={onClick}
      className='text-black flex flex-start p-3 pl-4 transform origin-left translate-x-20 cursor-pointer hover:bg-slate-400 duration-300'
    >
      {children}
    </li>
  )
}

const ProfileDropdownMenu = () => {
  const [user, loading, error] = useAuthState(auth)
  const { url } = useAppSelector((state) => state.user)
  const { modalOpen } = useAppSelector((state) => state.modal)
  const dispatch = useAppDispatch()
  const { userName } = useAppSelector((state) => state.user)
  const handleRouting = useRouting({ scroll: true })

  const logOutUser = useLogout()
  const scope = useMenuAnimation(modalOpen)
  const menuRef = useRef<HTMLUListElement>(null)
  const [favoriteModalOpen, setFavoriteModalOpen] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        dispatch(openModal(false))
      }
    }

    //  check if the device is mobile
    const isMobileDevice = () => {
      return window.matchMedia('(max-width: 640px)').matches
    }

    if (!isMobileDevice()) {
      // Add event listener only if it's not a mobile device
      if (modalOpen) {
        document.addEventListener('click', handleOutsideClick)
      }

      return () => {
        document.removeEventListener('click', handleOutsideClick)
      }
    }
  }, [modalOpen, dispatch])

  return (
    <Dialog
      open={modalOpen}
      onOpenChange={() => {
        setFavoriteModalOpen(!favoriteModalOpen)
      }}
    >
      <nav
        className='w-fit relative p-2 bg-white text-black rounded-md'
        ref={scope}
      >
        <motion.button
          disabled={loading || !user}
          whileTap={{ scale: 0.97 }}
          onClick={() => dispatch(openModal(!modalOpen))}
          className='flex items-center gap-3 justify-center relative top-0.5'
        >
          <span className='relative top-[2px]'>
            {url ? (
              <div className='avatar'>
                <div className='w-5 mr-2 rounded-full border border-black'>
                  <Image width={200} height={200} src={url} alt='avatar' />
                </div>
              </div>
            ) : (
              <RxAvatar className='text-xl' />
            )}
          </span>
          <p>{userName}</p>
          <div className='arrow' style={{ transformOrigin: '50% 55%' }}>
            <svg width='15' height='15' viewBox='0 0 20 20'>
              <path d='M0 7 L 20 7 L 10 16' />
            </svg>
          </div>
        </motion.button>
        <ul
          ref={menuRef}
          className={`shadow flex-col gap-2 top-14 md:absolute ${
            modalOpen ? 'md:flex' : 'md:block hidden'
          } bg-white right-8 w-[300px]`}
          style={{
            pointerEvents: modalOpen ? 'auto' : 'none',
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
          }}
        >
          <MenuListItem
            onClick={() => {
              handleRouting('/profile')
              dispatch(openModal(false))
            }}
          >
            Profile
          </MenuListItem>
          <MenuListItem onClick={logOutUser}>Logout</MenuListItem>
          <MenuListItem
            onClick={() => {
              setFavoriteModalOpen(true)
              dispatch(openModal(true))
            }}
          >
            My Favorite Jobs
          </MenuListItem>
        </ul>
      </nav>
      {favoriteModalOpen && <FavoriteJobModal />}
    </Dialog>
  )
}
export default ProfileDropdownMenu
