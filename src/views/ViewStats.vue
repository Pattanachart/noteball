<template>
  <!-- <h1>Stats1</h1> -->
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stats</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNote.totalNoteCount }}</td>
        </tr>
        <tr>
          <td>Number of charecter(only charecter)</td>
          <td>{{ storeNote.totalCharectorCount }}</td>
        </tr>
      </tbody>
    </table>

    <input type="text" class="input" placeholder="do you love noteballs?" v-autofocus v-model="noteballs" maxlength="100">
  </div>
</template>

<script setup>
import { ref, } from 'vue'
import { useWatchCharector } from '../use/useWatchCharecter'
import { useStoreNotes } from '../stores/storeNote';
import { VAutofocus } from '../../VAutofocus';

const storeNote = useStoreNotes()
const noteballs = ref()
useWatchCharector(noteballs,100)




</script>

<style>
* {
  /* border: 1px solid red; */
}

.table {
  /* width: 100%; */
}
</style>