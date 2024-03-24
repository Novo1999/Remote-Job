'use client'

import { Player } from '@lottiefiles/react-lottie-player'
import Link from 'next/link'

const HeroLottie = () => {
  return (
    <Link href='/' className='text-2xl flex font-chewy items-center'>
      <Player
        className='h-12 w-12 top-0 right-0'
        autoplay
        loop
        src='https://lottie.host/2d6ee42c-040e-404a-aa53-25ea53fc95d6/BqgS1kD7XT.json'
      />
      RemoteJumbo
    </Link>
  )
}
export default HeroLottie
