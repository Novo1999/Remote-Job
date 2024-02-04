import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/hooks/useAuth'
import { useAppSelector } from '@/lib/features/hooks'

const ProfileDropdownMenu = () => {
  const { user } = useAppSelector((state) => state.user)
  const { logoutUser } = useAuth()
  const displayName = user && user.email && user.displayName

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='bg-white text-black rounded-md px-4 hover:bg-slate-200 transition-colors'>
        {displayName}
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-48 relative right-7'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='cursor-pointer hover:bg-slate-400'>
          Update Profile
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={logoutUser}
          className='cursor-pointer hover:bg-slate-400'
        >
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default ProfileDropdownMenu
