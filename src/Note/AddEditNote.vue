<template>
    <div class="card p-4 mt-3 mb-5" :class="`has-background-${bgColor}-light`">
        <div class="field">
            <label 
            v-if="label"
            class="label" :class="`has-text-${bgColor}`"
            >
       {{ label}}
        </label>
            <div class="control">
                <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="textarea"
                    :placeholder="placeholder" v-autofocus ref="textAreaRef"  maxlength="100" >
                
                </textarea>
            </div>
        </div>
        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { VAutofocus } from '../../VAutofocus'
import { ref } from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    bgColor: {
        type: String,
        default: 'primary'
    },
    placeholder: {
        type: String,
        default: 'Type something...'
    },
    label: {
        type: String
     
    }
})

//focus รับค่าจาก Note.vue
const textAreaRef = ref(null) //สร้างตัวแปรส่งค่า focus ไปใน TextArea ข้างบน
function focusTextarea() {
    textAreaRef.value.focus()
}

defineExpose({
    focusTextarea
})

// console.log('modelValue', props.modelValue);

</script>

<style></style>