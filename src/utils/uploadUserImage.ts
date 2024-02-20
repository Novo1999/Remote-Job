import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

const storage = getStorage()

const uploadImage = (imgString: string, file: File) => {
  const imageRef = ref(storage, `profile/${imgString}`)
  const photoUrl = uploadBytes(imageRef, file)
    .then((snapshot) => {
      return getDownloadURL(snapshot.ref)
    })
    .then((downloadUrl) => {
      return downloadUrl
    })
  return photoUrl
}

export default uploadImage
