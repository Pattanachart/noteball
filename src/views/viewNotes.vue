<template>
    <div class="Notes">
        <AddEditNote :modelValue="newnotes" @update:modelValue="newnotes = $event" ref="Atfocus" placeholder="ADD NEW NOTE"
            label="NEW NOTE">
            <template #buttons>
                <button @click="addNote" class="button is-link has-background-success" :disabled="!newnotes">
                    Add Notes
                </button>
            </template>
        </AddEditNote>
        <progress class="progress is-success" max="100" v-if="!storeNote.nodeLoading">30%</progress>
        <!-- TextArea -->
        <!-- <div class="card has-background-primary-light p-5 mb-6">
            <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <textarea class="textarea" placeholder="Add New Notes" v-model="newnotes" autofocus
                        ref="autofocus"></textarea>
                </div>
                <input type="text">
            </div>
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    
                    <button @click="addNote" class="button is-link has-background-success" :disabled="!newnotes">
                        Add Notes
                    </button>
                </div>
            </div>
        </div> -->
        <!-- card -->
        <template v-else>
            <Note v-for="note in storeNote.notes" :key="note.id" :note="note" />
            <div v-if="!storeNote.notes.length" class="has-text-centered is-size-4 py-6 has-text-grey-light">
              No note here yet! ...
            </div>
        </template>
        <!-- :note="note" = ส่ง prop ชื่อ note(ในfor)ไปยัง Note.vue(note1) -->

        <!-- DeleteNote ลบออกเพราะไปใช้ Storeแทน -->
        <!-- @DeleteNote="DeleteNote1(ใข้ในนี้)" รับค่า emit DeleteNote จาก Note.vue เพื่อนำไปใข้งาน -->
    </div>
    <!-- <button @click="Test">Show log Notes</button> -->

    <!-- start  aleart-->
    <teleport to='.teleport1'>
        <div class="field is-grouped is-grouped-centered">
            <div class="control teleport ">
                <div class="notification is-primary is-light" v-if="showSuccessAlert == true">
                    <strong>SAVE Succuessfully</strong>
                </div>
            </div>
        </div>
    </teleport>
    <!-- end aleart-->

</template>
<script setup>
import { VAutofocus } from '../../VAutofocus' //ฟังชั่น AutoFocus เรียกใช้โดยคำสั่ง v-autofocus  และ autofocus แบบไม่ต้อง import can เรียกใข้ได้เลย
import {  ref } from 'vue'
import { useWatchCharector } from '../use/useWatchCharecter.js'
import Note from '../Note/Note.vue'
import { useStoreNotes } from '../stores/storeNote'
import AddEditNote from '../Note/AddEditNote.vue';
const storeNote = useStoreNotes() //import จาก Store เพื่อใช้ฟังชั่นต่างๆใน Store
//set time out 
const showSuccessAlert = ref(false);//ตัวแปรแจ้งเตือน
const alertTimeout = ref(null);

const newnotes = ref() //ตัวแปรเก็บค่าสำหรับพิมพ์ลงไปใหม่ TextArea

// onMounted(()=>{
//     storeNote.init() //init this.getNote จาก storeNote 
// })
// focus
const Atfocus = ref()
const addNote = () => {
    storeNote.AddNote(newnotes.value)
    newnotes.value = ''
    showSuccessAlert.value = true
    Atfocus.value.focusTextarea()// focus ส่งไปยัง AddEditNote.vue
    aleart()
}
const aleart = () => {
    if (alertTimeout.value) {
        clearTimeout(alertTimeout.value)
    }
    alertTimeout.value = setTimeout(() => {
        showSuccessAlert.value = false;
    }, 1000);
}

function Test() {
    console.log('Test', storeNote.notes);
}

useWatchCharector(newnotes)

</script>
<style scoped>
* {
    /* border: 1px red solid; */
}

.teleport {
    z-index: 1;
    position: absolute;
    /* border: 1px rgb(161, 182, 170) solid; */
    font-size: 12px;
    top: 160px;
    padding: 5px;
    margin: 5px;

}

.notification {
    border-radius: 10% 60%;

    border: 1px rgb(255, 255, 255) solid
}
</style>