<template>
  <div class="edit-note">
    <!-- EDIT ID IS {{ $route.params.id }}  -->
    <AddEditNote ref="Atfocus" v-model="noteContent" bgColor="danger" placeholder="Edit Note..." label="EDIT NOTE">
      <template #buttons>
        <button class="button is-link has-background-primary mr-2" @click="$router.back()">
          CANCEL
        </button>
        <button class="button is-link has-background-danger" :disabled="!noteContent" @click="saveNote">
          SAVE NOTE
        </button>
      </template>
    </AddEditNote>
    <!-- Show updated content -->
    <!-- <div v-if="showUpdatedNote" class="card p-4 mt-3 mb-5">
      <div class="content">
        {{ updatedNoteContent }}
      </div>
    </div> -->
  </div>
  <button class="button is-success is-light" v-if="showTime">Back to home IN {{ showTime }}</button>
</template>
<script setup>
import AddEditNote from '../Note/AddEditNote.vue'
import { ref } from 'vue'
import { useStoreNotes } from '../stores/storeNote'
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()
const storeNotes = useStoreNotes()
const noteContent = ref('')
// const showUpdatedNote = ref(false)
// const updatedNoteContent = ref()/
noteContent.value = storeNotes.getterContent(route.params.id)
const showTime = ref(0)

const saveNote = () => {
  // showUpdatedNote.value = true;
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push('/')
  // updatedNoteContent.value = noteContent.value;

  // let secondsLeft = 3;
  // const timer = setInterval(() => {
  //   showTime.value = secondsLeft;
  //   secondsLeft--;
  //   if (secondsLeft < 0) {
  //     clearInterval(timer); 
  //     showTime.value = 0; 
  //   }
  // }, 500);

  // setTimeout(() => {
  //   showUpdatedNote.value = false;
  //   router.push({ name: 'notes' })
  // },2000)

}
console.log(route.params.id);
</script>
<style>
.color {
  color: red;
}
</style>