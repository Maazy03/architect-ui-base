import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyBF7kLf3lLHSFVfl74Yn-7GkGJEKeeb9ks',
  authDomain: 'first-step-9cdcd.firebaseapp.com',
  projectId: 'first-step-9cdcd',
  storageBucket: 'first-step-9cdcd.appspot.com',
  messagingSenderId: '8966305931',
  appId: '1:8966305931:web:7a37990ef8a4ee766e3c8e',
  measurementId: 'G-W71C079PVS',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase