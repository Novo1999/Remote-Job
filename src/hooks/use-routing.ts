import { useRouter } from 'next/navigation'

const useRouting = () => {
  const router = useRouter()
  const handleRouting = (href: string) => {
    router.push(href, { scroll: false })
  }

  return handleRouting
}

export default useRouting
