import useRouting from '@/hooks/use-routing'
import { useDeleteJobMutation } from '@/lib/features/jobsApi/jobsApi'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { toast } from 'react-toastify'
import { CardBody, CardContainer, CardItem } from '../ui/3d-card'
import { Dialog, DialogContent } from '../ui/dialog'

export type ModalPropType = {
  modalOpen: boolean
  setModalOpen: Dispatch<SetStateAction<boolean>>
  id: string
}

const JobDeleteModal = ({ modalOpen, setModalOpen, id }: ModalPropType) => {
  const [deleteJob, { isLoading }] = useDeleteJobMutation()
  const handleRouting = useRouting()

  const handleDelete = () => {
    deleteJob(id)
      .then(
        () => {
          toast.success('Deleted Job Successfully')
          handleRouting('/')
        },
        () => {
          toast.error('Could not delete the job')
        }
      )
      .finally(() => {
        setModalOpen(false)
      })
  }

  return (
    <Dialog open={modalOpen} onOpenChange={() => setModalOpen(!modalOpen)}>
      <DialogContent className='w-fit text-white bg-transparent invisible font-montserrat'>
        <CardContainer className='inter-var visible'>
          <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
            <div className='flex items-center justify-between'>
              <CardItem
                translateZ='50'
                className='text-xs sm:text-lg font-bold text-neutral-600 dark:text-white'
              >
                Are you sure you want to delete the job?
              </CardItem>
              <motion.button whileHover={{ rotate: 90 }}>
                <RxCross1
                  onClick={() => setModalOpen(false)}
                  className='text-black cursor-pointer'
                />
              </motion.button>
            </div>
            <div className='flex gap-4 mt-10 items-center'>
              <motion.div onClick={handleDelete} whileHover={{ scale: 1.1 }}>
                <CardItem
                  translateZ={20}
                  as='button'
                  className='px-4 py-2 rounded-xl bg-red-500 dark:bg-white hover:bg-red-600 hover:shadow-md dark:text-black text-white text-xs font-bold'
                >
                  {isLoading ? <Loader2 className='animate-spin' /> : 'Delete'}
                </CardItem>
              </motion.div>
              <motion.div
                onClick={() => setModalOpen(false)}
                whileHover={{ scale: 1.1 }}
              >
                <CardItem
                  translateZ={20}
                  as='button'
                  className='px-4 py-2 rounded-xl text-xs font-normal bg-gray-500 hover:bg-gray-600 hover:shadow-md'
                >
                  Cancel
                </CardItem>
              </motion.div>
            </div>
          </CardBody>
        </CardContainer>
      </DialogContent>
    </Dialog>
  )
}

export default JobDeleteModal
