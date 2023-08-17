import { defineStore } from "pinia";
import { db } from "../JS/firebase";
import { useStoreAuth } from "./storeAuth";
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  limit,
  addDoc,
} from "firebase/firestore";

let notesCollectionref;
let notesCollectionQuery;
let getNodeSnapshot = null; // Unsubscribe from the Get Notes Listener
// const notesCollectionQuery = query(notesCollectionref, orderBy("id", "desc"),limit(2));
export const useStoreNotes = defineStore("storeNote", {
  state: () => {
    return {
      notes: [
        // {
        //   id: "id1",
        //   content:
        //     "STORE! dolor sit amet consectetur adipisicing elit. Accusamus perferendis alias deleniti ratione soluta ipsaperspiciatis fugit ab sed quod, aliquid temporibus, nihil repellat dolorem necessitat",
        // },
        // {
        //   id: "id2",
        //   content: " STROE! This is a short note! woo!",
        // },
      ],
      //แถบแสดงการโหลด
      nodeLoading: false,
      // nodeLoading : true
    };
  },
  actions: {
    init() {
      const storeAuth = useStoreAuth();
      // console.log("login with ID: ", storeAuth.user.id);
      notesCollectionref = collection(db, "users", storeAuth.user.id, "notes");
     
      notesCollectionQuery = query(notesCollectionref, orderBy("date", "desc"));
      this.getNode();
    },
    async getNode() {
      this.nodeLoading = false;
      // let getNodeSnapshot = null = Unsubscribe from the Get Notes Listener
      if (getNodeSnapshot) getNodeSnapshot(); //Unsub from any active Listener
      (getNodeSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
        const notes = [];
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date,
          };
          notes.push(note);
        });
        this.notes = notes;
        this.nodeLoading = true;
      },
      error => {
        console.log('error',error.message);
      }
      ))
    },
    ClearNote() {
      this.notes = [];
      if (getNodeSnapshot) getNodeSnapshot();
    },
    async AddNote(newNote) {
      // console.log("AddNote newNote", newNote);
      let ctime = new Date().getTime(),
        date = ctime.toString();
      // let note = {
      //   id,
      //   content: newNote,
      // };
      // เพิ่มโน๊ตใหม่ลลงไป
      // this.notes.unshift(note);

      // add to db
      // await setDoc(doc(notesCollectionref, id), {
      //   content: newNote,
      //   id
      // });

      await addDoc(notesCollectionref, {
        content: newNote,
        date,
      });
      // add to db
    },
    async deleteNote(itTodelete) {
      // console.log("deleteNotefromStore ID:", itTodelete);
      this.notes = this.notes.filter((note) => note.id !== itTodelete);
      // delete note from db

      await deleteDoc(doc(notesCollectionref, itTodelete));
    },
    async updateNote(id, content) {
      // console.log('id',id);
      // console.log('updatedContent',updatedContent);
      // const Update = this.notes.findIndex((note) => note.id === id);
      // this.notes[Update].content = updatedContent;

      // Set the "capital" field of the city 'DC'
      await updateDoc(doc(notesCollectionref, id), {
        content,
      });
    },
  },
  getters: {
    getterContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => note.id == id)[0].content;
      };
    },
    totalNoteCount: (stats) => {
      return stats.notes.length;
    },
    totalCharectorCount: (stats) => {
      // let count = 0
      // stats.notes.forEach(note =>{
      //   count += note.content.length
      // })
      // return count
      return stats.notes.reduce(
        (totalChars, note) =>
          totalChars + note.content.replace(/\s/g, "").length,
        0
      );
    },
  },
});
