<template>
    <nav class="navbar is-success mouse " role="navigation" aria-label="main navigation" ref="target">
        <div class="container is-max-desktop px-2 py-2 ">
            <div class="navbar-brand ">
                <a class="navbar-item is-size-4" @click="$router.push('/')">
                   <span>Noteballs</span> 
                </a>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample" :class="{ 'is-active': showmobileNav }"
                    @click="showmobileNav = !showmobileNav">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                <!-- -->
            </div>
            <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showmobileNav }">
                <!-- Nav start -->
                <div class="navbar-start">

                    <div class="navbar-item">
                        <!-- <router-link v-if="useAuth.user.email" to="/" class="navbar-item border" active-class="is-active">
                            Notes
                        </router-link> -->
                        <a v-if="useAuth.user.email" @click="Home" class="has-text-light" active-class="is-active"><span
                                id="notes">Notes</span></a>
                    </div><br>
                    <div class="navbar-item Navlogin">
                        <!-- <router-link v-if="useAuth.user.email" to="/stats" class="navbar-item border"
                            active-class="is-active">
                            Stats
                        </router-link> -->
                        <a v-if="useAuth.user.email" @click="Stats" class="has-text-light" active-class="is-active">
                            <span id="stats">Stats</span> </a>
                        <!-- <router-link v-else to="/auth" active-class="is-active">
                            <span class="icon is-small">
                                <i class="fa-solid fa-user"></i>
                            </span>
                            <span class="LOGIN">Login</span>
                        </router-link> -->
                        <a v-else @click="auth" active-class="is-active"><span class="icon is-small AA ">
                                <i class="fa-solid fa-user AA"></i>
                            </span>
                            <span class="LOGIN AA login">Login</span></a>
                    </div>
                </div>
                <!-- Nav end -->
                <div class="navbar-end">
                    <!-- Logout from db-->
                    <div class="navbar-item" v-if="useAuth.user.id" @click="Logout">
                        <button class="button is-small has-background-primary m-5">Logout : {{ useAuth.user.email
                        }}</button>
                    </div>
                    <!-- Logout from db-->
                </div>
            </div>
        </div>
    </nav>
    <!-- teleport -->
    <div class="teleport1"></div>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from '@vueuse/core'
import { useStoreAuth } from '../../stores/storeAuth'
import { useRouter } from "vue-router";

const router = useRouter()

function Home() {
    router.push('/')
    console.log('HOME');
}
function Stats() {
    router.push('/stats')
}
function auth() {
    router.push('/auth')
    // console.log('auth');
}

const useAuth = useStoreAuth()

const showmobileNav = ref(false)

const target = ref(null)
onClickOutside(target, () => {
    showmobileNav.value = false;
})
const Logout = () => {
    showmobileNav.value = false
    useAuth.LogoutUser()
}
</script>

<style scoped>
* {
    /* border: 1px dotted rgb(255, 2, 2); */
}

:is(#notes, #stats):hover {
    color: #fdfbfb;
    font-size: 1.5rem;
}

.navbar-start {
    display: flex;
    gap: 5px;

}

@media (max-width: 768px) {
    :is(#notes, #stats):hover {
    color: #000000;
    font-size: 1.5rem;
}
}

.navbar-brand .is-size-4 {
    font-family: 'Courier New', Courier, monospace;
    font-size: 2.5vw !important;
}

.AA {
    color: rgb(0, 0, 0);
    font-size: 23px;
    /* border: 1px dotted rgb(255, 2, 2); */
    border-radius: 20%;
    padding: 5px;
    margin-right: 5px;
}

.LOGIN {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    /* font-weight: bold; */
    color: rgb(0, 0, 0);
    display: none; 
}
.fa-user{
    display: none; 
}

@media screen and (max-width: 1023px) {
    .navbar-menu {
        position: relative;
        left: 0;
        width: 100%;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 8px 16px rgba(10, 10, 10, .1);
        padding: 0.5rem 0;
    }

    .has-text-light {
        color: rgb(0, 0, 0) !important;
        padding: 20px;
        margin: 10px;
        font-size: 20px;
    }

    .AA {

        font-size: 20px;
        /* border: 1px dotted rgb(17, 11, 11); */
        border-radius: 20%;
        padding: 2px;
        margin: 2px;
    }

    .fa-user,
    .LOGIN {
        /* position: relative; */
        /* left: 10px;
        bottom: 10px; */
        display: inline-block;
    }
    .navbar-brand .is-size-4 {
    font-family: 'Courier New', Courier, monospace;
    font-size: 3.5vw !important;
    padding-left: 8vw;
    margin: .5rem;
}
}</style>
