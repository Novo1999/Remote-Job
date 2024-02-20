import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { auth } from '@/firebase/config'
import useRouting from '@/hooks/use-routing'
import { useAppDispatch, useAppSelector } from '@/lib/features/hooks'
import { openModal } from '@/lib/features/modal/modalSlice'
import { setUserName } from '@/lib/features/useName/userSlice'
import { useLogout } from '@/utils/logOut'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { RxAvatar } from 'react-icons/rx'
import { Dialog, DialogTrigger } from '../ui/dialog'
import FavoriteJobModal from './FavoriteJobModal'

const ProfileDropdownMenu = () => {
  const [user, loading, error] = useAuthState(auth)
  const { modalOpen } = useAppSelector((state) => state.modal)
  const dispatch = useAppDispatch()
  const { userName } = useAppSelector((state) => state.user)
  const handleRouting = useRouting()

  useEffect(() => {
    if (user?.displayName) {
      dispatch(setUserName(user.displayName))
    }
  }, [user, dispatch])

  const logOutUser = useLogout()

  return (
    <Dialog
      open={modalOpen}
      onOpenChange={() => dispatch(openModal(!modalOpen))}
    >
      <DropdownMenu>
        <DropdownMenuTrigger
          disabled={loading || !user}
          className='bg-white text-black items-center rounded-md px-4 flex gap-1 hover:bg-slate-200 py-2 transition-colors'
        >
          <span>
            <RxAvatar className='text-xl' />
          </span>
          <p>{userName}</p>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-48 relative right-7'>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => handleRouting('/profile')}
            className='cursor-pointer hover:bg-slate-400'
          >
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={logOutUser}
            className='cursor-pointer hover:bg-slate-400'
          >
            Log Out
          </DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer hover:bg-slate-400'>
            <DialogTrigger
              className='w-full text-start'
              onClick={() => dispatch(openModal(true))}
            >
              My Favorite Jobs
            </DialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <FavoriteJobModal />
    </Dialog>
  )
}
export default ProfileDropdownMenu
