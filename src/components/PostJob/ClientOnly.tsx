'use client'
import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ClientOnly({
  children,
}: {
  children: React.ReactElement
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted)
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <Loader2 height={100} width={100} className='animate-spin' />
      </div>
    )

  return children
}
