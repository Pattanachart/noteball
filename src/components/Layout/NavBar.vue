<template>
    <nav class="navbar is-success mouse" role="navigation" aria-label="main navigation" 
        @mouseleave="handleMouseLeave">
        <div class="container is-max-desktop px-2 py-2">
            <div class="navbar-brand">
                <a class="navbar-item is-size-4" @click="$router.push('/')">
                    Noteballs
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample" :class="{ 'is-active': showmobileNav }"
                    @click="showmobileNav = !showmobileNav"
                    @mouseenter="handleMouseEnter">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                <!-- -->
            </div>
            <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showmobileNav }">
                <div class="navbar-start">
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <router-link to="/" class="navbar-item border" active-class="is-active">
                            Notes
                        </router-link>
                        <router-link to="/stats" class="navbar-item border" active-class="is-active">
                            Stats
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <!-- teleport -->
    <div class="teleport1"></div>
</template>

<script setup>
import { ref } from "vue";

const showmobileNav = ref(false)

// Mouse enter event handler แสดงค่าเมื่อเข้าไปเมนู navbar 
const handleMouseEnter = () => {
    showmobileNav.value = true;
}

// Mouse leave event handler ออกจาก Navbar 
const handleMouseLeave = () => {
    showmobileNav.value = false;
}

</script>

<style scoped>
.is-size-4 {
    font-family: 'Courier New', Courier, monospace;
    font-size: 40px;
}

@media(max-width:800) {
    .navbar-menu {
        position: absolute;
        left: 0;
        width: 100%;
    }
}
.border{
    border: 1px rgb(197, 184, 184) solid;
    border-radius: 10%;
   margin: 10px;
}
</style>