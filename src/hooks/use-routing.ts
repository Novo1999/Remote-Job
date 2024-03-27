import { useRouter } from 'next/navigation'

const useRouting = ({ scroll = false }: { scroll?: boolean } = {}) => {
  const router = useRouter()
  const handleRouting = (href: string) => {
    router.push(href, { scroll })
  }

  return handleRouting
}

export default useRouting
