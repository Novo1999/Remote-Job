import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import useRouting from '@/hooks/use-routing'
import { useAppSelector } from '@/lib/features/hooks'
import { useLogout } from '@/utils/logOut'
import { getAuth } from 'firebase/auth'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Button } from '../ui/button'
import { useState } from 'react'
import FavoriteJobModal from './FavoriteJobModal'

const ProfileDropdownMenu = () => {
  const { isLoading } = useAppSelector((state) => state.user)

  const { currentUser } = getAuth()

  const name = currentUser?.displayName
  const handleRouting = useRouting()

  const logOutUser = useLogout()

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger
          disabled={isLoading}
          className='bg-white text-black rounded-md px-4 hover:bg-slate-200 transition-colors'
        >
          {name}
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
            <DialogTrigger>My Favorite Jobs</DialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <FavoriteJobModal />
    </Dialog>
  )
}
export default ProfileDropdownMenu
