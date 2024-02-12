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

const ProfileDropdownMenu = () => {
  const { user, isLoading } = useAppSelector((state) => state.user)

  const displayName = user && user.email && user.displayName
  const handleRouting = useRouting()

  const logOutUser = useLogout()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        disabled={isLoading}
        className='bg-white text-black rounded-md px-4 hover:bg-slate-200 transition-colors'
      >
        {displayName}
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
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default ProfileDropdownMenu
