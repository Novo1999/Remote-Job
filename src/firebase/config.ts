// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyATgXN33HLKq56LVn86I6L7iext5pY3YvM',
  authDomain: 'remote-jumbo.firebaseapp.com',
  projectId: 'remote-jumbo',
  storageBucket: 'remote-jumbo.appspot.com',
  messagingSenderId: '1012256874341',
  appId: '1:1012256874341:web:a39925ddfdffeef41f8b8c',
  measurementId: 'G-9NPGZB5CT4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
