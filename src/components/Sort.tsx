'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useChangeSearchParams } from '@/hooks/use-change-search-params'
import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import { MdSort } from 'react-icons/md'

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}

const ListItem = ({ children }: { children: ReactNode }) => {
  return (
    <motion.li className='list-none' variants={itemVariants}>
      {children}
    </motion.li>
  )
}

const listVariants = {
  open: {
    clipPath: 'inset(0% 0% 0% 0% round 10px)',
    delay: 2,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: 'inset(10% 50% 90% 50% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3,
    },
  },
}

const Sort = () => {
  const { handleSort, sortParam } = useChangeSearchParams()
  const [open, setOpen] = useState(false)

  return (
    <motion.div initial={false} animate={open ? 'open' : 'closed'}>
      <Select
        open={open}
        onOpenChange={() => setOpen((open) => !open)}
        value={(sortParam as string) || 'default'}
        onValueChange={handleSort}
      >
        <SelectTrigger className='special-btn hover:bg-slate-200 transition-colors text-xs rounded-full text-black border-0'>
          <MdSort />
          <SelectValue placeholder='Sort By' />
        </SelectTrigger>
        <motion.ul variants={listVariants}>
          <SelectContent>
            <ListItem>
              <SelectItem value='default'>Sort By</SelectItem>
            </ListItem>
            <ListItem>
              <SelectItem value='salary(low-high)'>Salary(Low-High)</SelectItem>
            </ListItem>
            <ListItem>
              <SelectItem value='salary(high-low)'>Salary(High-Low)</SelectItem>
            </ListItem>
            <ListItem>
              <SelectItem value='most-applied'>Most Applied</SelectItem>
            </ListItem>
            <ListItem>
              <SelectItem value='most-viewed'>Most Viewed</SelectItem>
            </ListItem>
            <ListItem>
              <SelectItem value='new-jobs'>New Jobs</SelectItem>
            </ListItem>
            <ListItem>
              <SelectItem value='featured-jobs'>Featured Jobs</SelectItem>
            </ListItem>
            <ListItem>
              <SelectItem value='ads'>Advertisements</SelectItem>
            </ListItem>
          </SelectContent>
        </motion.ul>
      </Select>
    </motion.div>
  )
}
export default Sort
