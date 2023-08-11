
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: 'AIzaSyCWsYtgd3iR53FGhkCVsZyMi_Nc5-doizw',
  authDomain: 'noteballs-c7550.firebaseapp.com',
  projectId: 'noteballs-c7550',
  storageBucket: 'noteballs-c7550.appspot.com',
  messagingSenderId: '161163505029',
  appId: '1:161163505029:web:19161f798cca3419e728ec'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app);
export {
    db,
    auth
}