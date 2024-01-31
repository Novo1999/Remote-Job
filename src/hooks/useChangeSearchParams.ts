'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

export const useChangeSearchParams = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', value)
    router.push(pathname + '?' + params.toString(), { scroll: false })
  }

  return { handleSort }
}
