<template>
  <title>APP</title>

  <!-- navbar Event -->
  <!-- <NavBarVue />  -->
  <!-- navbar vue3 -->
  <NavBarONClickoutside></NavBarONClickoutside>

  <div class="container is-max-desktop px-4 py-2">
    <router-view></router-view>
  </div>
  

</template>

<script setup>
// import NavBarVue from "./components/Layout/NavBar.vue";
import NavBarONClickoutside from "./components/Layout/NavBarONClickoutside.vue";
import { useStoreAuth } from '../src/stores/storeAuth'

const storeAuth = useStoreAuth()
storeAuth.init()

</script>
<style>

</style>