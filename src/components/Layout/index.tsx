'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  )
}
export default Layout
