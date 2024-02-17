import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ReactNode } from 'react'

export function TooltipForButton({
  children,
  buttonDisabled,
}: {
  children: ReactNode
  buttonDisabled: boolean
}) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={10}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        {buttonDisabled ? (
          <TooltipContent>Please Log in first</TooltipContent>
        ) : null}
      </Tooltip>
    </TooltipProvider>
  )
}
