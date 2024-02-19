'use client'
import { useEffect, useState } from 'react'
import Loading from '../Loading'

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
        <Loading />
      </div>
    )

  return children
}
