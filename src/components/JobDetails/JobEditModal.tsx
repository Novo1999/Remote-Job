import PostForm from '../PostJob/PostForm'
import { Dialog, DialogContent } from '../ui/dialog'
import { ModalPropType } from './JobDeleteModal'

const JobEditModal = ({ modalOpen, setModalOpen }: ModalPropType) => {
  return (
    <Dialog open={modalOpen} onOpenChange={() => setModalOpen(!modalOpen)}>
      <DialogContent className='text-white bg-transparent font-montserrat'>
        <PostForm />
      </DialogContent>
    </Dialog>
  )
}

export default JobEditModal
