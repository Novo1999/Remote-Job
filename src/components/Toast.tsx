import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const Toast = () => {
  const notify = () =>
    toast.info('🤩 Tech Co is Hiring Senior Frontend Developer!!!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })

  useEffect(() => {
    notify()
  }, [])

  return (
    <div>
      <ToastContainer />
    </div>
  )
}
export default Toast
