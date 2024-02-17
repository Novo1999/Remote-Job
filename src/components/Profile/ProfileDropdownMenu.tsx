import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import useRouting from '@/hooks/use-routing'
import { useLogout } from '@/utils/logOut'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { RxAvatar } from 'react-icons/rx'
import { Dialog, DialogTrigger } from '../ui/dialog'
import FavoriteJobModal from './FavoriteJobModal'
import { auth } from '@/firebase/config'

const ProfileDropdownMenu = () => {
  const [user, loading, error] = useAuthState(auth)
  const [open, setOpen] = useState(false)

  const name = user?.displayName
  const handleRouting = useRouting()

  const logOutUser = useLogout()

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DropdownMenu>
        <DropdownMenuTrigger
          disabled={loading}
          className='bg-white text-black items-center rounded-md px-4 flex gap-1 hover:bg-slate-200 py-2 transition-colors'
        >
          <span>
            <RxAvatar className='text-xl' />
          </span>
          <p>{name}</p>
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
              onClick={() => setOpen(true)}
            >
              My Favorite Jobs
            </DialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <FavoriteJobModal setOpen={setOpen} />
    </Dialog>
  )
}
export default ProfileDropdownMenu
