// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDpaGu_PCwZsUJI6qwTLJHEAnHr3cYQraQ',
  authDomain: 'muso-ninjas-b4f1c.firebaseapp.com',
  projectId: 'muso-ninjas-b4f1c',
  storageBucket: 'muso-ninjas-b4f1c.appspot.com',
  messagingSenderId: '387719254432',
  appId: '1:387719254432:web:280b5fb67f4abcc95554c5',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export { projectFirestore, projectAuth, projectStorage, timestamp }
