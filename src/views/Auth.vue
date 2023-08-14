<template>
    <!--  -->

    <div class="tabs is-centered is-boxed is-medium">
        <ul>
            <li id="lilogin" :class="{ 'is-active': !register }" @click.prevent="register = false">
                <a>
                    <span class="icon is-small">
                        <i class="fa-solid fa-user"></i>
                    </span>
                    <span>LOGIN</span>
                </a>
            </li>
            <span style="margin: 15px;   color: #7e7975; ">or</span>
            <li id="liregister" :class="{ 'is-active': register }" @click.prevent="register = true">
                <a>
                    <span class="icon is-small"><i class="fa-regular fa-registered"></i></span>
                    <span>SIGN UP</span>
                </a>
            </li>
        </ul>
    </div>
    <div class="auth-form">
        <div class="card">
            <div class="card-content">
                <div class="title has-text-centered">{{ formtitle }}</div>
                <form @submit.prevent="onSubmit">
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input v-model="credential.email" class="input" type="email" placeholder="email">
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input v-model="credential.password" class="input" type="password" placeholder="password">
                            <span class="icon is-small is-left">
                                <i class="fa-solid fa-keyboard"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field is-grouped is-grouped-right">
                        <div class="control">

                            <button class="button is-success">
                                <!-- {{ formtitle }} -->
                                <!-- <span class="icon is-small">
                                </span> -->
                                <span v-if="!register" style="width: 30px; height:30px; margin-right:5px;"><img
                                        src="../../public/login-logo.png"></span>

                                <span v-if="register" style="width: 30px; height:30px; margin-right:5px;"><img
                                        src="../../public/register-logo.png"></span>


                                <span> {{ formtitle }} </span>
                            </button>

                        </div>

                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useStoreAuth } from '../stores/storeAuth'




const useAuth = useStoreAuth()

const register = ref(false)
const formtitle = computed(() => {
    return register.value ? 'SIGN UP' : 'LOGIN'
})
//form submit.prevent
const onSubmit = () => {
    if (!credential.email || !credential.password) {
        alert('Please input email or password')
    } else {
        //rigister 
        if (register.value) {
            if (credential.password.length < 6) {
                alert('Password should be at least 6 characters')
            } else {
                useAuth.registerUser(credential)
                //    credential.email = '', credential.password = ''
            }
        }
        //login
        else {
            // console.log('login credential :',credential);
            if (credential.password.length < 6) {
                alert('Password should be at least 6 characters')
            } else {
                useAuth.loginUser(credential)
                // credential.email = '', credential.password = ''
                // alert('Login success! Auth.vue')
            }
        }
    }
}
const credential = reactive({
    email: '',
    password: ''
})
</script>

<style scoped>
.auth-form {
    max-width: 450px;
    margin: 0 auto;

}

.auth-form {
    background: #f7f5f3;
    border-radius: 5px;
    color: #7e7975;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2), 0 1px 5px rgba(0, 0, 0, 0.2),
        0 0 0 12px rgba(255, 255, 255, 0.4);
    text-shadow: 0 2px 0 rgba(255, 255, 255, 0.8);
}

#lilogin,
#liregister {
    text-shadow: 0 2px 0 rgba(221, 210, 210, 0.8);
}

* {
    /* border: 1px solid red; */
}
</style>