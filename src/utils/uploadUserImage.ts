import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

const storage = getStorage()

const uploadImage = async (imgString: string, file: File) => {
  const imageRef = ref(storage, `profile/${imgString}`)
  const photoUrl = await uploadBytes(imageRef, file)
    .then((snapshot) => {
      return getDownloadURL(snapshot.ref)
    })
    .then((downloadUrl) => {
      return downloadUrl
    })
  return photoUrl
}

export default uploadImage
