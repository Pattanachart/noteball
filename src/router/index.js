import { createRouter, createWebHashHistory } from "vue-router";
import { useStoreAuth } from "../stores/storeAuth";

const Viewnotes = () => import("../views/viewNotes.vue");
const ViewStats = () => import("../views/ViewStats.vue");
const ViewEditNotes = () => import("../views/viewEditNote.vue");
const ViewAuth = () => import("../views/Auth.vue");


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "notes", component: Viewnotes },
    { path: "/editNote/:id", name: "edit-note", component: ViewEditNotes },
    { path: "/stats", name: "stats", component: ViewStats },
    { path: "/auth", name: "auth", component: ViewAuth },
    
  ],
});

router.beforeEach(async (to, from) => {
  const storeAuth = useStoreAuth()
  if(!storeAuth.user.id && to.name !== 'auth'){
    return { name : 'auth'}
  }
  if(storeAuth.user.id && to.name == 'auth'){
    // return {name : 'notes'}
     return false;
  }
//  console.log('to:',to);
})

export default router;
