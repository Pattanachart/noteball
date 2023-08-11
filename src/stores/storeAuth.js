import { defineStore } from "pinia";
import { auth } from "../JS/firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useStoreNotes } from "./storeNote";

export const useStoreAuth = defineStore("storeAuth", {
  state: () => {
    return {
      user:{}
    }
  },
  actions: {
    //init sent to App.vue เพื่อ login เข้ามา
    init() {
      const storeNote = useStoreNotes()
      onAuthStateChanged(auth, (user) => {
        if (user) {
       console.log('user login: ',user);
      this.user.id = user.uid
      this.user.email = user.email
      this.router.push('/')
      storeNote.init() //init หลังจาก login เสร็จ ไปที่ storeNote.js
        } else {
          console.log('user logout: ',user);
          this.user = {}
          this.router.replace('/auth')
          storeNote.ClearNote()
        }
      });
    },
    //register from Auth.vue
    registerUser(credential) {
      // console.log("register action :", credential);
      createUserWithEmailAndPassword(
        auth,
        credential.email,
        credential.password
      )
        .then((userCredential) => {
          const user = userCredential.user;  
          console.log("user:", user);
        })
        .catch((error) => {
         const email = credential.email
          console.log("error.message:", error.message);
          alert(`พบผู้ใช้ ${email}แล้ว โปรดลองอีกครั้ง`)
          credential.email = '', credential.password = ''
        });
    },
    //login from Auth.vue
    loginUser(credential) {
      // console.log("login action", credential);
      signInWithEmailAndPassword(auth, credential.email, credential.password)
        .then((userCredential) => {
          // Signed in Login สำเร็จ 
          const user = userCredential.user;
          // console.log(user);
          // alert('login success storeAuth')
          // credential.email = '', credential.password = ''
        })
        .catch((error) => {
          // Login ไม่สำเร็จ
          console.log(error.message);
          alert('email or password is Wrong  please try again')
          credential.email = '', credential.password = ''
        });
    },
    // logout Button from NavbarOnclickoutside.vue
    LogoutUser() {
      // console.log("login action :", credential);
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log("User signed Out:");
        })
        .catch((error) => {
          // An error happened.
          console.log(error.message);
        });
    },
  },
});
