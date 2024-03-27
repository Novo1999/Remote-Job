'use client'
import { AnimatePresence } from 'framer-motion'
import { Suspense } from 'react'
import Home from '../components/Home'

export default function Page() {
  return (
    <Suspense>
      <AnimatePresence mode='wait' initial={false}>
        <Home />
      </AnimatePresence>
    </Suspense>
  )
}
