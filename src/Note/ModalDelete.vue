<template>
    <Note>
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card" ref="clickoutside">

                <header class="modal-card-head">
                    <p class="modal-card-title">Delete Note ?</p>
                    <!-- button from Note.vue by slot  -->
                    <slot name="cancle-Logo"></slot>
                </header>
                <section class="modal-card-body">
                    <!-- Content ... -->
                    Do you want to delete note?
                </section>
                <footer class="modal-card-foot is-justify-content-flex-end">
                    <!-- button from Note.vue by slot  -->
                    <slot name="Buttoncancel"></slot>  
                    
                    <!-- <button class="button" @click="canclemodal">Cancel by props</button> -->
                    <!-- Delete by slot-->
                    <slot name="deletebyslot"></slot>

                    <!-- button delete by prop from Note.vue  -->
                    <!-- <button class="button is-danger" @click="storeNote.deleteNote(noteID)">Delete by props</button> -->
                    <!--  -->
                </footer>
            </div>
        </div>
    </Note>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

// ดึง Storenote มา delete by props
import { useStoreNotes } from '../stores/storeNote'
const storeNote = useStoreNotes()


//คลิกนอก class modal-card เพื่อออกจากหน้า แบบคลิก 
import { onClickOutside } from '@vueuse/core'


const clickoutside = ref(null)
onClickOutside(clickoutside, canclemodal)

////กดคิบอร์ด ปุ่ม Escape เพื่อออกจากหน้า class modal-card
const preEscape = (e) => {
    if (e.key === 'Escape') canclemodal()
}
onMounted(() => {
    document.addEventListener('keyup',preEscape)
})
onUnmounted(()=>{
    document.addEventListener('keyup',preEscape)
})

//รับค่า props จาก Note.vue ผ่าน v-model โดยรับผ่าน ออปเจกชื่อ modelValue 
const props = defineProps({
    // modelValue: {
    //     type: Boolean,
    //     default: false
    // },
    noteID:{
        type:String,
        default:true
    }
})
// อัปเดตค่า modelValue ให้เป็น false ผ่าน emit 
const emit = defineEmits(['update:modelValue'])

//สร้างฟังชั่น canclemodal เพื่อเปลี่ยนค่า deleteNote ให้เป็น false
function canclemodal() {
    emit('update:modelValue', false)
}
</script>

<style></style>