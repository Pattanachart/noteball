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

                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <div class="control has-icons-left has-icons-right">
                            <input v-model="credential.password" class="input" :type="passwordType" placeholder="password">

                            <span class="icon is-small is-left">
                                <i class="fa fa-key" aria-hidden="true"></i>
                            </span>
                            <span @click="showpassword =!showpassword" class="icons2">
                                <i v-if="showpassword" class="fa fa-eye " aria-hidden="true"></i>

                                <i v-else class="fa fa-eye-slash " aria-hidden="true"></i>

                                <!-- <img id="img" :src="showpassword ? '/show.png' : '/hide.png'"
                                    style="width: 25px; height: 25px; margin-right: 10px;"> -->
                            </span>
                        </div>
                    </div>
                    <!-- <div class="cbox">
                        <input type="checkbox" v-model="showpassword"> <span class="check"> Show Password</span>
                    </div> -->

                    <div class="field is-grouped is-grouped-right">
                        <div class="control">

                            <button class="button is-success">

                                <span style="width: 30px; height:30px; margin-right:5px;">
                                    <img :src="register ? '/register-logo.png' : '/login-logo.png'"></span>
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
// โชว์ password
const showpassword = ref(false);
const passwordType = computed(() => showpassword.value ? 'text' : 'password')


</script>

<style scoped>
.button{
    margin-top: .5rem;
    padding: 0 30px;

}
.button:hover{
    transform: scale(1);
    animation: slide-in .1s ease-in-out .1s 0 normal backwards;
}

@keyframes slide-in {
  from {
    transform: translateX(2%);
  }
  to {
    transform: translateX(0);
  }
}
.icons2{
    padding: 0;
    margin: 0;
    /* border: 1px red dotted; */
    cursor: pointer;
    color: rgb(200, 199, 199);
    position: absolute;
    top: 0.25rem;
    margin-left: -2.25rem;
    z-index: 1;
    font-size: 22.5px;
}
.tabs {
    /* color: red; */
    font-size: 1.5vw;
}

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

#img {
    color: red;
}
.cbox{
    position: absolute;
    bottom: 1px;
    right: 1rem;
    
}
* {
    /* border: 1px solid red; */
}

@media (max-width:768px) {
    .title {
        font-size: 20px;
    }

    .check {
        font-size: 10px;
    }

    .tabs {
        /* color: red; */
        font-size: 3vw;
    }
}</style>