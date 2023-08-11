<template>
    <div class="card mt-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="columns is-mobile has-text-warning-dark mt-2">
                   
                    <small class="column">{{ datefomat }}</small>
                    <small class="column has-text-right">{{ charecter }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" @click="$router.push({ path: `/editNote/${props.note.id}` })">
                Edit
            </a>
            <!-- storeNote.deleteNote(note.id) delete-->
            <a @click.prevent="modals.deleteNote = true" class="card-footer-item">Delete</a>
        </footer>
    </div>
    <!-- Show updated content -->
    <!-- <div v-if="showUpdatedNote" class="card p-4 mt-3 mb-5">
      <div class="content">
        {{ updatedNoteContent }}
      </div>
    </div> -->
    <!--  button cancle by slot from modalDelete.vue-->
    <ModalDeleteNote v-if="modals.deleteNote" v-model="modals.deleteNote" :noteID="note.id">
        <!-- :noteID="note.id" คือส่งค่า note.id ไปหน้า ModalDelete เพื่อลบ -->
        <!--  v-model="modals.deleteNote" คือส่งค่า modals.deleteNote ใน reactive ออกจากหน้า โดย v-model -->
        <template #cancle-Logo>
            <button class="delete" aria-label="close" @click="modals.deleteNote = false"></button>
        </template>
        <template #Buttoncancel>
            <button class="button" @click="modals.deleteNote = false">Cancel</button>
        </template>
        <!-- end modal by slot -->

        <!-- delete by slot  -->
        <template #deletebyslot>
            <button class="button is-danger" @click="storeNote.deleteNote(note.id)">Delete</button>
        </template>


    </ModalDeleteNote>
</template>
<script setup>

import { computed, onMounted, reactive, ref } from 'vue'
import { useStoreNotes } from '../stores/storeNote'
import ModalDeleteNote from './ModalDelete.vue'
// import { useDateFormat } from '@vueuse/core'

import { formatDistanceToNow } from 'date-fns'; // นำเข้าตัวจัดการเวลาจาก date-fns



const datefomat = ref('');
const updateDate = () => {
  let date = new Date(parseInt(props.note.date));
  
  let relativeTime = formatDistanceToNow(date, {
    addSuffix: true,
    includeSeconds: false, // ไม่รวมวินาทีในแสดงผล
    addSpace: true // เพิ่มช่องว่าง
  });

  // เพิ่มคำนำหน้า "in"
  datefomat.value = `in ${relativeTime}`;
};

// เริ่มอัปเดตค่า datefomat ทุกวินาที
onMounted(() => {
  updateDate();
  setInterval(updateDate, 1000); // อัปเดตทุก 1 วินาที
});

// const datefomat = computed(()=>{
//     let date = new Date(parseInt(props.note.date))
//     let FomatDate = useDateFormat(date, 'MMMM D YYYY, h:mm a')
   
// return FomatDate.value
// })


const modals = reactive({
    deleteNote: false
})
// useStore เพื่อเรียกใช้ ฟงชั่น Delete 

// const Edit = () => {
//   router.push({ path: `/editNote/${props.note.id}`}) // Use the correct path with ID
// }

const storeNote = useStoreNotes()
const charecter = computed(() => {
    // let leange = props.note.content.length
    // const lengthCha = leange > 1 ? 'charecters' : 'charecter'
    // return `${leange} ${lengthCha}`

    const noteContent = storeNote.getterContent(props.note.id)
    const notec = noteContent.replace(/\s/g, '').length
    let charecter = notec > 1 ? 'charectors' : 'charector'
    return `${notec} ${charecter}`

})
// สร้าง emit ขื่อ  DeleteNote เพื่อส่งไปยัง viewNote.vue
const emit = defineEmits(['DeleteNote', 'EditNote'])

// รับค่า props ชื่อ note จาก Viewnote.vue 
const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})
// ฟังชั่นคลิก เพื่อส่งค่า Emit ไปยัง viewnote.vue
const HandelDelete = () => {
    emit('DeleteNote', props.note.id)
}

</script>
<style scoped>
* {
    /* border: 1px red solid; */
}
</style>
